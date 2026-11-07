import type { Course } from './types';

// =====================================================================
// COURSE DATA — the only file to edit for the next course run.
// Russian online Happiness Program (Art of Living Part 1),
// international flow, 13–15 November 2026.
// =====================================================================

export const course: Course = {
  title: 'Программа Счастье',
  subtitle: 'Art of Living, Часть 1 · онлайн на русском',

  startDate: '2026-11-13',
  endDate: '2026-11-15',

  // Main time zone of the course (CET in winter).
  timeZone: 'Europe/Zagreb',

  // TODO(TBD): session start times are not known yet.
  // Fill `start` as ISO with offset, e.g. '2026-11-13T18:00:00+01:00' (CET = +01:00 in November).
  // While `start` is null the page shows "время уточняется".
  sessions: [
    { date: '2026-11-13', start: null, durationMin: 180 },
    { date: '2026-11-14', start: null, durationMin: 180 },
    { date: '2026-11-15', start: null, durationMin: 180 },
  ],

  timeZoneTable: [
    { label: 'Центральная Европа (CET)', tz: 'Europe/Zagreb' },
    { label: 'Москва / Минск', tz: 'Europe/Moscow' },
    { label: 'Киев', tz: 'Europe/Kyiv' },
    { label: 'Алматы', tz: 'Asia/Almaty' },
    { label: 'Нью-Йорк', tz: 'America/New_York' },
  ],

  // Registration per country — the participant chooses.
  countries: [
    { code: 'by', name: 'Беларусь', url: 'https://www.artofliving.by/page287686309.html' },
    { code: 'us', name: 'США', url: 'https://members.us.artofliving.org/us-en/course/a04Vu00000vFvoLIAS?ctype=811569' },
    { code: 'ua', name: 'Украина', url: 'https://forms.gle/eohsSAGGyEp4ZhXe8' },
    { code: 'ru', name: 'Россия', url: 'https://artofliving.ru/happiness_online?streamId=518228' },
    { code: 'kz', name: 'Казахстан', url: 'https://aolreg.org/KZC1127764' },
    { code: 'hr', name: 'Хорватия', url: 'https://aolreg.org/c/HRC1294666' },
  ],

  // TODO(TBD): free intro talks — registration method not decided yet.
  // Example: { start: '2026-11-10T19:00:00+01:00', durationMin: 60, url: 'https://…' }
  introTalks: [],

  // TODO: other teachers of this flow will be added later (names only with their consent, no photos yet).
  teachers: [
    { name: 'Михаил Векленко', role: 'Сертифицированный учитель Art of Living' },
  ],

  // TODO(TBD): public contacts — none until the team decides. Keep null.
  contacts: {
    telegram: null,
    email: null,
  },
};
