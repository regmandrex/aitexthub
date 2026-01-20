import type { Metadata } from 'next';
import { redirect, notFound } from 'next/navigation';
import { ToolPageRenderer } from '@/components/tool/ToolPageRenderer';
import { buildToolMeta } from '@/lib/seo-meta';
import { getAllTools, getToolBySlug } from '@/lib/tools/registry';
import { getToolPageBySlug } from '@/lib/seo/registry';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';
import { hasToolTranslation } from '@/lib/tool-translations';
import { DEFAULT_LOCALE } from '@/lib/i18n';

type PageProps = {
  params: { slug: string };
};

// Generate static params for all tools at build time
export function generateStaticParams() {
  return getAllTools().map((tool) => ({ slug: tool.slug }));
}

// Enable dynamic route handling for tools not in static params
export const dynamicParams = true;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const tool = getToolBySlug(params.slug);
  if (!tool) return {};

  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  
  const toolKey = tool.slug === '' ? 'home' : tool.slug;
  const title = t(`Tools.${toolKey}.title`) !== `Tools.${toolKey}.title` 
    ? t(`Tools.${toolKey}.title`) 
    : tool.title;
  const description = t(`Tools.${toolKey}.description`) !== `Tools.${toolKey}.description`
    ? t(`Tools.${toolKey}.description`)
    : tool.shortDescription;
  const seoTitle = tool.seoTitle 
    ? (t(`Tools.${toolKey}.seoTitle`) !== `Tools.${toolKey}.seoTitle`
        ? t(`Tools.${toolKey}.seoTitle`)
        : tool.seoTitle)
    : undefined;

  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${tool.slug}`,
    locale,
  });
}

export default async function ToolPage({ params }: PageProps) {
  const tool = getToolBySlug(params.slug);
  if (!tool) return notFound();

  const { locale } = await getServerLocale();
  
  // If not English and tool doesn't have translations for this locale, redirect to English version
  if (locale !== DEFAULT_LOCALE) {
    const hasTranslation = await hasToolTranslation(tool.slug, locale);
    if (!hasTranslation) {
      redirect(`/${tool.slug}`);
    }
  }

  return <ToolPageRenderer slug={params.slug} />;
}
