import type { Metadata } from 'next';
import ToolCard from '@/components/ToolCard';
import { getAllTools } from '@/lib/tools/registry';
import { buildMeta } from '@/lib/seo-meta';

export const metadata: Metadata = buildMeta({
  title: 'All Tools | GPT CLEAN UP Tools',
  description: 'Browse all AI text cleanup and formatting tools available on GPT CLEAN UP Tools.',
  urlPath: '/all-tools',
});

export default function AllToolsPage() {
  const tools = getAllTools();

  return (
    <div className="bg-[#f7f9ff] min-h-screen">
      <div className="mx-auto w-full max-w-4xl px-4 py-10">
        <section className="space-y-3 text-center mb-10">
          <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">All Tools</h1>
          <p className="max-w-2xl mx-auto text-sm text-slate-700 md:text-[15px]">
            Browse all available AI text cleanup and formatting tools.
          </p>
        </section>

        <section className="space-y-4">
          <div className="grid gap-4 md:gap-5 md:grid-cols-2">
            {tools.map((tool) => (
              <ToolCard
                key={tool.slug}
                title={tool.title}
                description={tool.shortDescription}
                href={tool.slug === '' ? '/' : `/${tool.slug}`}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}



















