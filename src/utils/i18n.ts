import { translations, type Language } from '../data/translations';

export { translations, type Language };

export const DEFAULT_LOCALE: Language = 'ru';
export const LOCALES: Language[] = ['ru', 'fi', 'en'];

export function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((prev, curr) => (prev && prev[curr] !== undefined ? prev[curr] : null), obj);
}

/**
 * Extracts language from a URL pathname (/fi/..., /en/..., or default ru)
 */
export function getLanguageFromPathname(pathname: string): Language {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && (segments[0] === 'fi' || segments[0] === 'en')) {
    return segments[0] as Language;
  }
  return DEFAULT_LOCALE;
}

/**
 * Strips locale prefix from pathname to obtain the canonical root-relative path
 * Examples:
 *   "/fi" -> "/"
 *   "/en/shows/novecento" -> "/shows/novecento"
 *   "/shows/archive" -> "/shows/archive"
 */
export function getCleanPath(pathname: string): string {
  let clean = pathname.replace(/^\/(fi|en)(\/|$)/, '/');
  if (!clean.startsWith('/')) clean = '/' + clean;
  clean = clean.replace(/\/+/g, '/');
  return clean;
}

/**
 * Builds a localized path for a given language
 * Examples:
 *   getLocalizedPath('/', 'ru') -> '/'
 *   getLocalizedPath('/', 'fi') -> '/fi'
 *   getLocalizedPath('/', 'en') -> '/en'
 *   getLocalizedPath('/#afisha', 'fi') -> '/fi#afisha'
 *   getLocalizedPath('/shows/novecento', 'fi') -> '/fi/shows/novecento'
 *   getLocalizedPath('/shows/archive', 'en') -> '/en/shows/archive'
 */
export function getLocalizedPath(pathWithOptionalHash: string, lang: Language): string {
  const hashIndex = pathWithOptionalHash.indexOf('#');
  const hash = hashIndex !== -1 ? pathWithOptionalHash.substring(hashIndex) : '';
  const pathname = hashIndex !== -1 ? pathWithOptionalHash.substring(0, hashIndex) : pathWithOptionalHash;

  const cleanPath = getCleanPath(pathname || '/');

  let basePath = cleanPath;
  if (lang === 'ru') {
    basePath = cleanPath;
  } else {
    basePath = cleanPath === '/' ? `/${lang}` : `/${lang}${cleanPath}`;
  }

  if (basePath === '/' && hash) {
    return `/${hash}`;
  }
  return `${basePath}${hash}`;
}

/**
 * Generates alternate hreflang URLs for SEO
 */
export function getAlternateHreflangLinks(pathname: string, siteUrl: string = 'https://teatterilogrus.fi') {
  const cleanBase = siteUrl.replace(/\/$/, '');
  const cleanPath = getCleanPath(pathname);

  const ruHref = `${cleanBase}${cleanPath === '/' ? '/' : cleanPath}`;
  const fiHref = `${cleanBase}/fi${cleanPath === '/' ? '' : cleanPath}`;
  const enHref = `${cleanBase}/en${cleanPath === '/' ? '' : cleanPath}`;

  return [
    { lang: 'ru', href: ruHref },
    { lang: 'fi', href: fiHref },
    { lang: 'en', href: enHref },
    { lang: 'x-default', href: ruHref },
  ];
}

