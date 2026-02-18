import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ChatGPTTurnitinCheckerTool } from '@/components/tools/ChatGPTTurnitinCheckerTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
const toolSlug = 'chatgpt-turnitin-checker';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'ChatGPT Turnitin Checker FAQs' },
  { key: 'faq2', category: 'ChatGPT Turnitin Checker FAQs' },
  { key: 'faq3', category: 'ChatGPT Turnitin Checker FAQs' },
  { key: 'faq4', category: 'ChatGPT Turnitin Checker FAQs' },
  { key: 'faq5', category: 'ChatGPT Turnitin Checker FAQs' },
  { key: 'faq6', category: 'ChatGPT Turnitin Checker FAQs' },
  { key: 'faq7', category: 'ChatGPT Turnitin Checker FAQs' },
  { key: 'faq8', category: 'ChatGPT Turnitin Checker FAQs' },
  { key: 'faq9', category: 'ChatGPT Turnitin Checker FAQs' },
  { key: 'faq10', category: 'ChatGPT Turnitin Checker FAQs' },
  { key: 'faq11', category: 'ChatGPT Turnitin Checker FAQs' },
  { key: 'faq12', category: 'ChatGPT Turnitin Checker FAQs' },
  { key: 'faq13', category: 'ChatGPT Turnitin Checker FAQs' },
  { key: 'faq14', category: 'ChatGPT Turnitin Checker FAQs' },
  { key: 'faq15', category: 'ChatGPT Turnitin Checker FAQs' },
  { key: 'faq16', category: 'ChatGPT Turnitin Checker FAQs' },
  { key: 'faq17', category: 'ChatGPT Turnitin Checker FAQs' },
  { key: 'faq18', category: 'ChatGPT Turnitin Checker FAQs' },
  { key: 'faq19', category: 'ChatGPT Turnitin Checker FAQs' },
  { key: 'faq20', category: 'ChatGPT Turnitin Checker FAQs' },
  { key: 'faq21', category: 'ChatGPT Turnitin Checker FAQs' },
  { key: 'faq22', category: 'ChatGPT Turnitin Checker FAQs' },
  { key: 'faq23', category: 'ChatGPT Turnitin Checker FAQs' },
  { key: 'faq24', category: 'ChatGPT Turnitin Checker FAQs' },
  { key: 'faq25', category: 'ChatGPT Turnitin Checker FAQs' },
];

// Helper function to create writeUp content using translations
// Note: writeUp content needs to be hardcoded from en.json if needed
// Removed createWriteUp function
function createWriteUp() {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>'ChatGPTTurnitinCheckerPage.writeUp.title'</h2>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.introP1'</p>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.introP2'</p>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.introP3'</p>

      <h2>'ChatGPTTurnitinCheckerPage.writeUp.howItWorksTitle'</h2>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.howItWorksP1'</p>

      <h3>'ChatGPTTurnitinCheckerPage.writeUp.sentenceLevelTitle'</h3>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.sentenceLevelP1'</p>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.sentenceLevelP2'</p>

      <h3>'ChatGPTTurnitinCheckerPage.writeUp.linguisticPatternsTitle'</h3>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.linguisticPatternsP1'</p>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.linguisticPatternsP2'</p>

      <h3>'ChatGPTTurnitinCheckerPage.writeUp.accuracyTitle'</h3>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.accuracyP1'</p>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.accuracyP2'</p>

      <h2>'ChatGPTTurnitinCheckerPage.writeUp.policiesTitle'</h2>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.policiesP1'</p>

      <h3>'ChatGPTTurnitinCheckerPage.writeUp.disclosureTitle'</h3>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.disclosureP1'</p>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.disclosureP2'</p>

      <h3>'ChatGPTTurnitinCheckerPage.writeUp.appropriateUseTitle'</h3>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.appropriateUseP1'</p>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.appropriateUseP2'</p>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.appropriateUseP3'</p>

      <h2>'ChatGPTTurnitinCheckerPage.writeUp.usingToolTitle'</h2>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.usingToolP1'</p>

      <h3>'ChatGPTTurnitinCheckerPage.writeUp.beforeSubmissionTitle'</h3>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.beforeSubmissionP1'</p>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.beforeSubmissionP2'</p>

      <h3>'ChatGPTTurnitinCheckerPage.writeUp.interpretingResultsTitle'</h3>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.interpretingResultsP1'</p>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.interpretingResultsP2'</p>

      <h3>'ChatGPTTurnitinCheckerPage.writeUp.revisionTitle'</h3>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.revisionP1'</p>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.revisionP2'</p>

      <h2>'ChatGPTTurnitinCheckerPage.writeUp.limitationsTitle'</h2>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.limitationsP1'</p>

      <h3>'ChatGPTTurnitinCheckerPage.writeUp.notTurnitinTitle'</h3>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.notTurnitinP1'</p>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.notTurnitinP2'</p>

      <h3>'ChatGPTTurnitinCheckerPage.writeUp.falsePositivesTitle'</h3>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.falsePositivesP1'</p>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.falsePositivesP2'</p>

      <h2>'ChatGPTTurnitinCheckerPage.writeUp.bestPracticesTitle'</h2>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.bestPracticesP1'</p>

      <h3>'ChatGPTTurnitinCheckerPage.writeUp.transparencyTitle'</h3>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.transparencyP1'</p>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.transparencyP2'</p>

      <h3>'ChatGPTTurnitinCheckerPage.writeUp.qualityTitle'</h3>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.qualityP1'</p>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.qualityP2'</p>

      <h3>'ChatGPTTurnitinCheckerPage.writeUp.understandingTitle'</h3>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.understandingP1'</p>
      <p>'ChatGPTTurnitinCheckerPage.writeUp.understandingP2'</p>
    </div>
  </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return {};

  const title = toolData.title;
  const description = toolData.shortDescription;

  return buildToolMeta({
    title,
    description,
    seoTitle: 'ChatGPT Turnitin Checker - Check AI Content Before Submission',
    urlPath: `/${toolSlug}`,
  });
}

export default async function ChatGPTTurnitinCheckerPage() {
  
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;

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
  const pageFaqs: FaqItem[] = []; // Note: FAQs need to be hardcoded from en.json if needed

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ChatGPTTurnitinCheckerTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {/* Note: writeUp content needs to be hardcoded from en.json if needed */}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">'ChatGPTTurnitinCheckerPage.faqHeading'</h2>
          <p className="text-slate-700">
            'ChatGPTTurnitinCheckerPage.faqIntro'
          </p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
