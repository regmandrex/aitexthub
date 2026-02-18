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

const toolSlug = 'find-and-replace';

export async function generateMetadata(): Promise<Metadata> {
  
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = "Find and Replace";
  const description = "Search for text and replace it with custom values, with optional case matching.";
  const seoTitle = "Find and Replace Tool - Bulk text replacement online";
  
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
// Note: writeUp content needs to be hardcoded from en.json if needed
// Removed createWriteUp function
function createWriteUp() {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>'FindAndReplacePage.writeUp.title'</h2>
      <p>'FindAndReplacePage.writeUp.intro'</p>

      <h2>'FindAndReplacePage.writeUp.introductionTitle'</h2>
      <p>'FindAndReplacePage.writeUp.introductionP1'</p>
      <p>'FindAndReplacePage.writeUp.introductionP2'</p>
      <p>'FindAndReplacePage.writeUp.introductionP3'</p>
      <p>'FindAndReplacePage.writeUp.introductionP4'</p>

      <h2>'FindAndReplacePage.writeUp.whatIsTitle'</h2>
      <p>'FindAndReplacePage.writeUp.whatIsP1'</p>
      <p>'FindAndReplacePage.writeUp.whatIsP2'</p>
      <p>'FindAndReplacePage.writeUp.whatIsP3'</p>
      <p>'FindAndReplacePage.writeUp.whatIsP4'</p>

      <h2>'FindAndReplacePage.writeUp.whyMattersTitle'</h2>
      <p>'FindAndReplacePage.writeUp.whyMattersP1'</p>
      <p>'FindAndReplacePage.writeUp.whyMattersP2'</p>
      <p>'FindAndReplacePage.writeUp.whyMattersP3'</p>
      <p>'FindAndReplacePage.writeUp.whyMattersP4'</p>
      <p>'FindAndReplacePage.writeUp.whyMattersP5'</p>

      <h2>'FindAndReplacePage.writeUp.howWorksTitle'</h2>
      <h3>'FindAndReplacePage.writeUp.step1Title'</h3>
      <p>'FindAndReplacePage.writeUp.step1Text'</p>
      <h3>'FindAndReplacePage.writeUp.step2Title'</h3>
      <p>'FindAndReplacePage.writeUp.step2Text'</p>
      <h3>'FindAndReplacePage.writeUp.step3Title'</h3>
      <p>'FindAndReplacePage.writeUp.step3Text'</p>
      <h3>'FindAndReplacePage.writeUp.step4Title'</h3>
      <p>'FindAndReplacePage.writeUp.step4P1'</p>
      <p>'FindAndReplacePage.writeUp.step4P2'</p>
      <h3>'FindAndReplacePage.writeUp.step5Title'</h3>
      <p>'FindAndReplacePage.writeUp.step5P1'</p>
      <p>'FindAndReplacePage.writeUp.step5P2'</p>

      <h2>'FindAndReplacePage.writeUp.commonProblemsTitle'</h2>
      <p>'FindAndReplacePage.writeUp.commonProblemsIntro'</p>
      <ul>
        <li>'FindAndReplacePage.writeUp.commonProblemsItem1'</li>
        <li>'FindAndReplacePage.writeUp.commonProblemsItem2'</li>
        <li>'FindAndReplacePage.writeUp.commonProblemsItem3'</li>
        <li>'FindAndReplacePage.writeUp.commonProblemsItem4'</li>
        <li>'FindAndReplacePage.writeUp.commonProblemsItem5'</li>
      </ul>
      <p>'FindAndReplacePage.writeUp.commonProblemsP1'</p>
      <p>'FindAndReplacePage.writeUp.commonProblemsP2'</p>
      <p>'FindAndReplacePage.writeUp.commonProblemsP3'</p>

      <h2>'FindAndReplacePage.writeUp.supportedSourcesTitle'</h2>
      <p>'FindAndReplacePage.writeUp.supportedSourcesP1'</p>
      <h3>'FindAndReplacePage.writeUp.webPagesTitle'</h3>
      <p>'FindAndReplacePage.writeUp.webPagesText'</p>
      <h3>'FindAndReplacePage.writeUp.pdfTitle'</h3>
      <p>'FindAndReplacePage.writeUp.pdfText'</p>
      <h3>'FindAndReplacePage.writeUp.wordProcessorsTitle'</h3>
      <p>'FindAndReplacePage.writeUp.wordProcessorsText'</p>
      <h3>'FindAndReplacePage.writeUp.aiTitle'</h3>
      <p>'FindAndReplacePage.writeUp.aiText'</p>
      <h3>'FindAndReplacePage.writeUp.emailsTitle'</h3>
      <p>'FindAndReplacePage.writeUp.emailsText'</p>
      <p>'FindAndReplacePage.writeUp.supportedSourcesP2'</p>
      <p>'FindAndReplacePage.writeUp.supportedSourcesP3'</p>

      <h2>'FindAndReplacePage.writeUp.doesNotDoTitle'</h2>
      <p>'FindAndReplacePage.writeUp.doesNotDoIntro'</p>
      <ul>
        <li>'FindAndReplacePage.writeUp.doesNotDoItem1'</li>
        <li>'FindAndReplacePage.writeUp.doesNotDoItem2'</li>
        <li>'FindAndReplacePage.writeUp.doesNotDoItem3'</li>
        <li>'FindAndReplacePage.writeUp.doesNotDoItem4'</li>
        <li>'FindAndReplacePage.writeUp.doesNotDoItem5'</li>
      </ul>
      <p>'FindAndReplacePage.writeUp.doesNotDoP1'</p>
      <p>'FindAndReplacePage.writeUp.doesNotDoP2'</p>

      <h2>'FindAndReplacePage.writeUp.privacyTitle'</h2>
      <p>'FindAndReplacePage.writeUp.privacyP1'</p>
      <p>'FindAndReplacePage.writeUp.privacyP2'</p>
      <p>'FindAndReplacePage.writeUp.privacyP3'</p>

      <h2>'FindAndReplacePage.writeUp.professionalTitle'</h2>
      <p>'FindAndReplacePage.writeUp.professionalIntro'</p>
      <h3>'FindAndReplacePage.writeUp.editorsTitle'</h3>
      <p>'FindAndReplacePage.writeUp.editorsText'</p>
      <h3>'FindAndReplacePage.writeUp.developersTitle'</h3>
      <p>'FindAndReplacePage.writeUp.developersText'</p>
      <h3>'FindAndReplacePage.writeUp.marketingTitle'</h3>
      <p>'FindAndReplacePage.writeUp.marketingText'</p>
      <h3>'FindAndReplacePage.writeUp.analystsTitle'</h3>
      <p>'FindAndReplacePage.writeUp.analystsText'</p>
      <p>'FindAndReplacePage.writeUp.professionalP1'</p>

      <h2>'FindAndReplacePage.writeUp.educationalTitle'</h2>
      <p>'FindAndReplacePage.writeUp.educationalP1'</p>
      <p>'FindAndReplacePage.writeUp.educationalP2'</p>
      <p>'FindAndReplacePage.writeUp.educationalP3'</p>

      <h2>'FindAndReplacePage.writeUp.publishingTitle'</h2>
      <p>'FindAndReplacePage.writeUp.publishingP1'</p>
      <p>'FindAndReplacePage.writeUp.publishingP2'</p>
      <p>'FindAndReplacePage.writeUp.publishingP3'</p>

      <h2>'FindAndReplacePage.writeUp.accessibilityTitle'</h2>
      <p>'FindAndReplacePage.writeUp.accessibilityP1'</p>
      <p>'FindAndReplacePage.writeUp.accessibilityP2'</p>
      <p>'FindAndReplacePage.writeUp.accessibilityP3'</p>

      <h2>'FindAndReplacePage.writeUp.whyOnlineTitle'</h2>
      <p>'FindAndReplacePage.writeUp.whyOnlineP1'</p>
      <p>'FindAndReplacePage.writeUp.whyOnlineP2'</p>
      <p>'FindAndReplacePage.writeUp.whyOnlineP3'</p>

      <h2>'FindAndReplacePage.writeUp.edgeCasesTitle'</h2>
      <p>'FindAndReplacePage.writeUp.edgeCasesIntro'</p>
      <ul>
        <li>'FindAndReplacePage.writeUp.edgeCasesItem1'</li>
        <li>'FindAndReplacePage.writeUp.edgeCasesItem2'</li>
        <li>'FindAndReplacePage.writeUp.edgeCasesItem3'</li>
        <li>'FindAndReplacePage.writeUp.edgeCasesItem4'</li>
        <li>'FindAndReplacePage.writeUp.edgeCasesItem5'</li>
      </ul>
      <p>'FindAndReplacePage.writeUp.edgeCasesP1'</p>
      <p>'FindAndReplacePage.writeUp.edgeCasesP2'</p>

      <h2>'FindAndReplacePage.writeUp.bestPracticesTitle'</h2>
      <p>'FindAndReplacePage.writeUp.bestPracticesIntro'</p>
      <ul>
        <li>'FindAndReplacePage.writeUp.bestPracticesItem1'</li>
        <li>'FindAndReplacePage.writeUp.bestPracticesItem2'</li>
        <li>'FindAndReplacePage.writeUp.bestPracticesItem3'</li>
        <li>'FindAndReplacePage.writeUp.bestPracticesItem4'</li>
        <li>'FindAndReplacePage.writeUp.bestPracticesItem5'</li>
      </ul>
      <p>'FindAndReplacePage.writeUp.bestPracticesP1'</p>
      <p>'FindAndReplacePage.writeUp.bestPracticesP2'</p>

      <h2>'FindAndReplacePage.writeUp.misunderstoodTitle'</h2>
      <h3>'FindAndReplacePage.writeUp.grammarToolTitle'</h3>
      <p>'FindAndReplacePage.writeUp.grammarToolText'</p>
      <h3>'FindAndReplacePage.writeUp.caseSensitivityTitle'</h3>
      <p>'FindAndReplacePage.writeUp.caseSensitivityText'</p>
      <h3>'FindAndReplacePage.writeUp.wholeWordTitle'</h3>
      <p>'FindAndReplacePage.writeUp.wholeWordText'</p>
      <h3>'FindAndReplacePage.writeUp.literalMatchingTitle'</h3>
      <p>'FindAndReplacePage.writeUp.literalMatchingText'</p>
      <h3>'FindAndReplacePage.writeUp.orderMattersTitle'</h3>
      <p>'FindAndReplacePage.writeUp.orderMattersText'</p>

      <h2>'FindAndReplacePage.writeUp.disclaimerTitle'</h2>
      <p>'FindAndReplacePage.writeUp.disclaimerP1'</p>
      <p>'FindAndReplacePage.writeUp.disclaimerP2'</p>

      <h2>'FindAndReplacePage.writeUp.summaryTitle'</h2>
      <p>'FindAndReplacePage.writeUp.summaryP1'</p>
      <p>'FindAndReplacePage.writeUp.summaryP2'</p>
      <p>'FindAndReplacePage.writeUp.summaryP3'</p>
      <p>'FindAndReplacePage.writeUp.summaryP4'</p>
    </div>
  </section>
  );
}

export default async function FindAndReplacePage() {
  
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;

  // Create translated FAQs from translation keys
  const pageFaqs: FaqItem[] = []; // Note: FAQs need to be hardcoded from en.json if needed

  const url = `${siteUrl}/${toolSlug}/`;

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<FindReplaceTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {/* Note: writeUp content needs to be hardcoded from en.json if needed */}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">'FindAndReplacePage.faqHeading'</h2>
          <p className="text-slate-700">
            'FindAndReplacePage.faqIntro'
          </p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
