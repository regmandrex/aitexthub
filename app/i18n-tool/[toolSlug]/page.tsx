import { ToolPageRenderer } from '@/components/tool/ToolPageRenderer';
import type { Metadata } from 'next';
import { getToolBySlug } from '@/lib/tools/registry';
import { buildToolMeta } from '@/lib/seo-meta';

type PageProps = {
  params: Promise<{ toolSlug: string }>;
};

export const revalidate = 86400;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { toolSlug } = await params;
  const tool = getToolBySlug(toolSlug);
  if (!tool) return {};

  return buildToolMeta({
    title: tool.title,
    description: tool.shortDescription,
    seoTitle: tool.seoTitle,
    urlPath: tool.slug === '' ? '/' : `/${tool.slug}`,
  });
}

export default async function LocalizedToolPage({ params }: PageProps) {
  const { toolSlug } = await params;
  return <ToolPageRenderer slug={toolSlug} />;
}
