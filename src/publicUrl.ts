/**
 * Absolute URLs for files in `public/` (profile image, résumé PDF).
 * GitHub Pages project sites need `/<repo>/file`, not `/file`.
 * Prefer resolving from the current URL’s first path segment (repo name) so it
 * works even if the bundle was built with `base: '/'`.
 */
export function publicUrl(path: string): string {
  const trimmed = path.replace(/^\/+/, '');

  if (typeof window !== 'undefined') {
    const parts = window.location.pathname.split('/').filter(Boolean);
    const first = parts[0];
    if (first && !first.includes('.') && first !== 'assets') {
      return `${window.location.origin}/${first}/${trimmed}`;
    }
  }

  let base = import.meta.env.BASE_URL || '/';
  if (base === './') base = '/';
  if (!base.endsWith('/')) base = `${base}/`;

  if (base === '/') {
    return `/${trimmed}`;
  }
  return `${base}${trimmed}`;
}
