import type { Course } from './types';

// =====================================================================
// COURSE DATA — the only file to edit for the next course run.
// Russian online Happiness Program (Art of Living Part 1),
// international flow, 13–15 November 2026.
// Times: ISO with offset. Moscow = +03:00, CET in November = +01:00, PT = -08:00, ET = -05:00.
// =====================================================================

export const course: Course = {
  brandTitle: 'Часть 1',
  title: 'Искусство жизни, Часть 1',
  subtitle: 'онлайн · международный поток',

  startDate: '2026-11-13',
  endDate: '2026-11-15',

  // Zone used to compute the calendar day of the intro talk (no single "main" time is shown on the site).
  mainTimeZone: 'Europe/Moscow',

  // 18:00 Moscow, 3 hours. North America: Friday separately 16:30 PT; Sat/Sun together with everyone.
  sessions: [
    {
      date: '2026-11-13',
      start: '2026-11-13T18:00:00+03:00',
      durationMin: 180,
      overrides: [{ region: 'Северная Америка', zonePrefix: 'America/', start: '2026-11-13T16:30:00-08:00' }],
    },
    { date: '2026-11-14', start: '2026-11-14T18:00:00+03:00', durationMin: 180 },
    { date: '2026-11-15', start: '2026-11-15T18:00:00+03:00', durationMin: 180 },
  ],

  // West -> east. Minsk and Moscow share one row (same time, UTC+3).
  cities: [
    { name: 'Лос-Анджелес', tz: 'America/Los_Angeles' },
    { name: 'Нью-Йорк', tz: 'America/New_York' },
    { name: 'Загреб', tz: 'Europe/Zagreb' },
    { name: 'Киев', tz: 'Europe/Kyiv' },
    { name: 'Минск / Москва', tz: 'Europe/Moscow' },
    { name: 'Астана', tz: 'Asia/Almaty' }, // Kazakhstan: one zone UTC+5 since 2024
  ],

  // Registration per country, west -> east — any registration can be chosen, wherever the person lives.
  countries: [
    { code: 'us', name: 'США', url: 'https://members.us.artofliving.org/us-en/course/a04Vu00000vFvoLIAS?ctype=811569' },
    { code: 'hr', name: 'Хорватия', url: 'https://aolreg.org/c/HRC1294666' },
    { code: 'ua', name: 'Украина', url: 'https://forms.gle/eohsSAGGyEp4ZhXe8' },
    { code: 'by', name: 'Беларусь', url: 'https://www.artofliving.by/page287686309.html' },
    { code: 'ru', name: 'Россия', url: 'https://artofliving.ru/happiness_online?streamId=518228' },
    { code: 'kz', name: 'Казахстан', url: 'https://aolreg.org/KZC1127764' },
  ],

  // Free intro talk «Первый шаг»: Mon 9 Nov 18:30 Moscow, 1 hour, Zoom. Registration: forms below.
  introTalks: [
    {
      title: 'За пределами обычного дыхания',
      subtitle: 'Бесплатное онлайн-занятие «Первый шаг»',
      start: '2026-11-09T18:30:00+03:00',
      durationMin: 60,
    },
  ],

  // Contacts of the organisers (teachers are NOT named on the site — organisers' decision 2026-11-07).
  // TODO: contacts later. Phone: shown by button only; e-mail: protected component.
  organizers: [
    { name: 'Ольга', place: 'США' },
    { name: 'Михаил', place: 'Загреб' },
    { name: 'Екатерина', place: 'Москва' },
  ],

  // Testimonials published on official Art of Living pages (artofliving.by, reviews), text only, no photos.
  testimonials: [
    {
      text: 'Я шла на первый курс без какого-либо ожидания от результатов и не понимала, что ожидает в процессе. Если описать кратко, то это будет: дыхательные практики, много дыхательных практик, немного телесного контакта, щепотка дурачества, ложка разговоров о философии и психологии, приятные сюрпризы.',
      name: 'Евгения',
      place: 'Беларусь',
      sourceUrl: 'https://www.artofliving.by/',
    },
    {
      text: 'Счастлива, что в своё время попала на курс Искусства жизни :-) Всегда удивляюсь, как простые упражнения приносят глубокий покой и в то же время радость, пробуждают креативность и интуитивные способности, превращают негативную энергию (гнев, ревность, жадность) в позитивную.',
      name: 'Ольга Б.',
      place: 'Беларусь',
      sourceUrl: 'https://www.artofliving.by/',
    },
    {
      text: 'Ходила на курс Счастье. Очень здорово, посмотрела на жизнь под другим углом и стала более позитивной.',
      name: 'Александра Б.',
      place: 'Беларусь',
      sourceUrl: 'https://www.artofliving.by/',
    },
  ],

  // Registration forms («Первый шаг», «Ближайший курс») → Google Apps Script web app → owner's Google Sheet.
  // Fallback links (Google Forms) are shown without JavaScript.
  forms: {
    webAppUrl: 'https://script.google.com/macros/s/AKfycbyrybdy047K9j62bGPyyqi7QIyF3GN80ondv21u_WvHgqLyCbgzgcCtlIsh_MbFwE_wFg/exec',
    introFallbackUrl: null,
    nextCourseFallbackUrl: null,
  },

  // TODO(TBD): public contacts — none until the team decides. Keep null.
  contacts: {
    telegram: null,
    email: null,
  },
};
