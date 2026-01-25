import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { DEFAULT_LOCALE, isSupportedLocale, type SupportedLocale } from './lib/i18n';

const WATERMARK_REMOVER_TO_CLEANER_REDIRECTS: Record<string, string> = {
  '/claude-watermark-remover': '/claude-watermark-cleaner',
  '/mistral-watermark-remover': '/mistral-watermark-cleaner',
  '/deepseek-watermark-remover': '/deepseek-watermark-cleaner',
  '/grok-watermark-remover': '/grok-watermark-cleaner',
  '/gemini-watermark-remover': '/gemini-watermark-cleaner',
  '/perplexity-watermark-remover': '/perplexity-watermark-cleaner',
  '/llama-watermark-remover': '/llama-watermark-cleaner',
};

function stripTrailingSlash(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1);
  return pathname;
}

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

  // 301 redirects for legacy model watermark remover slugs -> watermark cleaner slugs
  // Handle both with and without locale prefix (e.g. /es/claude-watermark-remover).
  {
    const normalized = stripTrailingSlash(pathname);
    const directDest = WATERMARK_REMOVER_TO_CLEANER_REDIRECTS[normalized];
    if (directDest) {
      const url = request.nextUrl.clone();
      url.pathname = directDest;
      return NextResponse.redirect(url, 301);
    }

    const segments = normalized.split('/').filter(Boolean);
    const first = segments[0];
    if (first && isSupportedLocale(first)) {
      const localeFromPath = first;
      const withoutLocale = '/' + segments.slice(1).join('/');
      const dest = WATERMARK_REMOVER_TO_CLEANER_REDIRECTS[withoutLocale];
      if (dest) {
        const url = request.nextUrl.clone();
        url.pathname = localeFromPath === DEFAULT_LOCALE ? dest : `/${localeFromPath}${dest}`;
        return NextResponse.redirect(url, 301);
      }
    }
  }

  const pathnameSegments = pathname.split('/').filter(Boolean);
  const firstSegment = pathnameSegments[0];
  let locale: SupportedLocale;
  let pathWithoutLocale = pathname;

  // Static pages that should be English-only (no translations)
  const staticEnglishOnlyPages = ['blog', 'about', 'contact', 'terms-of-service', 'privacy-policy', 'disclaimer', 'cookie-policy'];
  
  // Check if URL already has locale prefix
  if (firstSegment && isSupportedLocale(firstSegment)) {
    locale = firstSegment;
    pathWithoutLocale = '/' + pathnameSegments.slice(1).join('/') || '/';
    
    // Check if the path (without locale) is a static English-only page
    const isStaticEnglishPage = staticEnglishOnlyPages.some(page => pathWithoutLocale.startsWith(`/${page}`) || pathWithoutLocale === `/${page}`);
    
    // Static English-only pages - redirect localized URLs to English version
    if (isStaticEnglishPage) {
      const url = request.nextUrl.clone();
      url.pathname = pathWithoutLocale;
      const redirectResponse = NextResponse.redirect(url);
      // Clear locale cookie for static pages (English-only)
      redirectResponse.cookies.set('locale', DEFAULT_LOCALE, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
        sameSite: 'lax',
      });
      return redirectResponse;
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
    requestHeaders.set('x-site-pathname', pathWithoutLocale || '/');
    
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
  
  // Check if current path is a static English-only page
  const isStaticEnglishPage = staticEnglishOnlyPages.some(page => pathname.startsWith(`/${page}`) || pathname === `/${page}`);
  
  // Static English-only pages - force English locale
  if (isStaticEnglishPage) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-site-locale', DEFAULT_LOCALE);
    requestHeaders.set('x-site-lang', DEFAULT_LOCALE);
    requestHeaders.set('x-site-pathname', pathname || '/');
    
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
    
    // Set cookie to English for static pages
    response.cookies.set('locale', DEFAULT_LOCALE, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
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
  requestHeaders.set('x-site-pathname', pathname || '/');
  
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
