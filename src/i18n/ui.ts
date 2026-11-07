// Interface strings (Russian only, site in the root). Page texts: copy.ru.ts.

export const lang = { htmlLang: 'ru', ogLocale: 'ru_RU' } as const;

const ru = {
  'meta.title': 'Искусство жизни, Часть 1 — онлайн-курс на русском, международный поток, 13–15 ноября 2026',
  'meta.description':
    'Бесплатное онлайн-занятие «Первый шаг» и курс «Искусство жизни, Часть 1» онлайн на русском: Сударшан Крия™, йога и медитация. 3 дня по 3 часа в Zoom, международный поток.',

  'skip': 'Перейти к содержанию',
  'header.brand.sub': 'онлайн · международный поток',
  'header.cta': 'Записаться',

  'cta.register': 'Записаться на курс',
  'cta.intro': 'Записаться бесплатно',
  'intro.soon': 'Регистрация откроется здесь в ближайшее время.',
  'intro.format': 'Zoom · 1 час · бесплатно',
  'intro.cities': 'Время в городах',
  'intro.photoAlt': 'Девушка с раскинутыми руками стоит на холме и смотрит на горы',

  'local.label': 'Ваше местное время',
  'course.label': 'Курс',
  'course.time': '{time} {zone} · 3 часа',
  'course.na': '{region}: пятница {fri}; суббота и воскресенье — вместе со всеми, {weekend}.',
  'time.tba': 'время уточняется',

  'countries.title': 'Выберите страну регистрации',
  'countries.text':
    'Это общий международный поток на русском языке. Регистрация и оплата проходят в системе Art of Living выбранной страны.',
  'countries.price': 'Стоимость указана на странице регистрации вашей страны.',
  'countries.hint': 'Выберите любую удобную регистрацию — неважно, в какой стране вы живёте.',
  'countries.button': 'Регистрация',
  'newTab': 'откроется в новой вкладке',

  'flag': 'Флаг',
  'organizers.soon': 'Контакт появится в ближайшее время',

  'footer.status': 'Страница сертифицированных учителей Art of Living',
  'footer.registration': 'Регистрация и оплата — на сайтах Art of Living выбранной страны.',
  'footer.medical': 'Практики не заменяют лечение, назначенное врачом.',
  'footer.contacts': 'Контакты',
  'footer.contacts.soon': 'Контакты появятся в ближайшее время.',
  'footer.copyright': '© 2026',
} as const;

export type UiKey = keyof typeof ru;

/** Translate; `{name}` placeholders are filled from vars. */
export function t(key: UiKey, vars: Record<string, string> = {}): string {
  return ru[key].replace(/\{(\w+)\}/g, (_, k: string) => vars[k] ?? '');
}
