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
  const modeTools = currentTool.mode ? tools.filter((tool) => tool.slug !== currentSlug && tool.mode === currentTool.mode) : [];

  const limitedModelTools = modelTools.slice(0, maxItems);
  
  // Only show mode tools if there are no model tools, or if mode tools are significantly different
  // This prevents showing redundant "Other Text Cleaner Tools" when "Other ChatGPT Tools" is already shown
  const shouldShowModeTools = 
    showModeTools && 
    currentTool.mode !== 'watermark-cleaner' &&
    limitedModelTools.length === 0; // Only show mode tools if no model tools exist
  
  const limitedModeTools = shouldShowModeTools ? modeTools.slice(0, maxItems) : [];

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













































