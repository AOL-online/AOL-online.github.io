import type { Session } from '../data/types';

const LOCALE = 'ru-RU';

/** Start of a session for a zone: a regional override (e.g. North America on Friday) wins. */
export function sessionStart(s: Session, tz: string): string | null {
  const ov = s.overrides?.find((o) => tz.startsWith(o.zonePrefix));
  return ov ? ov.start : s.start;
}

/** '18:00–21:00' in a zone. */
export function formatTimeRange(startIso: string, durationMin: number, tz: string): string {
  const start = new Date(startIso);
  const end = new Date(start.getTime() + durationMin * 60_000);
  const f = new Intl.DateTimeFormat(LOCALE, { hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: tz });
  return `${f.format(start)}–${f.format(end)}`;
}

/** '18:00' in a zone. */
export function formatTime(iso: string, tz: string): string {
  return new Intl.DateTimeFormat(LOCALE, { hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: tz }).format(new Date(iso));
}

/** Drop the Russian year suffix: '2026 г.' -> '2026'. */
const noYearSuffix = (s: string) => s.replace(/\s?г\.$/, '');

/** 'понедельник, 9 ноября 2026' in a zone. */
export function formatDayLong(iso: string, tz: string): string {
  return noYearSuffix(
    new Intl.DateTimeFormat(LOCALE, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: tz }).format(new Date(iso)),
  );
}

/** 'пн, 9 нояб.' in a zone. */
export function formatDayShort(iso: string, tz: string): string {
  return new Intl.DateTimeFormat(LOCALE, { weekday: 'short', day: 'numeric', month: 'short', timeZone: tz }).format(new Date(iso));
}

/** Calendar date 'YYYY-MM-DD' of an instant in a zone. */
export function localDate(iso: string, tz: string): string {
  return new Intl.DateTimeFormat('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: tz }).format(new Date(iso));
}

/** '13–15 ноября 2026' from 'YYYY-MM-DD' dates. */
export function formatDateRange(start: string, end: string): string {
  const d = (x: string) => new Date(`${x}T12:00:00Z`);
  return noYearSuffix(new Intl.DateTimeFormat(LOCALE, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).formatRange(d(start), d(end)));
}

/** 'пт–вс' from 'YYYY-MM-DD' dates. */
export function formatWeekdayRange(start: string, end: string): string {
  const f = new Intl.DateTimeFormat(LOCALE, { weekday: 'short', timeZone: 'UTC' });
  return `${f.format(new Date(`${start}T12:00:00Z`))}–${f.format(new Date(`${end}T12:00:00Z`))}`;
}

/** Data for the "your local time" script (no personal data, only times). */
export function localTimeData(sessions: { start: string | null; durationMin: number; overrides?: Session['overrides'] }[]): string {
  return JSON.stringify(
    sessions
      .filter((s) => s.start)
      .map((s) => ({ s: s.start, d: s.durationMin, o: (s.overrides ?? []).map((o) => ({ p: o.zonePrefix, s: o.start })) })),
  );
}
