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
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

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
function createWriteUp(t: (key: string) => string) {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>{t('ChatGPTSentenceRewriterPage.writeUp.title')}</h2>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.introP1')}</p>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.introP2')}</p>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.introP3')}</p>

      <h2>{t('ChatGPTSentenceRewriterPage.writeUp.whyTitle')}</h2>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.whyP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.targetedTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.targetedP1')}</p>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.targetedP2')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.controlTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.controlP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.learningTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.learningP1')}</p>

      <h2>{t('ChatGPTSentenceRewriterPage.writeUp.howItWorksTitle')}</h2>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.howItWorksP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.structuralTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.structuralP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.techniquesTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.techniquesP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.meaningTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.meaningP1')}</p>

      <h2>{t('ChatGPTSentenceRewriterPage.writeUp.usingTitle')}</h2>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.usingP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.clearTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.clearP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.reviewTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.reviewP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.iterateTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.iterateP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.contextTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.contextP1')}</p>

      <h2>{t('ChatGPTSentenceRewriterPage.writeUp.useCasesTitle')}</h2>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.useCasesP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.clarityTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.clarityP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.varietyTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.varietyP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.toneTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.toneP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.aiTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.aiP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.eslTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.eslP1')}</p>

      <h2>{t('ChatGPTSentenceRewriterPage.writeUp.transformationTitle')}</h2>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.transformationP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.voiceTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.voiceP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.wordOrderTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.wordOrderP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.synonymTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.synonymP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.lengthTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.lengthP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.emphasisTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.emphasisP1')}</p>

      <h2>{t('ChatGPTSentenceRewriterPage.writeUp.bestPracticesTitle')}</h2>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.bestPracticesP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.intentTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.intentP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.preserveTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.preserveP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.consistencyTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.consistencyP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.judgmentTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.judgmentP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.editTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.editP1')}</p>

      <h2>{t('ChatGPTSentenceRewriterPage.writeUp.vsOtherTitle')}</h2>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.vsOtherP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.vsParaphraserTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.vsParaphraserP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.vsGrammarTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.vsGrammarP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.vsHumanizerTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.vsHumanizerP1')}</p>

      <h2>{t('ChatGPTSentenceRewriterPage.writeUp.technicalTitle')}</h2>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.technicalP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.syntacticTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.syntacticP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.semanticTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.semanticP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.independenceTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.independenceP1')}</p>

      <h2>{t('ChatGPTSentenceRewriterPage.writeUp.professionalTitle')}</h2>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.professionalP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.businessTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.businessP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.marketingTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.marketingP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.technicalTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.technicalP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.academicTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.academicP1')}</p>

      <h2>{t('ChatGPTSentenceRewriterPage.writeUp.limitationsTitle')}</h2>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.limitationsP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.verificationTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.verificationP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.fittingTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.fittingP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.complexityTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.complexityP1')}</p>

      <h3>{t('ChatGPTSentenceRewriterPage.writeUp.styleTitle')}</h3>
      <p>{t('ChatGPTSentenceRewriterPage.writeUp.styleP1')}</p>
    </div>
  </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return {};

  const toolKey = toolSlug;
  const title = t(`Tools.${toolKey}.title`) !== `Tools.${toolKey}.title` 
    ? t(`Tools.${toolKey}.title`) 
    : toolData.title;
  const description = t(`Tools.${toolKey}.description`) !== `Tools.${toolKey}.description`
    ? t(`Tools.${toolKey}.description`)
    : toolData.shortDescription;

  return buildToolMeta({
    title,
    description,
    seoTitle: 'ChatGPT Sentence Rewriter - Free Online Sentence Transformer',
    urlPath: `/${toolSlug}`,
    locale,
  });
}

export default async function ChatGPTSentenceRewriterPage() {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const toolKey = toolSlug;
  const title = t(`Tools.${toolKey}.title`) !== `Tools.${toolKey}.title` 
    ? t(`Tools.${toolKey}.title`) 
    : toolData.title;
  const description = t(`Tools.${toolKey}.description`) !== `Tools.${toolKey}.description`
    ? t(`Tools.${toolKey}.description`)
    : toolData.shortDescription;

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
        {createWriteUp(t)}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">{t('ChatGPTSentenceRewriterPage.faqHeading')}</h2>
          <p className="text-slate-700">
            {t('ChatGPTSentenceRewriterPage.faqIntro')}
          </p>
        </div>
        {/* Create translated FAQs from translation keys */}
        {(() => {
          const pageFaqs: FaqItem[] = faqKeys.map(({ key, category }) => ({
            category: t(`ChatGPTSentenceRewriterPage.faqs.${key}.category`) || category,
            question: t(`ChatGPTSentenceRewriterPage.faqs.${key}.question`),
            answer: t(`ChatGPTSentenceRewriterPage.faqs.${key}.answer`),
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
