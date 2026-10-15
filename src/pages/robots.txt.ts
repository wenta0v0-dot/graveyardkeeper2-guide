import type { APIRoute } from 'astro';
import { siteUrl } from '~/config/site';

// GitHub Pages project deployments mirror the whole repo (this site ships
// the built tree at the repo root), so the source tree is also reachable.
// Keep crawlers out of everything that is not a built page.
const sourceDirs = [
  '/src/',
  '/scripts/',
  '/docs/',
  '/tools/',
  '/tests/',
  '/requirements/',
  '/.github/',
  '/.agent/',
];

const robotsTxt = `
User-agent: *
Allow: /
${sourceDirs.map((d) => `Disallow: ${d}`).join('\n')}

Sitemap: ${siteUrl}/sitemap-index.xml
`.trim();

export const GET: APIRoute = () =>
  new Response(robotsTxt, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
