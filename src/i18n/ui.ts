// Interface strings (Russian only, site in the root). Page texts: copy.ru.ts.

export const lang = { htmlLang: 'ru', ogLocale: 'ru_RU' } as const;

const ru = {
  'meta.title': 'Счастье онлайн — Программа Счастье (Art of Living, Часть 1) на русском, 13–15 ноября',
  'meta.description':
    'Бесплатное онлайн-занятие «Первый шаг» и курс «Программа Счастье» (Art of Living, Часть 1) на русском: Сударшан Крия™, йога и медитация. 3 дня по 3 часа в Zoom.',

  'skip': 'Перейти к содержанию',
  'header.brand.sub': 'Art of Living · онлайн на русском',
  'header.cta': 'Записаться',

  'cta.register': 'Записаться на курс',
  'cta.intro': 'Записаться бесплатно',
  'intro.soon': 'Регистрация откроется здесь в ближайшее время.',
  'intro.format': 'Zoom · 60 минут · бесплатно',
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

  'teacher.photoSoon': 'Фото скоро',

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
