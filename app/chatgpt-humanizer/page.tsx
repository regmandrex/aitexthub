import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ChatGPTHumanizerTool } from '@/components/tools/ChatGPTHumanizerTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
const toolSlug = 'chatgpt-humanizer';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq2', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq3', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq4', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq5', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq6', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq7', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq8', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq9', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq10', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq11', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq12', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq13', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq14', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq15', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq16', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq17', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq18', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq19', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq20', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq21', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq22', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq23', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq24', category: 'ChatGPT Humanizer FAQs' },
  { key: 'faq25', category: 'ChatGPT Humanizer FAQs' },
];
// Note: writeUp content needs to be hardcoded from en.json if needed
// Removed createWriteUp function
function createWriteUp() {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>'ChatGPTHumanizerPage.writeUp.title'</h2>
      <p>'ChatGPTHumanizerPage.writeUp.introP1'</p>
      <p>'ChatGPTHumanizerPage.writeUp.introP2'</p>
      <p>'ChatGPTHumanizerPage.writeUp.introP3'</p>

      <h2>'ChatGPTHumanizerPage.writeUp.patternsTitle'</h2>
      <p>'ChatGPTHumanizerPage.writeUp.patternsP1'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.uniformityTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.uniformityP1'</p>
      <p>'ChatGPTHumanizerPage.writeUp.uniformityP2'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.vocabularyTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.vocabularyP1'</p>
      <p>'ChatGPTHumanizerPage.writeUp.vocabularyP2'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.transitionsTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.transitionsP1'</p>
      <p>'ChatGPTHumanizerPage.writeUp.transitionsP2'</p>

      <h2>'ChatGPTHumanizerPage.writeUp.howItWorksTitle'</h2>
      <p>'ChatGPTHumanizerPage.writeUp.howItWorksP1'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.structuralTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.structuralP1'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.vocabAdjustTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.vocabAdjustP1'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.voiceTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.voiceP1'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.imperfectionTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.imperfectionP1'</p>

      <h2>'ChatGPTHumanizerPage.writeUp.usingTitle'</h2>
      <p>'ChatGPTHumanizerPage.writeUp.usingP1'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.inputTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.inputP1'</p>
      <p>'ChatGPTHumanizerPage.writeUp.inputP2'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.reviewingTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.reviewingP1'</p>
      <p>'ChatGPTHumanizerPage.writeUp.reviewingP2'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.iterativeTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.iterativeP1'</p>
      <p>'ChatGPTHumanizerPage.writeUp.iterativeP2'</p>

      <h2>'ChatGPTHumanizerPage.writeUp.detectionTitle'</h2>
      <p>'ChatGPTHumanizerPage.writeUp.detectionP1'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.reductionTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.reductionP1'</p>
      <p>'ChatGPTHumanizerPage.writeUp.reductionP2'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.ethicalTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.ethicalP1'</p>
      <p>'ChatGPTHumanizerPage.writeUp.ethicalP2'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.valueTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.valueP1'</p>

      <h2>'ChatGPTHumanizerPage.writeUp.applicationsTitle'</h2>
      <p>'ChatGPTHumanizerPage.writeUp.applicationsP1'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.marketingTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.marketingP1'</p>
      <p>'ChatGPTHumanizerPage.writeUp.marketingP2'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.professionalTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.professionalP1'</p>
      <p>'ChatGPTHumanizerPage.writeUp.professionalP2'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.creativeTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.creativeP1'</p>
      <p>'ChatGPTHumanizerPage.writeUp.creativeP2'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.educationalTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.educationalP1'</p>
      <p>'ChatGPTHumanizerPage.writeUp.educationalP2'</p>

      <h2>'ChatGPTHumanizerPage.writeUp.bestPracticesTitle'</h2>
      <p>'ChatGPTHumanizerPage.writeUp.bestPracticesP1'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.combineTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.combineP1'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.matchTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.matchP1'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.verifyTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.verifyP1'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.iterativeUseTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.iterativeUseP1'</p>

      <h2>'ChatGPTHumanizerPage.writeUp.technicalTitle'</h2>
      <p>'ChatGPTHumanizerPage.writeUp.technicalP1'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.perplexityTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.perplexityP1'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.burstinessTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.burstinessP1'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.stylisticTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.stylisticP1'</p>

      <h2>'ChatGPTHumanizerPage.writeUp.limitationsTitle'</h2>
      <p>'ChatGPTHumanizerPage.writeUp.limitationsP1'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.qualityTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.qualityP1'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.evolutionTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.evolutionP1'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.contextTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.contextP1'</p>

      <h3>'ChatGPTHumanizerPage.writeUp.variableTitle'</h3>
      <p>'ChatGPTHumanizerPage.writeUp.variableP1'</p>
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
    seoTitle: 'ChatGPT Humanizer - Make AI Text Sound Human Free',
    urlPath: `/${toolSlug}`,
  });
}

export default async function ChatGPTHumanizerPage() {
  
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ChatGPTHumanizerTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {/* Note: writeUp content needs to be hardcoded from en.json if needed */}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">'ChatGPTHumanizerPage.faqHeading'</h2>
          <p className="text-slate-700">
            'ChatGPTHumanizerPage.faqIntro'
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
