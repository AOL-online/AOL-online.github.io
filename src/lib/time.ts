import { languages, type Lang } from '../i18n/ui';
import type { Session } from '../data/types';

const intl = (lang: Lang) => languages[lang].intl;

/** '13–15 ноября 2026' (same month) or '30 ноября – 2 декабря 2026'. Dates are 'YYYY-MM-DD'. */
export function formatDateRange(start: string, end: string, lang: Lang): string {
  const toDate = (d: string) => new Date(`${d}T12:00:00Z`);
  const f = new Intl.DateTimeFormat(intl(lang), { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
  return f.formatRange(toDate(start), toDate(end));
}

/** Short weekdays of the range, e.g. 'пт–вс'. */
export function formatWeekdayRange(start: string, end: string, lang: Lang): string {
  const f = new Intl.DateTimeFormat(intl(lang), { weekday: 'short', timeZone: 'UTC' });
  return `${f.format(new Date(`${start}T12:00:00Z`))}–${f.format(new Date(`${end}T12:00:00Z`))}`;
}

/** '18:00–21:00' of a session in a time zone, or null when the start is unknown. */
export function formatSessionTime(s: Session, tz: string, lang: Lang): string | null {
  if (!s.start) return null;
  const start = new Date(s.start);
  const end = new Date(start.getTime() + s.durationMin * 60_000);
  const f = new Intl.DateTimeFormat(intl(lang), { hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: tz });
  return f.formatRange(start, end);
}

/** True when every session has a known start. */
export const allTimesKnown = (sessions: Session[]) => sessions.length > 0 && sessions.every((s) => s.start);
