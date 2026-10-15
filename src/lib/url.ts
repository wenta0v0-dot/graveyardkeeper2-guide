/**
 * URL construction utilities.
 *
 * Centralizes all locale-prefix logic so components never hand-build URLs.
 * English (default locale) has no prefix; other locales are prefixed.
 */

import { defaultLocale, type Locale } from '~/i18n/routing';
import { siteUrl } from '~/config/site';

/**
 * Base-path prefix for INTERNAL links (GitHub Pages project sites serve at
 * "/<repo>/", not "/"). Derived from Astro's `base` config via
 * import.meta.env.BASE_URL — '' when the site is served at the root.
 * Optional-chained because non-Vite consumers (scripts run via tsx) have no
 * import.meta.env; those callers only use absoluteUrl, which strips this
 * prefix again before joining siteUrl.
 */
export const BASE_PREFIX = (
  (import.meta.env as { BASE_URL?: string } | undefined)?.BASE_URL ?? '/'
).replace(/\/+$/, '');

/** Strip a leading base prefix (absolute URLs carry the subpath via siteUrl). */
function stripBase(localizedPath: string): string {
  if (BASE_PREFIX && localizedPath.startsWith(`${BASE_PREFIX}/`)) {
    return localizedPath.slice(BASE_PREFIX.length) || '/';
  }
  return localizedPath;
}

/** Build a path with the locale prefix applied (or none for default locale). */
export function localizePath(path: string, locale: Locale): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  // trailingSlash:'always' — every page URL ends with "/" (Cloudflare Pages
  // serves directory builds that way; canonical/sitemap/internal links must
  // match or every page 308s once for Google). Callers pass slash-free paths;
  // callers that already end with "/" are normalized, not double-slashed.
  const slashed = cleanPath === '/' ? '/' : `${cleanPath.replace(/\/+$/, '')}/`;
  if (locale === defaultLocale) return `${BASE_PREFIX}${slashed}`;
  if (cleanPath === '/') return `${BASE_PREFIX}/${locale}/`;
  return `${BASE_PREFIX}/${locale}${slashed}`;
}

/**
 * Join the site domain onto an ALREADY-localized path — the single assembly
 * point for `${siteUrl}${path}` (absoluteUrl and languageAlternates both
 * delegate here, so domain-prefixing can't drift between them). localizePath
 * output carries the base prefix (it feeds href attributes); siteUrl already
 * contains the subpath (SITE_URL includes it), so the prefix is stripped
 * here to avoid doubling it on canonical/sitemap/RSS URLs.
 */
function siteAbsolute(localizedPath: string): string {
  return `${siteUrl}${stripBase(localizedPath)}`;
}

/** Build an absolute URL (with domain) for a path + locale. */
export function absoluteUrl(path: string, locale: Locale): string {
  return siteAbsolute(localizePath(path, locale));
}

/**
 * Absolute URL for an ALREADY-localized path (localizePath/detailPath output,
 * which carries the base prefix) — the JSON-LD / structured-data form of
 * absoluteUrl. siteUrl already contains the subpath, so the base prefix is
 * stripped before joining (see siteAbsolute).
 */
export function absoluteLocalized(localizedPath: string): string {
  return siteAbsolute(localizedPath);
}

/**
 * Canonical absolute URL from a page pathname. Astro.url.pathname varies by
 * context (dev/preview serve WITH the base prefix; the SSG build reports the
 * bare route), while siteUrl already contains the subpath — strip a leading
 * base if present, then join the domain.
 */
export function canonicalUrl(pathname: string): string {
  return `${siteUrl}${stripBase(pathname)}`;
}

/** Home URL for a locale. */
export function homeUrl(locale: Locale): string {
  return localizePath('/', locale);
}

/** List page URL for a category + locale. e.g. localizeListPath('bosses', 'en') -> '/bosses' */
export function listPath(category: string, locale: Locale): string {
  return localizePath(`/${category}`, locale);
}

/** Article detail URL. e.g. detailPath('bosses', 'emberfang', 'en') -> '/bosses/emberfang' */
export function detailPath(category: string, slug: string, locale: Locale): string {
  return localizePath(`/${category}/${slug}`, locale);
}

/** Tag index URL for a locale. e.g. tagsPath('en') -> '/tags' */
export function tagsPath(locale: Locale): string {
  return localizePath('/tags', locale);
}

/**
 * Tag aggregation page URL. `tagSlug` must come from slugifyTag() so article
 * tag links and the route params always match.
 */
export function tagPath(tagSlug: string, locale: Locale): string {
  return localizePath(`/tags/${tagSlug}`, locale);
}

/** Recent-updates page URL for a locale. */
export function recentPath(locale: Locale): string {
  return localizePath('/recent', locale);
}

/**
 * Generate hreflang alternates for an article/category page.
 * Returns a list suitable for injection as <link rel="alternate"> tags.
 * x-default is NOT included here — BaseLayout derives it from the alternates.
 * Input contract differs from absoluteUrl(): `buildPath` must return an
 * ALREADY-localized path (callers pass localizePath/detailPath output), so
 * no second locale-prefix/slash pass happens here — domain joining itself
 * is shared via siteAbsolute().
 */
export function languageAlternates(
  buildPath: (locale: Locale) => string,
  locales: readonly Locale[],
): Array<{ hreflang: string; href: string }> {
  return locales.map((loc) => ({
    hreflang: loc,
    href: siteAbsolute(buildPath(loc)),
  }));
}

/**
 * Slugify a tag for use in URLs: lowercase, whitespace/underscores → "-".
 * Tag pages are keyed by this slug; both article tag links and route
 * params go through this function so they always match. Pure function
 * (testable without a build).
 *
 * ASCII-safe tags ("Boss Guide" → "boss-guide") get the slugified form.
 * Anything that still contains a character outside [a-z0-9-] AFTER folding
 * takes the raw path wholesale — a partial ASCII strip would COLLAPSE
 * distinct tags onto one /tags/ page ('Roblox 焰牙' and 'Roblox 攻略' both
 * strip to 'roblox-'; '焰牙 攻略' strips to just '-').
 */
export function slugifyTag(tag: string): string {
  const folded = tag
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-');
  // Raw path (CJK etc.): Astro writes params to disk verbatim, so a
  // percent-encoded value here becomes a literal '%E7...' directory that
  // only serves at the double-encoded URL, while every in-page link points
  // at the single-encoded form (404). The raw tag builds a raw-named
  // directory that both URL forms resolve to. Returning tag.trim() — never
  // the folded husk — keeps distinct non-ASCII tags distinct and the
  // function idempotent. (Only a blank tag can still yield '' here; the
  // route-level `if (slug)` guards skip it.)
  if (/[^a-z0-9-]/.test(folded)) return tag.trim();
  return folded;
}
