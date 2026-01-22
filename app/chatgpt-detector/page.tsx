import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ChatGPTDetectorTool } from '@/components/tools/ChatGPTDetectorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

const toolSlug = 'chatgpt-detector';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'ChatGPT Detector FAQs' },
  { key: 'faq2', category: 'ChatGPT Detector FAQs' },
  { key: 'faq3', category: 'ChatGPT Detector FAQs' },
  { key: 'faq4', category: 'ChatGPT Detector FAQs' },
  { key: 'faq5', category: 'ChatGPT Detector FAQs' },
  { key: 'faq6', category: 'ChatGPT Detector FAQs' },
  { key: 'faq7', category: 'ChatGPT Detector FAQs' },
  { key: 'faq8', category: 'ChatGPT Detector FAQs' },
  { key: 'faq9', category: 'ChatGPT Detector FAQs' },
  { key: 'faq10', category: 'ChatGPT Detector FAQs' },
  { key: 'faq11', category: 'ChatGPT Detector FAQs' },
  { key: 'faq12', category: 'ChatGPT Detector FAQs' },
  { key: 'faq13', category: 'ChatGPT Detector FAQs' },
  { key: 'faq14', category: 'ChatGPT Detector FAQs' },
  { key: 'faq15', category: 'ChatGPT Detector FAQs' },
  { key: 'faq16', category: 'ChatGPT Detector FAQs' },
  { key: 'faq17', category: 'ChatGPT Detector FAQs' },
  { key: 'faq18', category: 'ChatGPT Detector FAQs' },
  { key: 'faq19', category: 'ChatGPT Detector FAQs' },
  { key: 'faq20', category: 'ChatGPT Detector FAQs' },
  { key: 'faq21', category: 'ChatGPT Detector FAQs' },
  { key: 'faq22', category: 'ChatGPT Detector FAQs' },
  { key: 'faq23', category: 'ChatGPT Detector FAQs' },
  { key: 'faq24', category: 'ChatGPT Detector FAQs' },
  { key: 'faq25', category: 'ChatGPT Detector FAQs' },
];

