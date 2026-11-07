// Interface strings. The site is Russian only (root, no language prefixes);
// strings live in this dictionary so other languages can be added later.

export const lang = { htmlLang: 'ru', ogLocale: 'ru_RU' } as const;

const ru = {
  'meta.title': 'Программа Счастье — онлайн-курс Art of Living на русском, 13–15 ноября',
  'meta.description':
    'Бесплатное вводное занятие «Первый шаг» и курс «Программа Счастье» (Art of Living, Часть 1) онлайн на русском: Сударшан Крия™, йога и медитация. 3 дня по 3 часа в Zoom.',

  'skip': 'Перейти к содержанию',
  'header.brand.sub': 'Art of Living · онлайн',
  'header.cta': 'Записаться',
  'theme.toDark': 'Включить тёмную тему',
  'theme.toLight': 'Включить светлую тему',

  'cta.register': 'Записаться на курс',

  'intro.eyebrow': 'Бесплатное вводное занятие онлайн',
  'intro.text':
    'За 60 минут вы попробуете дыхательную практику и медитацию, узнаете, как устроен курс «Программа Счастье», и зададите вопросы учителю.',
  'intro.format': 'Zoom · бесплатно',
  'intro.cities': 'Время в вашем городе',
  'intro.button': 'Записаться на «Первый шаг»',
  'intro.soon': 'Регистрация откроется здесь в ближайшее время.',
  'intro.form.title': 'Регистрация на «Первый шаг»',
  'intro.form.fallback': 'Форма не загрузилась? Откройте её в новой вкладке',
  'intro.photoAlt': 'Группа людей выполняет дыхательную практику на природе',

  'local.label': 'Ваше местное время',

  'course.eyebrow': 'Курс',
  'course.time': '{time} {zone} · 3 дня по 3 часа · Zoom',
  'course.na': '{region}: пятница {fri}; суббота и воскресенье — вместе со всеми, {weekend}.',
  'course.text': 'Сударшан Крия™, йога, медитация и знание об уме — живой курс с сертифицированными учителями.',
  'time.tba': 'время уточняется',

  'countries.title': 'Выберите страну регистрации',
  'countries.text':
    'Это общий международный поток на русском языке. Регистрация и оплата проходят в системе Art of Living выбранной страны.',
  'countries.price': 'Стоимость указана на странице регистрации вашей страны.',
  'countries.hint': 'Выберите любую удобную регистрацию — неважно, в какой стране вы живёте.',
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

/** Translate; `{name}` placeholders are filled from vars. */
export function t(key: UiKey, vars: Record<string, string> = {}): string {
  return ru[key].replace(/\{(\w+)\}/g, (_, k: string) => vars[k] ?? '');
}
