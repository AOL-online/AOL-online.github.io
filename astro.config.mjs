// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Address is set by env vars so the site can move to a custom domain later
// (GitHub Pages now: SITE_URL=https://aol-online.github.io, BASE_PATH=/ru).
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://aol-online.github.io',
  base: process.env.BASE_PATH ?? '/ru',
  trailingSlash: 'always',
  // Languages and routing: src/i18n/ui.ts (published, prefixDefaultLang) + src/pages/[...lang]/.
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
});
