import type { Metadata } from 'next';
import { getAllTools } from '@/lib/tools/registry';
import { buildMeta } from '@/lib/seo-meta';
import SearchableToolsList from '@/components/SearchableToolsList';

export const metadata: Metadata = buildMeta({
  title: 'All Tools | GPT CLEAN UP Tools',
  description: 'Browse all AI text cleanup and formatting tools available on GPT CLEAN UP Tools.',
  urlPath: '/all-tools',
});

export default function AllToolsPage() {
  const tools = getAllTools();

  return (
    <div className="bg-[#f7f9ff] min-h-screen">
      <div className="mx-auto w-full max-w-4xl px-4 py-10 space-y-10">
        <section className="space-y-3 text-center">
          <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">All Tools</h1>
          <p className="max-w-2xl mx-auto text-sm text-slate-700 md:text-[15px]">
            Browse the GPT CLEAN UP Tools collection, grouped by category so you can find the right utility fast.
          </p>
        </section>

        <SearchableToolsList tools={tools} />
      </div>
    </div>
  );
}









































