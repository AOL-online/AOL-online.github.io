// Elements with [data-show-after="ISO date"] are hidden until that moment (checked in the visitor's browser).
export function initShowAfter() {
  const now = Date.now();
  document.querySelectorAll<HTMLElement>('[data-show-after]').forEach((el) => {
    const at = Date.parse(el.dataset.showAfter ?? '');
    if (!Number.isNaN(at) && now >= at) el.hidden = false;
  });
}
