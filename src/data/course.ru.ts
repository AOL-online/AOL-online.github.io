import type { Course } from './types';

// =====================================================================
// COURSE DATA — the only file to edit for the next course run.
// Russian online Happiness Program (Art of Living Part 1),
// international flow, 13–15 November 2026.
// Times: ISO with offset. Moscow = +03:00, CET in November = +01:00, PT = -08:00, ET = -05:00.
// =====================================================================

export const course: Course = {
  title: 'Программа Счастье',
  subtitle: 'Art of Living, Часть 1 · онлайн на русском',

  startDate: '2026-11-13',
  endDate: '2026-11-15',

  mainTimeZone: 'Europe/Moscow',
  mainTimeZoneLabel: 'по Москве',

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

  cities: [
    { name: 'Загреб', tz: 'Europe/Zagreb' },
    { name: 'Киев', tz: 'Europe/Kyiv' },
    { name: 'Минск', tz: 'Europe/Minsk' },
    { name: 'Москва', tz: 'Europe/Moscow' },
    { name: 'Астана', tz: 'Asia/Almaty' }, // Kazakhstan: one zone UTC+5 since 2024
    { name: 'Нью-Йорк', tz: 'America/New_York' },
    { name: 'Лос-Анджелес', tz: 'America/Los_Angeles' },
  ],

  // Registration per country — any registration can be chosen, wherever the person lives.
  countries: [
    { code: 'by', name: 'Беларусь', url: 'https://www.artofliving.by/page287686309.html' },
    { code: 'us', name: 'США', url: 'https://members.us.artofliving.org/us-en/course/a04Vu00000vFvoLIAS?ctype=811569' },
    { code: 'ua', name: 'Украина', url: 'https://forms.gle/eohsSAGGyEp4ZhXe8' },
    { code: 'ru', name: 'Россия', url: 'https://artofliving.ru/happiness_online?streamId=518228' },
    { code: 'kz', name: 'Казахстан', url: 'https://aolreg.org/KZC1127764' },
    { code: 'hr', name: 'Хорватия', url: 'https://aolreg.org/c/HRC1294666' },
  ],

  // Free intro talk. TODO: registration URL — set registration to
  //   { kind: 'link', url: 'https://…' }            (Zoom registration / Tally page)
  //   { kind: 'embed', url: 'https://…', height: 900 } (embedded form, e.g. Tally embed URL)
  // Form fields needed: имя, фамилия, телефон, email, город, страна + согласие на обработку данных.
  introTalks: [
    {
      title: 'Первый шаг',
      start: '2026-11-09T18:30:00+03:00',
      durationMin: 60,
      registration: { kind: 'none' },
    },
  ],

  // TODO: photos, surnames and contacts — later, only with consent (fields: photo, telegram, phone, email).
  teachers: [
    { name: 'Ольга', place: 'США', role: 'Сертифицированный учитель Art of Living' },
    { name: 'Михаил', place: 'Загреб', role: 'Сертифицированный учитель Art of Living' },
    { name: 'Екатерина', place: 'Москва', role: 'Сертифицированный учитель Art of Living' },
  ],

  // TODO (stage 3): 2–3 testimonials from official Art of Living pages, no photos.
  testimonials: [],

  // TODO(TBD): public contacts — none until the team decides. Keep null.
  contacts: {
    telegram: null,
    email: null,
  },
};
