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

