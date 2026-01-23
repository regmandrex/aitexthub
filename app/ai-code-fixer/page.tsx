import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { AICodeFixerTool } from '@/components/tools/AICodeFixerTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

const toolSlug = 'ai-code-fixer';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'General' },
  { key: 'faq2', category: 'General' },
  { key: 'faq3', category: 'Technical' },
  { key: 'faq4', category: 'Usage' },
  { key: 'faq5', category: 'Formatting' },
  { key: 'faq6', category: 'Formatting' },
  { key: 'faq7', category: 'Usage' },
  { key: 'faq8', category: 'General' },
  { key: 'faq9', category: 'Technical' },
  { key: 'faq10', category: 'Formatting' },
  { key: 'faq11', category: 'Technical' },
  { key: 'faq12', category: 'Best Practices' },
  { key: 'faq13', category: 'Best Practices' },
  { key: 'faq14', category: 'Technical' },
  { key: 'faq15', category: 'Usage' },
  { key: 'faq16', category: 'Formatting' },
  { key: 'faq17', category: 'Security' },
  { key: 'faq18', category: 'Performance' },
  { key: 'faq19', category: 'Integration' },
  { key: 'faq20', category: 'Troubleshooting' },
  { key: 'faq21', category: 'Troubleshooting' },
  { key: 'faq22', category: 'Best Practices' },
  { key: 'faq23', category: 'Technical' },
  { key: 'faq24', category: 'Usage' },
  { key: 'faq25', category: 'Formatting' },
  { key: 'faq26', category: 'Technical' },
  { key: 'faq27', category: 'Best Practices' },
  { key: 'faq28', category: 'Integration' },
];

