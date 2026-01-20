import type { Metadata } from 'next';
import { ToolPageRenderer } from '@/components/tool/ToolPageRenderer';
import { buildToolMeta } from '@/lib/seo-meta';
import { getToolBySlug } from '@/lib/tools/registry';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';
import { hasToolTranslation } from '@/lib/tool-translations';
import { DEFAULT_LOCALE } from '@/lib/i18n';
import { redirect } from 'next/navigation';

const toolSlug = 'chatgpt-sentence-rewriter';

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = t(`Tools.${toolKey}.title`) !== `Tools.${toolKey}.title` 
    ? t(`Tools.${toolKey}.title`) 
    : tool?.title ?? 'ChatGPT Sentence rewriter';
  const description = t(`Tools.${toolKey}.description`) !== `Tools.${toolKey}.description`
    ? t(`Tools.${toolKey}.description`)
    : tool?.shortDescription ?? 'ChatGPT tool for sentence-rewriter';
  const seoTitle = tool?.seoTitle ? (t(`Tools.${toolKey}.seoTitle`) !== `Tools.${toolKey}.seoTitle` ? t(`Tools.${toolKey}.seoTitle`) : tool.seoTitle) : undefined;
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
    locale,
  });
}

export default async function ToolPage() {
  const tool = getToolBySlug(toolSlug);
  if (!tool) return null;

  const { locale } = await getServerLocale();
  
  if (locale !== DEFAULT_LOCALE) {
    const hasTranslation = await hasToolTranslation(tool.slug, locale);
    if (!hasTranslation) {
      redirect(`/${tool.slug}`);
    }
  }

  return <ToolPageRenderer slug={toolSlug} />;
}
