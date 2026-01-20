import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { RemoveLineBreaksTool } from '@/components/tools/RemoveLineBreaksTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

const toolSlug = 'remove-line-breaks';

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
  { key: 'faq2', category: 'General' },
  { key: 'faq3', category: 'Technical' },
  { key: 'faq4', category: 'Usage' },
  { key: 'faq5', category: 'Formatting' },
  { key: 'faq6', category: 'Formatting' },
  { key: 'faq7', category: 'Usage' },
  { key: 'faq8', category: 'General' },
  { key: 'faq9', category: 'Technical' },
  { key: 'faq10', category: 'Formatting' },
  { key: 'faq11', category: 'Workflow' },
  { key: 'faq12', category: 'Usage' },
  { key: 'faq13', category: 'Limits' },
  { key: 'faq14', category: 'Technical' },
  { key: 'faq15', category: 'SEO' },
  { key: 'faq16', category: 'Privacy' },
  { key: 'faq17', category: 'Compatibility' },
  { key: 'faq18', category: 'Limits' },
  { key: 'faq19', category: 'Workflow' },
  { key: 'faq20', category: 'Technical' },
  { key: 'faq21', category: 'General' },
  { key: 'faq22', category: 'Workflow' },
];

// Helper function to create writeUp content using translations
function createWriteUp(t: (key: string) => string) {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>{t('RemoveLineBreaksPage.writeUp.title')}</h2>
      <h2>{t('RemoveLineBreaksPage.writeUp.introductionTitle')}</h2>
      <p>{t('RemoveLineBreaksPage.writeUp.introductionP1')}</p>
      <p>{t('RemoveLineBreaksPage.writeUp.introductionP2')}</p>
      <p>{t('RemoveLineBreaksPage.writeUp.introductionP3')}</p>
      <p>{t('RemoveLineBreaksPage.writeUp.introductionP4')}</p>

      <h2>{t('RemoveLineBreaksPage.writeUp.whatIsTitle')}</h2>
      <p>{t('RemoveLineBreaksPage.writeUp.whatIsP1')}</p>
      <p>{t('RemoveLineBreaksPage.writeUp.whatIsP2')}</p>
      <p>{t('RemoveLineBreaksPage.writeUp.whatIsP3')}</p>

      <h2>{t('RemoveLineBreaksPage.writeUp.whyMattersTitle')}</h2>
      <p>{t('RemoveLineBreaksPage.writeUp.whyMattersP1')}</p>
      <p>{t('RemoveLineBreaksPage.writeUp.whyMattersP2')}</p>
      <p>{t('RemoveLineBreaksPage.writeUp.whyMattersP3')}</p>
      <p>{t('RemoveLineBreaksPage.writeUp.whyMattersP4')}</p>

      <h2>{t('RemoveLineBreaksPage.writeUp.howWorksTitle')}</h2>
      <p>{t('RemoveLineBreaksPage.writeUp.howWorksP1')}</p>
      <h3>{t('RemoveLineBreaksPage.writeUp.howWorksInputTitle')}</h3>
      <p>{t('RemoveLineBreaksPage.writeUp.howWorksInputP1')}</p>
      <h3>{t('RemoveLineBreaksPage.writeUp.howWorksProcessingTitle')}</h3>
      <p>{t('RemoveLineBreaksPage.writeUp.howWorksProcessingP1')}</p>
      <p>{t('RemoveLineBreaksPage.writeUp.howWorksProcessingP2')}</p>
      <p>{t('RemoveLineBreaksPage.writeUp.howWorksProcessingP3')}</p>
      <h3>{t('RemoveLineBreaksPage.writeUp.howWorksOutputTitle')}</h3>
      <p>{t('RemoveLineBreaksPage.writeUp.howWorksOutputP1')}</p>

      <h2>{t('RemoveLineBreaksPage.writeUp.commonProblemsTitle')}</h2>
      <p>{t('RemoveLineBreaksPage.writeUp.commonProblemsP1')}</p>
      <ul>
        <li>{t('RemoveLineBreaksPage.writeUp.commonProblemsItem1')}</li>
        <li>{t('RemoveLineBreaksPage.writeUp.commonProblemsItem2')}</li>
        <li>{t('RemoveLineBreaksPage.writeUp.commonProblemsItem3')}</li>
        <li>{t('RemoveLineBreaksPage.writeUp.commonProblemsItem4')}</li>
        <li>{t('RemoveLineBreaksPage.writeUp.commonProblemsItem5')}</li>
        <li>{t('RemoveLineBreaksPage.writeUp.commonProblemsItem6')}</li>
      </ul>
      <p>{t('RemoveLineBreaksPage.writeUp.commonProblemsP2')}</p>
      <p>{t('RemoveLineBreaksPage.writeUp.commonProblemsP3')}</p>

      <h2>{t('RemoveLineBreaksPage.writeUp.supportedSourcesTitle')}</h2>
      <p>{t('RemoveLineBreaksPage.writeUp.supportedSourcesP1')}</p>
      <h3>{t('RemoveLineBreaksPage.writeUp.supportedSourcesWebTitle')}</h3>
      <p>{t('RemoveLineBreaksPage.writeUp.supportedSourcesWebP1')}</p>
      <h3>{t('RemoveLineBreaksPage.writeUp.supportedSourcesPdfTitle')}</h3>
      <p>{t('RemoveLineBreaksPage.writeUp.supportedSourcesPdfP1')}</p>
      <h3>{t('RemoveLineBreaksPage.writeUp.supportedSourcesWordTitle')}</h3>
      <p>{t('RemoveLineBreaksPage.writeUp.supportedSourcesWordP1')}</p>
      <h3>{t('RemoveLineBreaksPage.writeUp.supportedSourcesSpreadsheetTitle')}</h3>
      <p>{t('RemoveLineBreaksPage.writeUp.supportedSourcesSpreadsheetP1')}</p>
      <h3>{t('RemoveLineBreaksPage.writeUp.supportedSourcesOcrTitle')}</h3>
      <p>{t('RemoveLineBreaksPage.writeUp.supportedSourcesOcrP1')}</p>
      <h3>{t('RemoveLineBreaksPage.writeUp.supportedSourcesEmailTitle')}</h3>
      <p>{t('RemoveLineBreaksPage.writeUp.supportedSourcesEmailP1')}</p>
      <h3>{t('RemoveLineBreaksPage.writeUp.supportedSourcesAiTitle')}</h3>
      <p>{t('RemoveLineBreaksPage.writeUp.supportedSourcesAiP1')}</p>
      <h3>{t('RemoveLineBreaksPage.writeUp.supportedSourcesCodeTitle')}</h3>
      <p>{t('RemoveLineBreaksPage.writeUp.supportedSourcesCodeP1')}</p>

      <h2>{t('RemoveLineBreaksPage.writeUp.whatNotDoTitle')}</h2>
      <p>{t('RemoveLineBreaksPage.writeUp.whatNotDoP1')}</p>
      <ul>
        <li>{t('RemoveLineBreaksPage.writeUp.whatNotDoItem1')}</li>
        <li>{t('RemoveLineBreaksPage.writeUp.whatNotDoItem2')}</li>
        <li>{t('RemoveLineBreaksPage.writeUp.whatNotDoItem3')}</li>
        <li>{t('RemoveLineBreaksPage.writeUp.whatNotDoItem4')}</li>
        <li>{t('RemoveLineBreaksPage.writeUp.whatNotDoItem5')}</li>
      </ul>
      <p>{t('RemoveLineBreaksPage.writeUp.whatNotDoP2')}</p>

      <h2>{t('RemoveLineBreaksPage.writeUp.privacyTitle')}</h2>
      <p>{t('RemoveLineBreaksPage.writeUp.privacyP1')}</p>
      <p>{t('RemoveLineBreaksPage.writeUp.privacyP2')}</p>

      <h2>{t('RemoveLineBreaksPage.writeUp.professionalUseCasesTitle')}</h2>
      <p>{t('RemoveLineBreaksPage.writeUp.professionalUseCasesP1')}</p>
      <h3>{t('RemoveLineBreaksPage.writeUp.professionalUseCasesWritersTitle')}</h3>
      <p>{t('RemoveLineBreaksPage.writeUp.professionalUseCasesWritersP1')}</p>
      <h3>{t('RemoveLineBreaksPage.writeUp.professionalUseCasesDevelopersTitle')}</h3>
      <p>{t('RemoveLineBreaksPage.writeUp.professionalUseCasesDevelopersP1')}</p>
      <h3>{t('RemoveLineBreaksPage.writeUp.professionalUseCasesOperationsTitle')}</h3>
      <p>{t('RemoveLineBreaksPage.writeUp.professionalUseCasesOperationsP1')}</p>
      <h3>{t('RemoveLineBreaksPage.writeUp.professionalUseCasesMarketingTitle')}</h3>
      <p>{t('RemoveLineBreaksPage.writeUp.professionalUseCasesMarketingP1')}</p>
      <h3>{t('RemoveLineBreaksPage.writeUp.professionalUseCasesLegalTitle')}</h3>
      <p>{t('RemoveLineBreaksPage.writeUp.professionalUseCasesLegalP1')}</p>
      <p>{t('RemoveLineBreaksPage.writeUp.professionalUseCasesP2')}</p>

      <h2>{t('RemoveLineBreaksPage.writeUp.educationalUseCasesTitle')}</h2>
      <p>{t('RemoveLineBreaksPage.writeUp.educationalUseCasesP1')}</p>
      <p>{t('RemoveLineBreaksPage.writeUp.educationalUseCasesP2')}</p>
      <p>{t('RemoveLineBreaksPage.writeUp.educationalUseCasesP3')}</p>

      <h2>{t('RemoveLineBreaksPage.writeUp.publishingSeoTitle')}</h2>
      <p>{t('RemoveLineBreaksPage.writeUp.publishingSeoP1')}</p>
      <p>{t('RemoveLineBreaksPage.writeUp.publishingSeoP2')}</p>
      <p>{t('RemoveLineBreaksPage.writeUp.publishingSeoP3')}</p>

      <h2>{t('RemoveLineBreaksPage.writeUp.accessibilityTitle')}</h2>
      <p>{t('RemoveLineBreaksPage.writeUp.accessibilityP1')}</p>
      <p>{t('RemoveLineBreaksPage.writeUp.accessibilityP2')}</p>
      <p>{t('RemoveLineBreaksPage.writeUp.accessibilityP3')}</p>

      <h2>{t('RemoveLineBreaksPage.writeUp.whyOnlineToolTitle')}</h2>
      <p>{t('RemoveLineBreaksPage.writeUp.whyOnlineToolP1')}</p>
      <p>{t('RemoveLineBreaksPage.writeUp.whyOnlineToolP2')}</p>

      <h2>{t('RemoveLineBreaksPage.writeUp.edgeCasesTitle')}</h2>
      <p>{t('RemoveLineBreaksPage.writeUp.edgeCasesP1')}</p>
      <ul>
        <li>{t('RemoveLineBreaksPage.writeUp.edgeCasesItem1')}</li>
        <li>{t('RemoveLineBreaksPage.writeUp.edgeCasesItem2')}</li>
        <li>{t('RemoveLineBreaksPage.writeUp.edgeCasesItem3')}</li>
        <li>{t('RemoveLineBreaksPage.writeUp.edgeCasesItem4')}</li>
        <li>{t('RemoveLineBreaksPage.writeUp.edgeCasesItem5')}</li>
      </ul>
      <p>{t('RemoveLineBreaksPage.writeUp.edgeCasesP2')}</p>
      <p>{t('RemoveLineBreaksPage.writeUp.edgeCasesP3')}</p>

      <h2>{t('RemoveLineBreaksPage.writeUp.bestPracticesTitle')}</h2>
      <p>{t('RemoveLineBreaksPage.writeUp.bestPracticesP1')}</p>
      <ul>
        <li>{t('RemoveLineBreaksPage.writeUp.bestPracticesItem1')}</li>
        <li>{t('RemoveLineBreaksPage.writeUp.bestPracticesItem2')}</li>
        <li>{t('RemoveLineBreaksPage.writeUp.bestPracticesItem3')}</li>
        <li>{t('RemoveLineBreaksPage.writeUp.bestPracticesItem4')}</li>
        <li>{t('RemoveLineBreaksPage.writeUp.bestPracticesItem5')}</li>
      </ul>
      <p>{t('RemoveLineBreaksPage.writeUp.bestPracticesP2')}</p>
      <p>{t('RemoveLineBreaksPage.writeUp.bestPracticesP3')}</p>

      <h2>{t('RemoveLineBreaksPage.writeUp.misunderstoodTitle')}</h2>
      <h3>{t('RemoveLineBreaksPage.writeUp.misunderstoodHardWrapsTitle')}</h3>
      <p>{t('RemoveLineBreaksPage.writeUp.misunderstoodHardWrapsP1')}</p>
      <h3>{t('RemoveLineBreaksPage.writeUp.misunderstoodPreserveTitle')}</h3>
      <p>{t('RemoveLineBreaksPage.writeUp.misunderstoodPreserveP1')}</p>
      <h3>{t('RemoveLineBreaksPage.writeUp.misunderstoodReplacingTitle')}</h3>
      <p>{t('RemoveLineBreaksPage.writeUp.misunderstoodReplacingP1')}</p>
      <h3>{t('RemoveLineBreaksPage.writeUp.misunderstoodCollapsingTitle')}</h3>
      <p>{t('RemoveLineBreaksPage.writeUp.misunderstoodCollapsingP1')}</p>
      <h3>{t('RemoveLineBreaksPage.writeUp.misunderstoodDeterministicTitle')}</h3>
      <p>{t('RemoveLineBreaksPage.writeUp.misunderstoodDeterministicP1')}</p>
      <h3>{t('RemoveLineBreaksPage.writeUp.misunderstoodRewritingTitle')}</h3>
      <p>{t('RemoveLineBreaksPage.writeUp.misunderstoodRewritingP1')}</p>

      <h2>{t('RemoveLineBreaksPage.writeUp.responsibleUseTitle')}</h2>
      <p>{t('RemoveLineBreaksPage.writeUp.responsibleUseP1')}</p>

      <h2>{t('RemoveLineBreaksPage.writeUp.finalSummaryTitle')}</h2>
      <p>{t('RemoveLineBreaksPage.writeUp.finalSummaryP1')}</p>
      <p>{t('RemoveLineBreaksPage.writeUp.finalSummaryP2')}</p>
      <p>{t('RemoveLineBreaksPage.writeUp.finalSummaryP3')}</p>
      <p>{t('RemoveLineBreaksPage.writeUp.finalSummaryP4')}</p>
    </div>
  </section>
  );
}

export default async function RemoveLineBreaksPage() {
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

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<RemoveLineBreaksTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp(t)}

        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">{t('RemoveLineBreaksPage.faqHeading')}</h2>
          <p className="text-slate-700">
            {t('RemoveLineBreaksPage.faqIntro')}
          </p>
        </div>

        {/* Create translated FAQs from translation keys */}
        {(() => {
          const pageFaqs: FaqItem[] = faqKeys.map(({ key, category }) => ({
            category: t(`RemoveLineBreaksPage.faqs.${key}.category`) || category,
            question: t(`RemoveLineBreaksPage.faqs.${key}.question`),
            answer: t(`RemoveLineBreaksPage.faqs.${key}.answer`),
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