// Helper function to create writeUp content using translations
function createWriteUp(t: (key: string) => string) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>{t('AICodeFixerPage.writeUp.title')}</h2>
        
        <h3>{t('AICodeFixerPage.writeUp.introductionTitle')}</h3>
        <p>{t('AICodeFixerPage.writeUp.introductionP1')}</p>
        <p>{t('AICodeFixerPage.writeUp.introductionP2')}</p>
        <p>{t('AICodeFixerPage.writeUp.introductionP3')}</p>
        <p>{t('AICodeFixerPage.writeUp.introductionP4')}</p>

        <h2>{t('AICodeFixerPage.writeUp.whatIsTitle')}</h2>
        <p>{t('AICodeFixerPage.writeUp.whatIsP1')}</p>
        <p>{t('AICodeFixerPage.writeUp.whatIsP2')}</p>
        <p>{t('AICodeFixerPage.writeUp.whatIsP3')}</p>

        <h2>{t('AICodeFixerPage.writeUp.whyNeededTitle')}</h2>
        <p>{t('AICodeFixerPage.writeUp.whyNeededP1')}</p>
        
        <h3>{t('AICodeFixerPage.writeUp.commonIssuesTitle')}</h3>
        <p>{t('AICodeFixerPage.writeUp.commonIssuesP1')}</p>
        <ul>
          <li>{t('AICodeFixerPage.writeUp.commonIssuesItem1')}</li>
          <li>{t('AICodeFixerPage.writeUp.commonIssuesItem2')}</li>
          <li>{t('AICodeFixerPage.writeUp.commonIssuesItem3')}</li>
          <li>{t('AICodeFixerPage.writeUp.commonIssuesItem4')}</li>
        </ul>

        <h3>{t('AICodeFixerPage.writeUp.productivityTitle')}</h3>
        <p>{t('AICodeFixerPage.writeUp.productivityP1')}</p>
        <p>{t('AICodeFixerPage.writeUp.productivityP2')}</p>

        <h3>{t('AICodeFixerPage.writeUp.qualityTitle')}</h3>
        <p>{t('AICodeFixerPage.writeUp.qualityP1')}</p>

        <h2>{t('AICodeFixerPage.writeUp.featuresTitle')}</h2>
        <p>{t('AICodeFixerPage.writeUp.featuresP1')}</p>

        <h3>{t('AICodeFixerPage.writeUp.indentationFixTitle')}</h3>
        <p>{t('AICodeFixerPage.writeUp.indentationFixP1')}</p>
        <p>{t('AICodeFixerPage.writeUp.indentationFixP2')}</p>

        <h3>{t('AICodeFixerPage.writeUp.quotesTitle')}</h3>
        <p>{t('AICodeFixerPage.writeUp.quotesP1')}</p>
        <p>{t('AICodeFixerPage.writeUp.quotesP2')}</p>

        <h3>{t('AICodeFixerPage.writeUp.syntaxTitle')}</h3>
        <p>{t('AICodeFixerPage.writeUp.syntaxP1')}</p>
        <p>{t('AICodeFixerPage.writeUp.syntaxP2')}</p>

        <h3>{t('AICodeFixerPage.writeUp.bracketsTitle')}</h3>
        <p>{t('AICodeFixerPage.writeUp.bracketsP1')}</p>

        <h3>{t('AICodeFixerPage.writeUp.semicolonsTitle')}</h3>
        <p>{t('AICodeFixerPage.writeUp.semicolonsP1')}</p>

        <h3>{t('AICodeFixerPage.writeUp.typosTitle')}</h3>
        <p>{t('AICodeFixerPage.writeUp.typosP1')}</p>
        <p>{t('AICodeFixerPage.writeUp.typosP2')}</p>

        <h2>{t('AICodeFixerPage.writeUp.howItWorksTitle')}</h2>
        <p>{t('AICodeFixerPage.writeUp.howItWorksP1')}</p>

        <h3>{t('AICodeFixerPage.writeUp.step1Title')}</h3>
        <p>{t('AICodeFixerPage.writeUp.step1P1')}</p>

        <h3>{t('AICodeFixerPage.writeUp.step2Title')}</h3>
        <p>{t('AICodeFixerPage.writeUp.step2P1')}</p>

        <h3>{t('AICodeFixerPage.writeUp.step3Title')}</h3>
        <p>{t('AICodeFixerPage.writeUp.step3P1')}</p>

        <h3>{t('AICodeFixerPage.writeUp.step4Title')}</h3>
        <p>{t('AICodeFixerPage.writeUp.step4P1')}</p>

        <h2>{t('AICodeFixerPage.writeUp.bestPracticesTitle')}</h2>
        <p>{t('AICodeFixerPage.writeUp.bestPracticesP1')}</p>

        <h3>{t('AICodeFixerPage.writeUp.selectiveTitle')}</h3>
        <p>{t('AICodeFixerPage.writeUp.selectiveP1')}</p>

        <h3>{t('AICodeFixerPage.writeUp.reviewTitle')}</h3>
        <p>{t('AICodeFixerPage.writeUp.reviewP1')}</p>

        <h3>{t('AICodeFixerPage.writeUp.testingTitle')}</h3>
        <p>{t('AICodeFixerPage.writeUp.testingP1')}</p>

        <h2>{t('AICodeFixerPage.writeUp.useCasesTitle')}</h2>
        <p>{t('AICodeFixerPage.writeUp.useCasesP1')}</p>

        <h3>{t('AICodeFixerPage.writeUp.aiGeneratedTitle')}</h3>
        <p>{t('AICodeFixerPage.writeUp.aiGeneratedP1')}</p>

        <h3>{t('AICodeFixerPage.writeUp.quickFixesTitle')}</h3>
        <p>{t('AICodeFixerPage.writeUp.quickFixesP1')}</p>

        <h3>{t('AICodeFixerPage.writeUp.learningTitle')}</h3>
        <p>{t('AICodeFixerPage.writeUp.learningP1')}</p>

        <h2>{t('AICodeFixerPage.writeUp.securityTitle')}</h2>
        <p>{t('AICodeFixerPage.writeUp.securityP1')}</p>
        <p>{t('AICodeFixerPage.writeUp.securityP2')}</p>

        <h2>{t('AICodeFixerPage.writeUp.limitationsTitle')}</h2>
        <p>{t('AICodeFixerPage.writeUp.limitationsP1')}</p>
        <ul>
          <li>{t('AICodeFixerPage.writeUp.limitationsItem1')}</li>
          <li>{t('AICodeFixerPage.writeUp.limitationsItem2')}</li>
          <li>{t('AICodeFixerPage.writeUp.limitationsItem3')}</li>
        </ul>

        <h2>{t('AICodeFixerPage.writeUp.comparisonTitle')}</h2>
        <p>{t('AICodeFixerPage.writeUp.comparisonP1')}</p>

        <h3>{t('AICodeFixerPage.writeUp.vsLintersTitle')}</h3>
        <p>{t('AICodeFixerPage.writeUp.vsLintersP1')}</p>

        <h3>{t('AICodeFixerPage.writeUp.vsFormattersTitle')}</h3>
        <p>{t('AICodeFixerPage.writeUp.vsFormattersP1')}</p>

        <h2>{t('AICodeFixerPage.writeUp.conclusionTitle')}</h2>
        <p>{t('AICodeFixerPage.writeUp.conclusionP1')}</p>
        <p>{t('AICodeFixerPage.writeUp.conclusionP2')}</p>
      </div>
    </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = t(`Tools.${toolKey}.title`) !== `Tools.${toolKey}.title` 
    ? t(`Tools.${toolKey}.title`) 
    : tool?.title ?? 'AI Code Fixer';
  const description = t(`Tools.${toolKey}.description`) !== `Tools.${toolKey}.description`
    ? t(`Tools.${toolKey}.description`)
    : tool?.shortDescription ?? 'Fix common issues in AI-generated code.';
  const seoTitle = tool?.seoTitle ? (t(`Tools.${toolKey}.seoTitle`) !== `Tools.${toolKey}.seoTitle` ? t(`Tools.${toolKey}.seoTitle`) : tool.seoTitle) : undefined;
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
    locale,
  });
}

export default async function AICodeFixerPage() {
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

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<AICodeFixerTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp(t)}

        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">{t('AICodeFixerPage.faqHeading')}</h2>
          <p className="text-slate-700">
            {t('AICodeFixerPage.faqIntro')}
          </p>
        </div>

        {/* Create translated FAQs from translation keys */}
        {(() => {
          const pageFaqs: FaqItem[] = faqKeys.map(({ key, category }) => ({
            category: t(`AICodeFixerPage.faqs.${key}.category`) || category,
            question: t(`AICodeFixerPage.faqs.${key}.question`),
            answer: t(`AICodeFixerPage.faqs.${key}.answer`),
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
