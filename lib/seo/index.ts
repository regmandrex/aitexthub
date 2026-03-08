import type { Metadata } from 'next';

const BASE_URL = 'https://gptcleanuptools.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/brand/gpt-clean-up-tools.png`;

type MetaInput = {
  title: string;
  description: string;
  urlPath: string;
};

export function buildMeta({ title, description, urlPath }: MetaInput): Metadata {
  const url = `${BASE_URL}${urlPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
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

export * from '../schema/webpage';
export { webSiteSchema, siteNavigationSchema } from '../schema/site';
export * from '../seo/url';
export * from '../seo/registry';
