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
// Note: writeUp content needs to be hardcoded from en.json if needed
// Removed createWriteUp function
function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>'AICodeCleanerPage.writeUp.title'</h2>
        
        <h3>'AICodeCleanerPage.writeUp.introductionTitle'</h3>
        <p>'AICodeCleanerPage.writeUp.introductionP1'</p>
        <p>'AICodeCleanerPage.writeUp.introductionP2'</p>
        <p>'AICodeCleanerPage.writeUp.introductionP3'</p>
        <p>'AICodeCleanerPage.writeUp.introductionP4'</p>

        <h2>'AICodeCleanerPage.writeUp.whatIsTitle'</h2>
        <p>'AICodeCleanerPage.writeUp.whatIsP1'</p>
        <p>'AICodeCleanerPage.writeUp.whatIsP2'</p>
        <p>'AICodeCleanerPage.writeUp.whatIsP3'</p>

        <h2>'AICodeCleanerPage.writeUp.whyNeededTitle'</h2>
        <p>'AICodeCleanerPage.writeUp.whyNeededP1'</p>
        
        <h3>'AICodeCleanerPage.writeUp.formattingIssuesTitle'</h3>
        <p>'AICodeCleanerPage.writeUp.formattingIssuesP1'</p>
        <ul>
          <li>'AICodeCleanerPage.writeUp.formattingIssuesItem1'</li>
          <li>'AICodeCleanerPage.writeUp.formattingIssuesItem2'</li>
          <li>'AICodeCleanerPage.writeUp.formattingIssuesItem3'</li>
          <li>'AICodeCleanerPage.writeUp.formattingIssuesItem4'</li>
        </ul>

        <h3>'AICodeCleanerPage.writeUp.versionControlTitle'</h3>
        <p>'AICodeCleanerPage.writeUp.versionControlP1'</p>
        <p>'AICodeCleanerPage.writeUp.versionControlP2'</p>

        <h3>'AICodeCleanerPage.writeUp.readabilityTitle'</h3>
        <p>'AICodeCleanerPage.writeUp.readabilityP1'</p>
        <p>'AICodeCleanerPage.writeUp.readabilityP2'</p>

        <h2>'AICodeCleanerPage.writeUp.featuresTitle'</h2>
        <p>'AICodeCleanerPage.writeUp.featuresP1'</p>

        <h3>'AICodeCleanerPage.writeUp.trailingSpacesTitle'</h3>
        <p>'AICodeCleanerPage.writeUp.trailingSpacesP1'</p>
        <p>'AICodeCleanerPage.writeUp.trailingSpacesP2'</p>

        <h3>'AICodeCleanerPage.writeUp.indentationTitle'</h3>
        <p>'AICodeCleanerPage.writeUp.indentationP1'</p>
        <p>'AICodeCleanerPage.writeUp.indentationP2'</p>

        <h3>'AICodeCleanerPage.writeUp.zeroWidthTitle'</h3>
        <p>'AICodeCleanerPage.writeUp.zeroWidthP1'</p>
        <p>'AICodeCleanerPage.writeUp.zeroWidthP2'</p>

        <h3>'AICodeCleanerPage.writeUp.lineEndingsTitle'</h3>
        <p>'AICodeCleanerPage.writeUp.lineEndingsP1'</p>
        <p>'AICodeCleanerPage.writeUp.lineEndingsP2'</p>

        <h3>'AICodeCleanerPage.writeUp.blankLinesTitle'</h3>
        <p>'AICodeCleanerPage.writeUp.blankLinesP1'</p>

        <h3>'AICodeCleanerPage.writeUp.whitespaceTitle'</h3>
        <p>'AICodeCleanerPage.writeUp.whitespaceP1'</p>

        <h3>'AICodeCleanerPage.writeUp.operatorsTitle'</h3>
        <p>'AICodeCleanerPage.writeUp.operatorsP1'</p>

        <h2>'AICodeCleanerPage.writeUp.howItWorksTitle'</h2>
        <p>'AICodeCleanerPage.writeUp.howItWorksP1'</p>

        <h3>'AICodeCleanerPage.writeUp.step1Title'</h3>
        <p>'AICodeCleanerPage.writeUp.step1P1'</p>

        <h3>'AICodeCleanerPage.writeUp.step2Title'</h3>
        <p>'AICodeCleanerPage.writeUp.step2P1'</p>

        <h3>'AICodeCleanerPage.writeUp.step3Title'</h3>
        <p>'AICodeCleanerPage.writeUp.step3P1'</p>

        <h3>'AICodeCleanerPage.writeUp.step4Title'</h3>
        <p>'AICodeCleanerPage.writeUp.step4P1'</p>

        <h2>'AICodeCleanerPage.writeUp.bestPracticesTitle'</h2>
        <p>'AICodeCleanerPage.writeUp.bestPracticesP1'</p>

        <h3>'AICodeCleanerPage.writeUp.beforeCommitTitle'</h3>
        <p>'AICodeCleanerPage.writeUp.beforeCommitP1'</p>

        <h3>'AICodeCleanerPage.writeUp.codeReviewTitle'</h3>
        <p>'AICodeCleanerPage.writeUp.codeReviewP1'</p>

        <h3>'AICodeCleanerPage.writeUp.teamStandardsTitle'</h3>
        <p>'AICodeCleanerPage.writeUp.teamStandardsP1'</p>

        <h2>'AICodeCleanerPage.writeUp.useCasesTitle'</h2>
        <p>'AICodeCleanerPage.writeUp.useCasesP1'</p>

        <h3>'AICodeCleanerPage.writeUp.aiGeneratedTitle'</h3>
        <p>'AICodeCleanerPage.writeUp.aiGeneratedP1'</p>

        <h3>'AICodeCleanerPage.writeUp.legacyCodeTitle'</h3>
        <p>'AICodeCleanerPage.writeUp.legacyCodeP1'</p>

        <h3>'AICodeCleanerPage.writeUp.crossPlatformTitle'</h3>
        <p>'AICodeCleanerPage.writeUp.crossPlatformP1'</p>

        <h2>'AICodeCleanerPage.writeUp.securityTitle'</h2>
        <p>'AICodeCleanerPage.writeUp.securityP1'</p>
        <p>'AICodeCleanerPage.writeUp.securityP2'</p>

        <h2>'AICodeCleanerPage.writeUp.limitationsTitle'</h2>
        <p>'AICodeCleanerPage.writeUp.limitationsP1'</p>
        <ul>
          <li>'AICodeCleanerPage.writeUp.limitationsItem1'</li>
          <li>'AICodeCleanerPage.writeUp.limitationsItem2'</li>
          <li>'AICodeCleanerPage.writeUp.limitationsItem3'</li>
        </ul>

        <h2>'AICodeCleanerPage.writeUp.comparisonTitle'</h2>
        <p>'AICodeCleanerPage.writeUp.comparisonP1'</p>

        <h3>'AICodeCleanerPage.writeUp.vsPrettierTitle'</h3>
        <p>'AICodeCleanerPage.writeUp.vsPrettierP1'</p>

        <h3>'AICodeCleanerPage.writeUp.vsESLintTitle'</h3>
        <p>'AICodeCleanerPage.writeUp.vsESLintP1'</p>

        <h2>'AICodeCleanerPage.writeUp.conclusionTitle'</h2>
        <p>'AICodeCleanerPage.writeUp.conclusionP1'</p>
        <p>'AICodeCleanerPage.writeUp.conclusionP2'</p>
      </div>
    </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = "AI Code Cleaner";
  const description = "Clean and normalize code formatting, remove trailing spaces, fix indentation, and remove invisible characters from AI-generated code.";
  const seoTitle = "AI Code Cleaner - Clean and Format AI-Generated Code";
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
  });
}

export default async function AICodeCleanerPage() {
  
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;

  const url = `${siteUrl}/${toolSlug}/`;

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<AICodeCleanerTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {/* Note: writeUp content needs to be hardcoded from en.json if needed */}

        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">'AICodeCleanerPage.faqHeading'</h2>
          <p className="text-slate-700">
            'AICodeCleanerPage.faqIntro'
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
