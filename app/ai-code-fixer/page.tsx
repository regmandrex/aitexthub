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
// Note: writeUp content needs to be hardcoded from en.json if needed
// Removed createWriteUp function
function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>'AICodeFixerPage.writeUp.title'</h2>
        
        <h3>'AICodeFixerPage.writeUp.introductionTitle'</h3>
        <p>'AICodeFixerPage.writeUp.introductionP1'</p>
        <p>'AICodeFixerPage.writeUp.introductionP2'</p>
        <p>'AICodeFixerPage.writeUp.introductionP3'</p>
        <p>'AICodeFixerPage.writeUp.introductionP4'</p>

        <h2>'AICodeFixerPage.writeUp.whatIsTitle'</h2>
        <p>'AICodeFixerPage.writeUp.whatIsP1'</p>
        <p>'AICodeFixerPage.writeUp.whatIsP2'</p>
        <p>'AICodeFixerPage.writeUp.whatIsP3'</p>

        <h2>'AICodeFixerPage.writeUp.whyNeededTitle'</h2>
        <p>'AICodeFixerPage.writeUp.whyNeededP1'</p>
        
        <h3>'AICodeFixerPage.writeUp.commonIssuesTitle'</h3>
        <p>'AICodeFixerPage.writeUp.commonIssuesP1'</p>
        <ul>
          <li>'AICodeFixerPage.writeUp.commonIssuesItem1'</li>
          <li>'AICodeFixerPage.writeUp.commonIssuesItem2'</li>
          <li>'AICodeFixerPage.writeUp.commonIssuesItem3'</li>
          <li>'AICodeFixerPage.writeUp.commonIssuesItem4'</li>
        </ul>

        <h3>'AICodeFixerPage.writeUp.productivityTitle'</h3>
        <p>'AICodeFixerPage.writeUp.productivityP1'</p>
        <p>'AICodeFixerPage.writeUp.productivityP2'</p>

        <h3>'AICodeFixerPage.writeUp.qualityTitle'</h3>
        <p>'AICodeFixerPage.writeUp.qualityP1'</p>

        <h2>'AICodeFixerPage.writeUp.featuresTitle'</h2>
        <p>'AICodeFixerPage.writeUp.featuresP1'</p>

        <h3>'AICodeFixerPage.writeUp.indentationFixTitle'</h3>
        <p>'AICodeFixerPage.writeUp.indentationFixP1'</p>
        <p>'AICodeFixerPage.writeUp.indentationFixP2'</p>

        <h3>'AICodeFixerPage.writeUp.quotesTitle'</h3>
        <p>'AICodeFixerPage.writeUp.quotesP1'</p>
        <p>'AICodeFixerPage.writeUp.quotesP2'</p>

        <h3>'AICodeFixerPage.writeUp.syntaxTitle'</h3>
        <p>'AICodeFixerPage.writeUp.syntaxP1'</p>
        <p>'AICodeFixerPage.writeUp.syntaxP2'</p>

        <h3>'AICodeFixerPage.writeUp.bracketsTitle'</h3>
        <p>'AICodeFixerPage.writeUp.bracketsP1'</p>

        <h3>'AICodeFixerPage.writeUp.semicolonsTitle'</h3>
        <p>'AICodeFixerPage.writeUp.semicolonsP1'</p>

        <h3>'AICodeFixerPage.writeUp.typosTitle'</h3>
        <p>'AICodeFixerPage.writeUp.typosP1'</p>
        <p>'AICodeFixerPage.writeUp.typosP2'</p>

        <h2>'AICodeFixerPage.writeUp.howItWorksTitle'</h2>
        <p>'AICodeFixerPage.writeUp.howItWorksP1'</p>

        <h3>'AICodeFixerPage.writeUp.step1Title'</h3>
        <p>'AICodeFixerPage.writeUp.step1P1'</p>

        <h3>'AICodeFixerPage.writeUp.step2Title'</h3>
        <p>'AICodeFixerPage.writeUp.step2P1'</p>

        <h3>'AICodeFixerPage.writeUp.step3Title'</h3>
        <p>'AICodeFixerPage.writeUp.step3P1'</p>

        <h3>'AICodeFixerPage.writeUp.step4Title'</h3>
        <p>'AICodeFixerPage.writeUp.step4P1'</p>

        <h2>'AICodeFixerPage.writeUp.bestPracticesTitle'</h2>
        <p>'AICodeFixerPage.writeUp.bestPracticesP1'</p>

        <h3>'AICodeFixerPage.writeUp.selectiveTitle'</h3>
        <p>'AICodeFixerPage.writeUp.selectiveP1'</p>

        <h3>'AICodeFixerPage.writeUp.reviewTitle'</h3>
        <p>'AICodeFixerPage.writeUp.reviewP1'</p>

        <h3>'AICodeFixerPage.writeUp.testingTitle'</h3>
        <p>'AICodeFixerPage.writeUp.testingP1'</p>

        <h2>'AICodeFixerPage.writeUp.useCasesTitle'</h2>
        <p>'AICodeFixerPage.writeUp.useCasesP1'</p>

        <h3>'AICodeFixerPage.writeUp.aiGeneratedTitle'</h3>
        <p>'AICodeFixerPage.writeUp.aiGeneratedP1'</p>

        <h3>'AICodeFixerPage.writeUp.quickFixesTitle'</h3>
        <p>'AICodeFixerPage.writeUp.quickFixesP1'</p>

        <h3>'AICodeFixerPage.writeUp.learningTitle'</h3>
        <p>'AICodeFixerPage.writeUp.learningP1'</p>

        <h2>'AICodeFixerPage.writeUp.securityTitle'</h2>
        <p>'AICodeFixerPage.writeUp.securityP1'</p>
        <p>'AICodeFixerPage.writeUp.securityP2'</p>

        <h2>'AICodeFixerPage.writeUp.limitationsTitle'</h2>
        <p>'AICodeFixerPage.writeUp.limitationsP1'</p>
        <ul>
          <li>'AICodeFixerPage.writeUp.limitationsItem1'</li>
          <li>'AICodeFixerPage.writeUp.limitationsItem2'</li>
          <li>'AICodeFixerPage.writeUp.limitationsItem3'</li>
        </ul>

        <h2>'AICodeFixerPage.writeUp.comparisonTitle'</h2>
        <p>'AICodeFixerPage.writeUp.comparisonP1'</p>

        <h3>'AICodeFixerPage.writeUp.vsLintersTitle'</h3>
        <p>'AICodeFixerPage.writeUp.vsLintersP1'</p>

        <h3>'AICodeFixerPage.writeUp.vsFormattersTitle'</h3>
        <p>'AICodeFixerPage.writeUp.vsFormattersP1'</p>

        <h2>'AICodeFixerPage.writeUp.conclusionTitle'</h2>
        <p>'AICodeFixerPage.writeUp.conclusionP1'</p>
        <p>'AICodeFixerPage.writeUp.conclusionP2'</p>
      </div>
    </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = "AI Code Fixer";
  const description = "Fix common code issues, syntax errors, indentation problems, and formatting inconsistencies in AI-generated code.";
  const seoTitle = "AI Code Fixer - Fix Common Issues in AI-Generated Code";
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
  });
}

export default async function AICodeFixerPage() {
  
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;

  const url = `${siteUrl}/${toolSlug}/`;

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<AICodeFixerTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {/* Note: writeUp content needs to be hardcoded from en.json if needed */}

        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">'AICodeFixerPage.faqHeading'</h2>
          <p className="text-slate-700">
            'AICodeFixerPage.faqIntro'
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
