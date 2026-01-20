import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { WordCounterTool } from '@/components/tools/WordCounterTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

const toolSlug = 'word-counter';

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = t(`Tools.${toolKey}.title`) !== `Tools.${toolKey}.title` 
    ? t(`Tools.${toolKey}.title`) 
    : tool?.title ?? 'GPT Clean Up Tools';
  const description = t(`Tools.${toolKey}.description`) !== `Tools.${toolKey}.description`
    ? t(`Tools.${toolKey}.description`)
    : tool?.shortDescription ?? 'Text utility tool.';
  const seoTitle = tool?.seoTitle ? (t(`Tools.${toolKey}.seoTitle`) !== `Tools.${toolKey}.seoTitle` ? t(`Tools.${toolKey}.seoTitle`) : tool.seoTitle) : undefined;
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
    locale,
  });
}

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'General' },
  { key: 'faq2', category: 'Technical' },
  { key: 'faq3', category: 'Usage' },
  { key: 'faq4', category: 'Formatting' },
  { key: 'faq5', category: 'Technical' },
  { key: 'faq6', category: 'Technical' },
  { key: 'faq7', category: 'Technical' },
  { key: 'faq8', category: 'General' },
  { key: 'faq9', category: 'Usage' },
  { key: 'faq10', category: 'SEO' },
  { key: 'faq11', category: 'Academic' },
  { key: 'faq12', category: 'Formatting' },
  { key: 'faq13', category: 'Technical' },
  { key: 'faq14', category: 'Formatting' },
  { key: 'faq15', category: 'Limits' },
  { key: 'faq16', category: 'Limits' },
  { key: 'faq17', category: 'Privacy' },
  { key: 'faq18', category: 'General' },
  { key: 'faq19', category: 'Technical' },
  { key: 'faq20', category: 'Usage' },
  { key: 'faq21', category: 'Limits' },
  { key: 'faq22', category: 'Workflow' },
];

