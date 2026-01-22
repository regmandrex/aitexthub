import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ChatGPTCopyleaksCheckerTool } from '@/components/tools/ChatGPTCopyleaksCheckerTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

const toolSlug = 'chatgpt-copyleaks-checker';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq2', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq3', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq4', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq5', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq6', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq7', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq8', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq9', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq10', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq11', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq12', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq13', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq14', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq15', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq16', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq17', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq18', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq19', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq20', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq21', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq22', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq23', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq24', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq25', category: 'ChatGPT Copyleaks Checker FAQs' },
];
function createWriteUp(t: (key: string) => string) {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>{t('ChatGPTCopyleaksCheckerPage.writeUp.title')}</h2>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.introP1')}</p>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.introP2')}</p>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.introP3')}</p>

      <h2>{t('ChatGPTCopyleaksCheckerPage.writeUp.enterpriseTitle')}</h2>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.enterpriseP1')}</p>

      <h3>{t('ChatGPTCopyleaksCheckerPage.writeUp.scaleTitle')}</h3>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.scaleP1')}</p>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.scaleP2')}</p>

      <h3>{t('ChatGPTCopyleaksCheckerPage.writeUp.multiLanguageTitle')}</h3>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.multiLanguageP1')}</p>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.multiLanguageP2')}</p>

      <h3>{t('ChatGPTCopyleaksCheckerPage.writeUp.combinedTitle')}</h3>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.combinedP1')}</p>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.combinedP2')}</p>

      <h2>{t('ChatGPTCopyleaksCheckerPage.writeUp.educationalTitle')}</h2>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.educationalP1')}</p>

      <h3>{t('ChatGPTCopyleaksCheckerPage.writeUp.lmsTitle')}</h3>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.lmsP1')}</p>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.lmsP2')}</p>

      <h3>{t('ChatGPTCopyleaksCheckerPage.writeUp.policyTitle')}</h3>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.policyP1')}</p>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.policyP2')}</p>

      <h3>{t('ChatGPTCopyleaksCheckerPage.writeUp.integrityTitle')}</h3>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.integrityP1')}</p>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.integrityP2')}</p>

      <h2>{t('ChatGPTCopyleaksCheckerPage.writeUp.professionalTitle')}</h2>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.professionalP1')}</p>

      <h3>{t('ChatGPTCopyleaksCheckerPage.writeUp.corporateTitle')}</h3>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.corporateP1')}</p>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.corporateP2')}</p>

      <h3>{t('ChatGPTCopyleaksCheckerPage.writeUp.publishingTitle')}</h3>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.publishingP1')}</p>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.publishingP2')}</p>

      <h3>{t('ChatGPTCopyleaksCheckerPage.writeUp.legalTitle')}</h3>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.legalP1')}</p>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.legalP2')}</p>

      <h2>{t('ChatGPTCopyleaksCheckerPage.writeUp.usingToolTitle')}</h2>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.usingToolP1')}</p>

      <h3>{t('ChatGPTCopyleaksCheckerPage.writeUp.analyzeTitle')}</h3>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.analyzeP1')}</p>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.analyzeP2')}</p>

      <h3>{t('ChatGPTCopyleaksCheckerPage.writeUp.interpretingTitle')}</h3>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.interpretingP1')}</p>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.interpretingP2')}</p>

      <h3>{t('ChatGPTCopyleaksCheckerPage.writeUp.applyingTitle')}</h3>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.applyingP1')}</p>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.applyingP2')}</p>

      <h2>{t('ChatGPTCopyleaksCheckerPage.writeUp.technicalTitle')}</h2>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.technicalP1')}</p>

      <h3>{t('ChatGPTCopyleaksCheckerPage.writeUp.linguisticTitle')}</h3>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.linguisticP1')}</p>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.linguisticP2')}</p>

      <h3>{t('ChatGPTCopyleaksCheckerPage.writeUp.trainingTitle')}</h3>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.trainingP1')}</p>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.trainingP2')}</p>

      <h3>{t('ChatGPTCopyleaksCheckerPage.writeUp.limitationsTitle')}</h3>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.limitationsP1')}</p>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.limitationsP2')}</p>

      <h2>{t('ChatGPTCopyleaksCheckerPage.writeUp.comparingTitle')}</h2>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.comparingP1')}</p>

      <h3>{t('ChatGPTCopyleaksCheckerPage.writeUp.vsTurnitinTitle')}</h3>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.vsTurnitinP1')}</p>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.vsTurnitinP2')}</p>

      <h3>{t('ChatGPTCopyleaksCheckerPage.writeUp.vsOriginalityTitle')}</h3>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.vsOriginalityP1')}</p>

      <h3>{t('ChatGPTCopyleaksCheckerPage.writeUp.multipleToolsTitle')}</h3>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.multipleToolsP1')}</p>

      <h2>{t('ChatGPTCopyleaksCheckerPage.writeUp.bestPracticesTitle')}</h2>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.bestPracticesP1')}</p>

      <h3>{t('ChatGPTCopyleaksCheckerPage.writeUp.requirementsTitle')}</h3>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.requirementsP1')}</p>

      <h3>{t('ChatGPTCopyleaksCheckerPage.writeUp.authenticTitle')}</h3>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.authenticP1')}</p>

      <h3>{t('ChatGPTCopyleaksCheckerPage.writeUp.documentTitle')}</h3>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.documentP1')}</p>

      <h3>{t('ChatGPTCopyleaksCheckerPage.writeUp.communicateTitle')}</h3>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.communicateP1')}</p>

      <h3>{t('ChatGPTCopyleaksCheckerPage.writeUp.feedbackTitle')}</h3>
      <p>{t('ChatGPTCopyleaksCheckerPage.writeUp.feedbackP1')}</p>
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
    seoTitle: 'ChatGPT Copyleaks Checker - Enterprise AI Detection Pre-Screen',
    urlPath: `/${toolSlug}`,
    locale,
  });
}

export default async function ChatGPTCopyleaksCheckerPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ChatGPTCopyleaksCheckerTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp(t)}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">{t('ChatGPTCopyleaksCheckerPage.faqHeading')}</h2>
          <p className="text-slate-700">
            {t('ChatGPTCopyleaksCheckerPage.faqIntro')}
          </p>
        </div>
        {/* Create translated FAQs from translation keys */}
        {(() => {
          const pageFaqs: FaqItem[] = faqKeys.map(({ key, category }) => ({
            category: t(`ChatGPTCopyleaksCheckerPage.faqs.${key}.category`) || category,
            question: t(`ChatGPTCopyleaksCheckerPage.faqs.${key}.question`),
            answer: t(`ChatGPTCopyleaksCheckerPage.faqs.${key}.answer`),
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
