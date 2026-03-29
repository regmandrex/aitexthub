import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

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

function nextWithPathname(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-site-pathname', pathname);
  const lang = pathname === '/korean-nickname-generator' || pathname.startsWith('/korean-nickname-generator/')
    ? 'ko'
    : 'en';
  requestHeaders.set('x-page-lang', lang);
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
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
    return nextWithPathname(request);
  }

  // 301 redirects for legacy model watermark remover slugs -> watermark cleaner slugs
  const normalized = stripTrailingSlash(pathname);
  const directDest = WATERMARK_REMOVER_TO_CLEANER_REDIRECTS[normalized];
  if (directDest) {
    const url = request.nextUrl.clone();
    url.pathname = directDest;
    return NextResponse.redirect(url, 301);
  }

  // Redirect any locale-prefixed URLs to English (remove locale prefix)
  const segments = pathname.split('/').filter(Boolean);
  const knownLocales = ['es', 'fr', 'ko', 'zh-cn', 'en'];
  if (segments.length > 0 && knownLocales.includes(segments[0])) {
    const pathWithoutLocale = '/' + segments.slice(1).join('/') || '/';
    const url = request.nextUrl.clone();
    url.pathname = pathWithoutLocale;
    return NextResponse.redirect(url, 301);
  }

  return nextWithPathname(request);
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
