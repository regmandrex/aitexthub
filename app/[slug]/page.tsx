import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { SpaceRemoverTool } from '@/components/tools/SpaceRemoverTool';
import { TextCleanerTool } from '@/components/tools/TextCleanerTool';
import { WatermarkDetectorTool } from '@/components/tools/WatermarkDetectorTool';
import { getAllTools, getToolBySlug } from '@/lib/tools/registry';

type PageProps = {
  params: { slug: string };
};

const uiComponentMap = {
  'space-remover': SpaceRemoverTool,
  'text-cleaner': TextCleanerTool,
  'watermark-detector': WatermarkDetectorTool,
} as const;

export function generateStaticParams() {
  return getAllTools().map((tool) => ({ slug: tool.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const tool = getToolBySlug(params.slug);
  if (!tool) return {};

  return {
    title: `${tool.title} | GPT Clean Up Tools`,
    description: tool.shortDescription,
    alternates: {
      canonical: `https://gptcleanuptools.com/${tool.slug}`,
    },
    openGraph: {
      title: `${tool.title} | GPT Clean Up Tools`,
      description: tool.shortDescription,
      url: `https://gptcleanuptools.com/${tool.slug}`,
      siteName: 'GPT Clean Up Tools',
      type: 'website',
    },
  };
}

export default function ToolPage({ params }: PageProps) {
  const tool = getToolBySlug(params.slug);
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
        ui={<UIComponent modelName={tool.model ?? undefined} />}
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
        ) : null}

        <section className="mt-10 space-y-2">
          <h2 className="text-base font-semibold text-slate-900">Disclaimers</h2>
          <ul className="space-y-1 text-sm text-slate-700">
            {disclaimers.map((line, idx) => (
              <li key={idx}>• {line}</li>
            ))}
          </ul>
        </section>
      </ToolPageShell>
    </div>
  );
}
