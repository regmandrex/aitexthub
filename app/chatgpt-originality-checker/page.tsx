import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ChatGPTOriginalityCheckerTool } from '@/components/tools/ChatGPTOriginalityCheckerTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

const toolSlug = 'chatgpt-originality-checker';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq2', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq3', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq4', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq5', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq6', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq7', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq8', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq9', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq10', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq11', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq12', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq13', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq14', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq15', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq16', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq17', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq18', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq19', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq20', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq21', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq22', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq23', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq24', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq25', category: 'ChatGPT Originality Checker FAQs' },
];

// Helper function to create writeUp content using translations
function createWriteUp(t: (key: string) => string) {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>{t('ChatGPTOriginalityCheckerPage.writeUp.title')}</h2>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.introP1')}</p>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.introP2')}</p>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.introP3')}</p>

      <h2>{t('ChatGPTOriginalityCheckerPage.writeUp.detectionTitle')}</h2>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.detectionP1')}</p>

      <h3>{t('ChatGPTOriginalityCheckerPage.writeUp.authenticityTitle')}</h3>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.authenticityP1')}</p>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.authenticityP2')}</p>

      <h3>{t('ChatGPTOriginalityCheckerPage.writeUp.patternsTitle')}</h3>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.patternsP1')}</p>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.patternsP2')}</p>

      <h3>{t('ChatGPTOriginalityCheckerPage.writeUp.combinedTitle')}</h3>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.combinedP1')}</p>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.combinedP2')}</p>

      <h2>{t('ChatGPTOriginalityCheckerPage.writeUp.applicationsTitle')}</h2>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.applicationsP1')}</p>

      <h3>{t('ChatGPTOriginalityCheckerPage.writeUp.publisherTitle')}</h3>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.publisherP1')}</p>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.publisherP2')}</p>

      <h3>{t('ChatGPTOriginalityCheckerPage.writeUp.agencyTitle')}</h3>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.agencyP1')}</p>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.agencyP2')}</p>

      <h3>{t('ChatGPTOriginalityCheckerPage.writeUp.seoTitle')}</h3>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.seoP1')}</p>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.seoP2')}</p>

      <h3>{t('ChatGPTOriginalityCheckerPage.writeUp.freelanceTitle')}</h3>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.freelanceP1')}</p>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.freelanceP2')}</p>

      <h2>{t('ChatGPTOriginalityCheckerPage.writeUp.usingToolTitle')}</h2>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.usingToolP1')}</p>

      <h3>{t('ChatGPTOriginalityCheckerPage.writeUp.analyzeTitle')}</h3>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.analyzeP1')}</p>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.analyzeP2')}</p>

      <h3>{t('ChatGPTOriginalityCheckerPage.writeUp.interpretingTitle')}</h3>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.interpretingP1')}</p>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.interpretingP2')}</p>

      <h3>{t('ChatGPTOriginalityCheckerPage.writeUp.improvementTitle')}</h3>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.improvementP1')}</p>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.improvementP2')}</p>

      <h2>{t('ChatGPTOriginalityCheckerPage.writeUp.comparingTitle')}</h2>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.comparingP1')}</p>

      <h3>{t('ChatGPTOriginalityCheckerPage.writeUp.landscapeTitle')}</h3>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.landscapeP1')}</p>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.landscapeP2')}</p>

      <h3>{t('ChatGPTOriginalityCheckerPage.writeUp.differentToolsTitle')}</h3>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.differentToolsP1')}</p>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.differentToolsP2')}</p>

      <h3>{t('ChatGPTOriginalityCheckerPage.writeUp.costEffectiveTitle')}</h3>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.costEffectiveP1')}</p>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.costEffectiveP2')}</p>

      <h2>{t('ChatGPTOriginalityCheckerPage.writeUp.policiesTitle')}</h2>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.policiesP1')}</p>

      <h3>{t('ChatGPTOriginalityCheckerPage.writeUp.expectationsTitle')}</h3>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.expectationsP1')}</p>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.expectationsP2')}</p>

      <h3>{t('ChatGPTOriginalityCheckerPage.writeUp.relationshipsTitle')}</h3>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.relationshipsP1')}</p>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.relationshipsP2')}</p>

      <h3>{t('ChatGPTOriginalityCheckerPage.writeUp.responsesTitle')}</h3>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.responsesP1')}</p>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.responsesP2')}</p>

      <h2>{t('ChatGPTOriginalityCheckerPage.writeUp.technicalTitle')}</h2>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.technicalP1')}</p>

      <h3>{t('ChatGPTOriginalityCheckerPage.writeUp.triggerTitle')}</h3>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.triggerP1')}</p>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.triggerP2')}</p>

      <h3>{t('ChatGPTOriginalityCheckerPage.writeUp.factorsTitle')}</h3>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.factorsP1')}</p>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.factorsP2')}</p>

      <h3>{t('ChatGPTOriginalityCheckerPage.writeUp.limitationsTitle')}</h3>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.limitationsP1')}</p>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.limitationsP2')}</p>

      <h2>{t('ChatGPTOriginalityCheckerPage.writeUp.futureTitle')}</h2>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.futureP1')}</p>

      <h3>{t('ChatGPTOriginalityCheckerPage.writeUp.evolvingTitle')}</h3>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.evolvingP1')}</p>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.evolvingP2')}</p>

      <h3>{t('ChatGPTOriginalityCheckerPage.writeUp.emergingTitle')}</h3>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.emergingP1')}</p>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.emergingP2')}</p>

      <h3>{t('ChatGPTOriginalityCheckerPage.writeUp.valueTitle')}</h3>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.valueP1')}</p>
      <p>{t('ChatGPTOriginalityCheckerPage.writeUp.valueP2')}</p>
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
    seoTitle: 'ChatGPT Originality Checker - Pre-Screen AI Content Free',
    urlPath: `/${toolSlug}`,
    locale,
  });
}

export default async function ChatGPTOriginalityCheckerPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ChatGPTOriginalityCheckerTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp(t)}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">{t('ChatGPTOriginalityCheckerPage.faqHeading')}</h2>
          <p className="text-slate-700">
            {t('ChatGPTOriginalityCheckerPage.faqIntro')}
          </p>
        </div>
        {/* Create translated FAQs from translation keys */}
        {(() => {
          const pageFaqs: FaqItem[] = faqKeys.map(({ key, category }) => ({
            category: t(`ChatGPTOriginalityCheckerPage.faqs.${key}.category`) || category,
            question: t(`ChatGPTOriginalityCheckerPage.faqs.${key}.question`),
            answer: t(`ChatGPTOriginalityCheckerPage.faqs.${key}.answer`),
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
