# BreakEgg Guide — Break and Steal an Egg Wiki

Unofficial, player-made English wiki for the Roblox game **Break and Steal an Egg**:
how free rewards actually work (there are no text codes), a beginner's guide to the
break-hatch-steal loop, and verified pet coverage.

**Live**: https://wenta0v0-dot.github.io/breakegg-guide/

Built on the open-source [AnvilWiki](https://github.com/PNGTRID/AnvilWiki) template
(Astro 7 + Tailwind + MDX + Pagefind), deployed on GitHub Pages at the
`/breakegg-guide/` subpath.

## Repo layout

The repo root holds **both** the Astro source and the built site:

- `src/`, `public/`, `scripts/` … — site source (content in `src/content/wiki/en/`)
- `index.html`, `codes/`, `guides/`, `_astro/`, `pagefind/` … — build output,
  mirrored from `dist/` by `scripts/ship.mjs` (GitHub Pages deploys the branch root)
- `HANDOFF.md` — the complete project brief: verified facts, red lines, deploy flow,
  engineering gotchas, roadmap. **Read it before changing anything.**

## Commands

```bash
pnpm install
pnpm dev                # local dev at http://localhost:4321/breakegg-guide/
node scripts/ship.mjs   # build + mirror dist/ → repo root (required before every push)
pnpm test               # unit tests; also: check-content / check-links / check-i18n / check-config
```

Publish = `node scripts/ship.mjs` → `git add -A` → commit → push (live in ~1 min).

## Content rules

Every claim is verified and dated. No fabricated pets, values, or codes —
see `HANDOFF.md` §2 for the verified-facts table and the red lines.

Not affiliated with Roblox Corporation or the game's developer (ILGames x Eggs).
