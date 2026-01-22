import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ChatGPTGPTZeroCheckerTool } from '@/components/tools/ChatGPTGPTZeroCheckerTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

const toolSlug = 'chatgpt-gptzero-checker';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq2', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq3', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq4', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq5', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq6', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq7', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq8', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq9', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq10', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq11', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq12', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq13', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq14', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq15', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq16', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq17', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq18', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq19', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq20', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq21', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq22', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq23', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq24', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq25', category: 'ChatGPT GPTZero Checker FAQs' },
];

// Helper function to create writeUp content using translations
function createWriteUp(t: (key: string) => string) {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>{t('ChatGPTGPTZeroCheckerPage.writeUp.title')}</h2>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.introP1')}</p>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.introP2')}</p>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.introP3')}</p>

      <h2>{t('ChatGPTGPTZeroCheckerPage.writeUp.methodologyTitle')}</h2>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.methodologyP1')}</p>

      <h3>{t('ChatGPTGPTZeroCheckerPage.writeUp.perplexityTitle')}</h3>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.perplexityP1')}</p>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.perplexityP2')}</p>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.perplexityP3')}</p>

      <h3>{t('ChatGPTGPTZeroCheckerPage.writeUp.burstinessTitle')}</h3>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.burstinessP1')}</p>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.burstinessP2')}</p>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.burstinessP3')}</p>

      <h3>{t('ChatGPTGPTZeroCheckerPage.writeUp.combinedAnalysisTitle')}</h3>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.combinedAnalysisP1')}</p>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.combinedAnalysisP2')}</p>

      <h2>{t('ChatGPTGPTZeroCheckerPage.writeUp.historyTitle')}</h2>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.historyP1')}</p>

      <h3>{t('ChatGPTGPTZeroCheckerPage.writeUp.originsTitle')}</h3>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.originsP1')}</p>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.originsP2')}</p>

      <h3>{t('ChatGPTGPTZeroCheckerPage.writeUp.influenceTitle')}</h3>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.influenceP1')}</p>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.influenceP2')}</p>

      <h3>{t('ChatGPTGPTZeroCheckerPage.writeUp.challengesTitle')}</h3>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.challengesP1')}</p>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.challengesP2')}</p>

      <h2>{t('ChatGPTGPTZeroCheckerPage.writeUp.usingToolTitle')}</h2>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.usingToolP1')}</p>

      <h3>{t('ChatGPTGPTZeroCheckerPage.writeUp.inputGuidelinesTitle')}</h3>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.inputGuidelinesP1')}</p>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.inputGuidelinesP2')}</p>

      <h3>{t('ChatGPTGPTZeroCheckerPage.writeUp.interpretingTitle')}</h3>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.interpretingP1')}</p>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.interpretingP2')}</p>

      <h3>{t('ChatGPTGPTZeroCheckerPage.writeUp.revisionTitle')}</h3>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.revisionP1')}</p>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.revisionP2')}</p>

      <h2>{t('ChatGPTGPTZeroCheckerPage.writeUp.academicTitle')}</h2>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.academicP1')}</p>

      <h3>{t('ChatGPTGPTZeroCheckerPage.writeUp.policyTitle')}</h3>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.policyP1')}</p>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.policyP2')}</p>

      <h3>{t('ChatGPTGPTZeroCheckerPage.writeUp.supportingTitle')}</h3>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.supportingP1')}</p>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.supportingP2')}</p>

      <h3>{t('ChatGPTGPTZeroCheckerPage.writeUp.valueTitle')}</h3>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.valueP1')}</p>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.valueP2')}</p>

      <h2>{t('ChatGPTGPTZeroCheckerPage.writeUp.comparingTitle')}</h2>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.comparingP1')}</p>

      <h3>{t('ChatGPTGPTZeroCheckerPage.writeUp.vsTurnitinTitle')}</h3>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.vsTurnitinP1')}</p>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.vsTurnitinP2')}</p>

      <h3>{t('ChatGPTGPTZeroCheckerPage.writeUp.limitationsTitle')}</h3>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.limitationsP1')}</p>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.limitationsP2')}</p>

      <h3>{t('ChatGPTGPTZeroCheckerPage.writeUp.multipleToolsTitle')}</h3>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.multipleToolsP1')}</p>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.multipleToolsP2')}</p>

      <h2>{t('ChatGPTGPTZeroCheckerPage.writeUp.technicalTitle')}</h2>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.technicalP1')}</p>

      <h3>{t('ChatGPTGPTZeroCheckerPage.writeUp.sentenceLevelTitle')}</h3>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.sentenceLevelP1')}</p>

      <h3>{t('ChatGPTGPTZeroCheckerPage.writeUp.vocabularyTitle')}</h3>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.vocabularyP1')}</p>

      <h3>{t('ChatGPTGPTZeroCheckerPage.writeUp.structuralTitle')}</h3>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.structuralP1')}</p>

      <h3>{t('ChatGPTGPTZeroCheckerPage.writeUp.coherenceTitle')}</h3>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.coherenceP1')}</p>

      <h2>{t('ChatGPTGPTZeroCheckerPage.writeUp.bestPracticesTitle')}</h2>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.bestPracticesP1')}</p>

      <h3>{t('ChatGPTGPTZeroCheckerPage.writeUp.understandTitle')}</h3>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.understandP1')}</p>

      <h3>{t('ChatGPTGPTZeroCheckerPage.writeUp.enhancementTitle')}</h3>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.enhancementP1')}</p>

      <h3>{t('ChatGPTGPTZeroCheckerPage.writeUp.voiceTitle')}</h3>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.voiceP1')}</p>

      <h3>{t('ChatGPTGPTZeroCheckerPage.writeUp.documentationTitle')}</h3>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.documentationP1')}</p>

      <h3>{t('ChatGPTGPTZeroCheckerPage.writeUp.clarificationTitle')}</h3>
      <p>{t('ChatGPTGPTZeroCheckerPage.writeUp.clarificationP1')}</p>
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
    seoTitle: 'ChatGPT GPTZero Checker - Check AI Detection Before Submission',
    urlPath: `/${toolSlug}`,
    locale,
  });
}

export default async function ChatGPTGPTZeroCheckerPage() {
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
    category: t(`ChatGPTGPTZeroCheckerPage.faqs.${key}.category`) || category,
    question: t(`ChatGPTGPTZeroCheckerPage.faqs.${key}.question`),
    answer: t(`ChatGPTGPTZeroCheckerPage.faqs.${key}.answer`),
  }));

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ChatGPTGPTZeroCheckerTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp(t)}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">{t('ChatGPTGPTZeroCheckerPage.faqHeading')}</h2>
          <p className="text-slate-700">
            {t('ChatGPTGPTZeroCheckerPage.faqIntro')}
          </p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
