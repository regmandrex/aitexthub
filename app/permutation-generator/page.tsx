import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { PermutationGeneratorTool } from '@/components/tools/PermutationGeneratorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

const toolSlug = 'permutation-generator';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'General' },
  { key: 'faq2', category: 'General' },
  { key: 'faq3', category: 'General' },
  { key: 'faq4', category: 'Technical' },
  { key: 'faq5', category: 'General' },
  { key: 'faq6', category: 'General' },
  { key: 'faq7', category: 'Input' },
  { key: 'faq8', category: 'Input' },
  { key: 'faq9', category: 'Input' },
  { key: 'faq10', category: 'Input' },
  { key: 'faq11', category: 'Output' },
  { key: 'faq12', category: 'Output' },
  { key: 'faq13', category: 'Output' },
  { key: 'faq14', category: 'Output' },
  { key: 'faq15', category: 'Output' },
  { key: 'faq16', category: 'Output' },
  { key: 'faq17', category: 'Input' },
  { key: 'faq18', category: 'Input' },
  { key: 'faq19', category: 'Technical' },
  { key: 'faq20', category: 'Usage' },
  { key: 'faq21', category: 'Usage' },
  { key: 'faq22', category: 'Security' },
  { key: 'faq23', category: 'General' },
  { key: 'faq24', category: 'Input' },
  { key: 'faq25', category: 'Technical' },
  { key: 'faq26', category: 'Privacy' },
  { key: 'faq27', category: 'Technical' },
  { key: 'faq28', category: 'Technical' },
  { key: 'faq29', category: 'Technical' },
  { key: 'faq30', category: 'Technical' },
  { key: 'faq31', category: 'Output' },
  { key: 'faq32', category: 'Input' },
  { key: 'faq33', category: 'Technical' },
  { key: 'faq34', category: 'Technical' },
];

// Helper function to create writeUp content using translations
function createWriteUp(t: (key: string) => string) {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>{t('PermutationGeneratorPage.writeUp.title')}</h2>
      
      <h2>{t('PermutationGeneratorPage.writeUp.introductionTitle')}</h2>
      <p>{t('PermutationGeneratorPage.writeUp.introductionP1')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.introductionP2')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.introductionP3')}</p>

      <h2>{t('PermutationGeneratorPage.writeUp.whatArePermutationsTitle')}</h2>
      <p>{t('PermutationGeneratorPage.writeUp.whatArePermutationsP1')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.whatArePermutationsP2')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.whatArePermutationsP3')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.whatArePermutationsP4')}</p>

      <h2>{t('PermutationGeneratorPage.writeUp.howItWorksTitle')}</h2>
      <p>{t('PermutationGeneratorPage.writeUp.howItWorksP1')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.howItWorksP2')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.howItWorksP3')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.howItWorksP4')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.howItWorksP5')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.howItWorksP6')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.howItWorksP7')}</p>

      <h2>{t('PermutationGeneratorPage.writeUp.mathematicalFoundationTitle')}</h2>
      <p>{t('PermutationGeneratorPage.writeUp.mathematicalFoundationP1')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.mathematicalFoundationP2')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.mathematicalFoundationP3')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.mathematicalFoundationP4')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.mathematicalFoundationP5')}</p>

      <h2>{t('PermutationGeneratorPage.writeUp.useCasesTitle')}</h2>
      <p>{t('PermutationGeneratorPage.writeUp.useCasesP1')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.useCasesP2')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.useCasesP3')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.useCasesP4')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.useCasesP5')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.useCasesP6')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.useCasesP7')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.useCasesP8')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.useCasesP9')}</p>

      <h2>{t('PermutationGeneratorPage.writeUp.fullVsPartialTitle')}</h2>
      <p>{t('PermutationGeneratorPage.writeUp.fullVsPartialP1')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.fullVsPartialP2')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.fullVsPartialP3')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.fullVsPartialP4')}</p>

      <h2>{t('PermutationGeneratorPage.writeUp.advancedFeaturesTitle')}</h2>
      <p>{t('PermutationGeneratorPage.writeUp.advancedFeaturesP1')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.advancedFeaturesP2')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.advancedFeaturesP3')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.advancedFeaturesP4')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.advancedFeaturesP5')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.advancedFeaturesP6')}</p>

      <h2>{t('PermutationGeneratorPage.writeUp.bestPracticesTitle')}</h2>
      <p>{t('PermutationGeneratorPage.writeUp.bestPracticesP1')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.bestPracticesP2')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.bestPracticesP3')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.bestPracticesP4')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.bestPracticesP5')}</p>

      <h2>{t('PermutationGeneratorPage.writeUp.securityTitle')}</h2>
      <p>{t('PermutationGeneratorPage.writeUp.securityP1')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.securityP2')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.securityP3')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.securityP4')}</p>

      <h2>{t('PermutationGeneratorPage.writeUp.limitationsTitle')}</h2>
      <p>{t('PermutationGeneratorPage.writeUp.limitationsP1')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.limitationsP2')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.limitationsP3')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.limitationsP4')}</p>

      <h2>{t('PermutationGeneratorPage.writeUp.comparisonTitle')}</h2>
      <p>{t('PermutationGeneratorPage.writeUp.comparisonP1')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.comparisonP2')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.comparisonP3')}</p>

      <h2>{t('PermutationGeneratorPage.writeUp.conclusionTitle')}</h2>
      <p>{t('PermutationGeneratorPage.writeUp.conclusionP1')}</p>
      <p>{t('PermutationGeneratorPage.writeUp.conclusionP2')}</p>
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
    : tool?.title ?? 'Permutation Generator';
  const description = t(`Tools.${toolKey}.description`) !== `Tools.${toolKey}.description`
    ? t(`Tools.${toolKey}.description`)
    : tool?.shortDescription ?? 'Generate all possible permutations where order matters.';
  const seoTitle = tool?.seoTitle ? (t(`Tools.${toolKey}.seoTitle`) !== `Tools.${toolKey}.seoTitle` ? t(`Tools.${toolKey}.seoTitle`) : tool.seoTitle) : undefined;
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
    locale,
  });
}


export default async function PermutationGeneratorPage() {
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
    category: t(`PermutationGeneratorPage.faqs.${key}.category`) || category,
    question: t(`PermutationGeneratorPage.faqs.${key}.question`),
    answer: t(`PermutationGeneratorPage.faqs.${key}.answer`),
  }));

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<PermutationGeneratorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp(t)}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">{t('PermutationGeneratorPage.faqHeading')}</h2>
          <p className="text-slate-700">
            {t('PermutationGeneratorPage.faqIntro')}
          </p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
