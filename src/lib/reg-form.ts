// Client script for registration forms ([data-reg-form]) → Google Apps Script web app.
// Sends application/x-www-form-urlencoded (a "simple" CORS request, no preflight).
// The script answers JSON {ok:true} or {ok:false,error}. Personal data is not stored in the browser.

const MIN_FILL_MS = 4000;

export function initRegForms() {
  const loadedAt = Date.now();
  document.querySelectorAll<HTMLFormElement>('form[data-reg-form]').forEach((form) => {
    const box = form.parentElement;
    const errorEl = form.querySelector<HTMLElement>('[data-reg-error]');
    const submit = form.querySelector<HTMLButtonElement>('[data-reg-submit]');
    const success = box?.querySelector<HTMLElement>('[data-reg-success]');
    const ds = form.dataset;

    const showError = (msg: string) => {
      if (!errorEl) return;
      errorEl.textContent = msg;
      errorEl.classList.remove('hidden');
    };

    form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      errorEl?.classList.add('hidden');
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const data = new URLSearchParams();
      new FormData(form).forEach((v, k) => data.append(k, String(v)));
      data.set('kind', ds.kind ?? '');
      data.set('source', ds.source ?? '');
      data.set('page', location.origin + location.pathname);
      // The script ignores submissions faster than MIN_FILL_MS (bots posting directly).
      // A fast person (autofill) must never be dropped silently, so wait until the minimum has passed.
      const waitMs = MIN_FILL_MS + 200 - (Date.now() - loadedAt);
      const label = submit?.textContent ?? '';
      if (submit) {
        submit.disabled = true;
        submit.textContent = ds.msgSending ?? '…';
      }
      try {
        if (waitMs > 0) await new Promise((r) => setTimeout(r, waitMs));
        data.set('elapsed', String(Date.now() - loadedAt));
        const res = await fetch(ds.endpoint ?? '', { method: 'POST', body: data });
        const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
        if (json.ok) {
          form.remove();
          success?.classList.remove('hidden');
          success?.focus();
          return;
        }
        if (json.error === 'email') showError(ds.msgErrorEmail ?? '');
        else if (json.error === 'phone') showError(ds.msgErrorPhone ?? '');
        else showError(ds.msgError ?? '');
      } catch {
        showError(ds.msgError ?? '');
      } finally {
        if (submit && form.isConnected) {
          submit.disabled = false;
          submit.textContent = label;
        }
      }
    });
  });
}
