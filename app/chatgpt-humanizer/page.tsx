import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ChatGPTHumanizerTool } from '@/components/tools/ChatGPTHumanizerTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

const toolSlug = 'chatgpt-humanizer';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq2', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq3', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq4', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq5', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq6', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq7', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq8', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq9', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq10', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq11', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq12', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq13', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq14', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq15', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq16', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq17', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq18', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq19', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq20', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq21', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq22', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq23', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq24', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq25', category: 'ChatGPT Humanizer FAQs' },
];
function createWriteUp(t: (key: string) => string) {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>{t('ChatGPTHumanizerPage.writeUp.title')}</h2>
      <p>{t('ChatGPTHumanizerPage.writeUp.introP1')}</p>
      <p>{t('ChatGPTHumanizerPage.writeUp.introP2')}</p>
      <p>{t('ChatGPTHumanizerPage.writeUp.introP3')}</p>

      <h2>{t('ChatGPTHumanizerPage.writeUp.patternsTitle')}</h2>
      <p>{t('ChatGPTHumanizerPage.writeUp.patternsP1')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.uniformityTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.uniformityP1')}</p>
      <p>{t('ChatGPTHumanizerPage.writeUp.uniformityP2')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.vocabularyTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.vocabularyP1')}</p>
      <p>{t('ChatGPTHumanizerPage.writeUp.vocabularyP2')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.transitionsTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.transitionsP1')}</p>
      <p>{t('ChatGPTHumanizerPage.writeUp.transitionsP2')}</p>

      <h2>{t('ChatGPTHumanizerPage.writeUp.howItWorksTitle')}</h2>
      <p>{t('ChatGPTHumanizerPage.writeUp.howItWorksP1')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.structuralTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.structuralP1')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.vocabAdjustTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.vocabAdjustP1')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.voiceTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.voiceP1')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.imperfectionTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.imperfectionP1')}</p>

      <h2>{t('ChatGPTHumanizerPage.writeUp.usingTitle')}</h2>
      <p>{t('ChatGPTHumanizerPage.writeUp.usingP1')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.inputTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.inputP1')}</p>
      <p>{t('ChatGPTHumanizerPage.writeUp.inputP2')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.reviewingTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.reviewingP1')}</p>
      <p>{t('ChatGPTHumanizerPage.writeUp.reviewingP2')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.iterativeTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.iterativeP1')}</p>
      <p>{t('ChatGPTHumanizerPage.writeUp.iterativeP2')}</p>

      <h2>{t('ChatGPTHumanizerPage.writeUp.detectionTitle')}</h2>
      <p>{t('ChatGPTHumanizerPage.writeUp.detectionP1')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.reductionTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.reductionP1')}</p>
      <p>{t('ChatGPTHumanizerPage.writeUp.reductionP2')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.ethicalTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.ethicalP1')}</p>
      <p>{t('ChatGPTHumanizerPage.writeUp.ethicalP2')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.valueTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.valueP1')}</p>

      <h2>{t('ChatGPTHumanizerPage.writeUp.applicationsTitle')}</h2>
      <p>{t('ChatGPTHumanizerPage.writeUp.applicationsP1')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.marketingTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.marketingP1')}</p>
      <p>{t('ChatGPTHumanizerPage.writeUp.marketingP2')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.professionalTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.professionalP1')}</p>
      <p>{t('ChatGPTHumanizerPage.writeUp.professionalP2')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.creativeTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.creativeP1')}</p>
      <p>{t('ChatGPTHumanizerPage.writeUp.creativeP2')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.educationalTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.educationalP1')}</p>
      <p>{t('ChatGPTHumanizerPage.writeUp.educationalP2')}</p>

      <h2>{t('ChatGPTHumanizerPage.writeUp.bestPracticesTitle')}</h2>
      <p>{t('ChatGPTHumanizerPage.writeUp.bestPracticesP1')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.combineTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.combineP1')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.matchTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.matchP1')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.verifyTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.verifyP1')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.iterativeUseTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.iterativeUseP1')}</p>

      <h2>{t('ChatGPTHumanizerPage.writeUp.technicalTitle')}</h2>
      <p>{t('ChatGPTHumanizerPage.writeUp.technicalP1')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.perplexityTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.perplexityP1')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.burstinessTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.burstinessP1')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.stylisticTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.stylisticP1')}</p>

      <h2>{t('ChatGPTHumanizerPage.writeUp.limitationsTitle')}</h2>
      <p>{t('ChatGPTHumanizerPage.writeUp.limitationsP1')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.qualityTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.qualityP1')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.evolutionTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.evolutionP1')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.contextTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.contextP1')}</p>

      <h3>{t('ChatGPTHumanizerPage.writeUp.variableTitle')}</h3>
      <p>{t('ChatGPTHumanizerPage.writeUp.variableP1')}</p>
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
    seoTitle: 'ChatGPT Humanizer - Make AI Text Sound Human Free',
    urlPath: `/${toolSlug}`,
    locale,
  });
}

export default async function ChatGPTHumanizerPage() {
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

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ChatGPTHumanizerTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp(t)}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">{t('ChatGPTHumanizerPage.faqHeading')}</h2>
          <p className="text-slate-700">
            {t('ChatGPTHumanizerPage.faqIntro')}
          </p>
        </div>
        {/* Create translated FAQs from translation keys */}
        {(() => {
          const pageFaqs: FaqItem[] = faqKeys.map(({ key, category }) => ({
            category: t(`ChatGPTHumanizerPage.faqs.${key}.category`) || category,
            question: t(`ChatGPTHumanizerPage.faqs.${key}.question`),
            answer: t(`ChatGPTHumanizerPage.faqs.${key}.answer`),
          }));
          return (
            <>
              <FAQSection items={pageFaqs} />
              <FaqJsonLd faqs={pageFaqs} />
            </>
          );
        })()}
      </ToolPageShell>
    </>
  );
}
