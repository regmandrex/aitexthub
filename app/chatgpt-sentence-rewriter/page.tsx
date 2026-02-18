import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ChatGPTSentenceRewriterTool } from '@/components/tools/ChatGPTSentenceRewriterTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
const toolSlug = 'chatgpt-sentence-rewriter';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq2', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq3', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq4', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq5', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq6', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq7', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq8', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq9', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq10', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq11', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq12', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq13', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq14', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq15', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq16', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq17', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq18', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq19', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq20', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq21', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq22', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq23', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq24', category: 'ChatGPT Sentence Rewriter FAQs' },
  { key: 'faq25', category: 'ChatGPT Sentence Rewriter FAQs' },
];
// Note: writeUp content needs to be hardcoded from en.json if needed
// Removed createWriteUp function
function createWriteUp() {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>'ChatGPTSentenceRewriterPage.writeUp.title'</h2>
      <p>'ChatGPTSentenceRewriterPage.writeUp.introP1'</p>
      <p>'ChatGPTSentenceRewriterPage.writeUp.introP2'</p>
      <p>'ChatGPTSentenceRewriterPage.writeUp.introP3'</p>

      <h2>'ChatGPTSentenceRewriterPage.writeUp.whyTitle'</h2>
      <p>'ChatGPTSentenceRewriterPage.writeUp.whyP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.targetedTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.targetedP1'</p>
      <p>'ChatGPTSentenceRewriterPage.writeUp.targetedP2'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.controlTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.controlP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.learningTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.learningP1'</p>

      <h2>'ChatGPTSentenceRewriterPage.writeUp.howItWorksTitle'</h2>
      <p>'ChatGPTSentenceRewriterPage.writeUp.howItWorksP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.structuralTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.structuralP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.techniquesTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.techniquesP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.meaningTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.meaningP1'</p>

      <h2>'ChatGPTSentenceRewriterPage.writeUp.usingTitle'</h2>
      <p>'ChatGPTSentenceRewriterPage.writeUp.usingP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.clearTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.clearP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.reviewTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.reviewP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.iterateTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.iterateP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.contextTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.contextP1'</p>

      <h2>'ChatGPTSentenceRewriterPage.writeUp.useCasesTitle'</h2>
      <p>'ChatGPTSentenceRewriterPage.writeUp.useCasesP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.clarityTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.clarityP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.varietyTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.varietyP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.toneTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.toneP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.aiTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.aiP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.eslTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.eslP1'</p>

      <h2>'ChatGPTSentenceRewriterPage.writeUp.transformationTitle'</h2>
      <p>'ChatGPTSentenceRewriterPage.writeUp.transformationP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.voiceTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.voiceP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.wordOrderTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.wordOrderP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.synonymTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.synonymP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.lengthTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.lengthP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.emphasisTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.emphasisP1'</p>

      <h2>'ChatGPTSentenceRewriterPage.writeUp.bestPracticesTitle'</h2>
      <p>'ChatGPTSentenceRewriterPage.writeUp.bestPracticesP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.intentTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.intentP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.preserveTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.preserveP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.consistencyTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.consistencyP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.judgmentTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.judgmentP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.editTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.editP1'</p>

      <h2>'ChatGPTSentenceRewriterPage.writeUp.vsOtherTitle'</h2>
      <p>'ChatGPTSentenceRewriterPage.writeUp.vsOtherP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.vsParaphraserTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.vsParaphraserP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.vsGrammarTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.vsGrammarP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.vsHumanizerTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.vsHumanizerP1'</p>

      <h2>'ChatGPTSentenceRewriterPage.writeUp.technicalTitle'</h2>
      <p>'ChatGPTSentenceRewriterPage.writeUp.technicalP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.syntacticTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.syntacticP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.semanticTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.semanticP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.independenceTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.independenceP1'</p>

      <h2>'ChatGPTSentenceRewriterPage.writeUp.professionalTitle'</h2>
      <p>'ChatGPTSentenceRewriterPage.writeUp.professionalP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.businessTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.businessP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.marketingTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.marketingP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.technicalTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.technicalP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.academicTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.academicP1'</p>

      <h2>'ChatGPTSentenceRewriterPage.writeUp.limitationsTitle'</h2>
      <p>'ChatGPTSentenceRewriterPage.writeUp.limitationsP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.verificationTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.verificationP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.fittingTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.fittingP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.complexityTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.complexityP1'</p>

      <h3>'ChatGPTSentenceRewriterPage.writeUp.styleTitle'</h3>
      <p>'ChatGPTSentenceRewriterPage.writeUp.styleP1'</p>
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
    seoTitle: 'ChatGPT Sentence Rewriter - Free Online Sentence Transformer',
    urlPath: `/${toolSlug}`,
  });
}

export default async function ChatGPTSentenceRewriterPage() {
  
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ChatGPTSentenceRewriterTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {/* Note: writeUp content needs to be hardcoded from en.json if needed */}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">'ChatGPTSentenceRewriterPage.faqHeading'</h2>
          <p className="text-slate-700">
            'ChatGPTSentenceRewriterPage.faqIntro'
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
