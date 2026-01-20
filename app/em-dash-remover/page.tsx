import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { EmDashRemoverTool } from '@/components/tools/EmDashRemoverTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

const toolSlug = 'em-dash-remover';

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
  { key: 'faq3', category: 'Technical' },
  { key: 'faq4', category: 'Formatting' },
  { key: 'faq5', category: 'Usage' },
  { key: 'faq6', category: 'Formatting' },
  { key: 'faq7', category: 'Limits' },
  { key: 'faq8', category: 'General' },
  { key: 'faq9', category: 'Technical' },
  { key: 'faq10', category: 'Limits' },
  { key: 'faq11', category: 'Limits' },
  { key: 'faq12', category: 'Workflow' },
  { key: 'faq13', category: 'General' },
  { key: 'faq14', category: 'Professional' },
  { key: 'faq15', category: 'Academic' },
  { key: 'faq16', category: 'SEO' },
  { key: 'faq17', category: 'Accessibility' },
  { key: 'faq18', category: 'Privacy' },
  { key: 'faq19', category: 'Compatibility' },
  { key: 'faq20', category: 'Technical' },
  { key: 'faq21', category: 'Usage' },
  { key: 'faq22', category: 'Responsible Use' },
];

function createWriteUp(t: (key: string) => string) {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>{t('EmDashRemoverPage.writeUp.title')}</h2>
      <p>{t('EmDashRemoverPage.writeUp.intro')}</p>

      <h2>{t('EmDashRemoverPage.writeUp.introductionTitle')}</h2>
      <p>{t('EmDashRemoverPage.writeUp.introductionP1')}</p>
      <p>{t('EmDashRemoverPage.writeUp.introductionP2')}</p>
      <p>{t('EmDashRemoverPage.writeUp.introductionP3')}</p>
      <p>{t('EmDashRemoverPage.writeUp.introductionP4')}</p>

      <h2>{t('EmDashRemoverPage.writeUp.whatIsTitle')}</h2>
      <p>{t('EmDashRemoverPage.writeUp.whatIsP1')}</p>
      <p>{t('EmDashRemoverPage.writeUp.whatIsP2')}</p>
      <p>{t('EmDashRemoverPage.writeUp.whatIsP3')}</p>
      <p>{t('EmDashRemoverPage.writeUp.whatIsP4')}</p>

      <h2>{t('EmDashRemoverPage.writeUp.whyMattersTitle')}</h2>
      <p>{t('EmDashRemoverPage.writeUp.whyMattersP1')}</p>
      <p>{t('EmDashRemoverPage.writeUp.whyMattersP2')}</p>
      <p>{t('EmDashRemoverPage.writeUp.whyMattersP3')}</p>
      <p>{t('EmDashRemoverPage.writeUp.whyMattersP4')}</p>

      <h2>{t('EmDashRemoverPage.writeUp.howWorksTitle')}</h2>
      <h3>{t('EmDashRemoverPage.writeUp.step1Title')}</h3>
      <p>{t('EmDashRemoverPage.writeUp.step1Text')}</p>
      <h3>{t('EmDashRemoverPage.writeUp.step2Title')}</h3>
      <p>{t('EmDashRemoverPage.writeUp.step2Text')}</p>
      <h3>{t('EmDashRemoverPage.writeUp.step3Title')}</h3>
      <p>{t('EmDashRemoverPage.writeUp.step3Text')}</p>
      <h3>{t('EmDashRemoverPage.writeUp.step4Title')}</h3>
      <p>{t('EmDashRemoverPage.writeUp.step4P1')}</p>
      <p>{t('EmDashRemoverPage.writeUp.step4P2')}</p>

      <h2>{t('EmDashRemoverPage.writeUp.commonProblemsTitle')}</h2>
      <p>{t('EmDashRemoverPage.writeUp.commonProblemsIntro')}</p>
      <ul>
        <li>{t('EmDashRemoverPage.writeUp.commonProblemsItem1')}</li>
        <li>{t('EmDashRemoverPage.writeUp.commonProblemsItem2')}</li>
        <li>{t('EmDashRemoverPage.writeUp.commonProblemsItem3')}</li>
        <li>{t('EmDashRemoverPage.writeUp.commonProblemsItem4')}</li>
        <li>{t('EmDashRemoverPage.writeUp.commonProblemsItem5')}</li>
      </ul>
      <p>{t('EmDashRemoverPage.writeUp.commonProblemsP1')}</p>
      <p>{t('EmDashRemoverPage.writeUp.commonProblemsP2')}</p>

      <h2>{t('EmDashRemoverPage.writeUp.supportedSourcesTitle')}</h2>
      <p>{t('EmDashRemoverPage.writeUp.supportedSourcesP1')}</p>
      <h3>{t('EmDashRemoverPage.writeUp.webCmsTitle')}</h3>
      <p>{t('EmDashRemoverPage.writeUp.webCmsText')}</p>
      <h3>{t('EmDashRemoverPage.writeUp.pdfTitle')}</h3>
      <p>{t('EmDashRemoverPage.writeUp.pdfText')}</p>
      <h3>{t('EmDashRemoverPage.writeUp.wordTitle')}</h3>
      <p>{t('EmDashRemoverPage.writeUp.wordText')}</p>
      <h3>{t('EmDashRemoverPage.writeUp.emailsTitle')}</h3>
      <p>{t('EmDashRemoverPage.writeUp.emailsText')}</p>
      <h3>{t('EmDashRemoverPage.writeUp.aiTitle')}</h3>
      <p>{t('EmDashRemoverPage.writeUp.aiText')}</p>
      <h3>{t('EmDashRemoverPage.writeUp.chatTitle')}</h3>
      <p>{t('EmDashRemoverPage.writeUp.chatText')}</p>
      <p>{t('EmDashRemoverPage.writeUp.supportedSourcesP2')}</p>

      <h2>{t('EmDashRemoverPage.writeUp.doesNotDoTitle')}</h2>
      <p>{t('EmDashRemoverPage.writeUp.doesNotDoIntro')}</p>
      <ul>
        <li>{t('EmDashRemoverPage.writeUp.doesNotDoItem1')}</li>
        <li>{t('EmDashRemoverPage.writeUp.doesNotDoItem2')}</li>
        <li>{t('EmDashRemoverPage.writeUp.doesNotDoItem3')}</li>
        <li>{t('EmDashRemoverPage.writeUp.doesNotDoItem4')}</li>
        <li>{t('EmDashRemoverPage.writeUp.doesNotDoItem5')}</li>
      </ul>
      <p>{t('EmDashRemoverPage.writeUp.doesNotDoP1')}</p>

      <h2>{t('EmDashRemoverPage.writeUp.privacyTitle')}</h2>
      <p>{t('EmDashRemoverPage.writeUp.privacyP1')}</p>
      <p>{t('EmDashRemoverPage.writeUp.privacyP2')}</p>
      <p>{t('EmDashRemoverPage.writeUp.privacyP3')}</p>

      <h2>{t('EmDashRemoverPage.writeUp.professionalTitle')}</h2>
      <p>{t('EmDashRemoverPage.writeUp.professionalIntro')}</p>
      <h3>{t('EmDashRemoverPage.writeUp.editorsTitle')}</h3>
      <p>{t('EmDashRemoverPage.writeUp.editorsText')}</p>
      <h3>{t('EmDashRemoverPage.writeUp.developersTitle')}</h3>
      <p>{t('EmDashRemoverPage.writeUp.developersText')}</p>
      <h3>{t('EmDashRemoverPage.writeUp.marketingTitle')}</h3>
      <p>{t('EmDashRemoverPage.writeUp.marketingText')}</p>
      <h3>{t('EmDashRemoverPage.writeUp.legalTitle')}</h3>
      <p>{t('EmDashRemoverPage.writeUp.legalText')}</p>
      <p>{t('EmDashRemoverPage.writeUp.professionalP1')}</p>
      <p>{t('EmDashRemoverPage.writeUp.professionalP2')}</p>

      <h2>{t('EmDashRemoverPage.writeUp.educationalTitle')}</h2>
      <p>{t('EmDashRemoverPage.writeUp.educationalP1')}</p>
      <p>{t('EmDashRemoverPage.writeUp.educationalP2')}</p>

      <h2>{t('EmDashRemoverPage.writeUp.publishingTitle')}</h2>
      <p>{t('EmDashRemoverPage.writeUp.publishingP1')}</p>
      <p>{t('EmDashRemoverPage.writeUp.publishingP2')}</p>
      <p>{t('EmDashRemoverPage.writeUp.publishingP3')}</p>

      <h2>{t('EmDashRemoverPage.writeUp.accessibilityTitle')}</h2>
      <p>{t('EmDashRemoverPage.writeUp.accessibilityP1')}</p>
      <p>{t('EmDashRemoverPage.writeUp.accessibilityP2')}</p>
      <p>{t('EmDashRemoverPage.writeUp.accessibilityP3')}</p>

      <h2>{t('EmDashRemoverPage.writeUp.whyOnlineTitle')}</h2>
      <p>{t('EmDashRemoverPage.writeUp.whyOnlineP1')}</p>
      <p>{t('EmDashRemoverPage.writeUp.whyOnlineP2')}</p>
      <p>{t('EmDashRemoverPage.writeUp.whyOnlineP3')}</p>

      <h2>{t('EmDashRemoverPage.writeUp.edgeCasesTitle')}</h2>
      <p>{t('EmDashRemoverPage.writeUp.edgeCasesIntro')}</p>
      <ul>
        <li>{t('EmDashRemoverPage.writeUp.edgeCasesItem1')}</li>
        <li>{t('EmDashRemoverPage.writeUp.edgeCasesItem2')}</li>
        <li>{t('EmDashRemoverPage.writeUp.edgeCasesItem3')}</li>
        <li>{t('EmDashRemoverPage.writeUp.edgeCasesItem4')}</li>
        <li>{t('EmDashRemoverPage.writeUp.edgeCasesItem5')}</li>
      </ul>
      <p>{t('EmDashRemoverPage.writeUp.edgeCasesP1')}</p>

      <h2>{t('EmDashRemoverPage.writeUp.bestPracticesTitle')}</h2>
      <p>{t('EmDashRemoverPage.writeUp.bestPracticesIntro')}</p>
      <ul>
        <li>{t('EmDashRemoverPage.writeUp.bestPracticesItem1')}</li>
        <li>{t('EmDashRemoverPage.writeUp.bestPracticesItem2')}</li>
        <li>{t('EmDashRemoverPage.writeUp.bestPracticesItem3')}</li>
        <li>{t('EmDashRemoverPage.writeUp.bestPracticesItem4')}</li>
        <li>{t('EmDashRemoverPage.writeUp.bestPracticesItem5')}</li>
      </ul>
      <p>{t('EmDashRemoverPage.writeUp.bestPracticesP1')}</p>

      <h2>{t('EmDashRemoverPage.writeUp.misunderstoodTitle')}</h2>
      <h3>{t('EmDashRemoverPage.writeUp.notRewriteTitle')}</h3>
      <p>{t('EmDashRemoverPage.writeUp.notRewriteText')}</p>
      <h3>{t('EmDashRemoverPage.writeUp.differentCharsTitle')}</h3>
      <p>{t('EmDashRemoverPage.writeUp.differentCharsText')}</p>
      <h3>{t('EmDashRemoverPage.writeUp.rhythmTitle')}</h3>
      <p>{t('EmDashRemoverPage.writeUp.rhythmText')}</p>
      <h3>{t('EmDashRemoverPage.writeUp.plainTextLimitsTitle')}</h3>
      <p>{t('EmDashRemoverPage.writeUp.plainTextLimitsText')}</p>

      <h2>{t('EmDashRemoverPage.writeUp.disclaimerTitle')}</h2>
      <p>{t('EmDashRemoverPage.writeUp.disclaimerP1')}</p>
      <p>{t('EmDashRemoverPage.writeUp.disclaimerP2')}</p>

      <h2>{t('EmDashRemoverPage.writeUp.summaryTitle')}</h2>
      <p>{t('EmDashRemoverPage.writeUp.summaryP1')}</p>
      <p>{t('EmDashRemoverPage.writeUp.summaryP2')}</p>
      <p>{t('EmDashRemoverPage.writeUp.summaryP3')}</p>
    </div>
  </section>
  );
}

export default async function EmDashRemoverPage() {
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

  const url = `${siteUrl}/${toolSlug}/`;

  // Create translated FAQs from translation keys
  const pageFaqs: FaqItem[] = faqKeys.map(({ key, category }) => ({
    category: t(`EmDashRemoverPage.faqs.${key}.category`) || category,
    question: t(`EmDashRemoverPage.faqs.${key}.question`),
    answer: t(`EmDashRemoverPage.faqs.${key}.answer`),
  }));

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<EmDashRemoverTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp(t)}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">{t('EmDashRemoverPage.faqHeading')}</h2>
          <p className="text-slate-700">
            {t('EmDashRemoverPage.faqIntro')}
          </p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
