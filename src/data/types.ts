// Shape of the course data file (src/data/course.ru.ts).
// Next course run = edit only the data file, never the components.
// All times: ISO 8601 with offset, e.g. '2026-11-13T18:00:00+03:00'. Shown per city with Intl at build time.

/** Different start for one region on one day (e.g. North America on Friday). */
export interface SessionOverride {
  /** Name shown on the page, e.g. 'Северная Америка'. */
  region: string;
  /** IANA zone prefix the override applies to, e.g. 'America/'. */
  zonePrefix: string;
  start: string;
}

export interface Session {
  /** Day in the course time zone, 'YYYY-MM-DD'. */
  date: string;
  /** Start (ISO with offset); null = not known yet, page shows "время уточняется". */
  start: string | null;
  durationMin: number;
  overrides?: SessionOverride[];
}

export interface City {
  name: string;
  /** IANA zone, e.g. 'Europe/Moscow'. */
  tz: string;
}

export interface Country {
  /** ISO 3166-1 alpha-2, lower case: flag file src/assets/flags/<code>.svg. */
  code: string;
  name: string;
  /** Registration page in the Art of Living system of that country. */
  url: string;
}

/**
 * Registration forms on the site → Google Apps Script web app → Google Sheet (owner's account).
 * - webAppUrl null: forms show «Регистрация откроется в ближайшее время» (or the fallback link, if set).
 * - fallback URLs: shown without JavaScript (or instead of the form while webAppUrl is null).
 */
export interface Forms {
  webAppUrl: string | null;
  introFallbackUrl: string | null;
  nextCourseFallbackUrl: string | null;
}

export interface IntroTalk {
  /** Big handwritten heading. */
  title: string;
  /** Line under the heading. */
  subtitle: string;
  start: string;
  durationMin: number;
}

/** Organiser shown in «Контакты организаторов» (no teacher names/bios on the site). */
export interface Organizer {
  name: string;
  /** City / country, e.g. 'Загреб'. */
  place: string;
  /** Contacts — only with consent. Phone is shown by button only; e-mail via a protected component. */
  telegram?: string;
  whatsapp?: string;
  phone?: string;
  email?: string;
}

export interface Testimonial {
  text: string;
  name: string;
  /** City / country or other short note. */
  place?: string;
  /** Page where the testimonial was published (official AoL page). */
  sourceUrl: string;
}

export interface Contacts {
  telegram: string | null;
  email: string | null;
}

export interface Course {
  /** Handwritten course name, e.g. 'Часть 1'. */
  brandTitle: string;
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string;
  /** Zone used to compute calendar days (no single main time is shown; times are by city). */
  mainTimeZone: string;
  sessions: Session[];
  /** Cities of the time tables, in display order. */
  cities: City[];
  countries: Country[];
  /** Next free intro talk(s); first one is the main call on the first screen. Empty = hidden. */
  introTalks: IntroTalk[];
  organizers: Organizer[];
  forms: Forms;
  testimonials: Testimonial[];
  contacts: Contacts;
}
