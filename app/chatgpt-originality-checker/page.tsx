import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ChatGPTOriginalityCheckerTool } from '@/components/tools/ChatGPTOriginalityCheckerTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
const toolSlug = 'chatgpt-originality-checker';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq2', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq3', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq4', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq5', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq6', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq7', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq8', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq9', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq10', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq11', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq12', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq13', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq14', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq15', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq16', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq17', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq18', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq19', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq20', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq21', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq22', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq23', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq24', category: 'ChatGPT Originality Checker FAQs' },
  { key: 'faq25', category: 'ChatGPT Originality Checker FAQs' },
];

// Helper function to create writeUp content using translations
// Note: writeUp content needs to be hardcoded from en.json if needed
// Removed createWriteUp function
function createWriteUp() {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>'ChatGPTOriginalityCheckerPage.writeUp.title'</h2>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.introP1'</p>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.introP2'</p>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.introP3'</p>

      <h2>'ChatGPTOriginalityCheckerPage.writeUp.detectionTitle'</h2>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.detectionP1'</p>

      <h3>'ChatGPTOriginalityCheckerPage.writeUp.authenticityTitle'</h3>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.authenticityP1'</p>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.authenticityP2'</p>

      <h3>'ChatGPTOriginalityCheckerPage.writeUp.patternsTitle'</h3>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.patternsP1'</p>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.patternsP2'</p>

      <h3>'ChatGPTOriginalityCheckerPage.writeUp.combinedTitle'</h3>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.combinedP1'</p>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.combinedP2'</p>

      <h2>'ChatGPTOriginalityCheckerPage.writeUp.applicationsTitle'</h2>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.applicationsP1'</p>

      <h3>'ChatGPTOriginalityCheckerPage.writeUp.publisherTitle'</h3>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.publisherP1'</p>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.publisherP2'</p>

      <h3>'ChatGPTOriginalityCheckerPage.writeUp.agencyTitle'</h3>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.agencyP1'</p>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.agencyP2'</p>

      <h3>'ChatGPTOriginalityCheckerPage.writeUp.seoTitle'</h3>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.seoP1'</p>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.seoP2'</p>

      <h3>'ChatGPTOriginalityCheckerPage.writeUp.freelanceTitle'</h3>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.freelanceP1'</p>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.freelanceP2'</p>

      <h2>'ChatGPTOriginalityCheckerPage.writeUp.usingToolTitle'</h2>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.usingToolP1'</p>

      <h3>'ChatGPTOriginalityCheckerPage.writeUp.analyzeTitle'</h3>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.analyzeP1'</p>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.analyzeP2'</p>

      <h3>'ChatGPTOriginalityCheckerPage.writeUp.interpretingTitle'</h3>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.interpretingP1'</p>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.interpretingP2'</p>

      <h3>'ChatGPTOriginalityCheckerPage.writeUp.improvementTitle'</h3>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.improvementP1'</p>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.improvementP2'</p>

      <h2>'ChatGPTOriginalityCheckerPage.writeUp.comparingTitle'</h2>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.comparingP1'</p>

      <h3>'ChatGPTOriginalityCheckerPage.writeUp.landscapeTitle'</h3>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.landscapeP1'</p>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.landscapeP2'</p>

      <h3>'ChatGPTOriginalityCheckerPage.writeUp.differentToolsTitle'</h3>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.differentToolsP1'</p>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.differentToolsP2'</p>

      <h3>'ChatGPTOriginalityCheckerPage.writeUp.costEffectiveTitle'</h3>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.costEffectiveP1'</p>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.costEffectiveP2'</p>

      <h2>'ChatGPTOriginalityCheckerPage.writeUp.policiesTitle'</h2>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.policiesP1'</p>

      <h3>'ChatGPTOriginalityCheckerPage.writeUp.expectationsTitle'</h3>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.expectationsP1'</p>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.expectationsP2'</p>

      <h3>'ChatGPTOriginalityCheckerPage.writeUp.relationshipsTitle'</h3>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.relationshipsP1'</p>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.relationshipsP2'</p>

      <h3>'ChatGPTOriginalityCheckerPage.writeUp.responsesTitle'</h3>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.responsesP1'</p>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.responsesP2'</p>

      <h2>'ChatGPTOriginalityCheckerPage.writeUp.technicalTitle'</h2>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.technicalP1'</p>

      <h3>'ChatGPTOriginalityCheckerPage.writeUp.triggerTitle'</h3>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.triggerP1'</p>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.triggerP2'</p>

      <h3>'ChatGPTOriginalityCheckerPage.writeUp.factorsTitle'</h3>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.factorsP1'</p>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.factorsP2'</p>

      <h3>'ChatGPTOriginalityCheckerPage.writeUp.limitationsTitle'</h3>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.limitationsP1'</p>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.limitationsP2'</p>

      <h2>'ChatGPTOriginalityCheckerPage.writeUp.futureTitle'</h2>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.futureP1'</p>

      <h3>'ChatGPTOriginalityCheckerPage.writeUp.evolvingTitle'</h3>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.evolvingP1'</p>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.evolvingP2'</p>

      <h3>'ChatGPTOriginalityCheckerPage.writeUp.emergingTitle'</h3>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.emergingP1'</p>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.emergingP2'</p>

      <h3>'ChatGPTOriginalityCheckerPage.writeUp.valueTitle'</h3>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.valueP1'</p>
      <p>'ChatGPTOriginalityCheckerPage.writeUp.valueP2'</p>
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
    seoTitle: 'ChatGPT Originality Checker - Pre-Screen AI Content Free',
    urlPath: `/${toolSlug}`,
  });
}

export default async function ChatGPTOriginalityCheckerPage() {
  
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

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ChatGPTOriginalityCheckerTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {/* Note: writeUp content needs to be hardcoded from en.json if needed */}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">'ChatGPTOriginalityCheckerPage.faqHeading'</h2>
          <p className="text-slate-700">
            'ChatGPTOriginalityCheckerPage.faqIntro'
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
