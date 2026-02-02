import Link from 'next/link';
import { buildMeta } from '@/lib/seo-meta';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

export async function generateMetadata() {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  
  return buildMeta({
    title: `About GPTCLEANUP AI - Free AI Text Cleaning Tools`,
    description: 'Learn about GPTCLEANUP AI and how we help tidy AI text from ChatGPT, Gemini, and more.',
    urlPath: '/about',
    locale,
  });
}

export default async function AboutPage() {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);

  return (
    <article className="prose max-w-none prose-slate">
      <h1>{t('AboutPage.title')}</h1>
      <p>{t('AboutPage.p1')}</p>
      <p>{t('AboutPage.p2')}</p>
      <p>
        {t('AboutPage.p3')} <Link href="/">{t('AboutPage.chatgptTextCleaner')}</Link> {t('AboutPage.or')}{' '}
        <Link href="/chatgpt-space-remover">{t('AboutPage.spaceRemover')}</Link> {t('AboutPage.ifSpacing')}
      </p>
    </article>
  );
}
