import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { EmDashRemoverTool } from '@/components/tools/EmDashRemoverTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

const toolSlug = 'em-dash-remover';

export async function generateMetadata(): Promise<Metadata> {
  
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = "Em Dash Remover / Replacer";
  const description = "Remove or replace em dashes (—) and en dashes (–) with your preferred spacing.";
  const seoTitle = "Em Dash Remover - Replace or remove em dashes — and –";
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
  });
}

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'General' },
  { key: 'faq2', category: 'Technical' },
  { key: 'faq3', category: 'Technical' },
  { key: 'faq4', category: 'Formatting' },
  { key: 'faq5', category: 'Usage' },
  { key: 'faq6', category: 'Formatting' },
  { key: 'faq7', category: 'Limits' },
  { key: 'faq8', category: 'General' },
  { key: 'faq9', category: 'Technical' },
  { key: 'faq10', category: 'Limits' },
  { key: 'faq11', category: 'Limits' },
  { key: 'faq12', category: 'Workflow' },
  { key: 'faq13', category: 'General' },
  { key: 'faq14', category: 'Professional' },
  { key: 'faq15', category: 'Academic' },
  { key: 'faq16', category: 'SEO' },
  { key: 'faq17', category: 'Accessibility' },
  { key: 'faq18', category: 'Privacy' },
  { key: 'faq19', category: 'Compatibility' },
  { key: 'faq20', category: 'Technical' },
  { key: 'faq21', category: 'Usage' },
  { key: 'faq22', category: 'Responsible Use' },
];

