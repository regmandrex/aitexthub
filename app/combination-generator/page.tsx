import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { CombinationGeneratorTool } from '@/components/tools/CombinationGeneratorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

const toolSlug = 'combination-generator';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'General' },
  { key: 'faq2', category: 'General' },
  { key: 'faq3', category: 'General' },
  { key: 'faq4', category: 'Technical' },
  { key: 'faq5', category: 'Input' },
  { key: 'faq6', category: 'Input' },
  { key: 'faq7', category: 'Input' },
  { key: 'faq8', category: 'Output' },
  { key: 'faq9', category: 'Output' },
  { key: 'faq10', category: 'Output' },
  { key: 'faq11', category: 'Output' },
  { key: 'faq12', category: 'Output' },
  { key: 'faq13', category: 'Output' },
  { key: 'faq14', category: 'Output' },
  { key: 'faq15', category: 'Input' },
  { key: 'faq16', category: 'Input' },
  { key: 'faq17', category: 'Technical' },
  { key: 'faq18', category: 'Usage' },
  { key: 'faq19', category: 'Usage' },
  { key: 'faq20', category: 'Usage' },
  { key: 'faq21', category: 'General' },
  { key: 'faq22', category: 'Input' },
  { key: 'faq23', category: 'Technical' },
  { key: 'faq24', category: 'Privacy' },
  { key: 'faq25', category: 'Technical' },
  { key: 'faq26', category: 'Technical' },
  { key: 'faq27', category: 'Technical' },
  { key: 'faq28', category: 'Technical' },
  { key: 'faq29', category: 'Output' },
  { key: 'faq30', category: 'Input' },
];

// Helper function to create writeUp content using translations
function createWriteUp(t: (key: string) => string) {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>{t('CombinationGeneratorPage.writeUp.title')}</h2>
      
      <h2>{t('CombinationGeneratorPage.writeUp.introductionTitle')}</h2>
      <p>{t('CombinationGeneratorPage.writeUp.introductionP1')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.introductionP2')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.introductionP3')}</p>

      <h2>{t('CombinationGeneratorPage.writeUp.whatAreCombinationsTitle')}</h2>
      <p>{t('CombinationGeneratorPage.writeUp.whatAreCombinationsP1')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.whatAreCombinationsP2')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.whatAreCombinationsP3')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.whatAreCombinationsP4')}</p>

      <h2>{t('CombinationGeneratorPage.writeUp.howItWorksTitle')}</h2>
      <p>{t('CombinationGeneratorPage.writeUp.howItWorksP1')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.howItWorksP2')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.howItWorksP3')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.howItWorksP4')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.howItWorksP5')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.howItWorksP6')}</p>

      <h2>{t('CombinationGeneratorPage.writeUp.mathematicalFoundationTitle')}</h2>
      <p>{t('CombinationGeneratorPage.writeUp.mathematicalFoundationP1')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.mathematicalFoundationP2')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.mathematicalFoundationP3')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.mathematicalFoundationP4')}</p>

      <h2>{t('CombinationGeneratorPage.writeUp.useCasesTitle')}</h2>
      <p>{t('CombinationGeneratorPage.writeUp.useCasesP1')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.useCasesP2')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.useCasesP3')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.useCasesP4')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.useCasesP5')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.useCasesP6')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.useCasesP7')}</p>

      <h2>{t('CombinationGeneratorPage.writeUp.advancedFeaturesTitle')}</h2>
      <p>{t('CombinationGeneratorPage.writeUp.advancedFeaturesP1')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.advancedFeaturesP2')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.advancedFeaturesP3')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.advancedFeaturesP4')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.advancedFeaturesP5')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.advancedFeaturesP6')}</p>

      <h2>{t('CombinationGeneratorPage.writeUp.bestPracticesTitle')}</h2>
      <p>{t('CombinationGeneratorPage.writeUp.bestPracticesP1')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.bestPracticesP2')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.bestPracticesP3')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.bestPracticesP4')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.bestPracticesP5')}</p>

      <h2>{t('CombinationGeneratorPage.writeUp.limitationsTitle')}</h2>
      <p>{t('CombinationGeneratorPage.writeUp.limitationsP1')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.limitationsP2')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.limitationsP3')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.limitationsP4')}</p>

      <h2>{t('CombinationGeneratorPage.writeUp.comparisonTitle')}</h2>
      <p>{t('CombinationGeneratorPage.writeUp.comparisonP1')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.comparisonP2')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.comparisonP3')}</p>

      <h2>{t('CombinationGeneratorPage.writeUp.conclusionTitle')}</h2>
      <p>{t('CombinationGeneratorPage.writeUp.conclusionP1')}</p>
      <p>{t('CombinationGeneratorPage.writeUp.conclusionP2')}</p>
    </div>
  </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = t(`Tools.${toolKey}.title`) !== `Tools.${toolKey}.title` 
    ? t(`Tools.${toolKey}.title`) 
    : tool?.title ?? 'Combination Generator';
  const description = t(`Tools.${toolKey}.description`) !== `Tools.${toolKey}.description`
    ? t(`Tools.${toolKey}.description`)
    : tool?.shortDescription ?? 'Generate all possible combinations from a set of items.';
  const seoTitle = tool?.seoTitle ? (t(`Tools.${toolKey}.seoTitle`) !== `Tools.${toolKey}.seoTitle` ? t(`Tools.${toolKey}.seoTitle`) : tool.seoTitle) : undefined;
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
    locale,
  });
}


export default async function CombinationGeneratorPage() {
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
    category: t(`CombinationGeneratorPage.faqs.${key}.category`) || category,
    question: t(`CombinationGeneratorPage.faqs.${key}.question`),
    answer: t(`CombinationGeneratorPage.faqs.${key}.answer`),
  }));

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<CombinationGeneratorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp(t)}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">{t('CombinationGeneratorPage.faqHeading')}</h2>
          <p className="text-slate-700">
            {t('CombinationGeneratorPage.faqIntro')}
          </p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
