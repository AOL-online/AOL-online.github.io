// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Address is set by env vars so the site can move to a custom domain later
// (GitHub Pages now: SITE_URL=https://aol-online.github.io, BASE_PATH=/ru).
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://aol-online.github.io',
  base: process.env.BASE_PATH ?? '/ru',
  trailingSlash: 'always',
  i18n: {
    locales: ['ru', 'en', 'hr'],
    defaultLocale: 'ru',
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
});
