import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ToolPageRenderer } from '@/components/tool/ToolPageRenderer';
import { buildToolMeta } from '@/lib/seo-meta';
import { getAllTools, getToolBySlug } from '@/lib/tools/registry';

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Only pre-generate tools with full UI components at build time.
// All other tools are served on-demand via ISR (dynamicParams = true + revalidate = 86400).
// This keeps build memory usage manageable.
const PRERENDER_SLUGS = new Set([
  'qr-code-reader',
  'jwt-decoder',
  'uuid-generator',
  'md5-generator',
  'bcrypt-generator',
  'hmac-generator',
  'totp-generator',
  'json-to-yaml',
  'yaml-to-json',
  'yaml-formatter',
  'sql-formatter',
  'markdown-to-html',
  'text-diff',
  'regex-tester',
  'slug-generator',
  'word-frequency-counter',
  'sort-lines',
  'hex-to-rgb',
  'url-shortener',
  'image-to-base64',
  'image-metadata-viewer',
  'image-compare',
  'svg-viewer',
  'svg-optimizer',
  'placeholder-image-generator',
  'favicon-generator',
  'ascii-art-generator',
  'border-radius-generator',
  'box-shadow-generator',
  'css-flexbox-generator',
  'css-grid-generator',
  'html-table-generator',
  'open-graph-generator',
  'robots-txt-generator',
  'cron-generator',
  // existing tools with dedicated UI components
  'case-converter',
  'em-dash-remover',
  'find-and-replace',
  'invisible-character-detector',
  'remove-duplicate-lines',
  'remove-line-breaks',
  'remove-whitespace',
  'space-remover',
  'strip-html',
  'text-cleaner',
  'url-encoder-decoder',
  'watermark-detector',
  'word-counter',
  'zero-width-space-remover',
  'line-spacing',
  'morse-generator',
  'combination-generator',
  'line-combination-generator',
  'permutation-generator',
  'ai-code-cleaner',
  'ai-code-fixer',
  'chatgpt-detector',
  'chatgpt-humanizer',
  'chatgpt-gptzero-checker',
  'chatgpt-turnitin-checker',
  'chatgpt-originality-checker',
  'chatgpt-copyleaks-checker',
  'chatgpt-paraphraser',
  'chatgpt-sentence-rewriter',
  'chatgpt-paragraph-rewriter',
  'chatgpt-essay-rewriter',
  'chatgpt-grammar-checker',
  'chatgpt-readability-checker',
  'chatgpt-tone-analyzer',
  'chatgpt-style-analyzer',
  'chatgpt-passive-voice-fixer',
  'chatgpt-essay-checker',
  'chatgpt-thesis-checker',
  'chatgpt-research-paper-checker',
  'chatgpt-assignment-checker',
  'chatgpt-academic-humanizer',
  'chatgpt-blog-post-validator',
  'chatgpt-product-description-improver',
  'chatgpt-meta-description-generator',
  'chatgpt-title-tag-generator',
  'chatgpt-alt-text-generator',
  'chatgpt-email-humanizer',
  'chatgpt-cover-letter-humanizer',
  'chatgpt-resume-humanizer',
  'chatgpt-linkedin-rewriter',
  'chatgpt-press-release-polisher',
  'chatgpt-watermark-detector',
  'chatgpt-line-spacing',
  'chatgpt-watermark-remover',
  'chatgpt-space-remover',
]);

export async function generateStaticParams() {
  return PRIORITY_SLUGS.map((slug) => ({ slug }));
}

// Still allow dynamic params for any slugs not covered by getAllTools
export const dynamicParams = true;

// Cache at edge for 7 days — content changes only on deploy, not daily
export const revalidate = 2592000;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};

  return buildToolMeta({
    title: tool.title,
    description: tool.shortDescription,
    seoTitle: tool.seoTitle,
    urlPath: `/${tool.slug}`,
  });
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return notFound();

  return <ToolPageRenderer slug={slug} />;
}

