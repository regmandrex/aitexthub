import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { CaseConverterTool } from '@/components/tools/CaseConverterTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

const toolSlug = 'case-converter';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'General' },
  { key: 'faq2', category: 'General' },
  { key: 'faq3', category: 'Formatting' },
  { key: 'faq4', category: 'Formatting' },
  { key: 'faq5', category: 'Technical' },
  { key: 'faq6', category: 'Technical' },
  { key: 'faq7', category: 'Formatting' },
  { key: 'faq8', category: 'Workflow' },
  { key: 'faq9', category: 'Limits' },
  { key: 'faq10', category: 'Formatting' },
  { key: 'faq11', category: 'Limits' },
  { key: 'faq12', category: 'Compatibility' },
  { key: 'faq13', category: 'Limits' },
  { key: 'faq14', category: 'Workflow' },
  { key: 'faq15', category: 'Usage' },
  { key: 'faq16', category: 'General' },
  { key: 'faq17', category: 'Best Practices' },
  { key: 'faq18', category: 'SEO' },
  { key: 'faq19', category: 'SEO' },
  { key: 'faq20', category: 'Privacy' },
  { key: 'faq21', category: 'Technical' },
  { key: 'faq22', category: 'Responsible Use' },
];

// Helper function to create writeUp content using translations
function createWriteUp(t: (key: string) => string) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>{t('CaseConverterPage.writeUp.title')}</h2>
        <p>{t('CaseConverterPage.writeUp.intro')}</p>

        <h2>{t('CaseConverterPage.writeUp.introductionTitle')}</h2>
        <p>{t('CaseConverterPage.writeUp.introductionP1')}</p>
        <p>{t('CaseConverterPage.writeUp.introductionP2')}</p>
        <p>{t('CaseConverterPage.writeUp.introductionP3')}</p>
        <p>{t('CaseConverterPage.writeUp.introductionP4')}</p>

        <h2>{t('CaseConverterPage.writeUp.whatIsTitle')}</h2>
        <p>{t('CaseConverterPage.writeUp.whatIsP1')}</p>
        <p>{t('CaseConverterPage.writeUp.whatIsP2')}</p>
        <p>{t('CaseConverterPage.writeUp.whatIsP3')}</p>

        <h3>{t('CaseConverterPage.writeUp.caseModesTitle')}</h3>
        <p>{t('CaseConverterPage.writeUp.caseModesP1')}</p>
        <p>{t('CaseConverterPage.writeUp.caseModesP2')}</p>

        <h2>{t('CaseConverterPage.writeUp.whyMattersTitle')}</h2>
        <p>{t('CaseConverterPage.writeUp.whyMattersP1')}</p>
        <p>{t('CaseConverterPage.writeUp.whyMattersP2')}</p>
        <p>{t('CaseConverterPage.writeUp.whyMattersP3')}</p>
        <p>{t('CaseConverterPage.writeUp.whyMattersP4')}</p>

        <h2>{t('CaseConverterPage.writeUp.howWorksTitle')}</h2>
        <h3>{t('CaseConverterPage.writeUp.step1Title')}</h3>
        <p>{t('CaseConverterPage.writeUp.step1Text')}</p>
        <h3>{t('CaseConverterPage.writeUp.step2Title')}</h3>
        <p>{t('CaseConverterPage.writeUp.step2Text')}</p>
        <h3>{t('CaseConverterPage.writeUp.step3Title')}</h3>
        <p>{t('CaseConverterPage.writeUp.step3P1')}</p>
        <p>{t('CaseConverterPage.writeUp.step3P2')}</p>
        <h3>{t('CaseConverterPage.writeUp.step4Title')}</h3>
        <p>{t('CaseConverterPage.writeUp.step4P1')}</p>
        <p>{t('CaseConverterPage.writeUp.step4P2')}</p>

        <h2>{t('CaseConverterPage.writeUp.commonProblemsTitle')}</h2>
        <p>{t('CaseConverterPage.writeUp.commonProblemsIntro')}</p>
        <ul>
          <li>{t('CaseConverterPage.writeUp.commonProblemsItem1')}</li>
          <li>{t('CaseConverterPage.writeUp.commonProblemsItem2')}</li>
          <li>{t('CaseConverterPage.writeUp.commonProblemsItem3')}</li>
          <li>{t('CaseConverterPage.writeUp.commonProblemsItem4')}</li>
          <li>{t('CaseConverterPage.writeUp.commonProblemsItem5')}</li>
        </ul>
        <p>{t('CaseConverterPage.writeUp.commonProblemsP1')}</p>
        <p>{t('CaseConverterPage.writeUp.commonProblemsP2')}</p>

        <h2>{t('CaseConverterPage.writeUp.supportedSourcesTitle')}</h2>
        <p>{t('CaseConverterPage.writeUp.supportedSourcesP1')}</p>
        <p>{t('CaseConverterPage.writeUp.supportedSourcesP2')}</p>
        <p>{t('CaseConverterPage.writeUp.supportedSourcesP3')}</p>
        <h3>{t('CaseConverterPage.writeUp.websitesTitle')}</h3>
        <p>{t('CaseConverterPage.writeUp.websitesText')}</p>
        <h3>{t('CaseConverterPage.writeUp.pdfTitle')}</h3>
        <p>{t('CaseConverterPage.writeUp.pdfText')}</p>
        <h3>{t('CaseConverterPage.writeUp.wordTitle')}</h3>
        <p>{t('CaseConverterPage.writeUp.wordText')}</p>
        <h3>{t('CaseConverterPage.writeUp.aiTitle')}</h3>
        <p>{t('CaseConverterPage.writeUp.aiText')}</p>
        <h3>{t('CaseConverterPage.writeUp.emailsTitle')}</h3>
        <p>{t('CaseConverterPage.writeUp.emailsText')}</p>
        <h3>{t('CaseConverterPage.writeUp.codeTitle')}</h3>
        <p>{t('CaseConverterPage.writeUp.codeText')}</p>

        <h2>{t('CaseConverterPage.writeUp.doesNotDoTitle')}</h2>
        <p>{t('CaseConverterPage.writeUp.doesNotDoIntro')}</p>
        <ul>
          <li>{t('CaseConverterPage.writeUp.doesNotDoItem1')}</li>
          <li>{t('CaseConverterPage.writeUp.doesNotDoItem2')}</li>
          <li>{t('CaseConverterPage.writeUp.doesNotDoItem3')}</li>
          <li>{t('CaseConverterPage.writeUp.doesNotDoItem4')}</li>
          <li>{t('CaseConverterPage.writeUp.doesNotDoItem5')}</li>
        </ul>
        <p>{t('CaseConverterPage.writeUp.doesNotDoP1')}</p>

        <h2>{t('CaseConverterPage.writeUp.privacyTitle')}</h2>
        <p>{t('CaseConverterPage.writeUp.privacyP1')}</p>
        <p>{t('CaseConverterPage.writeUp.privacyP2')}</p>

        <h2>{t('CaseConverterPage.writeUp.professionalTitle')}</h2>
        <p>{t('CaseConverterPage.writeUp.professionalIntro')}</p>
        <h3>{t('CaseConverterPage.writeUp.writersTitle')}</h3>
        <p>{t('CaseConverterPage.writeUp.writersText')}</p>
        <h3>{t('CaseConverterPage.writeUp.developersTitle')}</h3>
        <p>{t('CaseConverterPage.writeUp.developersText')}</p>
        <h3>{t('CaseConverterPage.writeUp.marketingTitle')}</h3>
        <p>{t('CaseConverterPage.writeUp.marketingText')}</p>
        <h3>{t('CaseConverterPage.writeUp.productTitle')}</h3>
        <p>{t('CaseConverterPage.writeUp.productText')}</p>
        <h3>{t('CaseConverterPage.writeUp.operationsTitle')}</h3>
        <p>{t('CaseConverterPage.writeUp.operationsText')}</p>
        <h3>{t('CaseConverterPage.writeUp.legalTitle')}</h3>
        <p>{t('CaseConverterPage.writeUp.legalText')}</p>
        <h3>{t('CaseConverterPage.writeUp.dataTitle')}</h3>
        <p>{t('CaseConverterPage.writeUp.dataText')}</p>
        <p>{t('CaseConverterPage.writeUp.professionalP1')}</p>

        <h2>{t('CaseConverterPage.writeUp.educationalTitle')}</h2>
        <p>{t('CaseConverterPage.writeUp.educationalP1')}</p>
        <p>{t('CaseConverterPage.writeUp.educationalP2')}</p>

        <h2>{t('CaseConverterPage.writeUp.publishingTitle')}</h2>
        <p>{t('CaseConverterPage.writeUp.publishingP1')}</p>
        <p>{t('CaseConverterPage.writeUp.publishingP2')}</p>
        <p>{t('CaseConverterPage.writeUp.publishingP3')}</p>

        <h2>{t('CaseConverterPage.writeUp.accessibilityTitle')}</h2>
        <p>{t('CaseConverterPage.writeUp.accessibilityP1')}</p>
        <p>{t('CaseConverterPage.writeUp.accessibilityP2')}</p>
        <p>{t('CaseConverterPage.writeUp.accessibilityP3')}</p>

        <h2>{t('CaseConverterPage.writeUp.whyOnlineTitle')}</h2>
        <p>{t('CaseConverterPage.writeUp.whyOnlineP1')}</p>
        <p>{t('CaseConverterPage.writeUp.whyOnlineP2')}</p>
        <p>{t('CaseConverterPage.writeUp.whyOnlineP3')}</p>

        <h2>{t('CaseConverterPage.writeUp.edgeCasesTitle')}</h2>
        <p>{t('CaseConverterPage.writeUp.edgeCasesIntro')}</p>
        <ul>
          <li>{t('CaseConverterPage.writeUp.edgeCasesItem1')}</li>
          <li>{t('CaseConverterPage.writeUp.edgeCasesItem2')}</li>
          <li>{t('CaseConverterPage.writeUp.edgeCasesItem3')}</li>
          <li>{t('CaseConverterPage.writeUp.edgeCasesItem4')}</li>
          <li>{t('CaseConverterPage.writeUp.edgeCasesItem5')}</li>
        </ul>
        <p>{t('CaseConverterPage.writeUp.edgeCasesP1')}</p>
        <p>{t('CaseConverterPage.writeUp.edgeCasesP2')}</p>
        <p>{t('CaseConverterPage.writeUp.edgeCasesP3')}</p>

        <h2>{t('CaseConverterPage.writeUp.bestPracticesTitle')}</h2>
        <p>{t('CaseConverterPage.writeUp.bestPracticesIntro')}</p>
        <ul>
          <li>{t('CaseConverterPage.writeUp.bestPracticesItem1')}</li>
          <li>{t('CaseConverterPage.writeUp.bestPracticesItem2')}</li>
          <li>{t('CaseConverterPage.writeUp.bestPracticesItem3')}</li>
          <li>{t('CaseConverterPage.writeUp.bestPracticesItem4')}</li>
          <li>{t('CaseConverterPage.writeUp.bestPracticesItem5')}</li>
        </ul>
        <p>{t('CaseConverterPage.writeUp.bestPracticesP1')}</p>
        <p>{t('CaseConverterPage.writeUp.bestPracticesP2')}</p>

        <h2>{t('CaseConverterPage.writeUp.misunderstoodTitle')}</h2>
        <h3>{t('CaseConverterPage.writeUp.titleCaseConceptTitle')}</h3>
        <p>{t('CaseConverterPage.writeUp.titleCaseConceptText')}</p>
        <h3>{t('CaseConverterPage.writeUp.sentenceCaseConceptTitle')}</h3>
        <p>{t('CaseConverterPage.writeUp.sentenceCaseConceptText')}</p>
        <h3>{t('CaseConverterPage.writeUp.toggleCaseConceptTitle')}</h3>
        <p>{t('CaseConverterPage.writeUp.toggleCaseConceptText')}</p>
        <h3>{t('CaseConverterPage.writeUp.abbreviationsConceptTitle')}</h3>
        <p>{t('CaseConverterPage.writeUp.abbreviationsConceptText')}</p>
        <h3>{t('CaseConverterPage.writeUp.rewritingConceptTitle')}</h3>
        <p>{t('CaseConverterPage.writeUp.rewritingConceptText')}</p>

        <h2>{t('CaseConverterPage.writeUp.disclaimerTitle')}</h2>
        <p>{t('CaseConverterPage.writeUp.disclaimerP1')}</p>
        <p>{t('CaseConverterPage.writeUp.disclaimerP2')}</p>

        <h2>{t('CaseConverterPage.writeUp.summaryTitle')}</h2>
        <p>{t('CaseConverterPage.writeUp.summaryP1')}</p>
        <p>{t('CaseConverterPage.writeUp.summaryP2')}</p>
        <p>{t('CaseConverterPage.writeUp.summaryP3')}</p>
    </div>
  </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return {};

  const toolKey = toolSlug === '' ? 'home' : toolSlug;
  const title = t(`Tools.${toolKey}.title`) !== `Tools.${toolKey}.title` 
    ? t(`Tools.${toolKey}.title`) 
    : toolData.title;
  const description = t(`Tools.${toolKey}.description`) !== `Tools.${toolKey}.description`
    ? t(`Tools.${toolKey}.description`)
    : toolData.shortDescription;
  const seoTitle = toolData.seoTitle ? (t(`Tools.${toolKey}.seoTitle`) !== `Tools.${toolKey}.seoTitle` ? t(`Tools.${toolKey}.seoTitle`) : toolData.seoTitle) : undefined;

  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
    locale,
  });
}

export default async function CaseConverterPage() {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const toolKey = toolSlug === '' ? 'home' : toolSlug;
  const title = t(`Tools.${toolKey}.title`) !== `Tools.${toolKey}.title` 
    ? t(`Tools.${toolKey}.title`) 
    : toolData.title;
  const description = t(`Tools.${toolKey}.description`) !== `Tools.${toolKey}.description`
    ? t(`Tools.${toolKey}.description`)
    : toolData.shortDescription;

  // Create translated FAQs from translation keys
  const pageFaqs: FaqItem[] = faqKeys.map(({ key, category }) => ({
    category: t(`CaseConverterPage.faqs.${key}.category`) || category,
    question: t(`CaseConverterPage.faqs.${key}.question`),
    answer: t(`CaseConverterPage.faqs.${key}.answer`),
  }));

  const url = `${siteUrl}/${toolSlug}/`;

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<CaseConverterTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp(t)}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Case Converter - Frequently Asked Questions</h2>
          <p className="text-slate-700">
            Detailed answers about case conversion, formatting limits, and how to get consistent results without changing content.
          </p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
