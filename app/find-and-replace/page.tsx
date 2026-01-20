import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { FindReplaceTool } from '@/components/tools/FindReplaceTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

const toolSlug = 'find-and-replace';

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug === '' ? 'home' : toolSlug;
  
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
  { key: 'faq4', category: 'Usage' },
  { key: 'faq5', category: 'Technical' },
  { key: 'faq6', category: 'Technical' },
  { key: 'faq7', category: 'Formatting' },
  { key: 'faq8', category: 'Usage' },
  { key: 'faq9', category: 'Technical' },
  { key: 'faq10', category: 'Formatting' },
  { key: 'faq11', category: 'Limits' },
  { key: 'faq12', category: 'Limits' },
  { key: 'faq13', category: 'Workflow' },
  { key: 'faq14', category: 'General' },
  { key: 'faq15', category: 'Professional' },
  { key: 'faq16', category: 'Academic' },
  { key: 'faq17', category: 'SEO' },
  { key: 'faq18', category: 'Accessibility' },
  { key: 'faq19', category: 'Privacy' },
  { key: 'faq20', category: 'Compatibility' },
  { key: 'faq21', category: 'Usage' },
  { key: 'faq22', category: 'Responsible Use' },
];

// Helper function to create writeUp content using translations
function createWriteUp(t: (key: string) => string) {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>{t('FindAndReplacePage.writeUp.title')}</h2>
      <p>{t('FindAndReplacePage.writeUp.intro')}</p>

      <h2>{t('FindAndReplacePage.writeUp.introductionTitle')}</h2>
      <p>{t('FindAndReplacePage.writeUp.introductionP1')}</p>
      <p>{t('FindAndReplacePage.writeUp.introductionP2')}</p>
      <p>{t('FindAndReplacePage.writeUp.introductionP3')}</p>
      <p>{t('FindAndReplacePage.writeUp.introductionP4')}</p>

      <h2>{t('FindAndReplacePage.writeUp.whatIsTitle')}</h2>
      <p>{t('FindAndReplacePage.writeUp.whatIsP1')}</p>
      <p>{t('FindAndReplacePage.writeUp.whatIsP2')}</p>
      <p>{t('FindAndReplacePage.writeUp.whatIsP3')}</p>
      <p>{t('FindAndReplacePage.writeUp.whatIsP4')}</p>

      <h2>{t('FindAndReplacePage.writeUp.whyMattersTitle')}</h2>
      <p>{t('FindAndReplacePage.writeUp.whyMattersP1')}</p>
      <p>{t('FindAndReplacePage.writeUp.whyMattersP2')}</p>
      <p>{t('FindAndReplacePage.writeUp.whyMattersP3')}</p>
      <p>{t('FindAndReplacePage.writeUp.whyMattersP4')}</p>
      <p>{t('FindAndReplacePage.writeUp.whyMattersP5')}</p>

      <h2>{t('FindAndReplacePage.writeUp.howWorksTitle')}</h2>
      <h3>{t('FindAndReplacePage.writeUp.step1Title')}</h3>
      <p>{t('FindAndReplacePage.writeUp.step1Text')}</p>
      <h3>{t('FindAndReplacePage.writeUp.step2Title')}</h3>
      <p>{t('FindAndReplacePage.writeUp.step2Text')}</p>
      <h3>{t('FindAndReplacePage.writeUp.step3Title')}</h3>
      <p>{t('FindAndReplacePage.writeUp.step3Text')}</p>
      <h3>{t('FindAndReplacePage.writeUp.step4Title')}</h3>
      <p>{t('FindAndReplacePage.writeUp.step4P1')}</p>
      <p>{t('FindAndReplacePage.writeUp.step4P2')}</p>
      <h3>{t('FindAndReplacePage.writeUp.step5Title')}</h3>
      <p>{t('FindAndReplacePage.writeUp.step5P1')}</p>
      <p>{t('FindAndReplacePage.writeUp.step5P2')}</p>

      <h2>{t('FindAndReplacePage.writeUp.commonProblemsTitle')}</h2>
      <p>{t('FindAndReplacePage.writeUp.commonProblemsIntro')}</p>
      <ul>
        <li>{t('FindAndReplacePage.writeUp.commonProblemsItem1')}</li>
        <li>{t('FindAndReplacePage.writeUp.commonProblemsItem2')}</li>
        <li>{t('FindAndReplacePage.writeUp.commonProblemsItem3')}</li>
        <li>{t('FindAndReplacePage.writeUp.commonProblemsItem4')}</li>
        <li>{t('FindAndReplacePage.writeUp.commonProblemsItem5')}</li>
      </ul>
      <p>{t('FindAndReplacePage.writeUp.commonProblemsP1')}</p>
      <p>{t('FindAndReplacePage.writeUp.commonProblemsP2')}</p>
      <p>{t('FindAndReplacePage.writeUp.commonProblemsP3')}</p>

      <h2>{t('FindAndReplacePage.writeUp.supportedSourcesTitle')}</h2>
      <p>{t('FindAndReplacePage.writeUp.supportedSourcesP1')}</p>
      <h3>{t('FindAndReplacePage.writeUp.webPagesTitle')}</h3>
      <p>{t('FindAndReplacePage.writeUp.webPagesText')}</p>
      <h3>{t('FindAndReplacePage.writeUp.pdfTitle')}</h3>
      <p>{t('FindAndReplacePage.writeUp.pdfText')}</p>
      <h3>{t('FindAndReplacePage.writeUp.wordProcessorsTitle')}</h3>
      <p>{t('FindAndReplacePage.writeUp.wordProcessorsText')}</p>
      <h3>{t('FindAndReplacePage.writeUp.aiTitle')}</h3>
      <p>{t('FindAndReplacePage.writeUp.aiText')}</p>
      <h3>{t('FindAndReplacePage.writeUp.emailsTitle')}</h3>
      <p>{t('FindAndReplacePage.writeUp.emailsText')}</p>
      <p>{t('FindAndReplacePage.writeUp.supportedSourcesP2')}</p>
      <p>{t('FindAndReplacePage.writeUp.supportedSourcesP3')}</p>

      <h2>{t('FindAndReplacePage.writeUp.doesNotDoTitle')}</h2>
      <p>{t('FindAndReplacePage.writeUp.doesNotDoIntro')}</p>
      <ul>
        <li>{t('FindAndReplacePage.writeUp.doesNotDoItem1')}</li>
        <li>{t('FindAndReplacePage.writeUp.doesNotDoItem2')}</li>
        <li>{t('FindAndReplacePage.writeUp.doesNotDoItem3')}</li>
        <li>{t('FindAndReplacePage.writeUp.doesNotDoItem4')}</li>
        <li>{t('FindAndReplacePage.writeUp.doesNotDoItem5')}</li>
      </ul>
      <p>{t('FindAndReplacePage.writeUp.doesNotDoP1')}</p>
      <p>{t('FindAndReplacePage.writeUp.doesNotDoP2')}</p>

      <h2>{t('FindAndReplacePage.writeUp.privacyTitle')}</h2>
      <p>{t('FindAndReplacePage.writeUp.privacyP1')}</p>
      <p>{t('FindAndReplacePage.writeUp.privacyP2')}</p>
      <p>{t('FindAndReplacePage.writeUp.privacyP3')}</p>

      <h2>{t('FindAndReplacePage.writeUp.professionalTitle')}</h2>
      <p>{t('FindAndReplacePage.writeUp.professionalIntro')}</p>
      <h3>{t('FindAndReplacePage.writeUp.editorsTitle')}</h3>
      <p>{t('FindAndReplacePage.writeUp.editorsText')}</p>
      <h3>{t('FindAndReplacePage.writeUp.developersTitle')}</h3>
      <p>{t('FindAndReplacePage.writeUp.developersText')}</p>
      <h3>{t('FindAndReplacePage.writeUp.marketingTitle')}</h3>
      <p>{t('FindAndReplacePage.writeUp.marketingText')}</p>
      <h3>{t('FindAndReplacePage.writeUp.analystsTitle')}</h3>
      <p>{t('FindAndReplacePage.writeUp.analystsText')}</p>
      <p>{t('FindAndReplacePage.writeUp.professionalP1')}</p>

      <h2>{t('FindAndReplacePage.writeUp.educationalTitle')}</h2>
      <p>{t('FindAndReplacePage.writeUp.educationalP1')}</p>
      <p>{t('FindAndReplacePage.writeUp.educationalP2')}</p>
      <p>{t('FindAndReplacePage.writeUp.educationalP3')}</p>

      <h2>{t('FindAndReplacePage.writeUp.publishingTitle')}</h2>
      <p>{t('FindAndReplacePage.writeUp.publishingP1')}</p>
      <p>{t('FindAndReplacePage.writeUp.publishingP2')}</p>
      <p>{t('FindAndReplacePage.writeUp.publishingP3')}</p>

      <h2>{t('FindAndReplacePage.writeUp.accessibilityTitle')}</h2>
      <p>{t('FindAndReplacePage.writeUp.accessibilityP1')}</p>
      <p>{t('FindAndReplacePage.writeUp.accessibilityP2')}</p>
      <p>{t('FindAndReplacePage.writeUp.accessibilityP3')}</p>

      <h2>{t('FindAndReplacePage.writeUp.whyOnlineTitle')}</h2>
      <p>{t('FindAndReplacePage.writeUp.whyOnlineP1')}</p>
      <p>{t('FindAndReplacePage.writeUp.whyOnlineP2')}</p>
      <p>{t('FindAndReplacePage.writeUp.whyOnlineP3')}</p>

      <h2>{t('FindAndReplacePage.writeUp.edgeCasesTitle')}</h2>
      <p>{t('FindAndReplacePage.writeUp.edgeCasesIntro')}</p>
      <ul>
        <li>{t('FindAndReplacePage.writeUp.edgeCasesItem1')}</li>
        <li>{t('FindAndReplacePage.writeUp.edgeCasesItem2')}</li>
        <li>{t('FindAndReplacePage.writeUp.edgeCasesItem3')}</li>
        <li>{t('FindAndReplacePage.writeUp.edgeCasesItem4')}</li>
        <li>{t('FindAndReplacePage.writeUp.edgeCasesItem5')}</li>
      </ul>
      <p>{t('FindAndReplacePage.writeUp.edgeCasesP1')}</p>
      <p>{t('FindAndReplacePage.writeUp.edgeCasesP2')}</p>

      <h2>{t('FindAndReplacePage.writeUp.bestPracticesTitle')}</h2>
      <p>{t('FindAndReplacePage.writeUp.bestPracticesIntro')}</p>
      <ul>
        <li>{t('FindAndReplacePage.writeUp.bestPracticesItem1')}</li>
        <li>{t('FindAndReplacePage.writeUp.bestPracticesItem2')}</li>
        <li>{t('FindAndReplacePage.writeUp.bestPracticesItem3')}</li>
        <li>{t('FindAndReplacePage.writeUp.bestPracticesItem4')}</li>
        <li>{t('FindAndReplacePage.writeUp.bestPracticesItem5')}</li>
      </ul>
      <p>{t('FindAndReplacePage.writeUp.bestPracticesP1')}</p>
      <p>{t('FindAndReplacePage.writeUp.bestPracticesP2')}</p>

      <h2>{t('FindAndReplacePage.writeUp.misunderstoodTitle')}</h2>
      <h3>{t('FindAndReplacePage.writeUp.grammarToolTitle')}</h3>
      <p>{t('FindAndReplacePage.writeUp.grammarToolText')}</p>
      <h3>{t('FindAndReplacePage.writeUp.caseSensitivityTitle')}</h3>
      <p>{t('FindAndReplacePage.writeUp.caseSensitivityText')}</p>
      <h3>{t('FindAndReplacePage.writeUp.wholeWordTitle')}</h3>
      <p>{t('FindAndReplacePage.writeUp.wholeWordText')}</p>
      <h3>{t('FindAndReplacePage.writeUp.literalMatchingTitle')}</h3>
      <p>{t('FindAndReplacePage.writeUp.literalMatchingText')}</p>
      <h3>{t('FindAndReplacePage.writeUp.orderMattersTitle')}</h3>
      <p>{t('FindAndReplacePage.writeUp.orderMattersText')}</p>

      <h2>{t('FindAndReplacePage.writeUp.disclaimerTitle')}</h2>
      <p>{t('FindAndReplacePage.writeUp.disclaimerP1')}</p>
      <p>{t('FindAndReplacePage.writeUp.disclaimerP2')}</p>

      <h2>{t('FindAndReplacePage.writeUp.summaryTitle')}</h2>
      <p>{t('FindAndReplacePage.writeUp.summaryP1')}</p>
      <p>{t('FindAndReplacePage.writeUp.summaryP2')}</p>
      <p>{t('FindAndReplacePage.writeUp.summaryP3')}</p>
      <p>{t('FindAndReplacePage.writeUp.summaryP4')}</p>
    </div>
  </section>
  );
}

export default async function FindAndReplacePage() {
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
    category: t(`FindAndReplacePage.faqs.${key}.category`) || category,
    question: t(`FindAndReplacePage.faqs.${key}.question`),
    answer: t(`FindAndReplacePage.faqs.${key}.answer`),
  }));

  const url = `${siteUrl}/${toolSlug}/`;

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<FindReplaceTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp(t)}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">{t('FindAndReplacePage.faqHeading')}</h2>
          <p className="text-slate-700">
            {t('FindAndReplacePage.faqIntro')}
          </p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
