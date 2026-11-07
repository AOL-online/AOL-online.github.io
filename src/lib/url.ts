import { defaultLang, prefixDefaultLang, type Lang } from '../i18n/ui';

const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

/** Site-internal URL with the base path. Never write href="/..." directly. */
export function url(path = ''): string {
  return base + path.replace(/^\//, '');
}

/** Home page URL of a language. */
export function langPath(lang: Lang, path = ''): string {
  const prefix = lang === defaultLang && !prefixDefaultLang ? '' : `${lang}/`;
  return url(prefix + path.replace(/^\//, ''));
}
