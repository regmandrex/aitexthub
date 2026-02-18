import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ChatGPTCopyleaksCheckerTool } from '@/components/tools/ChatGPTCopyleaksCheckerTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
const toolSlug = 'chatgpt-copyleaks-checker';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq2', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq3', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq4', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq5', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq6', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq7', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq8', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq9', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq10', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq11', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq12', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq13', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq14', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq15', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq16', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq17', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq18', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq19', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq20', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq21', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq22', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq23', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq24', category: 'ChatGPT Copyleaks Checker FAQs' },
  { key: 'faq25', category: 'ChatGPT Copyleaks Checker FAQs' },
];
// Note: writeUp content needs to be hardcoded from en.json if needed
// Removed createWriteUp function
function createWriteUp() {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>'ChatGPTCopyleaksCheckerPage.writeUp.title'</h2>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.introP1'</p>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.introP2'</p>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.introP3'</p>

      <h2>'ChatGPTCopyleaksCheckerPage.writeUp.enterpriseTitle'</h2>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.enterpriseP1'</p>

      <h3>'ChatGPTCopyleaksCheckerPage.writeUp.scaleTitle'</h3>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.scaleP1'</p>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.scaleP2'</p>

      <h3>'ChatGPTCopyleaksCheckerPage.writeUp.multiLanguageTitle'</h3>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.multiLanguageP1'</p>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.multiLanguageP2'</p>

      <h3>'ChatGPTCopyleaksCheckerPage.writeUp.combinedTitle'</h3>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.combinedP1'</p>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.combinedP2'</p>

      <h2>'ChatGPTCopyleaksCheckerPage.writeUp.educationalTitle'</h2>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.educationalP1'</p>

      <h3>'ChatGPTCopyleaksCheckerPage.writeUp.lmsTitle'</h3>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.lmsP1'</p>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.lmsP2'</p>

      <h3>'ChatGPTCopyleaksCheckerPage.writeUp.policyTitle'</h3>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.policyP1'</p>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.policyP2'</p>

      <h3>'ChatGPTCopyleaksCheckerPage.writeUp.integrityTitle'</h3>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.integrityP1'</p>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.integrityP2'</p>

      <h2>'ChatGPTCopyleaksCheckerPage.writeUp.professionalTitle'</h2>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.professionalP1'</p>

      <h3>'ChatGPTCopyleaksCheckerPage.writeUp.corporateTitle'</h3>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.corporateP1'</p>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.corporateP2'</p>

      <h3>'ChatGPTCopyleaksCheckerPage.writeUp.publishingTitle'</h3>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.publishingP1'</p>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.publishingP2'</p>

      <h3>'ChatGPTCopyleaksCheckerPage.writeUp.legalTitle'</h3>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.legalP1'</p>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.legalP2'</p>

      <h2>'ChatGPTCopyleaksCheckerPage.writeUp.usingToolTitle'</h2>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.usingToolP1'</p>

      <h3>'ChatGPTCopyleaksCheckerPage.writeUp.analyzeTitle'</h3>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.analyzeP1'</p>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.analyzeP2'</p>

      <h3>'ChatGPTCopyleaksCheckerPage.writeUp.interpretingTitle'</h3>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.interpretingP1'</p>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.interpretingP2'</p>

      <h3>'ChatGPTCopyleaksCheckerPage.writeUp.applyingTitle'</h3>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.applyingP1'</p>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.applyingP2'</p>

      <h2>'ChatGPTCopyleaksCheckerPage.writeUp.technicalTitle'</h2>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.technicalP1'</p>

      <h3>'ChatGPTCopyleaksCheckerPage.writeUp.linguisticTitle'</h3>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.linguisticP1'</p>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.linguisticP2'</p>

      <h3>'ChatGPTCopyleaksCheckerPage.writeUp.trainingTitle'</h3>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.trainingP1'</p>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.trainingP2'</p>

      <h3>'ChatGPTCopyleaksCheckerPage.writeUp.limitationsTitle'</h3>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.limitationsP1'</p>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.limitationsP2'</p>

      <h2>'ChatGPTCopyleaksCheckerPage.writeUp.comparingTitle'</h2>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.comparingP1'</p>

      <h3>'ChatGPTCopyleaksCheckerPage.writeUp.vsTurnitinTitle'</h3>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.vsTurnitinP1'</p>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.vsTurnitinP2'</p>

      <h3>'ChatGPTCopyleaksCheckerPage.writeUp.vsOriginalityTitle'</h3>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.vsOriginalityP1'</p>

      <h3>'ChatGPTCopyleaksCheckerPage.writeUp.multipleToolsTitle'</h3>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.multipleToolsP1'</p>

      <h2>'ChatGPTCopyleaksCheckerPage.writeUp.bestPracticesTitle'</h2>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.bestPracticesP1'</p>

      <h3>'ChatGPTCopyleaksCheckerPage.writeUp.requirementsTitle'</h3>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.requirementsP1'</p>

      <h3>'ChatGPTCopyleaksCheckerPage.writeUp.authenticTitle'</h3>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.authenticP1'</p>

      <h3>'ChatGPTCopyleaksCheckerPage.writeUp.documentTitle'</h3>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.documentP1'</p>

      <h3>'ChatGPTCopyleaksCheckerPage.writeUp.communicateTitle'</h3>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.communicateP1'</p>

      <h3>'ChatGPTCopyleaksCheckerPage.writeUp.feedbackTitle'</h3>
      <p>'ChatGPTCopyleaksCheckerPage.writeUp.feedbackP1'</p>
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
    seoTitle: 'ChatGPT Copyleaks Checker - Enterprise AI Detection Pre-Screen',
    urlPath: `/${toolSlug}`,
  });
}

export default async function ChatGPTCopyleaksCheckerPage() {
  
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ChatGPTCopyleaksCheckerTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {/* Note: writeUp content needs to be hardcoded from en.json if needed */}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">'ChatGPTCopyleaksCheckerPage.faqHeading'</h2>
          <p className="text-slate-700">
            'ChatGPTCopyleaksCheckerPage.faqIntro'
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
