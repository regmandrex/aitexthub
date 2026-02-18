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

const toolSlug = 'remove-line-breaks';

export async function generateMetadata(): Promise<Metadata> {
  
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = "Remove Line Breaks";
  const description = "Join wrapped lines into clean paragraphs by removing line breaks.";
  const seoTitle = "Remove Line Breaks - Join lines into paragraphs";
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
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
// Note: writeUp content needs to be hardcoded from en.json if needed
// Removed createWriteUp function
function createWriteUp() {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>'RemoveLineBreaksPage.writeUp.title'</h2>
      <h2>'RemoveLineBreaksPage.writeUp.introductionTitle'</h2>
      <p>'RemoveLineBreaksPage.writeUp.introductionP1'</p>
      <p>'RemoveLineBreaksPage.writeUp.introductionP2'</p>
      <p>'RemoveLineBreaksPage.writeUp.introductionP3'</p>
      <p>'RemoveLineBreaksPage.writeUp.introductionP4'</p>

      <h2>'RemoveLineBreaksPage.writeUp.whatIsTitle'</h2>
      <p>'RemoveLineBreaksPage.writeUp.whatIsP1'</p>
      <p>'RemoveLineBreaksPage.writeUp.whatIsP2'</p>
      <p>'RemoveLineBreaksPage.writeUp.whatIsP3'</p>

      <h2>'RemoveLineBreaksPage.writeUp.whyMattersTitle'</h2>
      <p>'RemoveLineBreaksPage.writeUp.whyMattersP1'</p>
      <p>'RemoveLineBreaksPage.writeUp.whyMattersP2'</p>
      <p>'RemoveLineBreaksPage.writeUp.whyMattersP3'</p>
      <p>'RemoveLineBreaksPage.writeUp.whyMattersP4'</p>

      <h2>'RemoveLineBreaksPage.writeUp.howWorksTitle'</h2>
      <p>'RemoveLineBreaksPage.writeUp.howWorksP1'</p>
      <h3>'RemoveLineBreaksPage.writeUp.howWorksInputTitle'</h3>
      <p>'RemoveLineBreaksPage.writeUp.howWorksInputP1'</p>
      <h3>'RemoveLineBreaksPage.writeUp.howWorksProcessingTitle'</h3>
      <p>'RemoveLineBreaksPage.writeUp.howWorksProcessingP1'</p>
      <p>'RemoveLineBreaksPage.writeUp.howWorksProcessingP2'</p>
      <p>'RemoveLineBreaksPage.writeUp.howWorksProcessingP3'</p>
      <h3>'RemoveLineBreaksPage.writeUp.howWorksOutputTitle'</h3>
      <p>'RemoveLineBreaksPage.writeUp.howWorksOutputP1'</p>

      <h2>'RemoveLineBreaksPage.writeUp.commonProblemsTitle'</h2>
      <p>'RemoveLineBreaksPage.writeUp.commonProblemsP1'</p>
      <ul>
        <li>'RemoveLineBreaksPage.writeUp.commonProblemsItem1'</li>
        <li>'RemoveLineBreaksPage.writeUp.commonProblemsItem2'</li>
        <li>'RemoveLineBreaksPage.writeUp.commonProblemsItem3'</li>
        <li>'RemoveLineBreaksPage.writeUp.commonProblemsItem4'</li>
        <li>'RemoveLineBreaksPage.writeUp.commonProblemsItem5'</li>
        <li>'RemoveLineBreaksPage.writeUp.commonProblemsItem6'</li>
      </ul>
      <p>'RemoveLineBreaksPage.writeUp.commonProblemsP2'</p>
      <p>'RemoveLineBreaksPage.writeUp.commonProblemsP3'</p>

      <h2>'RemoveLineBreaksPage.writeUp.supportedSourcesTitle'</h2>
      <p>'RemoveLineBreaksPage.writeUp.supportedSourcesP1'</p>
      <h3>'RemoveLineBreaksPage.writeUp.supportedSourcesWebTitle'</h3>
      <p>'RemoveLineBreaksPage.writeUp.supportedSourcesWebP1'</p>
      <h3>'RemoveLineBreaksPage.writeUp.supportedSourcesPdfTitle'</h3>
      <p>'RemoveLineBreaksPage.writeUp.supportedSourcesPdfP1'</p>
      <h3>'RemoveLineBreaksPage.writeUp.supportedSourcesWordTitle'</h3>
      <p>'RemoveLineBreaksPage.writeUp.supportedSourcesWordP1'</p>
      <h3>'RemoveLineBreaksPage.writeUp.supportedSourcesSpreadsheetTitle'</h3>
      <p>'RemoveLineBreaksPage.writeUp.supportedSourcesSpreadsheetP1'</p>
      <h3>'RemoveLineBreaksPage.writeUp.supportedSourcesOcrTitle'</h3>
      <p>'RemoveLineBreaksPage.writeUp.supportedSourcesOcrP1'</p>
      <h3>'RemoveLineBreaksPage.writeUp.supportedSourcesEmailTitle'</h3>
      <p>'RemoveLineBreaksPage.writeUp.supportedSourcesEmailP1'</p>
      <h3>'RemoveLineBreaksPage.writeUp.supportedSourcesAiTitle'</h3>
      <p>'RemoveLineBreaksPage.writeUp.supportedSourcesAiP1'</p>
      <h3>'RemoveLineBreaksPage.writeUp.supportedSourcesCodeTitle'</h3>
      <p>'RemoveLineBreaksPage.writeUp.supportedSourcesCodeP1'</p>

      <h2>'RemoveLineBreaksPage.writeUp.whatNotDoTitle'</h2>
      <p>'RemoveLineBreaksPage.writeUp.whatNotDoP1'</p>
      <ul>
        <li>'RemoveLineBreaksPage.writeUp.whatNotDoItem1'</li>
        <li>'RemoveLineBreaksPage.writeUp.whatNotDoItem2'</li>
        <li>'RemoveLineBreaksPage.writeUp.whatNotDoItem3'</li>
        <li>'RemoveLineBreaksPage.writeUp.whatNotDoItem4'</li>
        <li>'RemoveLineBreaksPage.writeUp.whatNotDoItem5'</li>
      </ul>
      <p>'RemoveLineBreaksPage.writeUp.whatNotDoP2'</p>

      <h2>'RemoveLineBreaksPage.writeUp.privacyTitle'</h2>
      <p>'RemoveLineBreaksPage.writeUp.privacyP1'</p>
      <p>'RemoveLineBreaksPage.writeUp.privacyP2'</p>

      <h2>'RemoveLineBreaksPage.writeUp.professionalUseCasesTitle'</h2>
      <p>'RemoveLineBreaksPage.writeUp.professionalUseCasesP1'</p>
      <h3>'RemoveLineBreaksPage.writeUp.professionalUseCasesWritersTitle'</h3>
      <p>'RemoveLineBreaksPage.writeUp.professionalUseCasesWritersP1'</p>
      <h3>'RemoveLineBreaksPage.writeUp.professionalUseCasesDevelopersTitle'</h3>
      <p>'RemoveLineBreaksPage.writeUp.professionalUseCasesDevelopersP1'</p>
      <h3>'RemoveLineBreaksPage.writeUp.professionalUseCasesOperationsTitle'</h3>
      <p>'RemoveLineBreaksPage.writeUp.professionalUseCasesOperationsP1'</p>
      <h3>'RemoveLineBreaksPage.writeUp.professionalUseCasesMarketingTitle'</h3>
      <p>'RemoveLineBreaksPage.writeUp.professionalUseCasesMarketingP1'</p>
      <h3>'RemoveLineBreaksPage.writeUp.professionalUseCasesLegalTitle'</h3>
      <p>'RemoveLineBreaksPage.writeUp.professionalUseCasesLegalP1'</p>
      <p>'RemoveLineBreaksPage.writeUp.professionalUseCasesP2'</p>

      <h2>'RemoveLineBreaksPage.writeUp.educationalUseCasesTitle'</h2>
      <p>'RemoveLineBreaksPage.writeUp.educationalUseCasesP1'</p>
      <p>'RemoveLineBreaksPage.writeUp.educationalUseCasesP2'</p>
      <p>'RemoveLineBreaksPage.writeUp.educationalUseCasesP3'</p>

      <h2>'RemoveLineBreaksPage.writeUp.publishingSeoTitle'</h2>
      <p>'RemoveLineBreaksPage.writeUp.publishingSeoP1'</p>
      <p>'RemoveLineBreaksPage.writeUp.publishingSeoP2'</p>
      <p>'RemoveLineBreaksPage.writeUp.publishingSeoP3'</p>

      <h2>'RemoveLineBreaksPage.writeUp.accessibilityTitle'</h2>
      <p>'RemoveLineBreaksPage.writeUp.accessibilityP1'</p>
      <p>'RemoveLineBreaksPage.writeUp.accessibilityP2'</p>
      <p>'RemoveLineBreaksPage.writeUp.accessibilityP3'</p>

      <h2>'RemoveLineBreaksPage.writeUp.whyOnlineToolTitle'</h2>
      <p>'RemoveLineBreaksPage.writeUp.whyOnlineToolP1'</p>
      <p>'RemoveLineBreaksPage.writeUp.whyOnlineToolP2'</p>

      <h2>'RemoveLineBreaksPage.writeUp.edgeCasesTitle'</h2>
      <p>'RemoveLineBreaksPage.writeUp.edgeCasesP1'</p>
      <ul>
        <li>'RemoveLineBreaksPage.writeUp.edgeCasesItem1'</li>
        <li>'RemoveLineBreaksPage.writeUp.edgeCasesItem2'</li>
        <li>'RemoveLineBreaksPage.writeUp.edgeCasesItem3'</li>
        <li>'RemoveLineBreaksPage.writeUp.edgeCasesItem4'</li>
        <li>'RemoveLineBreaksPage.writeUp.edgeCasesItem5'</li>
      </ul>
      <p>'RemoveLineBreaksPage.writeUp.edgeCasesP2'</p>
      <p>'RemoveLineBreaksPage.writeUp.edgeCasesP3'</p>

      <h2>'RemoveLineBreaksPage.writeUp.bestPracticesTitle'</h2>
      <p>'RemoveLineBreaksPage.writeUp.bestPracticesP1'</p>
      <ul>
        <li>'RemoveLineBreaksPage.writeUp.bestPracticesItem1'</li>
        <li>'RemoveLineBreaksPage.writeUp.bestPracticesItem2'</li>
        <li>'RemoveLineBreaksPage.writeUp.bestPracticesItem3'</li>
        <li>'RemoveLineBreaksPage.writeUp.bestPracticesItem4'</li>
        <li>'RemoveLineBreaksPage.writeUp.bestPracticesItem5'</li>
      </ul>
      <p>'RemoveLineBreaksPage.writeUp.bestPracticesP2'</p>
      <p>'RemoveLineBreaksPage.writeUp.bestPracticesP3'</p>

      <h2>'RemoveLineBreaksPage.writeUp.misunderstoodTitle'</h2>
      <h3>'RemoveLineBreaksPage.writeUp.misunderstoodHardWrapsTitle'</h3>
      <p>'RemoveLineBreaksPage.writeUp.misunderstoodHardWrapsP1'</p>
      <h3>'RemoveLineBreaksPage.writeUp.misunderstoodPreserveTitle'</h3>
      <p>'RemoveLineBreaksPage.writeUp.misunderstoodPreserveP1'</p>
      <h3>'RemoveLineBreaksPage.writeUp.misunderstoodReplacingTitle'</h3>
      <p>'RemoveLineBreaksPage.writeUp.misunderstoodReplacingP1'</p>
      <h3>'RemoveLineBreaksPage.writeUp.misunderstoodCollapsingTitle'</h3>
      <p>'RemoveLineBreaksPage.writeUp.misunderstoodCollapsingP1'</p>
      <h3>'RemoveLineBreaksPage.writeUp.misunderstoodDeterministicTitle'</h3>
      <p>'RemoveLineBreaksPage.writeUp.misunderstoodDeterministicP1'</p>
      <h3>'RemoveLineBreaksPage.writeUp.misunderstoodRewritingTitle'</h3>
      <p>'RemoveLineBreaksPage.writeUp.misunderstoodRewritingP1'</p>

      <h2>'RemoveLineBreaksPage.writeUp.responsibleUseTitle'</h2>
      <p>'RemoveLineBreaksPage.writeUp.responsibleUseP1'</p>

      <h2>'RemoveLineBreaksPage.writeUp.finalSummaryTitle'</h2>
      <p>'RemoveLineBreaksPage.writeUp.finalSummaryP1'</p>
      <p>'RemoveLineBreaksPage.writeUp.finalSummaryP2'</p>
      <p>'RemoveLineBreaksPage.writeUp.finalSummaryP3'</p>
      <p>'RemoveLineBreaksPage.writeUp.finalSummaryP4'</p>
    </div>
  </section>
  );
}

export default async function RemoveLineBreaksPage() {
  
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;

  const url = `${siteUrl}/${toolSlug}/`;

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<RemoveLineBreaksTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {/* Note: writeUp content needs to be hardcoded from en.json if needed */}

        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">'RemoveLineBreaksPage.faqHeading'</h2>
          <p className="text-slate-700">
            'RemoveLineBreaksPage.faqIntro'
          </p>
        </div>

        {/* Create translated FAQs from translation keys */}
        {(() => {
          const pageFaqs: FaqItem[] = []; // Note: FAQs need to be hardcoded from en.json if needed
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