// Note: writeUp content needs to be hardcoded from en.json if needed
// Removed createWriteUp function
function createWriteUp() {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>'EmDashRemoverPage.writeUp.title'</h2>
      <p>'EmDashRemoverPage.writeUp.intro'</p>

      <h2>'EmDashRemoverPage.writeUp.introductionTitle'</h2>
      <p>'EmDashRemoverPage.writeUp.introductionP1'</p>
      <p>'EmDashRemoverPage.writeUp.introductionP2'</p>
      <p>'EmDashRemoverPage.writeUp.introductionP3'</p>
      <p>'EmDashRemoverPage.writeUp.introductionP4'</p>

      <h2>'EmDashRemoverPage.writeUp.whatIsTitle'</h2>
      <p>'EmDashRemoverPage.writeUp.whatIsP1'</p>
      <p>'EmDashRemoverPage.writeUp.whatIsP2'</p>
      <p>'EmDashRemoverPage.writeUp.whatIsP3'</p>
      <p>'EmDashRemoverPage.writeUp.whatIsP4'</p>

      <h2>'EmDashRemoverPage.writeUp.whyMattersTitle'</h2>
      <p>'EmDashRemoverPage.writeUp.whyMattersP1'</p>
      <p>'EmDashRemoverPage.writeUp.whyMattersP2'</p>
      <p>'EmDashRemoverPage.writeUp.whyMattersP3'</p>
      <p>'EmDashRemoverPage.writeUp.whyMattersP4'</p>

      <h2>'EmDashRemoverPage.writeUp.howWorksTitle'</h2>
      <h3>'EmDashRemoverPage.writeUp.step1Title'</h3>
      <p>'EmDashRemoverPage.writeUp.step1Text'</p>
      <h3>'EmDashRemoverPage.writeUp.step2Title'</h3>
      <p>'EmDashRemoverPage.writeUp.step2Text'</p>
      <h3>'EmDashRemoverPage.writeUp.step3Title'</h3>
      <p>'EmDashRemoverPage.writeUp.step3Text'</p>
      <h3>'EmDashRemoverPage.writeUp.step4Title'</h3>
      <p>'EmDashRemoverPage.writeUp.step4P1'</p>
      <p>'EmDashRemoverPage.writeUp.step4P2'</p>

      <h2>'EmDashRemoverPage.writeUp.commonProblemsTitle'</h2>
      <p>'EmDashRemoverPage.writeUp.commonProblemsIntro'</p>
      <ul>
        <li>'EmDashRemoverPage.writeUp.commonProblemsItem1'</li>
        <li>'EmDashRemoverPage.writeUp.commonProblemsItem2'</li>
        <li>'EmDashRemoverPage.writeUp.commonProblemsItem3'</li>
        <li>'EmDashRemoverPage.writeUp.commonProblemsItem4'</li>
        <li>'EmDashRemoverPage.writeUp.commonProblemsItem5'</li>
      </ul>
      <p>'EmDashRemoverPage.writeUp.commonProblemsP1'</p>
      <p>'EmDashRemoverPage.writeUp.commonProblemsP2'</p>

      <h2>'EmDashRemoverPage.writeUp.supportedSourcesTitle'</h2>
      <p>'EmDashRemoverPage.writeUp.supportedSourcesP1'</p>
      <h3>'EmDashRemoverPage.writeUp.webCmsTitle'</h3>
      <p>'EmDashRemoverPage.writeUp.webCmsText'</p>
      <h3>'EmDashRemoverPage.writeUp.pdfTitle'</h3>
      <p>'EmDashRemoverPage.writeUp.pdfText'</p>
      <h3>'EmDashRemoverPage.writeUp.wordTitle'</h3>
      <p>'EmDashRemoverPage.writeUp.wordText'</p>
      <h3>'EmDashRemoverPage.writeUp.emailsTitle'</h3>
      <p>'EmDashRemoverPage.writeUp.emailsText'</p>
      <h3>'EmDashRemoverPage.writeUp.aiTitle'</h3>
      <p>'EmDashRemoverPage.writeUp.aiText'</p>
      <h3>'EmDashRemoverPage.writeUp.chatTitle'</h3>
      <p>'EmDashRemoverPage.writeUp.chatText'</p>
      <p>'EmDashRemoverPage.writeUp.supportedSourcesP2'</p>

      <h2>'EmDashRemoverPage.writeUp.doesNotDoTitle'</h2>
      <p>'EmDashRemoverPage.writeUp.doesNotDoIntro'</p>
      <ul>
        <li>'EmDashRemoverPage.writeUp.doesNotDoItem1'</li>
        <li>'EmDashRemoverPage.writeUp.doesNotDoItem2'</li>
        <li>'EmDashRemoverPage.writeUp.doesNotDoItem3'</li>
        <li>'EmDashRemoverPage.writeUp.doesNotDoItem4'</li>
        <li>'EmDashRemoverPage.writeUp.doesNotDoItem5'</li>
      </ul>
      <p>'EmDashRemoverPage.writeUp.doesNotDoP1'</p>

      <h2>'EmDashRemoverPage.writeUp.privacyTitle'</h2>
      <p>'EmDashRemoverPage.writeUp.privacyP1'</p>
      <p>'EmDashRemoverPage.writeUp.privacyP2'</p>
      <p>'EmDashRemoverPage.writeUp.privacyP3'</p>

      <h2>'EmDashRemoverPage.writeUp.professionalTitle'</h2>
      <p>'EmDashRemoverPage.writeUp.professionalIntro'</p>
      <h3>'EmDashRemoverPage.writeUp.editorsTitle'</h3>
      <p>'EmDashRemoverPage.writeUp.editorsText'</p>
      <h3>'EmDashRemoverPage.writeUp.developersTitle'</h3>
      <p>'EmDashRemoverPage.writeUp.developersText'</p>
      <h3>'EmDashRemoverPage.writeUp.marketingTitle'</h3>
      <p>'EmDashRemoverPage.writeUp.marketingText'</p>
      <h3>'EmDashRemoverPage.writeUp.legalTitle'</h3>
      <p>'EmDashRemoverPage.writeUp.legalText'</p>
      <p>'EmDashRemoverPage.writeUp.professionalP1'</p>
      <p>'EmDashRemoverPage.writeUp.professionalP2'</p>

      <h2>'EmDashRemoverPage.writeUp.educationalTitle'</h2>
      <p>'EmDashRemoverPage.writeUp.educationalP1'</p>
      <p>'EmDashRemoverPage.writeUp.educationalP2'</p>

      <h2>'EmDashRemoverPage.writeUp.publishingTitle'</h2>
      <p>'EmDashRemoverPage.writeUp.publishingP1'</p>
      <p>'EmDashRemoverPage.writeUp.publishingP2'</p>
      <p>'EmDashRemoverPage.writeUp.publishingP3'</p>

      <h2>'EmDashRemoverPage.writeUp.accessibilityTitle'</h2>
      <p>'EmDashRemoverPage.writeUp.accessibilityP1'</p>
      <p>'EmDashRemoverPage.writeUp.accessibilityP2'</p>
      <p>'EmDashRemoverPage.writeUp.accessibilityP3'</p>

      <h2>'EmDashRemoverPage.writeUp.whyOnlineTitle'</h2>
      <p>'EmDashRemoverPage.writeUp.whyOnlineP1'</p>
      <p>'EmDashRemoverPage.writeUp.whyOnlineP2'</p>
      <p>'EmDashRemoverPage.writeUp.whyOnlineP3'</p>

      <h2>'EmDashRemoverPage.writeUp.edgeCasesTitle'</h2>
      <p>'EmDashRemoverPage.writeUp.edgeCasesIntro'</p>
      <ul>
        <li>'EmDashRemoverPage.writeUp.edgeCasesItem1'</li>
        <li>'EmDashRemoverPage.writeUp.edgeCasesItem2'</li>
        <li>'EmDashRemoverPage.writeUp.edgeCasesItem3'</li>
        <li>'EmDashRemoverPage.writeUp.edgeCasesItem4'</li>
        <li>'EmDashRemoverPage.writeUp.edgeCasesItem5'</li>
      </ul>
      <p>'EmDashRemoverPage.writeUp.edgeCasesP1'</p>

      <h2>'EmDashRemoverPage.writeUp.bestPracticesTitle'</h2>
      <p>'EmDashRemoverPage.writeUp.bestPracticesIntro'</p>
      <ul>
        <li>'EmDashRemoverPage.writeUp.bestPracticesItem1'</li>
        <li>'EmDashRemoverPage.writeUp.bestPracticesItem2'</li>
        <li>'EmDashRemoverPage.writeUp.bestPracticesItem3'</li>
        <li>'EmDashRemoverPage.writeUp.bestPracticesItem4'</li>
        <li>'EmDashRemoverPage.writeUp.bestPracticesItem5'</li>
      </ul>
      <p>'EmDashRemoverPage.writeUp.bestPracticesP1'</p>

      <h2>'EmDashRemoverPage.writeUp.misunderstoodTitle'</h2>
      <h3>'EmDashRemoverPage.writeUp.notRewriteTitle'</h3>
      <p>'EmDashRemoverPage.writeUp.notRewriteText'</p>
      <h3>'EmDashRemoverPage.writeUp.differentCharsTitle'</h3>
      <p>'EmDashRemoverPage.writeUp.differentCharsText'</p>
      <h3>'EmDashRemoverPage.writeUp.rhythmTitle'</h3>
      <p>'EmDashRemoverPage.writeUp.rhythmText'</p>
      <h3>'EmDashRemoverPage.writeUp.plainTextLimitsTitle'</h3>
      <p>'EmDashRemoverPage.writeUp.plainTextLimitsText'</p>

      <h2>'EmDashRemoverPage.writeUp.disclaimerTitle'</h2>
      <p>'EmDashRemoverPage.writeUp.disclaimerP1'</p>
      <p>'EmDashRemoverPage.writeUp.disclaimerP2'</p>

      <h2>'EmDashRemoverPage.writeUp.summaryTitle'</h2>
      <p>'EmDashRemoverPage.writeUp.summaryP1'</p>
      <p>'EmDashRemoverPage.writeUp.summaryP2'</p>
      <p>'EmDashRemoverPage.writeUp.summaryP3'</p>
    </div>
  </section>
  );
}

export default async function EmDashRemoverPage() {
  
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;

  const url = `${siteUrl}/${toolSlug}/`;

  // Create translated FAQs from translation keys
  const pageFaqs: FaqItem[] = []; // Note: FAQs need to be hardcoded from en.json if needed

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<EmDashRemoverTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {/* Note: writeUp content needs to be hardcoded from en.json if needed */}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">'EmDashRemoverPage.faqHeading'</h2>
          <p className="text-slate-700">
            'EmDashRemoverPage.faqIntro'
          </p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
