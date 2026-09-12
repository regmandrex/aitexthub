import type { Metadata } from 'next';
import { getAllTools } from '@/lib/tools/registry';
import { buildMeta } from '@/lib/seo-meta';
import SearchableToolsList from '@/components/SearchableToolsList';


export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({
    title: 'All AI Text Tools - Free Content & Writing Utilities',
    description: 'Browse the AI Text Cleanup Tools collection - AI text cleanup, watermark removal, formatting tools, and more. Find the right utility fast.',
    urlPath: '/ai-tools',
  });
}

export default async function AIToolsPage() {
  const tools = getAllTools();

  return (
    <div className="bg-[#f7f9ff] min-h-screen">
      <div className="mx-auto w-full max-w-4xl px-4 py-5 space-y-10 sm:py-8 md:py-10">
        <section className="space-y-2 text-center md:space-y-3">
          <h1 className="text-xl font-semibold text-slate-900 sm:text-2xl md:text-3xl">All Tools</h1>
          <p className="max-w-2xl mx-auto text-xs text-slate-700 sm:text-sm md:text-[15px]">
            Browse the AI Text Cleanup Tools collection, grouped by category so you can find the right utility fast.
          </p>
        </section>

        <SearchableToolsList tools={tools} />
      </div>
    </div>
  );
}

