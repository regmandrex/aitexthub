import { ToolPageRenderer } from '@/components/tool/ToolPageRenderer';
import type { Metadata } from 'next';
import { getToolBySlug } from '@/lib/tools/registry';
import { getServerLocale } from '@/lib/server-i18n';
import { getMessageString } from '@/lib/intl';
import { addLocaleToPath } from '@/lib/i18n';

type PageProps = {
  params: Promise<{ toolSlug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { toolSlug } = await params;
  const tool = getToolBySlug(toolSlug);
  if (!tool) {
    return {};
  }

  const { locale, messages } = await getServerLocale();
  const toolKey = tool.slug === '' ? 'home' : tool.slug;
  const title = getMessageString(messages, `Tools.${toolKey}.title`) ?? tool.title;
  const description = getMessageString(messages, `Tools.${toolKey}.description`) ?? tool.shortDescription;
  const path = addLocaleToPath(tool.slug === '' ? '/' : `/${tool.slug}`, locale);
  const url = `https://gptcleanuptools.com${path === '/' ? '' : path}`;

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
  };
}

export default async function LocalizedToolPage({ params }: PageProps) {
  const { toolSlug } = await params;
  return <ToolPageRenderer slug={toolSlug} />;
}
