// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Address is set by env vars: now SITE_URL=https://aol-online.github.io, at launch https://artofliving.page.
// The site lives in the root (base '/'), no language prefixes.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://aol-online.github.io',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
});
