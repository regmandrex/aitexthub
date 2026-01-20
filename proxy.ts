import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { DEFAULT_LOCALE, isSupportedLocale, type SupportedLocale } from './lib/i18n';

function getLocale(request: NextRequest): SupportedLocale {
  // Check if locale is in the URL path
  const pathname = request.nextUrl.pathname;
  const pathnameSegments = pathname.split('/').filter(Boolean);
  const firstSegment = pathnameSegments[0];
  
  if (firstSegment && isSupportedLocale(firstSegment)) {
    return firstSegment;
  }

  // Check cookie for stored locale preference (prioritize over Accept-Language)
  const localeCookie = request.cookies.get('locale');
  if (localeCookie?.value && isSupportedLocale(localeCookie.value)) {
    return localeCookie.value;
  }

  // Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferredLocales = acceptLanguage
      .split(',')
      .map((lang) => lang.split(';')[0].trim().toLowerCase());
    
    for (const preferred of preferredLocales) {
      // Try exact match
      if (isSupportedLocale(preferred)) {
        return preferred;
      }
      // Try language code only (e.g., 'en' from 'en-US')
      const langCode = preferred.split('-')[0];
      if (isSupportedLocale(langCode)) {
        return langCode;
      }
    }
  }

  return DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Skip proxy for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/icon') ||
    pathname.startsWith('/brand') ||
    pathname.includes('.') // files with extensions
  ) {
    return NextResponse.next();
  }

  const pathnameSegments = pathname.split('/').filter(Boolean);
  const firstSegment = pathnameSegments[0];
  let locale: SupportedLocale;
  let pathWithoutLocale = pathname;

  // Check if URL already has locale prefix
  if (firstSegment && isSupportedLocale(firstSegment)) {
    locale = firstSegment;
    pathWithoutLocale = '/' + pathnameSegments.slice(1).join('/') || '/';
    
    // Blog routes are English-only - redirect localized blog URLs to /blog
    if (pathWithoutLocale.startsWith('/blog')) {
      const url = request.nextUrl.clone();
      url.pathname = pathWithoutLocale;
      return NextResponse.redirect(url);
    }
    
    // If it's the default locale (English), redirect to remove the prefix
    // This ensures /en/ redirects to / for cleaner URLs
    if (locale === DEFAULT_LOCALE) {
      const url = request.nextUrl.clone();
      url.pathname = pathWithoutLocale;
      const redirectResponse = NextResponse.redirect(url);
      
      // Set cookie to remember locale preference
      redirectResponse.cookies.set('locale', locale, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365, // 1 year
        sameSite: 'lax',
      });
      
      return redirectResponse;
    }
    
    // For non-default locales, rewrite the URL to remove locale prefix for internal routing
    // This allows /es/all-tools to work but internally serve /all-tools
    const url = request.nextUrl.clone();
    url.pathname = pathWithoutLocale;
    
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-site-locale', locale);
    requestHeaders.set('x-site-lang', locale);
    
    const response = NextResponse.rewrite(url, {
      request: {
        headers: requestHeaders,
      },
    });
    
    // Set cookie to remember locale preference
    response.cookies.set('locale', locale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: 'lax',
    });

    return response;
  }

  // No locale in URL - detect from cookie/header
  locale = getLocale(request);
  
  // Blog routes are English-only - don't redirect to localized URLs
  if (pathname.startsWith('/blog')) {
    // Force English locale for blog routes
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-site-locale', DEFAULT_LOCALE);
    requestHeaders.set('x-site-lang', DEFAULT_LOCALE);
    
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
    
    return response;
  }
  
  // For non-default locales, redirect to include locale in URL (e.g., /es/case-converter/)
  // This ensures locale is always visible in the URL for non-default locales
  if (locale !== DEFAULT_LOCALE) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
    const redirectResponse = NextResponse.redirect(url);
    
    // Set cookie to remember locale preference
    redirectResponse.cookies.set('locale', locale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: 'lax',
    });
    
    return redirectResponse;
  }
  
  // For default locale (English), continue without redirect (clean URLs like /case-converter/)
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-site-locale', locale);
  requestHeaders.set('x-site-lang', locale);
  
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  
  // Set cookie to remember locale preference
  response.cookies.set('locale', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax',
  });

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - files with extensions (static assets)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
