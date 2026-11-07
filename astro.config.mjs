// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Address is set by env vars (workflow): SITE_URL=https://artofliving.page (own domain, public/CNAME).
// The site lives in the root (base '/'), no language prefixes.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://artofliving.page',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
});
