import { buildMeta } from '@/lib/seo-meta';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

export async function generateMetadata() {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  return buildMeta({
    title: t('ContactPage.seoTitle'),
    description: t('ContactPage.seoDescription'),
    urlPath: '/contact',
    locale,
  });
}

export default async function ContactPage() {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  return (
    <div className="min-h-screen bg-[#f7f9ff]">
      <div className="mx-auto max-w-3xl px-4 py-16 space-y-8">
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-semibold text-slate-900">{t('ContactPage.title')}</h1>
          <p className="mt-3 text-slate-600">
            {t('ContactPage.subtitle')}
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">{t('ContactPage.howToReach')}</h2>
          <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50 p-6 text-lg font-semibold text-slate-900">
            <p>{t('ContactPage.emailLabel')}</p>
            <a href="mailto:support@gpthelpertools.com" className="text-brand-700 hover:underline">
              support@gpthelpertools.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

