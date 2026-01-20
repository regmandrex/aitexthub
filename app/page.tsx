import Link from 'next/link';
import FAQSection from '../components/FAQSection';
import FaqJsonLd from '../components/FaqJsonLd';
import { faqItems } from '../components/faqData';
import ToolWorkbench from '../components/ToolWorkbench';
import { buildMeta } from '@/lib/seo-meta';
import { JsonLd } from '../components/JsonLd';
import { webPageSchema } from '../lib/schema/webpage';
import { siteUrl } from '../lib/schema/site';
import { RelatedTools } from '../components/tool/RelatedTools';
import AdSenseSlot from '../components/ads/AdSenseSlot';
import BelowToolAd from '../components/ads/BelowToolAd';
import { getServerLocale } from '../lib/server-i18n';
import { createServerT } from '../lib/server-t';

function RailAd({ side }: { side: 'left' | 'right' }) {
  const sideClass = side === 'left' ? 'left-4' : 'right-4';

  return (
    <div className={`hidden lg:block fixed top-[220px] ${sideClass} z-20`}>
      <div className="w-[180px] min-h-[260px]">
        <AdSenseSlot className="w-full" />
      </div>
    </div>
  );
}

export async function generateMetadata() {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  
  // Use Tools.home for title/description if available, otherwise fall back to HomePage keys
  const toolKey = 'home';
  const baseTitle = t(`Tools.${toolKey}.title`) !== `Tools.${toolKey}.title` 
    ? t(`Tools.${toolKey}.title`)
    : t('HomePage.seoName');
  const description = t(`Tools.${toolKey}.description`) !== `Tools.${toolKey}.description`
    ? t(`Tools.${toolKey}.description`)
    : t('HomePage.seoDescription');
  
  // Build full title with localized subtitle
  const subtitleMap: Record<string, string> = {
    'en': 'Remove Hidden Characters & Fix AI Spacing',
    'es': 'Eliminar caracteres ocultos y corregir espaciado de IA',
    'fr': 'Supprimer les caractères cachés et corriger l\'espacement IA',
    'zh-cn': '移除隐藏字符并修复 AI 间距',
    'ko': '숨겨진 문자 제거 및 AI 간격 수정'
  };
  const subtitle = subtitleMap[locale] || subtitleMap['en'];
  const fullTitle = `${baseTitle} - ${subtitle} | GPT CLEAN UP`;
  
  return buildMeta({
    title: fullTitle,
    description,
    urlPath: '/',
    locale,
  });
}

