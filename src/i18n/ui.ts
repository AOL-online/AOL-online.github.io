// Languages and interface strings. Components never contain text: use t('key').

export const languages = {
  ru: { label: 'Русский', htmlLang: 'ru', ogLocale: 'ru_RU', intl: 'ru-RU' },
  en: { label: 'English', htmlLang: 'en', ogLocale: 'en_GB', intl: 'en-GB' },
  hr: { label: 'Hrvatski', htmlLang: 'hr', ogLocale: 'hr_HR', intl: 'hr-HR' },
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'ru';

/** Languages that are built and published. Others are prepared but not built. */
export const published: Lang[] = ['ru'];

/**
 * Whether the default language gets its own URL prefix.
 * GitHub Pages (base /ru): false -> Russian page is the site root https://aol-online.github.io/ru/
 * Own domain (base /):     true  -> https://domain/ru/, and / redirects to /ru/
 */
export const prefixDefaultLang = (import.meta.env.PREFIX_DEFAULT_LANG ?? 'false') === 'true';

const ru = {
  'meta.title': 'Программа Счастье — онлайн-курс Art of Living на русском, 13–15 ноября',
  'meta.description':
    'Программа Счастье (Art of Living, Часть 1) онлайн на русском: Сударшан Крия™, йога и медитация. 3 дня по 3 часа в Zoom с сертифицированным учителем. Регистрация в вашей стране.',

  'skip': 'Перейти к содержанию',
  'header.brand.sub': 'Art of Living · онлайн',
  'header.cta': 'Записаться',

  'cta.register': 'Записаться на курс',
  'cta.tryFree': 'Сначала попробовать бесплатно',

  'hero.lead': 'Исследуйте секреты дыхания и начните управлять своим умом.',
  'hero.text':
    'Три дня с Сударшан Крией™, йогой и медитацией — живой курс в Zoom с сертифицированным учителем.',
  'hero.dates.label': 'Даты',
  'hero.time.label': 'Время',
  'hero.format.label': 'Формат',
  'hero.format.value': '3 дня по 3 часа · Zoom',
  'hero.photoAlt': 'Группа людей выполняет дыхательную практику на природе',

  'time.tba': 'время уточняется',

  'countries.title': 'Выберите страну регистрации',
  'countries.text':
    'Это общий международный поток на русском языке. Выберите свою страну: регистрация и оплата проходят в системе Art of Living этой страны.',
  'countries.price': 'Стоимость указана на странице регистрации вашей страны.',
  'countries.hint.withContacts': 'Живёте в другой стране? Выберите любую удобную регистрацию или напишите нам.',
  'countries.hint': 'Живёте в другой стране? Выберите любую удобную регистрацию.',
  'countries.button': 'Регистрация',
  'countries.newTab': 'откроется в новой вкладке',

  'footer.status': 'Страница сертифицированных учителей Art of Living',
  'footer.registration': 'Регистрация и оплата — на сайтах Art of Living выбранной страны.',
  'footer.medical': 'Практики не заменяют лечение, назначенное врачом.',
  'footer.contacts': 'Контакты',
  'footer.contacts.soon': 'Контакты появятся в ближайшее время.',
  'footer.copyright': '© 2026',
} as const;

export type UiKey = keyof typeof ru;

// en/hr: prepared for later; missing keys fall back to Russian.
const ui: Record<Lang, Partial<Record<UiKey, string>>> = { ru, en: {}, hr: {} };

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ru[key];
}
