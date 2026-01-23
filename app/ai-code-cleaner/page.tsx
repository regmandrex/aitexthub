import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { AICodeCleanerTool } from '@/components/tools/AICodeCleanerTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

const toolSlug = 'ai-code-cleaner';

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
        <h2>{t('AICodeCleanerPage.writeUp.title')}</h2>
        
        <h3>{t('AICodeCleanerPage.writeUp.introductionTitle')}</h3>
        <p>{t('AICodeCleanerPage.writeUp.introductionP1')}</p>
        <p>{t('AICodeCleanerPage.writeUp.introductionP2')}</p>
        <p>{t('AICodeCleanerPage.writeUp.introductionP3')}</p>
        <p>{t('AICodeCleanerPage.writeUp.introductionP4')}</p>

        <h2>{t('AICodeCleanerPage.writeUp.whatIsTitle')}</h2>
        <p>{t('AICodeCleanerPage.writeUp.whatIsP1')}</p>
        <p>{t('AICodeCleanerPage.writeUp.whatIsP2')}</p>
        <p>{t('AICodeCleanerPage.writeUp.whatIsP3')}</p>

        <h2>{t('AICodeCleanerPage.writeUp.whyNeededTitle')}</h2>
        <p>{t('AICodeCleanerPage.writeUp.whyNeededP1')}</p>
        
        <h3>{t('AICodeCleanerPage.writeUp.formattingIssuesTitle')}</h3>
        <p>{t('AICodeCleanerPage.writeUp.formattingIssuesP1')}</p>
        <ul>
          <li>{t('AICodeCleanerPage.writeUp.formattingIssuesItem1')}</li>
          <li>{t('AICodeCleanerPage.writeUp.formattingIssuesItem2')}</li>
          <li>{t('AICodeCleanerPage.writeUp.formattingIssuesItem3')}</li>
          <li>{t('AICodeCleanerPage.writeUp.formattingIssuesItem4')}</li>
        </ul>

        <h3>{t('AICodeCleanerPage.writeUp.versionControlTitle')}</h3>
        <p>{t('AICodeCleanerPage.writeUp.versionControlP1')}</p>
        <p>{t('AICodeCleanerPage.writeUp.versionControlP2')}</p>

        <h3>{t('AICodeCleanerPage.writeUp.readabilityTitle')}</h3>
        <p>{t('AICodeCleanerPage.writeUp.readabilityP1')}</p>
        <p>{t('AICodeCleanerPage.writeUp.readabilityP2')}</p>

        <h2>{t('AICodeCleanerPage.writeUp.featuresTitle')}</h2>
        <p>{t('AICodeCleanerPage.writeUp.featuresP1')}</p>

        <h3>{t('AICodeCleanerPage.writeUp.trailingSpacesTitle')}</h3>
        <p>{t('AICodeCleanerPage.writeUp.trailingSpacesP1')}</p>
        <p>{t('AICodeCleanerPage.writeUp.trailingSpacesP2')}</p>

        <h3>{t('AICodeCleanerPage.writeUp.indentationTitle')}</h3>
        <p>{t('AICodeCleanerPage.writeUp.indentationP1')}</p>
        <p>{t('AICodeCleanerPage.writeUp.indentationP2')}</p>

        <h3>{t('AICodeCleanerPage.writeUp.zeroWidthTitle')}</h3>
        <p>{t('AICodeCleanerPage.writeUp.zeroWidthP1')}</p>
        <p>{t('AICodeCleanerPage.writeUp.zeroWidthP2')}</p>

        <h3>{t('AICodeCleanerPage.writeUp.lineEndingsTitle')}</h3>
        <p>{t('AICodeCleanerPage.writeUp.lineEndingsP1')}</p>
        <p>{t('AICodeCleanerPage.writeUp.lineEndingsP2')}</p>

        <h3>{t('AICodeCleanerPage.writeUp.blankLinesTitle')}</h3>
        <p>{t('AICodeCleanerPage.writeUp.blankLinesP1')}</p>

        <h3>{t('AICodeCleanerPage.writeUp.whitespaceTitle')}</h3>
        <p>{t('AICodeCleanerPage.writeUp.whitespaceP1')}</p>

        <h3>{t('AICodeCleanerPage.writeUp.operatorsTitle')}</h3>
        <p>{t('AICodeCleanerPage.writeUp.operatorsP1')}</p>

        <h2>{t('AICodeCleanerPage.writeUp.howItWorksTitle')}</h2>
        <p>{t('AICodeCleanerPage.writeUp.howItWorksP1')}</p>

        <h3>{t('AICodeCleanerPage.writeUp.step1Title')}</h3>
        <p>{t('AICodeCleanerPage.writeUp.step1P1')}</p>

        <h3>{t('AICodeCleanerPage.writeUp.step2Title')}</h3>
        <p>{t('AICodeCleanerPage.writeUp.step2P1')}</p>

        <h3>{t('AICodeCleanerPage.writeUp.step3Title')}</h3>
        <p>{t('AICodeCleanerPage.writeUp.step3P1')}</p>

        <h3>{t('AICodeCleanerPage.writeUp.step4Title')}</h3>
        <p>{t('AICodeCleanerPage.writeUp.step4P1')}</p>

        <h2>{t('AICodeCleanerPage.writeUp.bestPracticesTitle')}</h2>
        <p>{t('AICodeCleanerPage.writeUp.bestPracticesP1')}</p>

        <h3>{t('AICodeCleanerPage.writeUp.beforeCommitTitle')}</h3>
        <p>{t('AICodeCleanerPage.writeUp.beforeCommitP1')}</p>

        <h3>{t('AICodeCleanerPage.writeUp.codeReviewTitle')}</h3>
        <p>{t('AICodeCleanerPage.writeUp.codeReviewP1')}</p>

        <h3>{t('AICodeCleanerPage.writeUp.teamStandardsTitle')}</h3>
        <p>{t('AICodeCleanerPage.writeUp.teamStandardsP1')}</p>

        <h2>{t('AICodeCleanerPage.writeUp.useCasesTitle')}</h2>
        <p>{t('AICodeCleanerPage.writeUp.useCasesP1')}</p>

        <h3>{t('AICodeCleanerPage.writeUp.aiGeneratedTitle')}</h3>
        <p>{t('AICodeCleanerPage.writeUp.aiGeneratedP1')}</p>

        <h3>{t('AICodeCleanerPage.writeUp.legacyCodeTitle')}</h3>
        <p>{t('AICodeCleanerPage.writeUp.legacyCodeP1')}</p>

        <h3>{t('AICodeCleanerPage.writeUp.crossPlatformTitle')}</h3>
        <p>{t('AICodeCleanerPage.writeUp.crossPlatformP1')}</p>

        <h2>{t('AICodeCleanerPage.writeUp.securityTitle')}</h2>
        <p>{t('AICodeCleanerPage.writeUp.securityP1')}</p>
        <p>{t('AICodeCleanerPage.writeUp.securityP2')}</p>

        <h2>{t('AICodeCleanerPage.writeUp.limitationsTitle')}</h2>
        <p>{t('AICodeCleanerPage.writeUp.limitationsP1')}</p>
        <ul>
          <li>{t('AICodeCleanerPage.writeUp.limitationsItem1')}</li>
          <li>{t('AICodeCleanerPage.writeUp.limitationsItem2')}</li>
          <li>{t('AICodeCleanerPage.writeUp.limitationsItem3')}</li>
        </ul>

        <h2>{t('AICodeCleanerPage.writeUp.comparisonTitle')}</h2>
        <p>{t('AICodeCleanerPage.writeUp.comparisonP1')}</p>

        <h3>{t('AICodeCleanerPage.writeUp.vsPrettierTitle')}</h3>
        <p>{t('AICodeCleanerPage.writeUp.vsPrettierP1')}</p>

        <h3>{t('AICodeCleanerPage.writeUp.vsESLintTitle')}</h3>
        <p>{t('AICodeCleanerPage.writeUp.vsESLintP1')}</p>

        <h2>{t('AICodeCleanerPage.writeUp.conclusionTitle')}</h2>
        <p>{t('AICodeCleanerPage.writeUp.conclusionP1')}</p>
        <p>{t('AICodeCleanerPage.writeUp.conclusionP2')}</p>
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
    : tool?.title ?? 'AI Code Cleaner';
  const description = t(`Tools.${toolKey}.description`) !== `Tools.${toolKey}.description`
    ? t(`Tools.${toolKey}.description`)
    : tool?.shortDescription ?? 'Clean and format AI-generated code.';
  const seoTitle = tool?.seoTitle ? (t(`Tools.${toolKey}.seoTitle`) !== `Tools.${toolKey}.seoTitle` ? t(`Tools.${toolKey}.seoTitle`) : tool.seoTitle) : undefined;
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
    locale,
  });
}

export default async function AICodeCleanerPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<AICodeCleanerTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp(t)}

        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">{t('AICodeCleanerPage.faqHeading')}</h2>
          <p className="text-slate-700">
            {t('AICodeCleanerPage.faqIntro')}
          </p>
        </div>

        {/* Create translated FAQs from translation keys */}
        {(() => {
          const pageFaqs: FaqItem[] = faqKeys.map(({ key, category }) => ({
            category: t(`AICodeCleanerPage.faqs.${key}.category`) || category,
            question: t(`AICodeCleanerPage.faqs.${key}.question`),
            answer: t(`AICodeCleanerPage.faqs.${key}.answer`),
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
