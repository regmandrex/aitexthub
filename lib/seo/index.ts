import type { Metadata } from 'next';

const BASE_URL = 'https://aitextcleanuptools.com';

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
      siteName: 'AI Text Cleanup Tools',
      type: 'website',
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

export * from '../schema/webpage';
export { webSiteSchema, siteNavigationSchema } from '../schema/site';
export * from '../seo/url';
export * from '../seo/registry';
