import type { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { RemoveWhitespaceTool } from '@/components/tools/RemoveWhitespaceTool';
import type { FaqItem } from '@/components/faqData';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

const toolSlug = 'remove-whitespace';

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
  { key: 'faq11', category: 'Workflow' },
  { key: 'faq12', category: 'Usage' },
  { key: 'faq13', category: 'Limits' },
  { key: 'faq14', category: 'Technical' },
  { key: 'faq15', category: 'SEO' },
  { key: 'faq16', category: 'Privacy' },
  { key: 'faq17', category: 'Compatibility' },
  { key: 'faq18', category: 'Limits' },
  { key: 'faq19', category: 'Workflow' },
  { key: 'faq20', category: 'Technical' },
  { key: 'faq21', category: 'General' },
  { key: 'faq22', category: 'Workflow' },
  { key: 'faq23', category: 'Technical' },
  { key: 'faq24', category: 'Formatting' },
  { key: 'faq25', category: 'Usage' },
  { key: 'faq26', category: 'Technical' },
  { key: 'faq27', category: 'Workflow' },
  { key: 'faq28', category: 'General' },
];

// Helper function to create writeUp content using translations
// Note: writeUp content needs to be hardcoded from en.json if needed
// Removed createWriteUp function
function createWriteUp() {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>'RemoveWhitespacePage.writeUp.title'</h2>

      <h3>'RemoveWhitespacePage.writeUp.introductionTitle'</h3>
      <p>'RemoveWhitespacePage.writeUp.introductionP1'</p>
      <p>'RemoveWhitespacePage.writeUp.introductionP2'</p>
      <p>'RemoveWhitespacePage.writeUp.introductionP3'</p>
      <p>________________________________________</p>

      <h3>'RemoveWhitespacePage.writeUp.whatIsTitle'</h3>
      <p>'RemoveWhitespacePage.writeUp.whatIsP1'</p>
      <p>'RemoveWhitespacePage.writeUp.whatIsP2'</p>

      <h3>'RemoveWhitespacePage.writeUp.whyNeededTitle'</h3>
      <p>'RemoveWhitespacePage.writeUp.whyNeededP1'</p>
      <ul>
        <li>'RemoveWhitespacePage.writeUp.whyNeededItem1'</li>
        <li>'RemoveWhitespacePage.writeUp.whyNeededItem2'</li>
        <li>'RemoveWhitespacePage.writeUp.whyNeededItem3'</li>
        <li>'RemoveWhitespacePage.writeUp.whyNeededItem4'</li>
        <li>'RemoveWhitespacePage.writeUp.whyNeededItem5'</li>
        <li>'RemoveWhitespacePage.writeUp.whyNeededItem6'</li>
      </ul>
      <p>'RemoveWhitespacePage.writeUp.whyNeededP2'</p>
      <p>________________________________________</p>

      <h3>'RemoveWhitespacePage.writeUp.technicalDetailsTitle'</h3>
      <p>'RemoveWhitespacePage.writeUp.technicalDetailsP1'</p>
      <p>'RemoveWhitespacePage.writeUp.technicalDetailsP2'</p>
      <p>'RemoveWhitespacePage.writeUp.technicalDetailsP3'</p>
      <p>________________________________________</p>

      <h3>'RemoveWhitespacePage.writeUp.howWorksTitle'</h3>
      <p>'RemoveWhitespacePage.writeUp.howWorksP1'</p>
      
      <h4>'RemoveWhitespacePage.writeUp.step1Title'</h4>
      <p>'RemoveWhitespacePage.writeUp.step1P1'</p>
      
      <h4>'RemoveWhitespacePage.writeUp.step2Title'</h4>
      <p>'RemoveWhitespacePage.writeUp.step2P1'</p>
      
      <h4>'RemoveWhitespacePage.writeUp.step3Title'</h4>
      <p>'RemoveWhitespacePage.writeUp.step3P1'</p>
      
      <h4>'RemoveWhitespacePage.writeUp.step4Title'</h4>
      <p>'RemoveWhitespacePage.writeUp.step4P1'</p>
      <p>________________________________________</p>

      <h3>'RemoveWhitespacePage.writeUp.useCasesTitle'</h3>
      <p>'RemoveWhitespacePage.writeUp.useCasesP1'</p>
      
      <h4>'RemoveWhitespacePage.writeUp.useCasesDevelopersTitle'</h4>
      <p>'RemoveWhitespacePage.writeUp.useCasesDevelopersP1'</p>
      <ul>
        <li>'RemoveWhitespacePage.writeUp.useCasesDevelopersItem1'</li>
        <li>'RemoveWhitespacePage.writeUp.useCasesDevelopersItem2'</li>
        <li>'RemoveWhitespacePage.writeUp.useCasesDevelopersItem3'</li>
        <li>'RemoveWhitespacePage.writeUp.useCasesDevelopersItem4'</li>
        <li>'RemoveWhitespacePage.writeUp.useCasesDevelopersItem5'</li>
      </ul>
      
      <h4>'RemoveWhitespacePage.writeUp.useCasesDataAnalystsTitle'</h4>
      <p>'RemoveWhitespacePage.writeUp.useCasesDataAnalystsP1'</p>
      <ul>
        <li>'RemoveWhitespacePage.writeUp.useCasesDataAnalystsItem1'</li>
        <li>'RemoveWhitespacePage.writeUp.useCasesDataAnalystsItem2'</li>
        <li>'RemoveWhitespacePage.writeUp.useCasesDataAnalystsItem3'</li>
        <li>'RemoveWhitespacePage.writeUp.useCasesDataAnalystsItem4'</li>
        <li>'RemoveWhitespacePage.writeUp.useCasesDataAnalystsItem5'</li>
      </ul>
      
      <h4>'RemoveWhitespacePage.writeUp.useCasesContentCreatorsTitle'</h4>
      <p>'RemoveWhitespacePage.writeUp.useCasesContentCreatorsP1'</p>
      <ul>
        <li>'RemoveWhitespacePage.writeUp.useCasesContentCreatorsItem1'</li>
        <li>'RemoveWhitespacePage.writeUp.useCasesContentCreatorsItem2'</li>
        <li>'RemoveWhitespacePage.writeUp.useCasesContentCreatorsItem3'</li>
        <li>'RemoveWhitespacePage.writeUp.useCasesContentCreatorsItem4'</li>
      </ul>
      
      <h4>'RemoveWhitespacePage.writeUp.useCasesBusinessTitle'</h4>
      <p>'RemoveWhitespacePage.writeUp.useCasesBusinessP1'</p>
      <ul>
        <li>'RemoveWhitespacePage.writeUp.useCasesBusinessItem1'</li>
        <li>'RemoveWhitespacePage.writeUp.useCasesBusinessItem2'</li>
        <li>'RemoveWhitespacePage.writeUp.useCasesBusinessItem3'</li>
        <li>'RemoveWhitespacePage.writeUp.useCasesBusinessItem4'</li>
      </ul>
      <p>________________________________________</p>

      <h3>'RemoveWhitespacePage.writeUp.comparisonTitle'</h3>
      <p>'RemoveWhitespacePage.writeUp.comparisonP1'</p>
      
      <h4>'RemoveWhitespacePage.writeUp.comparisonSpaceRemoverTitle'</h4>
      <p>'RemoveWhitespacePage.writeUp.comparisonSpaceRemoverP1'</p>
      
      <h4>'RemoveWhitespacePage.writeUp.comparisonTrimTitle'</h4>
      <p>'RemoveWhitespacePage.writeUp.comparisonTrimP1'</p>
      
      <h4>'RemoveWhitespacePage.writeUp.comparisonNormalizeTitle'</h4>
      <p>'RemoveWhitespacePage.writeUp.comparisonNormalizeP1'</p>
      <p>________________________________________</p>

      <h3>'RemoveWhitespacePage.writeUp.bestPracticesTitle'</h3>
      <p>'RemoveWhitespacePage.writeUp.bestPracticesP1'</p>
      <ul>
        <li>'RemoveWhitespacePage.writeUp.bestPracticesItem1'</li>
        <li>'RemoveWhitespacePage.writeUp.bestPracticesItem2'</li>
        <li>'RemoveWhitespacePage.writeUp.bestPracticesItem3'</li>
        <li>'RemoveWhitespacePage.writeUp.bestPracticesItem4'</li>
        <li>'RemoveWhitespacePage.writeUp.bestPracticesItem5'</li>
      </ul>
      <p>________________________________________</p>

      <h3>'RemoveWhitespacePage.writeUp.privacySecurityTitle'</h3>
      <p>'RemoveWhitespacePage.writeUp.privacySecurityP1'</p>
      <p>'RemoveWhitespacePage.writeUp.privacySecurityP2'</p>
      <p>________________________________________</p>

      <h3>'RemoveWhitespacePage.writeUp.limitationsTitle'</h3>
      <p>'RemoveWhitespacePage.writeUp.limitationsP1'</p>
      <ul>
        <li>'RemoveWhitespacePage.writeUp.limitationsItem1'</li>
        <li>'RemoveWhitespacePage.writeUp.limitationsItem2'</li>
        <li>'RemoveWhitespacePage.writeUp.limitationsItem3'</li>
        <li>'RemoveWhitespacePage.writeUp.limitationsItem4'</li>
        <li>'RemoveWhitespacePage.writeUp.limitationsItem5'</li>
      </ul>
      <p>________________________________________</p>

      <h3>'RemoveWhitespacePage.writeUp.conclusionTitle'</h3>
      <p>'RemoveWhitespacePage.writeUp.conclusionP1'</p>
      <p>'RemoveWhitespacePage.writeUp.conclusionP2'</p>
      <p>'RemoveWhitespacePage.writeUp.conclusionP3'</p>
    </div>
  </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  
  const tool = getToolBySlug(toolSlug);
  const toolKey = toolSlug;
  
  const title = "Remove Whitespace";
  const description = "Remove all whitespace characters including spaces, tabs, and line breaks from text.";
  const seoTitle = "Remove Whitespace Online - Remove All Spaces, Tabs & Line Breaks";
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
  });
}

export default async function RemoveWhitespacePage() {
  
  const tool = getToolBySlug(toolSlug);
  if (!tool) return notFound();

  const title = tool.title;
  const description = tool.shortDescription;

  const url = `${siteUrl}/${toolSlug}/`;

  // Create translated FAQs from translation keys
  const pageFaqs: FaqItem[] = []; // Note: FAQs need to be hardcoded from en.json if needed

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...tool, title, shortDescription: description }} ui={<RemoveWhitespaceTool />} related={<RelatedTools currentSlug={tool.slug} />}>
        {/* Note: writeUp content needs to be hardcoded from en.json if needed */}

        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">'RemoveWhitespacePage.faqHeading'</h2>
          <p className="text-slate-700">
            'RemoveWhitespacePage.faqIntro'
          </p>
        </div>

        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
