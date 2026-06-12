import type { Metadata } from 'next';
import { getToolPageBySlug } from '@/lib/seo/registry';

const BASE_URL = 'https://gptcleanuptools.com';

type MetaInput = {
  title: string;
  description: string;
  urlPath: string;
  canonicalTo?: string;
  /** Open Graph locale, e.g. 'ko_KR' for Korean-language pages. Defaults to 'en_US'. */
  locale?: string;
};

export function buildMeta({ title, description, urlPath, canonicalTo, locale = 'en_US' }: MetaInput): Metadata {
  const basePath = urlPath.startsWith('/') ? urlPath : `/${urlPath}`;
  const currentUrl = `${BASE_URL}${basePath === '/' ? '' : basePath}`;
  const canonicalUrl = canonicalTo 
    ? `${BASE_URL}${canonicalTo.startsWith('/') ? canonicalTo : `/${canonicalTo}`}` 
    : currentUrl;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: currentUrl,
      siteName: 'GPTCLEANUP AI',
      type: 'website',
      locale,
      // og:image comes from app/opengraph-image.tsx (file convention, 1200x630)
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export function buildArticleMeta({ title, description, urlPath }: MetaInput): Metadata {
  const meta = buildMeta({ title, description, urlPath });

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
};

export function buildToolMeta(slugOrInput: string | ToolMetaInput): Metadata {
  if (typeof slugOrInput === 'string') {
    const page = getToolPageBySlug(slugOrInput);
    if (!page) throw new Error(`Tool not registered in seo/registry: ${slugOrInput}`);
    return buildToolMeta({
      title: page.title,
      description: page.description,
      urlPath: `/${slugOrInput}`,
      seoTitle: page.seoTitle,
    });
  }
  const { title, description, urlPath, seoTitle, canonicalTo } = slugOrInput;
  const trimmedDescription = description.replace(/\.$/, '').trim();
  const fullTitle = seoTitle ?? (trimmedDescription ? `${title} - ${trimmedDescription}` : title);

  return buildMeta({
    title: fullTitle,
    description,
    urlPath,
    canonicalTo,
  });
}