// Helper function to create writeUp content using translations
function createWriteUp(t: (key: string) => string) {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>{t('ChatGPTDetectorPage.writeUp.title')}</h2>
      <p>{t('ChatGPTDetectorPage.writeUp.introP1')}</p>
      <p>{t('ChatGPTDetectorPage.writeUp.introP2')}</p>
      <p>{t('ChatGPTDetectorPage.writeUp.introP3')}</p>

      <h2>{t('ChatGPTDetectorPage.writeUp.howItWorksTitle')}</h2>
      <p>{t('ChatGPTDetectorPage.writeUp.howItWorksP1')}</p>

      <h3>{t('ChatGPTDetectorPage.writeUp.statisticalPatternsTitle')}</h3>
      <p>{t('ChatGPTDetectorPage.writeUp.statisticalPatternsP1')}</p>
      <p>{t('ChatGPTDetectorPage.writeUp.statisticalPatternsP2')}</p>

      <h3>{t('ChatGPTDetectorPage.writeUp.perplexityBurstinessTitle')}</h3>
      <p>{t('ChatGPTDetectorPage.writeUp.perplexityBurstinessP1')}</p>
      <p>{t('ChatGPTDetectorPage.writeUp.perplexityBurstinessP2')}</p>

      <h3>{t('ChatGPTDetectorPage.writeUp.limitationsTitle')}</h3>
      <p>{t('ChatGPTDetectorPage.writeUp.limitationsP1')}</p>
      <p>{t('ChatGPTDetectorPage.writeUp.limitationsP2')}</p>

      <h2>{t('ChatGPTDetectorPage.writeUp.whyUseTitle')}</h2>
      <p>{t('ChatGPTDetectorPage.writeUp.whyUseP1')}</p>

      <h3>{t('ChatGPTDetectorPage.writeUp.academicTitle')}</h3>
      <p>{t('ChatGPTDetectorPage.writeUp.academicP1')}</p>
      <p>{t('ChatGPTDetectorPage.writeUp.academicP2')}</p>

      <h3>{t('ChatGPTDetectorPage.writeUp.publishingTitle')}</h3>
      <p>{t('ChatGPTDetectorPage.writeUp.publishingP1')}</p>
      <p>{t('ChatGPTDetectorPage.writeUp.publishingP2')}</p>

      <h3>{t('ChatGPTDetectorPage.writeUp.businessTitle')}</h3>
      <p>{t('ChatGPTDetectorPage.writeUp.businessP1')}</p>
      <p>{t('ChatGPTDetectorPage.writeUp.businessP2')}</p>

      <h2>{t('ChatGPTDetectorPage.writeUp.howToUseTitle')}</h2>
      <p>{t('ChatGPTDetectorPage.writeUp.howToUseP1')}</p>

      <h3>{t('ChatGPTDetectorPage.writeUp.textLengthTitle')}</h3>
      <p>{t('ChatGPTDetectorPage.writeUp.textLengthP1')}</p>
      <p>{t('ChatGPTDetectorPage.writeUp.textLengthP2')}</p>

      <h3>{t('ChatGPTDetectorPage.writeUp.interpretingTitle')}</h3>
      <p>{t('ChatGPTDetectorPage.writeUp.interpretingP1')}</p>
      <p>{t('ChatGPTDetectorPage.writeUp.interpretingP2')}</p>

      <h3>{t('ChatGPTDetectorPage.writeUp.bestPracticesTitle')}</h3>
      <p>{t('ChatGPTDetectorPage.writeUp.bestPracticesP1')}</p>
      <p>{t('ChatGPTDetectorPage.writeUp.bestPracticesP2')}</p>

      <h2>{t('ChatGPTDetectorPage.writeUp.evolutionTitle')}</h2>
      <p>{t('ChatGPTDetectorPage.writeUp.evolutionP1')}</p>

      <h3>{t('ChatGPTDetectorPage.writeUp.armsRaceTitle')}</h3>
      <p>{t('ChatGPTDetectorPage.writeUp.armsRaceP1')}</p>
      <p>{t('ChatGPTDetectorPage.writeUp.armsRaceP2')}</p>

      <h3>{t('ChatGPTDetectorPage.writeUp.futureTitle')}</h3>
      <p>{t('ChatGPTDetectorPage.writeUp.futureP1')}</p>
      <p>{t('ChatGPTDetectorPage.writeUp.futureP2')}</p>

      <h2>{t('ChatGPTDetectorPage.writeUp.ethicalTitle')}</h2>
      <p>{t('ChatGPTDetectorPage.writeUp.ethicalP1')}</p>

      <h3>{t('ChatGPTDetectorPage.writeUp.falsePositivesTitle')}</h3>
      <p>{t('ChatGPTDetectorPage.writeUp.falsePositivesP1')}</p>
      <p>{t('ChatGPTDetectorPage.writeUp.falsePositivesP2')}</p>

      <h3>{t('ChatGPTDetectorPage.writeUp.privacyTitle')}</h3>
      <p>{t('ChatGPTDetectorPage.writeUp.privacyP1')}</p>
      <p>{t('ChatGPTDetectorPage.writeUp.privacyP2')}</p>

      <h2>{t('ChatGPTDetectorPage.writeUp.comparingTitle')}</h2>
      <p>{t('ChatGPTDetectorPage.writeUp.comparingP1')}</p>

      <h3>{t('ChatGPTDetectorPage.writeUp.freeVsPaidTitle')}</h3>
      <p>{t('ChatGPTDetectorPage.writeUp.freeVsPaidP1')}</p>
      <p>{t('ChatGPTDetectorPage.writeUp.freeVsPaidP2')}</p>

      <h3>{t('ChatGPTDetectorPage.writeUp.accuracyTitle')}</h3>
      <p>{t('ChatGPTDetectorPage.writeUp.accuracyP1')}</p>
      <p>{t('ChatGPTDetectorPage.writeUp.accuracyP2')}</p>

      <h2>{t('ChatGPTDetectorPage.writeUp.technicalTitle')}</h2>
      <p>{t('ChatGPTDetectorPage.writeUp.technicalP1')}</p>

      <h3>{t('ChatGPTDetectorPage.writeUp.vocabularyTitle')}</h3>
      <p>{t('ChatGPTDetectorPage.writeUp.vocabularyP1')}</p>

      <h3>{t('ChatGPTDetectorPage.writeUp.sentenceStructureTitle')}</h3>
      <p>{t('ChatGPTDetectorPage.writeUp.sentenceStructureP1')}</p>

      <h3>{t('ChatGPTDetectorPage.writeUp.coherenceTitle')}</h3>
      <p>{t('ChatGPTDetectorPage.writeUp.coherenceP1')}</p>

      <h3>{t('ChatGPTDetectorPage.writeUp.formattingTitle')}</h3>
      <p>{t('ChatGPTDetectorPage.writeUp.formattingP1')}</p>
    </div>
  </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return {};

  const toolKey = toolSlug;
  const title = t(`Tools.${toolKey}.title`) !== `Tools.${toolKey}.title` 
    ? t(`Tools.${toolKey}.title`) 
    : toolData.title;
  const description = t(`Tools.${toolKey}.description`) !== `Tools.${toolKey}.description`
    ? t(`Tools.${toolKey}.description`)
    : toolData.shortDescription;

  return buildToolMeta({
    title,
    description,
    seoTitle: 'ChatGPT Detector - Free AI Content Detection Tool Online',
    urlPath: `/${toolSlug}`,
    locale,
  });
}

export default async function ChatGPTDetectorPage() {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const toolKey = toolSlug;
  const title = t(`Tools.${toolKey}.title`) !== `Tools.${toolKey}.title` 
    ? t(`Tools.${toolKey}.title`) 
    : toolData.title;
  const description = t(`Tools.${toolKey}.description`) !== `Tools.${toolKey}.description`
    ? t(`Tools.${toolKey}.description`)
    : toolData.shortDescription;

  const url = `${siteUrl}/${toolSlug}/`;
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: title,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    description: description,
    url,
  };

  // Create translated FAQs from translation keys
  const pageFaqs: FaqItem[] = faqKeys.map(({ key, category }) => ({
    category: t(`ChatGPTDetectorPage.faqs.${key}.category`) || category,
    question: t(`ChatGPTDetectorPage.faqs.${key}.question`),
    answer: t(`ChatGPTDetectorPage.faqs.${key}.answer`),
  }));

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ChatGPTDetectorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp(t)}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">{t('ChatGPTDetectorPage.faqHeading')}</h2>
          <p className="text-slate-700">
            {t('ChatGPTDetectorPage.faqIntro')}
          </p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
