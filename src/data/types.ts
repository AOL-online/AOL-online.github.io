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
 * How people register for the intro talk.
 * - none:  button stub "registration opens soon"
 * - link:  button to an external page (Zoom registration, Tally, …)
 * - embed: form embedded in the page (iframe URL, e.g. Tally embed) + fallback link
 */
export type Registration =
  | { kind: 'none' }
  | { kind: 'link'; url: string }
  | { kind: 'embed'; url: string; height?: number };

export interface IntroTalk {
  title: string;
  start: string;
  durationMin: number;
  registration: Registration;
}

export interface Teacher {
  name: string;
  /** City / country, e.g. 'Загреб'. */
  place: string;
  role: string;
  bio?: string;
  /** Photo file in src/assets/teachers/ (only with consent). */
  photo?: string;
  /** Contacts — only with consent. Phone is shown by button only; e-mail via a protected component. */
  telegram?: string;
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
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string;
  /** Zone in which times are announced ('по Москве'). */
  mainTimeZone: string;
  mainTimeZoneLabel: string;
  sessions: Session[];
  /** Cities of the time tables, in display order. */
  cities: City[];
  countries: Country[];
  /** Next free intro talk(s); first one is the main call on the first screen. Empty = hidden. */
  introTalks: IntroTalk[];
  teachers: Teacher[];
  testimonials: Testimonial[];
  contacts: Contacts;
}
