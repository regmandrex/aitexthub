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

export function RelatedTools({ currentSlug, maxItems = 8, showModeTools = true }: RelatedToolsProps) {
  const tools = getAllTools();
  const currentTool = getToolBySlug(currentSlug);

  if (!currentTool) {
    return null;
  }

  const modelTools = currentTool.modelSlug
    ? tools.filter((tool) => tool.slug !== currentSlug && tool.modelSlug === currentTool.modelSlug)
    : [];
  const modeTools = currentTool.mode ? tools.filter((tool) => tool.slug !== currentSlug && tool.mode === currentTool.mode) : [];

  const limitedModelTools = modelTools.slice(0, maxItems);
  const limitedModeTools =
    showModeTools && currentTool.mode !== 'watermark-cleaner' ? modeTools.slice(0, maxItems) : [];

  if (limitedModelTools.length === 0 && limitedModeTools.length === 0) {
    return null;
  }

  const modeHeading =
    currentTool.mode === 'watermark-cleaner' ? 'Other Watermark Tools' : `Other ${currentTool.modeLabel ?? 'Tool'} Tools`;

  return (
    <div className="mt-10 space-y-10 text-center">
      {limitedModelTools.length > 0 ? (
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Other {currentTool.model ?? 'Model'} Tools</h2>
          </div>
          <div className="grid gap-4 md:gap-5 md:grid-cols-2">
            {limitedModelTools.map((tool) => (
              <ToolCard key={tool.slug} title={tool.title} description={tool.shortDescription} href={buildToolHref(tool.slug)} />
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
              <ToolCard key={tool.slug} title={tool.title} description={tool.shortDescription} href={buildToolHref(tool.slug)} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}






















