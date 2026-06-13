'use client';

import ToolCard from '../ToolCard';
import { getAllTools, getToolBySlug } from '@/lib/tools/registry';

type RelatedToolsProps = {
  currentSlug: string;
  maxItems?: number;
  showModeTools?: boolean;
};

function buildToolHref(slug: string) {
  return slug === '' ? '/' : `/${slug}`;
}

/** Deterministic hash so the same (slug, seed) always gives the same order for rotation. */
function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  }
  return h;
}

/** Rotate generator (and other mode) tools so each page sees a different set; name generators and others all get listed. */
function rotateModeTools<T>(tools: T[], currentSlug: string, getSlug: (t: T) => string): T[] {
  if (tools.length <= 1) return tools;
  return [...tools].sort((a, b) => {
    const keyA = hashString(getSlug(a) + currentSlug);
    const keyB = hashString(getSlug(b) + currentSlug);
    return keyA - keyB;
  });
}

export function RelatedTools({
  currentSlug,
  maxItems = 8,
  showModeTools = true,
}: RelatedToolsProps) {
  const tools = getAllTools();
  const currentTool = getToolBySlug(currentSlug);

  if (!currentTool) {
    // Tool not found - this shouldn't happen, but return null to avoid errors
    console.warn(`RelatedTools: Tool not found for slug "${currentSlug}"`);
    return null;
  }

  const modelTools = currentTool.modelSlug
    ? tools.filter((tool) => tool.slug !== currentSlug && tool.modelSlug === currentTool.modelSlug)
    : [];
  const modeToolsRaw = currentTool.mode ? tools.filter((tool) => tool.slug !== currentSlug && tool.mode === currentTool.mode) : [];
  // Rotate so different tools (including name generators) appear in "Other Generator Tools" on each page
  const modeTools = rotateModeTools(modeToolsRaw, currentSlug, (t) => t.slug);

  const limitedModelTools = modelTools.slice(0, maxItems);

  // Only show mode tools if there are no model tools, or if mode tools are significantly different
  // This prevents showing redundant "Other Text Cleaner Tools" when "Other ChatGPT Tools" is already shown.
  // Exception: watermark-cleaner pages without a model family (e.g. image/video product
  // watermark removers) would otherwise show zero links and become orphaned, which hurts
  // internal linking / crawl signals — so fall back to mode siblings for them too.
  const wouldBeOrphan = limitedModelTools.length === 0;
  const shouldShowModeTools =
    showModeTools &&
    wouldBeOrphan &&
    (currentTool.mode !== 'watermark-cleaner' || modeToolsRaw.length > 0);

  // Show more generator tools when in generator mode so name generators and others all get visibility
  const modeMax = currentTool.mode === 'generator' ? Math.max(maxItems, 12) : maxItems;
  const limitedModeTools = shouldShowModeTools ? modeTools.slice(0, modeMax) : [];

  // Return nothing if we don't have related tools to show
  if (limitedModelTools.length === 0 && limitedModeTools.length === 0) {
    return null;
  }

  const modelLabel = currentTool.model ?? 'AI';
  const modeLabel = currentTool.modeLabel ?? 'Tool';
  const modeHeading =
    currentTool.mode === 'watermark-cleaner'
      ? 'Other Watermark Tools'
      : `Other ${modeLabel} Tools`;
  const modelHeading = `Other ${modelLabel} Tools`;
  const resolveToolText = (tool: { slug: string; title: string; shortDescription: string }, field: 'title' | 'description') => {
    return field === 'title' ? tool.title : tool.shortDescription;
  };

  return (
    <div className="mt-10 space-y-10 text-center">
      {limitedModelTools.length > 0 ? (
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">{modelHeading}</h2>
          </div>
          <div className="grid gap-4 md:gap-5 md:grid-cols-2">
            {limitedModelTools.map((tool) => (
              <ToolCard
                key={tool.slug}
                title={resolveToolText(tool, 'title')}
                description={resolveToolText(tool, 'description')}
                href={buildToolHref(tool.slug)}
                ctaLabel="Open Tool →"
              />
            ))}
          </div>
        </section>
      ) : null}

      {limitedModeTools.length > 0 ? (
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">{modeHeading}</h2>
          </div>
          <div className="grid gap-4 md:gap-5 md:grid-cols-2">
            {limitedModeTools.map((tool) => (
              <ToolCard
                key={tool.slug}
                title={resolveToolText(tool, 'title')}
                description={resolveToolText(tool, 'description')}
                href={buildToolHref(tool.slug)}
                ctaLabel="Open Tool →"
              />
            ))}
          </div>
        </section>
      ) : null}

    </div>
  );
}













































