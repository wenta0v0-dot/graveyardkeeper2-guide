#!/usr/bin/env node
/**
 * ship.mjs — GitHub Pages 发布脚本(branch-deploy 镜像模式)。
 *
 * 本仓库的线上地址是 GitHub Pages 项目站(主分支根目录部署),而 Astro 的
 * 产物在 dist/。这个脚本把 dist/ 的内容镜像到仓库根目录,让"deploy from
 * branch"的 Pages 设置继续生效——push 即发布,不需要改任何 dashboard 配置。
 *
 *   node scripts/ship.mjs            # 构建(域名单源在 site.ts,2026-10-27 起
 *                                    # 为 gk2wiki.com)并镜像
 *   node scripts/ship.mjs --build-only
 *
 * 镜像语义:
 *   - dist 顶层每个条目:先删根目录同名条目,再复制最新产物(无脏残留)。
 *   - .ship-manifest.json 记录上次镜像的顶层条目;若某条目这次已不在 dist
 *     (例如某页面被删除),按清单清掉根目录的过期产物。清单只追踪本脚本
 *     自己写过的条目,永远不会碰源码目录(src/、scripts/、docs/…)。
 *   - public/.nojekyll 随构建进入 dist,保证 GitHub Pages 服务 _astro/ 和
 *     pagefind/(下划线目录默认被 Jekyll 忽略)。
 *
 * 发布流程(见 HANDOFF.md):node scripts/ship.mjs && git add -A && git
 * commit && git push。
 */

import { spawnSync } from 'node:child_process';
import { cpSync, existsSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const DIST = join(ROOT, 'dist');
const MANIFEST = join(ROOT, '.ship-manifest.json');
const BUILD_ONLY = process.argv.includes('--build-only');

// SITE_URL is intentionally NOT forced here any more: astro.config.ts falls
// back to the site.ts config layer, which is the single source of truth for
// the domain (local builds, CI and Cloudflare Pages all build identically
// with zero env vars). A SITE_URL env var still wins when set.
console.log(`🚢 ship — building (SITE_URL env: ${process.env.SITE_URL || 'unset — using site.ts domain'})`);
// pnpm build = astro build + postbuild(pagefind 索引 + ES2018 转译 +
// IndexNow key)——走 CLI 而非 programmatic API,和本地验证、CI 完全同一条管线。
const result = spawnSync('pnpm build', { stdio: 'inherit', shell: true });
if (result.status !== 0) process.exit(result.status ?? 1);

if (BUILD_ONLY) {
  console.log('✅ build complete (--build-only, no mirror)');
  process.exit(0);
}

if (!existsSync(DIST)) {
  console.error('❌ dist/ not found after build');
  process.exit(1);
}

const distEntries = new Set(readdirSync(DIST));
const previous = existsSync(MANIFEST)
  ? new Set(JSON.parse(readFileSync(MANIFEST, 'utf8')).entries ?? [])
  : new Set();

// 过期产物:上次镜像过、这次 dist 里没有 → 从仓库根清除。
let removed = 0;
for (const name of previous) {
  if (distEntries.has(name)) continue;
  rmSync(join(ROOT, name), { recursive: true, force: true });
  removed++;
}

// 最新产物:先删同名旧条目再复制,杜绝旧文件残留。
let mirrored = 0;
for (const name of distEntries) {
  rmSync(join(ROOT, name), { recursive: true, force: true });
  cpSync(join(DIST, name), join(ROOT, name), { recursive: true });
  mirrored++;
}

writeFileSync(
  MANIFEST,
  JSON.stringify({ entries: [...distEntries].sort() }, null, 2) + '\n',
);

console.log(`✅ mirrored ${mirrored} entries from dist/ → repo root (${removed} stale removed)`);
console.log('   发布:git add -A && git commit && git push(约 1 分钟后生效)');
