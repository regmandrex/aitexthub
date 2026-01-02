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
      siteName: 'GPT CLEAN UP',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

type ToolMetaInput = {
  title: string;
  description: string;
  urlPath: string;
  seoTitle?: string;
};

export function buildToolMeta({ title, description, urlPath, seoTitle }: ToolMetaInput): Metadata {
  const trimmedDescription = description.replace(/\.$/, '').trim();
  const fullTitle = seoTitle ?? (trimmedDescription ? `${title} - ${trimmedDescription}` : title);

  return buildMeta({
    title: fullTitle,
    description,
    urlPath,
  });
}
