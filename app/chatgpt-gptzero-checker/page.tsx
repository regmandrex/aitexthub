import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ChatGPTGPTZeroCheckerTool } from '@/components/tools/ChatGPTGPTZeroCheckerTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
const toolSlug = 'chatgpt-gptzero-checker';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq2', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq3', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq4', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq5', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq6', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq7', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq8', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq9', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq10', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq11', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq12', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq13', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq14', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq15', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq16', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq17', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq18', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq19', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq20', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq21', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq22', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq23', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq24', category: 'ChatGPT GPTZero Checker FAQs' },
  { key: 'faq25', category: 'ChatGPT GPTZero Checker FAQs' },
];

// Helper function to create writeUp content using translations
// Note: writeUp content needs to be hardcoded from en.json if needed
// Removed createWriteUp function
function createWriteUp() {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>'ChatGPTGPTZeroCheckerPage.writeUp.title'</h2>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.introP1'</p>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.introP2'</p>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.introP3'</p>

      <h2>'ChatGPTGPTZeroCheckerPage.writeUp.methodologyTitle'</h2>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.methodologyP1'</p>

      <h3>'ChatGPTGPTZeroCheckerPage.writeUp.perplexityTitle'</h3>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.perplexityP1'</p>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.perplexityP2'</p>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.perplexityP3'</p>

      <h3>'ChatGPTGPTZeroCheckerPage.writeUp.burstinessTitle'</h3>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.burstinessP1'</p>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.burstinessP2'</p>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.burstinessP3'</p>

      <h3>'ChatGPTGPTZeroCheckerPage.writeUp.combinedAnalysisTitle'</h3>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.combinedAnalysisP1'</p>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.combinedAnalysisP2'</p>

      <h2>'ChatGPTGPTZeroCheckerPage.writeUp.historyTitle'</h2>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.historyP1'</p>

      <h3>'ChatGPTGPTZeroCheckerPage.writeUp.originsTitle'</h3>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.originsP1'</p>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.originsP2'</p>

      <h3>'ChatGPTGPTZeroCheckerPage.writeUp.influenceTitle'</h3>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.influenceP1'</p>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.influenceP2'</p>

      <h3>'ChatGPTGPTZeroCheckerPage.writeUp.challengesTitle'</h3>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.challengesP1'</p>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.challengesP2'</p>

      <h2>'ChatGPTGPTZeroCheckerPage.writeUp.usingToolTitle'</h2>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.usingToolP1'</p>

      <h3>'ChatGPTGPTZeroCheckerPage.writeUp.inputGuidelinesTitle'</h3>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.inputGuidelinesP1'</p>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.inputGuidelinesP2'</p>

      <h3>'ChatGPTGPTZeroCheckerPage.writeUp.interpretingTitle'</h3>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.interpretingP1'</p>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.interpretingP2'</p>

      <h3>'ChatGPTGPTZeroCheckerPage.writeUp.revisionTitle'</h3>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.revisionP1'</p>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.revisionP2'</p>

      <h2>'ChatGPTGPTZeroCheckerPage.writeUp.academicTitle'</h2>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.academicP1'</p>

      <h3>'ChatGPTGPTZeroCheckerPage.writeUp.policyTitle'</h3>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.policyP1'</p>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.policyP2'</p>

      <h3>'ChatGPTGPTZeroCheckerPage.writeUp.supportingTitle'</h3>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.supportingP1'</p>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.supportingP2'</p>

      <h3>'ChatGPTGPTZeroCheckerPage.writeUp.valueTitle'</h3>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.valueP1'</p>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.valueP2'</p>

      <h2>'ChatGPTGPTZeroCheckerPage.writeUp.comparingTitle'</h2>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.comparingP1'</p>

      <h3>'ChatGPTGPTZeroCheckerPage.writeUp.vsTurnitinTitle'</h3>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.vsTurnitinP1'</p>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.vsTurnitinP2'</p>

      <h3>'ChatGPTGPTZeroCheckerPage.writeUp.limitationsTitle'</h3>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.limitationsP1'</p>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.limitationsP2'</p>

      <h3>'ChatGPTGPTZeroCheckerPage.writeUp.multipleToolsTitle'</h3>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.multipleToolsP1'</p>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.multipleToolsP2'</p>

      <h2>'ChatGPTGPTZeroCheckerPage.writeUp.technicalTitle'</h2>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.technicalP1'</p>

      <h3>'ChatGPTGPTZeroCheckerPage.writeUp.sentenceLevelTitle'</h3>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.sentenceLevelP1'</p>

      <h3>'ChatGPTGPTZeroCheckerPage.writeUp.vocabularyTitle'</h3>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.vocabularyP1'</p>

      <h3>'ChatGPTGPTZeroCheckerPage.writeUp.structuralTitle'</h3>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.structuralP1'</p>

      <h3>'ChatGPTGPTZeroCheckerPage.writeUp.coherenceTitle'</h3>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.coherenceP1'</p>

      <h2>'ChatGPTGPTZeroCheckerPage.writeUp.bestPracticesTitle'</h2>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.bestPracticesP1'</p>

      <h3>'ChatGPTGPTZeroCheckerPage.writeUp.understandTitle'</h3>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.understandP1'</p>

      <h3>'ChatGPTGPTZeroCheckerPage.writeUp.enhancementTitle'</h3>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.enhancementP1'</p>

      <h3>'ChatGPTGPTZeroCheckerPage.writeUp.voiceTitle'</h3>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.voiceP1'</p>

      <h3>'ChatGPTGPTZeroCheckerPage.writeUp.documentationTitle'</h3>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.documentationP1'</p>

      <h3>'ChatGPTGPTZeroCheckerPage.writeUp.clarificationTitle'</h3>
      <p>'ChatGPTGPTZeroCheckerPage.writeUp.clarificationP1'</p>
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
    seoTitle: 'ChatGPT GPTZero Checker - Check AI Detection Before Submission',
    urlPath: `/${toolSlug}`,
  });
}

export default async function ChatGPTGPTZeroCheckerPage() {
  
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ChatGPTGPTZeroCheckerTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {/* Note: writeUp content needs to be hardcoded from en.json if needed */}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">'ChatGPTGPTZeroCheckerPage.faqHeading'</h2>
          <p className="text-slate-700">
            'ChatGPTGPTZeroCheckerPage.faqIntro'
          </p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
