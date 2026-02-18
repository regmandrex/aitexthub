import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ChatGPTParaphraserTool } from '@/components/tools/ChatGPTParaphraserTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
const toolSlug = 'chatgpt-paraphraser';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq2', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq3', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq4', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq5', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq6', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq7', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq8', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq9', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq10', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq11', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq12', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq13', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq14', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq15', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq16', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq17', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq18', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq19', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq20', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq21', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq22', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq23', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq24', category: 'ChatGPT Paraphraser FAQs' },
  { key: 'faq25', category: 'ChatGPT Paraphraser FAQs' },
];
// Note: writeUp content needs to be hardcoded from en.json if needed
// Removed createWriteUp function
function createWriteUp() {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>'ChatGPTParaphraserPage.writeUp.title'</h2>
      <p>'ChatGPTParaphraserPage.writeUp.introP1'</p>
      <p>'ChatGPTParaphraserPage.writeUp.introP2'</p>
      <p>'ChatGPTParaphraserPage.writeUp.introP3'</p>

      <h2>'ChatGPTParaphraserPage.writeUp.understandingTitle'</h2>
      <p>'ChatGPTParaphraserPage.writeUp.understandingP1'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.whyTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.whyP1'</p>
      <p>'ChatGPTParaphraserPage.writeUp.whyP2'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.elementsTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.elementsP1'</p>
      <p>'ChatGPTParaphraserPage.writeUp.elementsP2'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.vsPlagiarismTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.vsPlagiarismP1'</p>
      <p>'ChatGPTParaphraserPage.writeUp.vsPlagiarismP2'</p>

      <h2>'ChatGPTParaphraserPage.writeUp.howItWorksTitle'</h2>
      <p>'ChatGPTParaphraserPage.writeUp.howItWorksP1'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.semanticTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.semanticP1'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.synonymTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.synonymP1'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.restructuringTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.restructuringP1'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.coherenceTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.coherenceP1'</p>

      <h2>'ChatGPTParaphraserPage.writeUp.usingTitle'</h2>
      <p>'ChatGPTParaphraserPage.writeUp.usingP1'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.inputTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.inputP1'</p>
      <p>'ChatGPTParaphraserPage.writeUp.inputP2'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.reviewTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.reviewP1'</p>
      <p>'ChatGPTParaphraserPage.writeUp.reviewP2'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.citationTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.citationP1'</p>
      <p>'ChatGPTParaphraserPage.writeUp.citationP2'</p>

      <h2>'ChatGPTParaphraserPage.writeUp.applicationsTitle'</h2>
      <p>'ChatGPTParaphraserPage.writeUp.applicationsP1'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.academicTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.academicP1'</p>
      <p>'ChatGPTParaphraserPage.writeUp.academicP2'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.professionalTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.professionalP1'</p>
      <p>'ChatGPTParaphraserPage.writeUp.professionalP2'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.contentTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.contentP1'</p>
      <p>'ChatGPTParaphraserPage.writeUp.contentP2'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.learningTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.learningP1'</p>
      <p>'ChatGPTParaphraserPage.writeUp.learningP2'</p>

      <h2>'ChatGPTParaphraserPage.writeUp.aiContentTitle'</h2>
      <p>'ChatGPTParaphraserPage.writeUp.aiContentP1'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.effectsTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.effectsP1'</p>
      <p>'ChatGPTParaphraserPage.writeUp.effectsP2'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.improvingTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.improvingP1'</p>
      <p>'ChatGPTParaphraserPage.writeUp.improvingP2'</p>

      <h2>'ChatGPTParaphraserPage.writeUp.bestPracticesTitle'</h2>
      <p>'ChatGPTParaphraserPage.writeUp.bestPracticesP1'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.understandTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.understandP1'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.substantialTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.substantialP1'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.preserveTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.preserveP1'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.matchTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.matchP1'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.citeTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.citeP1'</p>

      <h2>'ChatGPTParaphraserPage.writeUp.techniquesTitle'</h2>
      <p>'ChatGPTParaphraserPage.writeUp.techniquesP1'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.synonymSubTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.synonymSubP1'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.voiceChangeTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.voiceChangeP1'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.sentenceRestructureTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.sentenceRestructureP1'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.reorderingTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.reorderingP1'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.phraseTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.phraseP1'</p>

      <h2>'ChatGPTParaphraserPage.writeUp.limitationsTitle'</h2>
      <p>'ChatGPTParaphraserPage.writeUp.limitationsP1'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.accuracyTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.accuracyP1'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.styleTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.styleP1'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.technicalTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.technicalP1'</p>

      <h3>'ChatGPTParaphraserPage.writeUp.lengthTitle'</h3>
      <p>'ChatGPTParaphraserPage.writeUp.lengthP1'</p>
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
    seoTitle: 'ChatGPT Paraphraser - Free Online Text Rewriting Tool',
    urlPath: `/${toolSlug}`,
  });
}

export default async function ChatGPTParaphraserPage() {
  
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ChatGPTParaphraserTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {/* Note: writeUp content needs to be hardcoded from en.json if needed */}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">'ChatGPTParaphraserPage.faqHeading'</h2>
          <p className="text-slate-700">
            'ChatGPTParaphraserPage.faqIntro'
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
