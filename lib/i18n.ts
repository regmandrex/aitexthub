export const DEFAULT_LOCALE = 'en' as const;

export const SUPPORTED_LOCALES = [
  'en',
  'es',
  'fr',
  'zh-cn',
  'ko',
] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  return SUPPORTED_LOCALES.includes(locale as SupportedLocale);
}

export function getLocaleFromPath(pathname: string): { locale: SupportedLocale; pathWithoutLocale: string } {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && isSupportedLocale(firstSegment)) {
    return {
      locale: firstSegment,
      pathWithoutLocale: '/' + segments.slice(1).join('/') || '/',
    };
  }

  return {
    locale: DEFAULT_LOCALE,
    pathWithoutLocale: pathname,
  };
}

export function addLocaleToPath(pathname: string, locale: SupportedLocale): string {
  if (locale === DEFAULT_LOCALE) {
    // For default locale (English), don't add prefix - keep it clean
    return pathname;
  }
  return `/${locale}${pathname === '/' ? '' : pathname}`;
}

export function removeLocaleFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && isSupportedLocale(firstSegment)) {
    return '/' + segments.slice(1).join('/') || '/';
  }

  return pathname;
}
