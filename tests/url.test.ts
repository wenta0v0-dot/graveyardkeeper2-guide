import { describe, it, expect } from 'vitest';
import {
  BASE_PREFIX,
  localizePath,
  listPath,
  detailPath,
  homeUrl,
  slugifyTag,
  absoluteUrl,
  absoluteLocalized,
  canonicalUrl,
  languageAlternates,
} from '~/lib/url';
import { siteUrl } from '~/config/site';

// This fork is en-only (routing.ts locales = ['en']), so Locale is 'en'.
// The base-path prefix (GitHub Pages "/<repo>/") is exercised in the built
// site (dist/) — vitest has no Vite env, so BASE_PREFIX resolves to '' here
// and every expectation below is the root-deployment shape.

describe('url helpers', () => {
  describe('localizePath', () => {
    it('returns the path unchanged for the default locale (en)', () => {
      expect(localizePath('/bosses', 'en')).toBe('/bosses/');
      expect(localizePath('/bosses/emberfang', 'en')).toBe('/bosses/emberfang/');
    });

    it('ensures leading slash on input without one', () => {
      expect(localizePath('about', 'en')).toBe('/about/');
    });

    it('normalizes a trailing slash instead of double-slashing', () => {
      expect(localizePath('/bosses/', 'en')).toBe('/bosses/');
    });
  });

  describe('homeUrl', () => {
    it('returns / for default locale', () => {
      expect(homeUrl('en')).toBe('/');
    });
  });

  describe('listPath', () => {
    it('builds the correct list URL for each locale', () => {
      expect(listPath('bosses', 'en')).toBe('/bosses/');
      expect(listPath('codes', 'en')).toBe('/codes/');
    });
  });

  describe('detailPath', () => {
    it('builds the correct article URL for each locale', () => {
      expect(detailPath('bosses', 'emberfang', 'en')).toBe('/bosses/emberfang/');
    });

    it('handles nested slugs', () => {
      expect(detailPath('guides', 'early-game/beginner', 'en')).toBe(
        '/guides/early-game/beginner/',
      );
    });
  });
});

describe('slugifyTag (ASCII slug / raw fallback for non-ASCII)', () => {
  it('slugifies ASCII tags to lowercase kebab-case', () => {
    expect(slugifyTag('Boss Guide')).toBe('boss-guide');
    expect(slugifyTag('Fire_Warden')).toBe('fire-warden');
  });

  it('returns CJK tags raw instead of collapsing to empty', () => {
    const zh = slugifyTag('焰牙');
    expect(zh).toBe('焰牙');
    expect(zh).not.toBe('');
  });

  it('returns mixed ASCII+CJK tags raw — a partial strip would collide them', () => {
    expect(slugifyTag('焰牙 攻略')).toBe('焰牙 攻略');
    expect(slugifyTag('Roblox 焰牙')).not.toBe(slugifyTag('Roblox 攻略'));
    expect(slugifyTag(slugifyTag('焰牙 攻略'))).toBe(slugifyTag('焰牙 攻略'));
  });

  it('keeps two different CJK tags distinguishable', () => {
    expect(slugifyTag('焰牙')).not.toBe(slugifyTag('风暴召唤者'));
  });

  it('keeps pure-symbol tags non-empty', () => {
    expect(slugifyTag('!!!')).toBe('!!!');
    expect(slugifyTag('  ???  ')).toBe('???');
  });
});

describe('absoluteUrl', () => {
  it('joins siteUrl (subpath included) with the localized path exactly once', () => {
    expect(absoluteUrl('/bosses', 'en')).toBe(`${siteUrl}/bosses/`);
    expect(absoluteUrl('/', 'en')).toBe(`${siteUrl}/`);
  });
});

describe('absoluteLocalized', () => {
  it('matches absoluteUrl for the same path+locale (no double base prefix)', () => {
    expect(absoluteLocalized(localizePath('/codes/x', 'en'))).toBe(absoluteUrl('/codes/x', 'en'));
  });
});

describe('canonicalUrl', () => {
  it('joins siteUrl with a bare SSG pathname', () => {
    expect(canonicalUrl('/codes/all-codes/')).toBe(`${siteUrl}/codes/all-codes/`);
  });

  it('strips a base-prefixed pathname instead of doubling the subpath', () => {
    // Dev/preview and the SSG build hand canonicalUrl a base-prefixed
    // pathname while siteUrl already carries the subpath — canonical must
    // never stack them. BASE_PREFIX is '' under vitest (no Vite env), so the
    // prefixed branch asserts the real prefix when one exists and the bare
    // route otherwise (the prefixed path was verified in dist/ at build).
    if (BASE_PREFIX) {
      expect(canonicalUrl(`${BASE_PREFIX}/codes/all-codes/`)).toBe(`${siteUrl}/codes/all-codes/`);
    } else {
      expect(canonicalUrl('/codes/all-codes/')).toBe(`${siteUrl}/codes/all-codes/`);
    }
  });
});

describe('languageAlternates', () => {
  it('builds absolute hreflang entries for exactly the given locales', () => {
    const alts = languageAlternates((loc) => detailPath('bosses', 'x', loc), ['en']);
    expect(alts).toHaveLength(1);
    expect(alts[0]).toEqual({ hreflang: 'en', href: expect.stringMatching(/\/bosses\/x\/$/) });
  });

  it('never emits x-default (BaseLayout derives it separately)', () => {
    const alts = languageAlternates((loc) => listPath('guides', loc), ['en']);
    expect(alts.some((a) => a.hreflang === 'x-default')).toBe(false);
  });

  it('shares one domain-assembly with absoluteUrl — same path+locale, identical href', () => {
    const alts = languageAlternates((loc) => localizePath('/faq', loc), ['en']);
    expect(alts.map((a) => a.href)).toEqual([absoluteUrl('/faq', 'en')]);
  });
});
