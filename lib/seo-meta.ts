import type { Metadata } from 'next';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE, addLocaleToPath, type SupportedLocale } from './i18n';

const BASE_URL = 'https://gptcleanuptools.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/brand/gpt-clean-up-tools.png`;

type MetaInput = {
  title: string;
  description: string;
  urlPath: string;
  canonicalTo?: string;
  locale?: SupportedLocale;
};

export function buildMeta({ title, description, urlPath, canonicalTo, locale }: MetaInput): Metadata {
  const basePath = urlPath.startsWith('/') ? urlPath : `/${urlPath}`;
  
  // Build the current page URL based on locale
  const currentLocalePath = locale ? addLocaleToPath(basePath, locale) : basePath;
  const currentUrl = `${BASE_URL}${currentLocalePath === '/' ? '' : currentLocalePath}`;
  
  // Canonical should point to the default (English) version for SEO consolidation
  // This helps consolidate ranking signals to the primary language version
  const defaultPath = addLocaleToPath(basePath, DEFAULT_LOCALE);
  const defaultUrl = `${BASE_URL}${defaultPath === '/' ? '' : defaultPath}`;
  const canonicalUrl = canonicalTo 
    ? `${BASE_URL}${canonicalTo.startsWith('/') ? canonicalTo : `/${canonicalTo}`}` 
    : defaultUrl;

  // Build alternate language links (hreflang) - all versions must reference all versions
  // Each href must be an absolute URL pointing to the correct language version
  const languages: Record<string, string> = {};
  if (locale) {
    // Add all language alternates - reciprocal hreflang tags
    for (const supportedLocale of SUPPORTED_LOCALES) {
      const localePath = addLocaleToPath(basePath, supportedLocale);
      const localeUrl = `${BASE_URL}${localePath === '/' ? '' : localePath}`;
      languages[supportedLocale] = localeUrl;
    }
    // Add x-default pointing to English (default locale) - Google's recommendation
    // This tells search engines which page to show users whose language isn't supported
    languages['x-default'] = defaultUrl;
  }

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      ...(Object.keys(languages).length > 0 ? { languages } : {}),
    },
    openGraph: {
      title,
      description,
      url: currentUrl,
      siteName: 'GPT CLEAN UP',
      type: 'website',
      images: [{ url: DEFAULT_OG_IMAGE }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export function buildArticleMeta({ title, description, urlPath, locale }: MetaInput): Metadata {
  const meta = buildMeta({ title, description, urlPath, locale });

  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      type: 'article',
    },
  };
}

type ToolMetaInput = {
  title: string;
  description: string;
  urlPath: string;
  seoTitle?: string;
  canonicalTo?: string;
  locale?: SupportedLocale;
};

export function buildToolMeta({ title, description, urlPath, seoTitle, canonicalTo, locale }: ToolMetaInput): Metadata {
  const trimmedDescription = description.replace(/\.$/, '').trim();
  const fullTitle = seoTitle ?? (trimmedDescription ? `${title} - ${trimmedDescription}` : title);

  // If canonicalTo is not specified, let buildMeta determine it based on current locale
  // This ensures canonical points to the current page version
  return buildMeta({
    title: fullTitle,
    description,
    urlPath,
    canonicalTo,
    locale,
  });
}
