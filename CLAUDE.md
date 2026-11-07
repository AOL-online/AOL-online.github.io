# CLAUDE.md — technical rules (public repo)

One-page Russian landing for the online course «Искусство жизни, Часть 1» (Art of Living Part 1), international flow.
Naming: never «Счастье» / «Программа Счастье» in site texts (organisers' decision 2026-11-07). Teachers are not named; block «Контакты организаторов».
Astro 7 + Tailwind CSS 4 + TypeScript strict, static, deployed to GitHub Pages by `.github/workflows/deploy.yml` on push to `main`.

## Where things are
- `src/data/course.ru.ts` — ALL course data (dates, sessions + regional overrides, cities, countries + registration links, intro talk + registration kind none/link/embed, teachers, testimonials, contacts). Next course run = edit only this file.
- `src/data/types.ts` — data shape. `src/i18n/ui.ts` — interface strings via `t()` (components contain no text). Russian only, site in the root, no language prefixes.
- `src/lib/time.ts` — dates/times computed at build time from ISO times with `Intl` (IANA zones). `src/lib/local-time.ts` — client script for "your local time" (hidden without JS).
- `src/lib/url.ts` — build internal links with `url()`, never `href="/..."`.
- `src/styles/global.css` — design tokens in `@theme` (light) + dark overrides in `@media (prefers-color-scheme: dark)`. Brandbook palette: orange `accent` #ff8400 for fills/icons/underlines only; text uses `accent-text`; buttons orange with dark text (`btn`/`on-btn`); slate blue block `.on-slate`. ≥4.5:1 in both themes.
- `src/i18n/copy.ru.ts` — page texts (blocks). `src/components/ScriptTitle.astro` — handwritten heading + orange underline (3–5 headings only).
- Fonts: Certa Sans + Art of Living Script in `public/fonts/brand/` (WOFF2 subsets, CFF seac glyphs decomposed — otherwise Chrome drops the space after «ё»). Public use allowed by the owner.
- Registration forms: `RegistrationForm.astro` + `src/lib/reg-form.ts` → Google Apps Script web app (`course.forms.webAppUrl`, owner's Google Sheet; the script itself lives outside this repo). No personal data in the repo or in the browser storage. Honeypot + minimum fill time. `NextCourse.astro` appears after the course end (`src/lib/show-after.ts`).
- Logo: `src/components/Logo.astro` — compact (header) / main with descriptor (footer), light/dark versions by theme.
- `public/files/sudarshan-kriya-research-ru.pdf` — research brochure (contains AoL research e-mails, allowed in the hook).
- Theme: automatic only (browser/system `prefers-color-scheme`); no toggle, no script, no storage.
- Order west -> east everywhere: cities and countries in `course.ru.ts`.
- `src/assets/flags/<code>.svg` — country flags (from `flag-icons`, MIT). New country: copy `node_modules/flag-icons/flags/4x3/<code>.svg` here.

## Address
Repo `AOL-online/AOL-online.github.io`, base always `/`. Own domain https://artofliving.page: `public/CNAME` + env `SITE_URL` in the workflow + Pages custom domain (HTTPS enforced; .page is HTTPS-only). aol-online.github.io redirects to the domain.

## Rules
- `npm run build` (astro check + build) must pass before every commit.
- No phone numbers or e-mails in the repo or in `dist/` (local pre-commit hook blocks them). Contacts are published only after the team decides.
- Health wording only with sources; always "does not replace medical treatment".
- Images: no founder portraits, no testimonial persons, no media logos, no banners with foreign-language text.
- Commit freely; push only after the owner's explicit OK. No `--force`, no history rewriting.
