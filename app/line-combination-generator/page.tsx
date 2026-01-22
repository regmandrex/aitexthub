import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { LineCombinationGeneratorTool } from '@/components/tools/LineCombinationGeneratorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

const toolSlug = 'line-combination-generator';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'General' },
  { key: 'faq2', category: 'General' },
  { key: 'faq3', category: 'Usage' },
  { key: 'faq4', category: 'Input' },
  { key: 'faq5', category: 'Output' },
  { key: 'faq6', category: 'Input' },
  { key: 'faq7', category: 'Input' },
  { key: 'faq8', category: 'Output' },
  { key: 'faq9', category: 'Output' },
  { key: 'faq10', category: 'Output' },
  { key: 'faq11', category: 'Output' },
  { key: 'faq12', category: 'Output' },
  { key: 'faq13', category: 'Output' },
  { key: 'faq14', category: 'Input' },
  { key: 'faq15', category: 'Input' },
  { key: 'faq16', category: 'Usage' },
  { key: 'faq17', category: 'Usage' },
  { key: 'faq18', category: 'Output' },
  { key: 'faq19', category: 'Input' },
  { key: 'faq20', category: 'General' },
  { key: 'faq21', category: 'Privacy' },
  { key: 'faq22', category: 'Technical' },
  { key: 'faq23', category: 'Technical' },
  { key: 'faq24', category: 'Technical' },
  { key: 'faq25', category: 'Output' },
  { key: 'faq26', category: 'Output' },
  { key: 'faq27', category: 'Output' },
  { key: 'faq28', category: 'Input' },
  { key: 'faq29', category: 'Output' },
  { key: 'faq30', category: 'Technical' },
];

// Helper function to create writeUp content using translations
function createWriteUp(t: (key: string) => string) {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>{t('LineCombinationGeneratorPage.writeUp.title')}</h2>
      
      <h2>{t('LineCombinationGeneratorPage.writeUp.introductionTitle')}</h2>
      <p>{t('LineCombinationGeneratorPage.writeUp.introductionP1')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.introductionP2')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.introductionP3')}</p>

      <h2>{t('LineCombinationGeneratorPage.writeUp.whatAreLineCombinationsTitle')}</h2>
      <p>{t('LineCombinationGeneratorPage.writeUp.whatAreLineCombinationsP1')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.whatAreLineCombinationsP2')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.whatAreLineCombinationsP3')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.whatAreLineCombinationsP4')}</p>

      <h2>{t('LineCombinationGeneratorPage.writeUp.howItWorksTitle')}</h2>
      <p>{t('LineCombinationGeneratorPage.writeUp.howItWorksP1')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.howItWorksP2')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.howItWorksP3')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.howItWorksP4')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.howItWorksP5')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.howItWorksP6')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.howItWorksP7')}</p>

      <h2>{t('LineCombinationGeneratorPage.writeUp.useCasesTitle')}</h2>
      <p>{t('LineCombinationGeneratorPage.writeUp.useCasesP1')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.useCasesP2')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.useCasesP3')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.useCasesP4')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.useCasesP5')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.useCasesP6')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.useCasesP7')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.useCasesP8')}</p>

      <h2>{t('LineCombinationGeneratorPage.writeUp.advancedFeaturesTitle')}</h2>
      <p>{t('LineCombinationGeneratorPage.writeUp.advancedFeaturesP1')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.advancedFeaturesP2')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.advancedFeaturesP3')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.advancedFeaturesP4')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.advancedFeaturesP5')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.advancedFeaturesP6')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.advancedFeaturesP7')}</p>

      <h2>{t('LineCombinationGeneratorPage.writeUp.formattingTitle')}</h2>
      <p>{t('LineCombinationGeneratorPage.writeUp.formattingP1')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.formattingP2')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.formattingP3')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.formattingP4')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.formattingP5')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.formattingP6')}</p>

      <h2>{t('LineCombinationGeneratorPage.writeUp.comparisonTitle')}</h2>
      <p>{t('LineCombinationGeneratorPage.writeUp.comparisonP1')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.comparisonP2')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.comparisonP3')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.comparisonP4')}</p>

      <h2>{t('LineCombinationGeneratorPage.writeUp.bestPracticesTitle')}</h2>
      <p>{t('LineCombinationGeneratorPage.writeUp.bestPracticesP1')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.bestPracticesP2')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.bestPracticesP3')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.bestPracticesP4')}</p>

      <h2>{t('LineCombinationGeneratorPage.writeUp.limitationsTitle')}</h2>
      <p>{t('LineCombinationGeneratorPage.writeUp.limitationsP1')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.limitationsP2')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.limitationsP3')}</p>

      <h2>{t('LineCombinationGeneratorPage.writeUp.conclusionTitle')}</h2>
      <p>{t('LineCombinationGeneratorPage.writeUp.conclusionP1')}</p>
      <p>{t('LineCombinationGeneratorPage.writeUp.conclusionP2')}</p>
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
    : tool?.title ?? 'Line Combination Generator';
  const description = t(`Tools.${toolKey}.description`) !== `Tools.${toolKey}.description`
    ? t(`Tools.${toolKey}.description`)
    : tool?.shortDescription ?? 'Generate all possible combinations of lines from your text.';
  const seoTitle = tool?.seoTitle ? (t(`Tools.${toolKey}.seoTitle`) !== `Tools.${toolKey}.seoTitle` ? t(`Tools.${toolKey}.seoTitle`) : tool.seoTitle) : undefined;
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
    locale,
  });
}


export default async function LineCombinationGeneratorPage() {
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
    category: t(`LineCombinationGeneratorPage.faqs.${key}.category`) || category,
    question: t(`LineCombinationGeneratorPage.faqs.${key}.question`),
    answer: t(`LineCombinationGeneratorPage.faqs.${key}.answer`),
  }));

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<LineCombinationGeneratorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp(t)}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">{t('LineCombinationGeneratorPage.faqHeading')}</h2>
          <p className="text-slate-700">
            {t('LineCombinationGeneratorPage.faqIntro')}
          </p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
