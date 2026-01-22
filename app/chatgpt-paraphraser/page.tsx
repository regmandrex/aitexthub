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
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

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
function createWriteUp(t: (key: string) => string) {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>{t('ChatGPTParaphraserPage.writeUp.title')}</h2>
      <p>{t('ChatGPTParaphraserPage.writeUp.introP1')}</p>
      <p>{t('ChatGPTParaphraserPage.writeUp.introP2')}</p>
      <p>{t('ChatGPTParaphraserPage.writeUp.introP3')}</p>

      <h2>{t('ChatGPTParaphraserPage.writeUp.understandingTitle')}</h2>
      <p>{t('ChatGPTParaphraserPage.writeUp.understandingP1')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.whyTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.whyP1')}</p>
      <p>{t('ChatGPTParaphraserPage.writeUp.whyP2')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.elementsTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.elementsP1')}</p>
      <p>{t('ChatGPTParaphraserPage.writeUp.elementsP2')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.vsPlagiarismTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.vsPlagiarismP1')}</p>
      <p>{t('ChatGPTParaphraserPage.writeUp.vsPlagiarismP2')}</p>

      <h2>{t('ChatGPTParaphraserPage.writeUp.howItWorksTitle')}</h2>
      <p>{t('ChatGPTParaphraserPage.writeUp.howItWorksP1')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.semanticTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.semanticP1')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.synonymTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.synonymP1')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.restructuringTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.restructuringP1')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.coherenceTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.coherenceP1')}</p>

      <h2>{t('ChatGPTParaphraserPage.writeUp.usingTitle')}</h2>
      <p>{t('ChatGPTParaphraserPage.writeUp.usingP1')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.inputTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.inputP1')}</p>
      <p>{t('ChatGPTParaphraserPage.writeUp.inputP2')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.reviewTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.reviewP1')}</p>
      <p>{t('ChatGPTParaphraserPage.writeUp.reviewP2')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.citationTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.citationP1')}</p>
      <p>{t('ChatGPTParaphraserPage.writeUp.citationP2')}</p>

      <h2>{t('ChatGPTParaphraserPage.writeUp.applicationsTitle')}</h2>
      <p>{t('ChatGPTParaphraserPage.writeUp.applicationsP1')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.academicTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.academicP1')}</p>
      <p>{t('ChatGPTParaphraserPage.writeUp.academicP2')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.professionalTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.professionalP1')}</p>
      <p>{t('ChatGPTParaphraserPage.writeUp.professionalP2')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.contentTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.contentP1')}</p>
      <p>{t('ChatGPTParaphraserPage.writeUp.contentP2')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.learningTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.learningP1')}</p>
      <p>{t('ChatGPTParaphraserPage.writeUp.learningP2')}</p>

      <h2>{t('ChatGPTParaphraserPage.writeUp.aiContentTitle')}</h2>
      <p>{t('ChatGPTParaphraserPage.writeUp.aiContentP1')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.effectsTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.effectsP1')}</p>
      <p>{t('ChatGPTParaphraserPage.writeUp.effectsP2')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.improvingTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.improvingP1')}</p>
      <p>{t('ChatGPTParaphraserPage.writeUp.improvingP2')}</p>

      <h2>{t('ChatGPTParaphraserPage.writeUp.bestPracticesTitle')}</h2>
      <p>{t('ChatGPTParaphraserPage.writeUp.bestPracticesP1')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.understandTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.understandP1')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.substantialTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.substantialP1')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.preserveTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.preserveP1')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.matchTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.matchP1')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.citeTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.citeP1')}</p>

      <h2>{t('ChatGPTParaphraserPage.writeUp.techniquesTitle')}</h2>
      <p>{t('ChatGPTParaphraserPage.writeUp.techniquesP1')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.synonymSubTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.synonymSubP1')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.voiceChangeTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.voiceChangeP1')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.sentenceRestructureTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.sentenceRestructureP1')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.reorderingTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.reorderingP1')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.phraseTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.phraseP1')}</p>

      <h2>{t('ChatGPTParaphraserPage.writeUp.limitationsTitle')}</h2>
      <p>{t('ChatGPTParaphraserPage.writeUp.limitationsP1')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.accuracyTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.accuracyP1')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.styleTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.styleP1')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.technicalTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.technicalP1')}</p>

      <h3>{t('ChatGPTParaphraserPage.writeUp.lengthTitle')}</h3>
      <p>{t('ChatGPTParaphraserPage.writeUp.lengthP1')}</p>
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
    seoTitle: 'ChatGPT Paraphraser - Free Online Text Rewriting Tool',
    urlPath: `/${toolSlug}`,
    locale,
  });
}

export default async function ChatGPTParaphraserPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ChatGPTParaphraserTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp(t)}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">{t('ChatGPTParaphraserPage.faqHeading')}</h2>
          <p className="text-slate-700">
            {t('ChatGPTParaphraserPage.faqIntro')}
          </p>
        </div>
        {/* Create translated FAQs from translation keys */}
        {(() => {
          const pageFaqs: FaqItem[] = faqKeys.map(({ key, category }) => ({
            category: t(`ChatGPTParaphraserPage.faqs.${key}.category`) || category,
            question: t(`ChatGPTParaphraserPage.faqs.${key}.question`),
            answer: t(`ChatGPTParaphraserPage.faqs.${key}.answer`),
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
