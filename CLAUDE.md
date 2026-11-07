# CLAUDE.md — technical rules (public repo)

One-page Russian landing for the online Happiness Program (Art of Living, Part 1).
Astro 7 + Tailwind CSS 4 + TypeScript strict, static, deployed to GitHub Pages by `.github/workflows/deploy.yml` on push to `main`.

## Where things are
- `src/data/course.ru.ts` — ALL course data (dates, session times, countries + registration links, intro talks, teachers, contacts). Next course run = edit only this file.
- `src/data/types.ts` — data shape. `src/i18n/ui.ts` — languages and interface strings (components contain no text).
- `src/lib/time.ts` — dates/times are computed at build time from ISO times with `Intl` (time zones by IANA name).
- `src/lib/url.ts` — always build internal links with `url()` / `langPath()` (base path!), never `href="/..."`.
- `src/styles/global.css` — design tokens in `@theme`. `accent` is for fills/icons only; text and white-text buttons use `accent-text` (≥4.5:1).
- `src/assets/flags/<code>.svg` — country flags (from `flag-icons`, MIT). New country: copy `node_modules/flag-icons/flags/4x3/<code>.svg` here.

## Address
Env vars: `SITE_URL`, `BASE_PATH`, `PREFIX_DEFAULT_LANG`. GitHub Pages: `https://aol-online.github.io` + `/ru` + `false`.
Own domain: `https://<domain>` + `/` + `true` (Russian page moves to `/ru/`, root redirects), plus `public/CNAME`.

## Rules
- `npm run build` (astro check + build) must pass before every commit.
- No phone numbers or e-mails in the repo or in `dist/` (local pre-commit hook blocks them). Contacts are published only after the team decides.
- Health wording only with sources; always "does not replace medical treatment".
- Images: no founder portraits, no testimonial persons, no media logos, no banners with foreign-language text.
- Commit freely; push only after the owner's explicit OK. No `--force`, no history rewriting.
