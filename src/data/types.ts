// Shape of a course data file (src/data/course.<lang>.ts).
// Next course run = edit only the data file, never the components.

/** One course session. `start` is ISO 8601 with offset, e.g. '2026-11-13T18:00:00+01:00'. */
export interface Session {
  /** Calendar date of the session in the course time zone, 'YYYY-MM-DD'. */
  date: string;
  /** Start time with offset; null = not known yet (page shows "time TBA"). */
  start: string | null;
  /** Length in minutes. */
  durationMin: number;
}

export interface Country {
  /** ISO 3166-1 alpha-2, lower case: used for the flag image (flag-icons). */
  code: string;
  name: string;
  /** Registration page in the Art of Living system of that country. */
  url: string;
}

export interface IntroTalk {
  /** ISO start with offset, or null if not known yet. */
  start: string | null;
  durationMin: number;
  /** Registration / join link. If null the talk is listed without a button. */
  url: string | null;
}

export interface Teacher {
  name: string;
  role: string;
  /** Optional short bio. */
  bio?: string;
}

export interface Contacts {
  /** Telegram username without @, or null. */
  telegram: string | null;
  /** Public e-mail, or null. Never publish personal e-mails here. */
  email: string | null;
}

export interface TimeZoneRow {
  label: string;
  /** IANA zone name, e.g. 'Europe/Moscow'. */
  tz: string;
}

export interface Course {
  title: string;
  subtitle: string;
  /** First and last day, 'YYYY-MM-DD'. */
  startDate: string;
  endDate: string;
  /** IANA time zone in which the course is organised (main zone on the page). */
  timeZone: string;
  sessions: Session[];
  /** Rows of the time-zone table (first row = main zone). */
  timeZoneTable: TimeZoneRow[];
  countries: Country[];
  /** Free intro talks. Empty array = block shows "coming soon". */
  introTalks: IntroTalk[];
  teachers: Teacher[];
  contacts: Contacts;
}
