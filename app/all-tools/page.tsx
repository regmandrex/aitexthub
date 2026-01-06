import type { Metadata } from 'next';
import type { Tool } from '@/lib/tools/registry';
import ToolCard from '@/components/ToolCard';
import { getAllTools } from '@/lib/tools/registry';
import { buildMeta } from '@/lib/seo-meta';

const CATEGORY_ORDER: Array<string> = [
  'ai-cleanup',
  'text',
  'encoding',
  'data-format',
  'number-systems',
  'color-css',
  'generator',
];

const CATEGORY_CONFIG: Record<string, { title: string; description: string }> = {
  'ai-cleanup': {
    title: 'AI Cleanup Tools',
    description: 'Watermark detectors, cleaners, and model-specific space removers for AI-generated text.',
  },
  text: {
    title: 'Text Tools',
    description: 'General cleanup and formatting helpers for tightening up your writing.',
  },
  encoding: {
    title: 'Encoding & Decoding',
    description: 'Encode, decode, or translate text for safe transport and display.',
  },
  'data-format': {
    title: 'Data Format Converters',
    description: 'Flip between JSON, XML, Markdown, and HTML representations.',
  },
  'number-systems': {
    title: 'Number Systems & Logic',
    description: 'Base conversions, XOR, and related helpers for precise numeric formatting.',
  },
  'color-css': {
    title: 'Color & CSS Converters',
    description: 'HEX, RGB, rem, and px converters for styling and design work.',
  },
  generator: {
    title: 'Generators',
    description: 'Random or playful generators for hex data and nicknames.',
  },
};

export const metadata: Metadata = buildMeta({
  title: 'All Tools | GPT CLEAN UP Tools',
  description: 'Browse all AI text cleanup and formatting tools available on GPT CLEAN UP Tools.',
  urlPath: '/all-tools',
});

export default function AllToolsPage() {
  const tools = getAllTools();
  const groupedTools = tools.reduce<Record<string, Tool[]>>((acc, tool) => {
    const bucket = tool.category ?? 'text';
    if (!acc[bucket]) {
      acc[bucket] = [];
    }
    acc[bucket].push(tool);
    return acc;
  }, {});

  return (
    <div className="bg-[#f7f9ff] min-h-screen">
      <div className="mx-auto w-full max-w-4xl px-4 py-10 space-y-10">
        <section className="space-y-3 text-center">
          <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">All Tools</h1>
          <p className="max-w-2xl mx-auto text-sm text-slate-700 md:text-[15px]">
            Browse the GPT CLEAN UP Tools collection, grouped by category so you can find the right utility fast.
          </p>
        </section>

        {CATEGORY_ORDER.map((category) => {
          const items = groupedTools[category];
          if (!items?.length) {
            return null;
          }
          const config = CATEGORY_CONFIG[category] ?? {
            title: 'Other Tools',
            description: '',
          };

          return (
            <section key={category} className="space-y-4">
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{config.title}</p>
                {config.description ? <p className="text-sm text-slate-600">{config.description}</p> : null}
              </div>
              <div className="grid gap-4 md:gap-5 md:grid-cols-2">
                {items.map((tool) => (
                  <ToolCard
                    key={tool.slug}
                    title={tool.title}
                    description={tool.shortDescription}
                    href={tool.slug === '' ? '/' : `/${tool.slug}`}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}









