export default async function HomePage() {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);

  return (
    <div className="relative min-h-screen bg-[#f7f9ff]">
      <JsonLd
        data={webPageSchema({
          name: t('HomePage.seoName'),
          url: `${siteUrl}/`,
          description: t('HomePage.seoDescription'),
        })}
      />
      <RailAd side="right" />

      <div className="mx-auto w-full max-w-4xl px-4 py-10">
        <section className="space-y-3 text-center">
          <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">{t('HomePage.heroTitle')}</h1>
          <p className="max-w-2xl mx-auto text-sm text-slate-700 md:text-[15px]">
            {t('HomePage.heroSubtitle')}
          </p>
        </section>

        <section className="relative w-full mt-6">
          <div className="w-full max-w-none rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
            <ToolWorkbench
              processor="chatgptTextCleaner"
              primaryLabel={t('HomePage.cleanPrimary')}
              inputLabel={t('HomePage.cleanInputLabel')}
              outputLabel={t('HomePage.cleanOutputLabel')}
              inputPlaceholder={t('HomePage.cleanInputPlaceholder')}
              outputPlaceholder={t('HomePage.cleanOutputPlaceholder')}
            />
          </div>
        </section>

        <BelowToolAd />

        <div id="tools">
          <RelatedTools currentSlug="" showModeTools={false} />
        </div>

        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 space-y-4 mt-10">
          <h2 className="text-2xl font-semibold text-slate-900">{t('HomePage.mainTitle')}</h2>
          <h3 className="text-xl font-semibold text-slate-900">{t('HomePage.aboutTitle')}</h3>
          <p>{t('HomePage.aboutP1')}</p>
          <p>{t('HomePage.aboutP2')}</p>
          <p>{t('HomePage.aboutP3')}</p>

          <h3 className="text-xl font-semibold text-slate-900">{t('HomePage.cleanerTitle')}</h3>
          <p>{t('HomePage.cleanerP1')}</p>
          <p>{t('HomePage.cleanerP2')}</p>
          <p>{t('HomePage.cleanerP3')}</p>

          <h3 className="text-xl font-semibold text-slate-900">{t('HomePage.watermarksTitle')}</h3>
          <p>{t('HomePage.watermarksP1')}</p>
          <p>{t('HomePage.watermarksP2')}</p>
          <p>{t('HomePage.watermarksP3')}</p>

          <h3 className="text-xl font-semibold text-slate-900">{t('HomePage.benefitsTitle')}</h3>
          <p>{t('HomePage.benefitsP1')}</p>
          <p>{t('HomePage.benefitsP2')}</p>
          <p>{t('HomePage.benefitsP3')}</p>

          <h3 className="text-xl font-semibold text-slate-900">{t('HomePage.useCasesTitle')}</h3>
          <p>{t('HomePage.useCases1')}</p>
          <p>{t('HomePage.useCases2')}</p>
          <p>{t('HomePage.useCases3')}</p>
          <p>{t('HomePage.useCases4')}</p>

          <h3 className="text-xl font-semibold text-slate-900">{t('HomePage.howToUseTitle')}</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-700">
            <li>{t('HomePage.howToUse1')}</li>
            <li>{t('HomePage.howToUse2')}</li>
            <li>{t('HomePage.howToUse3')}</li>
            <li>{t('HomePage.howToUse4')}</li>
            <li>{t('HomePage.howToUse5')}</li>
          </ol>

          <h3 className="text-xl font-semibold text-slate-900">{t('HomePage.privacyTitle')}</h3>
          <p>{t('HomePage.privacyP1')}</p>
          <p>{t('HomePage.privacyP2')}</p>
          <p>{t('HomePage.privacyP3')}</p>

          <h3 className="text-xl font-semibold text-slate-900">{t('HomePage.detectionTitle')}</h3>
          <p>{t('HomePage.detectionP1')}</p>
          <p>{t('HomePage.detectionP2')}</p>
          <p>{t('HomePage.detectionP3')}</p>

          <h3 className="text-xl font-semibold text-slate-900">{t('HomePage.bestPracticesTitle')}</h3>
          <p>{t('HomePage.bestPractices1')}</p>
          <p>{t('HomePage.bestPractices2')}</p>
          <p>{t('HomePage.bestPractices3')}</p>

          <h3 className="text-xl font-semibold text-slate-900">{t('HomePage.whyChooseTitle')}</h3>
          <p>{t('HomePage.whyChooseP1')}</p>
          <p>{t('HomePage.whyChooseP2')}</p>

          <h3 className="text-xl font-semibold text-slate-900">{t('HomePage.cleanInstantlyTitle')}</h3>
          <p>{t('HomePage.cleanInstantlyP')}</p>

          <h4 className="text-lg font-semibold text-slate-900">{t('HomePage.whyCleanTitle')}</h4>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>{t('HomePage.whyClean1')}</li>
            <li>{t('HomePage.whyClean2')}</li>
            <li>{t('HomePage.whyClean3')}</li>
          </ul>

          <h4 className="text-lg font-semibold text-slate-900">{t('HomePage.howToCleanTitle')}</h4>
          <ol className="list-decimal list-inside space-y-1 text-slate-700">
            <li>{t('HomePage.howToClean1')}</li>
            <li>{t('HomePage.howToClean2')}</li>
            <li>{t('HomePage.howToClean3')}</li>
            <li>{t('HomePage.howToClean4')}</li>
          </ol>

          <h4 className="text-lg font-semibold text-slate-900">{t('HomePage.whatWeFixTitle')}</h4>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>{t('HomePage.whatWeFix1')}</li>
            <li>{t('HomePage.whatWeFix2')}</li>
            <li>{t('HomePage.whatWeFix3')}</li>
            <li>{t('HomePage.whatWeFix4')}</li>
          </ul>

          <h4 className="text-lg font-semibold text-slate-900">{t('HomePage.beforeAfterTitle')}</h4>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-800">
              <p className="font-semibold">{t('HomePage.beforeLabel')}</p>
              <pre className="mt-2 whitespace-pre-wrap text-xs">
This  is   a   sample text with invisible spaces
and   extra   blank   lines.

              </pre>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-800">
              <p className="font-semibold">{t('HomePage.afterLabel')}</p>
              <pre className="mt-2 whitespace-pre-wrap text-xs">
This is a sample text with invisible spaces removed
and extra blank lines fixed.
              </pre>
            </div>
          </div>

          <h4 className="text-lg font-semibold text-slate-900">{t('HomePage.relatedToolsTitle')}</h4>
          <p>{t('HomePage.relatedToolsP')}</p>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li><strong>{t('HomePage.relatedTools1')}</strong></li>
            <li><strong>{t('HomePage.relatedTools2')}</strong></li>
          </ul>

          <h4 className="text-lg font-semibold text-slate-900">{t('HomePage.bestPracticesTextTitle')}</h4>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>{t('HomePage.bestPracticesText1')}</li>
            <li>{t('HomePage.bestPracticesText2')}</li>
            <li>{t('HomePage.bestPracticesText3')}</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-900">{t('HomePage.conclusionTitle')}</h3>
          <p>{t('HomePage.conclusionP')}</p>
        </section>

        <FAQSection items={faqItems} translationPrefix="FAQ.home" />

        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
          <h2 className="text-xl font-semibold text-slate-900">{t('HomePage.learnMoreTitle')}</h2>
          <p className="mt-2 text-sm text-slate-700">
            {t('HomePage.learnMoreText')}{' '}
            <Link href="/blog/why-chatgpt-text-looks-messy-and-how-to-fix-it" className="font-semibold">
              {t('HomePage.learnMoreLink1')}
            </Link>{' '}
            {t('HomePage.learnMoreAnd')}{' '}
            <Link href="/blog/chatgpt-formatting-fixer-for-word-and-docs" className="font-semibold">
              {t('HomePage.learnMoreLink2')}
            </Link>
            .
          </p>
        </section>
        <FaqJsonLd faqs={faqItems} />
      </div>
    </div>
  );
}
