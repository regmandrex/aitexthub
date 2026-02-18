import type { Metadata } from 'next';

const BASE_URL = 'https://gptcleanuptools.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/brand/gpt-clean-up-tools.png`;

type MetaInput = {
  title: string;
  description: string;
  urlPath: string;
  canonicalTo?: string;
};

export function buildMeta({ title, description, urlPath, canonicalTo }: MetaInput): Metadata {
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

export function buildToolMeta({ title, description, urlPath, seoTitle, canonicalTo }: ToolMetaInput): Metadata {
  const trimmedDescription = description.replace(/\.$/, '').trim();
  const fullTitle = seoTitle ?? (trimmedDescription ? `${title} - ${trimmedDescription}` : title);

  return buildMeta({
    title: fullTitle,
    description,
    urlPath,
    canonicalTo,
  });
}
