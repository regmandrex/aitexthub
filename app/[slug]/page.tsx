import type { Metadata } from 'next';
import { ToolPageRenderer } from '@/components/tool/ToolPageRenderer';
import { buildToolMeta } from '@/lib/seo-meta';
import { getAllTools, getToolBySlug } from '@/lib/tools/registry';
import { getToolPageBySlug } from '@/lib/seo/registry';

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllTools().map((tool) => ({ slug: tool.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const tool = getToolBySlug(params.slug);
  if (!tool) return {};

  return buildToolMeta({
    title: tool.title,
    description: tool.shortDescription,
    seoTitle: tool.seoTitle,
    urlPath: `/${tool.slug}`,
  });
}

export default function ToolPage({ params }: PageProps) {
  return <ToolPageRenderer slug={params.slug} />;
}
