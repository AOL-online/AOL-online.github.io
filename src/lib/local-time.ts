// Client script: fills elements [data-local-times] with the visitor's local time.
// Without JS these elements stay hidden (hidden attribute) and the build-time city tables remain.

interface Item {
  s: string;
  d: number;
  o: { p: string; s: string }[];
}

export function initLocalTimes() {
  let tz = 'UTC';
  try {
    tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  } catch {
    return;
  }
  const time = new Intl.DateTimeFormat('ru-RU', { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' });
  const day = new Intl.DateTimeFormat('ru-RU', { weekday: 'short', day: 'numeric', month: 'long' });

  document.querySelectorAll<HTMLElement>('[data-local-times]').forEach((el) => {
    const out = el.querySelector<HTMLElement>('[data-local-out]');
    if (!out) return;
    let items: Item[] = [];
    try {
      items = JSON.parse(el.dataset.localTimes || '[]');
    } catch {
      return;
    }
    const parts = items.map((it) => {
      const ov = it.o.find((o) => tz.startsWith(o.p));
      const start = new Date(ov ? ov.s : it.s);
      const end = new Date(start.getTime() + it.d * 60_000);
      return `${day.format(start)}, ${time.format(start)}–${time.format(end)}`;
    });
    if (parts.length) {
      out.textContent = parts.join(' · ');
      el.hidden = false;
    }
  });
}
