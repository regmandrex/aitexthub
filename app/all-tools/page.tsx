import type { Metadata } from 'next';
import { getAllTools } from '@/lib/tools/registry';
import { buildMeta } from '@/lib/seo-meta';
import SearchableToolsList from '@/components/SearchableToolsList';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  return buildMeta({
    title: t('AllTools.seoTitle'),
    description: t('AllTools.seoDescription'),
    urlPath: '/all-tools',
    locale,
  });
}

export default async function AllToolsPage() {
  const tools = getAllTools();
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);

  return (
    <div className="bg-[#f7f9ff] min-h-screen">
      <div className="mx-auto w-full max-w-4xl px-4 py-10 space-y-10">
        <section className="space-y-3 text-center">
          <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">{t('AllTools.title')}</h1>
          <p className="max-w-2xl mx-auto text-sm text-slate-700 md:text-[15px]">
            {t('AllTools.subtitle')}
          </p>
        </section>

        <SearchableToolsList tools={tools} />
      </div>
    </div>
  );
}









