// Helper function to create writeUp content using translations
function createWriteUp(t: (key: string) => string) {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
        <h2>{t('WordCounterPage.writeUp.title')}</h2>
        <h2>{t('WordCounterPage.writeUp.introductionTitle')}</h2>
        <p>{t('WordCounterPage.writeUp.introductionP1')}</p>
        <p>{t('WordCounterPage.writeUp.introductionP2')}</p>
        <p>{t('WordCounterPage.writeUp.introductionP3')}</p>
        <p>{t('WordCounterPage.writeUp.introductionP4')}</p>

        <h2>{t('WordCounterPage.writeUp.whatIsTitle')}</h2>
        <p>{t('WordCounterPage.writeUp.whatIsP1')}</p>
        <p>{t('WordCounterPage.writeUp.whatIsP2')}</p>
        <p>{t('WordCounterPage.writeUp.whatIsP3')}</p>
        <p>{t('WordCounterPage.writeUp.whatIsP4')}</p>

        <h2>{t('WordCounterPage.writeUp.whyMattersTitle')}</h2>
        <p>{t('WordCounterPage.writeUp.whyMattersP1')}</p>
        <p>{t('WordCounterPage.writeUp.whyMattersP2')}</p>
        <p>{t('WordCounterPage.writeUp.whyMattersP3')}</p>
        <p>{t('WordCounterPage.writeUp.whyMattersP4')}</p>

        <h2>{t('WordCounterPage.writeUp.howWorksTitle')}</h2>
        <p>{t('WordCounterPage.writeUp.howWorksIntro')}</p>
        <h3>{t('WordCounterPage.writeUp.step1Title')}</h3>
        <p>{t('WordCounterPage.writeUp.step1Text')}</p>
        <h3>{t('WordCounterPage.writeUp.step2Title')}</h3>
        <p>{t('WordCounterPage.writeUp.step2P1')}</p>
        <p>{t('WordCounterPage.writeUp.step2P2')}</p>
        <p>{t('WordCounterPage.writeUp.step2P3')}</p>
        <h3>{t('WordCounterPage.writeUp.step3Title')}</h3>
        <p>{t('WordCounterPage.writeUp.step3Text')}</p>

        <h2>{t('WordCounterPage.writeUp.commonProblemsTitle')}</h2>
        <p>{t('WordCounterPage.writeUp.commonProblemsIntro')}</p>
        <ul>
          <li>{t('WordCounterPage.writeUp.commonProblemsItem1')}</li>
          <li>{t('WordCounterPage.writeUp.commonProblemsItem2')}</li>
          <li>{t('WordCounterPage.writeUp.commonProblemsItem3')}</li>
          <li>{t('WordCounterPage.writeUp.commonProblemsItem4')}</li>
          <li>{t('WordCounterPage.writeUp.commonProblemsItem5')}</li>
          <li>{t('WordCounterPage.writeUp.commonProblemsItem6')}</li>
        </ul>
        <p>{t('WordCounterPage.writeUp.commonProblemsP1')}</p>
        <p>{t('WordCounterPage.writeUp.commonProblemsP2')}</p>

        <h2>{t('WordCounterPage.writeUp.supportedSourcesTitle')}</h2>
        <p>{t('WordCounterPage.writeUp.supportedSourcesP1')}</p>
        <h3>{t('WordCounterPage.writeUp.webPagesTitle')}</h3>
        <p>{t('WordCounterPage.writeUp.webPagesText')}</p>
        <h3>{t('WordCounterPage.writeUp.pdfTitle')}</h3>
        <p>{t('WordCounterPage.writeUp.pdfText')}</p>
        <h3>{t('WordCounterPage.writeUp.wordProcessorTitle')}</h3>
        <p>{t('WordCounterPage.writeUp.wordProcessorText')}</p>
        <h3>{t('WordCounterPage.writeUp.emailsTitle')}</h3>
        <p>{t('WordCounterPage.writeUp.emailsText')}</p>
        <h3>{t('WordCounterPage.writeUp.aiTitle')}</h3>
        <p>{t('WordCounterPage.writeUp.aiText')}</p>
        <h3>{t('WordCounterPage.writeUp.transcriptsTitle')}</h3>
        <p>{t('WordCounterPage.writeUp.transcriptsText')}</p>
        <h3>{t('WordCounterPage.writeUp.spreadsheetsTitle')}</h3>
        <p>{t('WordCounterPage.writeUp.spreadsheetsText')}</p>
        <h3>{t('WordCounterPage.writeUp.codeTitle')}</h3>
        <p>{t('WordCounterPage.writeUp.codeText')}</p>
        <h3>{t('WordCounterPage.writeUp.policiesTitle')}</h3>
        <p>{t('WordCounterPage.writeUp.policiesText')}</p>

        <h2>{t('WordCounterPage.writeUp.doesNotDoTitle')}</h2>
        <p>{t('WordCounterPage.writeUp.doesNotDoIntro')}</p>
        <ul>
          <li>{t('WordCounterPage.writeUp.doesNotDoItem1')}</li>
          <li>{t('WordCounterPage.writeUp.doesNotDoItem2')}</li>
          <li>{t('WordCounterPage.writeUp.doesNotDoItem3')}</li>
          <li>{t('WordCounterPage.writeUp.doesNotDoItem4')}</li>
          <li>{t('WordCounterPage.writeUp.doesNotDoItem5')}</li>
        </ul>
        <p>{t('WordCounterPage.writeUp.doesNotDoP1')}</p>

        <h2>{t('WordCounterPage.writeUp.privacyTitle')}</h2>
        <p>{t('WordCounterPage.writeUp.privacyP1')}</p>
        <p>{t('WordCounterPage.writeUp.privacyP2')}</p>

        <h2>{t('WordCounterPage.writeUp.professionalTitle')}</h2>
        <p>{t('WordCounterPage.writeUp.professionalIntro')}</p>
        <h3>{t('WordCounterPage.writeUp.writersTitle')}</h3>
        <p>{t('WordCounterPage.writeUp.writersText')}</p>
        <h3>{t('WordCounterPage.writeUp.marketingTitle')}</h3>
        <p>{t('WordCounterPage.writeUp.marketingText')}</p>
        <h3>{t('WordCounterPage.writeUp.developersTitle')}</h3>
        <p>{t('WordCounterPage.writeUp.developersText')}</p>
        <h3>{t('WordCounterPage.writeUp.legalTitle')}</h3>
        <p>{t('WordCounterPage.writeUp.legalText')}</p>
        <h3>{t('WordCounterPage.writeUp.supportTitle')}</h3>
        <p>{t('WordCounterPage.writeUp.supportText')}</p>
        <h3>{t('WordCounterPage.writeUp.productTitle')}</h3>
        <p>{t('WordCounterPage.writeUp.productText')}</p>
        <h3>{t('WordCounterPage.writeUp.analystsTitle')}</h3>
        <p>{t('WordCounterPage.writeUp.analystsText')}</p>
        <p>{t('WordCounterPage.writeUp.professionalP1')}</p>

        <h2>{t('WordCounterPage.writeUp.educationalTitle')}</h2>
        <p>{t('WordCounterPage.writeUp.educationalP1')}</p>
        <p>{t('WordCounterPage.writeUp.educationalP2')}</p>
        <p>{t('WordCounterPage.writeUp.educationalP3')}</p>
        <p>{t('WordCounterPage.writeUp.educationalP4')}</p>

        <h2>{t('WordCounterPage.writeUp.publishingTitle')}</h2>
        <p>{t('WordCounterPage.writeUp.publishingP1')}</p>
        <p>{t('WordCounterPage.writeUp.publishingP2')}</p>
        <p>{t('WordCounterPage.writeUp.publishingP3')}</p>
        <p>{t('WordCounterPage.writeUp.publishingP4')}</p>

        <h2>{t('WordCounterPage.writeUp.accessibilityTitle')}</h2>
        <p>{t('WordCounterPage.writeUp.accessibilityP1')}</p>
        <p>{t('WordCounterPage.writeUp.accessibilityP2')}</p>
        <p>{t('WordCounterPage.writeUp.accessibilityP3')}</p>
        <p>{t('WordCounterPage.writeUp.accessibilityP4')}</p>

        <h2>{t('WordCounterPage.writeUp.whyOnlineTitle')}</h2>
        <p>{t('WordCounterPage.writeUp.whyOnlineP1')}</p>
        <p>{t('WordCounterPage.writeUp.whyOnlineP2')}</p>
        <p>{t('WordCounterPage.writeUp.whyOnlineP3')}</p>
        <p>{t('WordCounterPage.writeUp.whyOnlineP4')}</p>

        <h2>{t('WordCounterPage.writeUp.edgeCasesTitle')}</h2>
        <p>{t('WordCounterPage.writeUp.edgeCasesIntro')}</p>
        <ul>
          <li>{t('WordCounterPage.writeUp.edgeCasesItem1')}</li>
          <li>{t('WordCounterPage.writeUp.edgeCasesItem2')}</li>
          <li>{t('WordCounterPage.writeUp.edgeCasesItem3')}</li>
          <li>{t('WordCounterPage.writeUp.edgeCasesItem4')}</li>
          <li>{t('WordCounterPage.writeUp.edgeCasesItem5')}</li>
        </ul>
        <p>{t('WordCounterPage.writeUp.edgeCasesP1')}</p>
        <p>{t('WordCounterPage.writeUp.edgeCasesP2')}</p>

        <h2>{t('WordCounterPage.writeUp.bestPracticesTitle')}</h2>
        <p>{t('WordCounterPage.writeUp.bestPracticesIntro')}</p>
        <ul>
          <li>{t('WordCounterPage.writeUp.bestPracticesItem1')}</li>
          <li>{t('WordCounterPage.writeUp.bestPracticesItem2')}</li>
          <li>{t('WordCounterPage.writeUp.bestPracticesItem3')}</li>
          <li>{t('WordCounterPage.writeUp.bestPracticesItem4')}</li>
          <li>{t('WordCounterPage.writeUp.bestPracticesItem5')}</li>
        </ul>
        <p>{t('WordCounterPage.writeUp.bestPracticesP1')}</p>
        <p>{t('WordCounterPage.writeUp.bestPracticesP2')}</p>

        <h2>{t('WordCounterPage.writeUp.misunderstoodTitle')}</h2>
        <h3>{t('WordCounterPage.writeUp.wordsVsTokensTitle')}</h3>
        <p>{t('WordCounterPage.writeUp.wordsVsTokensText')}</p>
        <h3>{t('WordCounterPage.writeUp.charactersTitle')}</h3>
        <p>{t('WordCounterPage.writeUp.charactersText')}</p>
        <h3>{t('WordCounterPage.writeUp.sentenceEstimateTitle')}</h3>
        <p>{t('WordCounterPage.writeUp.sentenceEstimateText')}</p>
        <h3>{t('WordCounterPage.writeUp.paragraphsTitle')}</h3>
        <p>{t('WordCounterPage.writeUp.paragraphsText')}</p>
        <h3>{t('WordCounterPage.writeUp.wordCountReadabilityTitle')}</h3>
        <p>{t('WordCounterPage.writeUp.wordCountReadabilityText')}</p>
        <h3>{t('WordCounterPage.writeUp.preparationTitle')}</h3>
        <p>{t('WordCounterPage.writeUp.preparationText')}</p>

        <h2>{t('WordCounterPage.writeUp.disclaimerTitle')}</h2>
        <p>{t('WordCounterPage.writeUp.disclaimerP1')}</p>
        <p>{t('WordCounterPage.writeUp.disclaimerP2')}</p>

        <h2>{t('WordCounterPage.writeUp.summaryTitle')}</h2>
        <p>{t('WordCounterPage.writeUp.summaryP1')}</p>
        <p>{t('WordCounterPage.writeUp.summaryP2')}</p>
        <p>{t('WordCounterPage.writeUp.summaryP3')}</p>
    </div>
  </section>
  );
}

export default async function WordCounterPage() {
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

  // Create translated FAQs from translation keys
  const pageFaqs: FaqItem[] = faqKeys.map(({ key, category }) => ({
    category: t(`WordCounterPage.faqs.${key}.category`) || category,
    question: t(`WordCounterPage.faqs.${key}.question`),
    answer: t(`WordCounterPage.faqs.${key}.answer`),
  }));

  const url = `${siteUrl}/${toolSlug}/`;

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<WordCounterTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp(t)}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">{t('WordCounterPage.faqHeading')}</h2>
          <p className="text-slate-700">
            {t('WordCounterPage.faqIntro')}
          </p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
