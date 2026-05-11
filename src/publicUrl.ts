/**
 * URLs for files copied from `public/` into the build root (profile image, résumé PDF).
 * Resolves relative to the current page so the same build works on
 * `*.github.io/<repo>/` and on a custom domain like `https://yoursite.com/`.
 */
export function publicUrl(path: string): string {
  const trimmed = path.replace(/^\/+/, '');
  if (typeof window !== 'undefined') {
    return new URL(trimmed, window.location.href).href;
  }
  const base = import.meta.env.BASE_URL || './';
  if (base === './') {
    return `./${trimmed}`;
  }
  const normalized = base.endsWith('/') ? base : `${base}/`;
  if (normalized === '/') {
    return `/${trimmed}`;
  }
  return `${normalized}${trimmed}`;
}
