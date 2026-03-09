import type { Metadata } from 'next';

const BASE_URL = 'https://gptcleanuptools.com';

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
    },
    twitter: {
      card: 'summary',
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
