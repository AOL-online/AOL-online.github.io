const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

/** Site-internal URL with the base path. Never write href="/..." directly. */
export function url(path = ''): string {
  return base + path.replace(/^\//, '');
}
