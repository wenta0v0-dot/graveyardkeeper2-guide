/**
 * Emit the IndexNow ownership file into dist/ during postbuild.
 *
 * New forks read the stable committed .indexnow-key generated during template
 * initialization. Existing sites may keep using INDEXNOW_KEY / local .env as a
 * backward-compatible fallback. No key source means IndexNow stays disabled.
 */

import { execSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';
import {
  indexNowKeyFileName,
  loadLocalEnv,
  resolveIndexNowKey,
} from './lib/indexnow';

const dist = path.resolve(process.cwd(), 'dist');

loadLocalEnv();
const found = resolveIndexNowKey();

if (!found) {
  console.log('[IndexNow] No .indexnow-key or legacy INDEXNOW_KEY configured; key file emission skipped.');
  process.exit(0);
}

if (!fs.existsSync(dist)) {
  throw new Error('dist/ does not exist; write-indexnow-key must run after the Astro build.');
}

const filename = indexNowKeyFileName(found.key);
const target = path.join(dist, filename);
fs.writeFileSync(target, found.key, 'utf8');
console.log(`[IndexNow] Wrote dist/${filename} (source: ${found.source})`);

// Cloudflare Pages exposes the Git commit SHA to the production build.
// Workers Builds — the unified successor this site deploys through
// (2026-10-27) — injects neither CF_PAGES_COMMIT_SHA nor GITHUB_SHA
// (verified live: the marker 404'd with both in the fallback chain), so the
// last resort is the build machine itself: a Git-integrated build runs in a
// fresh clone, where `git rev-parse HEAD` IS the deployed commit. Publish it
// as a tiny no-sitemap marker so the post-CI workflow can distinguish the
// NEW deployment from the previous one before reading the production sitemap.
function deployedCommitSha(): string | undefined {
  const injected = (process.env.CF_PAGES_COMMIT_SHA || process.env.GITHUB_SHA)?.trim();
  if (injected) return injected;
  try {
    return execSync('git rev-parse HEAD', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return undefined;
  }
}
const commitSha = deployedCommitSha();
if (commitSha) {
  if (!/^[0-9a-f]{40}$/i.test(commitSha)) {
    throw new Error('Deployment commit SHA (CF_PAGES_COMMIT_SHA/GITHUB_SHA/git) must be a 40-character Git SHA when set.');
  }
  const wellKnown = path.join(dist, '.well-known');
  fs.mkdirSync(wellKnown, { recursive: true });
  fs.writeFileSync(path.join(wellKnown, 'anvilwiki-deploy.txt'), commitSha, 'utf8');
  console.log('[IndexNow] Wrote dist/.well-known/anvilwiki-deploy.txt');
}

// TEMPORARY DIAGNOSTIC (2026-11-12): surface the ad-slot env var NAMES the
// build actually received. Two weeks of "configured but dark" rounds were
// spent guessing whether the dashboard holds a truncated/typo'd key; a file
// listing matching names (names only — never values) ends the guessing.
// Both the Adsterra keys and the AdSense client key are included.
try {
  const adEnvNames = Object.keys(process.env)
    .filter((k) => /ADST|ADSTERRA|ADSENSE/i.test(k))
    .sort();
  const wellKnown = path.join(dist, '.well-known');
  fs.mkdirSync(wellKnown, { recursive: true });
  fs.writeFileSync(
    path.join(wellKnown, 'ads-env.txt'),
    (adEnvNames.length ? adEnvNames.join(String.fromCharCode(10)) : '(none)') + String.fromCharCode(10),
    'utf8',
  );
  console.log(`[ads-diag] ${adEnvNames.length} ad env name(s) visible to the build`);
} catch {
  /* diagnostic only — never fail the build over it */
}
