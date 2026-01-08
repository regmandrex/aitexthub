import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { CaseConverterTool } from '@/components/tools/CaseConverterTool';
import { EmDashRemoverTool } from '@/components/tools/EmDashRemoverTool';
import { FindReplaceTool } from '@/components/tools/FindReplaceTool';
import { InvisibleCharacterDetectorTool } from '@/components/tools/InvisibleCharacterDetectorTool';
import { RemoveDuplicateLinesTool } from '@/components/tools/RemoveDuplicateLinesTool';
import { RemoveLineBreaksTool } from '@/components/tools/RemoveLineBreaksTool';
import { SpaceRemoverTool } from '@/components/tools/SpaceRemoverTool';
import { StripHtmlTool } from '@/components/tools/StripHtmlTool';
import { TextCleanerTool } from '@/components/tools/TextCleanerTool';
import { UrlEncoderDecoderTool } from '@/components/tools/UrlEncoderDecoderTool';
import { WatermarkDetectorTool } from '@/components/tools/WatermarkDetectorTool';
import { WordCounterTool } from '@/components/tools/WordCounterTool';
import { ZeroWidthSpaceRemoverTool } from '@/components/tools/ZeroWidthSpaceRemoverTool';
import { LineSpacingTool } from '@/components/tools/LineSpacingTool';
import { MorseCodeGeneratorTool } from '@/components/tools/MorseCodeGeneratorTool';
import { getToolBySlug } from '@/lib/tools/registry';

type ToolPageRendererProps = {
  slug: string;
};

const uiComponentMap = {
  'case-converter': CaseConverterTool,
  'em-dash-remover': EmDashRemoverTool,
  'find-and-replace': FindReplaceTool,
  'invisible-character-detector': InvisibleCharacterDetectorTool,
  'remove-duplicate-lines': RemoveDuplicateLinesTool,
  'remove-line-breaks': RemoveLineBreaksTool,
  'space-remover': SpaceRemoverTool,
  'strip-html': StripHtmlTool,
  'text-cleaner': TextCleanerTool,
  'url-encoder-decoder': UrlEncoderDecoderTool,
  'watermark-detector': WatermarkDetectorTool,
  'word-counter': WordCounterTool,
  'zero-width-space-remover': ZeroWidthSpaceRemoverTool,
  'line-spacing': LineSpacingTool,
  'morse-generator': MorseCodeGeneratorTool,
} as const;

export function ToolPageRenderer({ slug }: ToolPageRendererProps) {
  const tool = getToolBySlug(slug);
  if (!tool) return notFound();

  const UIComponent = uiComponentMap[tool.ui.kind];
  const disclaimers =
    tool.content?.disclaimers ?? [
      'This tool performs text cleanup/analysis only.',
      'Results are informational and not a guarantee.',
      'Use responsibly and follow platform/publisher policies.',
    ];

  const softwareJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.title,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    description: tool.shortDescription,
    url: `https://gptcleanuptools.com/${tool.slug}`,
  };

  return (
    <div className="bg-[#f7f9ff]">
      <JsonLd data={softwareJsonLd} />
      <ToolPageShell
        tool={tool}
        ui={<UIComponent />}
        related={<RelatedTools currentSlug={tool.slug} />}
      >
        {tool.content?.introMarkdown ? (
          <section className="prose prose-slate mt-10 max-w-4xl">
            {tool.content.introMarkdown.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </section>
        ) : null}

        {tool.content?.faq && tool.content.faq.length ? (
          <>
            <section className="mt-10 space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {tool.content.faq.map((item, idx) => (
                  <div key={idx} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                    <h3 className="text-base font-semibold text-slate-900">{item.q}</h3>
                    <p className="mt-2 text-sm text-slate-700">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
            <FaqJsonLd
              faqs={tool.content.faq.map((item) => ({
                category: 'General',
                question: item.q,
                answer: item.a,
              }))}
            />
          </>
        ) : null}

        <section className="mt-10 space-y-2">
          <h2 className="text-base font-semibold text-slate-900">Disclaimers</h2>
          <ul className="space-y-1 text-sm text-slate-700">
            {disclaimers.map((line, idx) => (
              <li key={idx}>&bull; {line}</li>
            ))}
          </ul>
        </section>
      </ToolPageShell>
    </div>
  );
}
