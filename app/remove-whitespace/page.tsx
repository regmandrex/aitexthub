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
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

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
function createWriteUp(t: (key: string) => string) {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>{t('RemoveWhitespacePage.writeUp.title')}</h2>

      <h3>{t('RemoveWhitespacePage.writeUp.introductionTitle')}</h3>
      <p>{t('RemoveWhitespacePage.writeUp.introductionP1')}</p>
      <p>{t('RemoveWhitespacePage.writeUp.introductionP2')}</p>
      <p>{t('RemoveWhitespacePage.writeUp.introductionP3')}</p>
      <p>________________________________________</p>

      <h3>{t('RemoveWhitespacePage.writeUp.whatIsTitle')}</h3>
      <p>{t('RemoveWhitespacePage.writeUp.whatIsP1')}</p>
      <p>{t('RemoveWhitespacePage.writeUp.whatIsP2')}</p>

      <h3>{t('RemoveWhitespacePage.writeUp.whyNeededTitle')}</h3>
      <p>{t('RemoveWhitespacePage.writeUp.whyNeededP1')}</p>
      <ul>
        <li>{t('RemoveWhitespacePage.writeUp.whyNeededItem1')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.whyNeededItem2')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.whyNeededItem3')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.whyNeededItem4')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.whyNeededItem5')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.whyNeededItem6')}</li>
      </ul>
      <p>{t('RemoveWhitespacePage.writeUp.whyNeededP2')}</p>
      <p>________________________________________</p>

      <h3>{t('RemoveWhitespacePage.writeUp.technicalDetailsTitle')}</h3>
      <p>{t('RemoveWhitespacePage.writeUp.technicalDetailsP1')}</p>
      <p>{t('RemoveWhitespacePage.writeUp.technicalDetailsP2')}</p>
      <p>{t('RemoveWhitespacePage.writeUp.technicalDetailsP3')}</p>
      <p>________________________________________</p>

      <h3>{t('RemoveWhitespacePage.writeUp.howWorksTitle')}</h3>
      <p>{t('RemoveWhitespacePage.writeUp.howWorksP1')}</p>
      
      <h4>{t('RemoveWhitespacePage.writeUp.step1Title')}</h4>
      <p>{t('RemoveWhitespacePage.writeUp.step1P1')}</p>
      
      <h4>{t('RemoveWhitespacePage.writeUp.step2Title')}</h4>
      <p>{t('RemoveWhitespacePage.writeUp.step2P1')}</p>
      
      <h4>{t('RemoveWhitespacePage.writeUp.step3Title')}</h4>
      <p>{t('RemoveWhitespacePage.writeUp.step3P1')}</p>
      
      <h4>{t('RemoveWhitespacePage.writeUp.step4Title')}</h4>
      <p>{t('RemoveWhitespacePage.writeUp.step4P1')}</p>
      <p>________________________________________</p>

      <h3>{t('RemoveWhitespacePage.writeUp.useCasesTitle')}</h3>
      <p>{t('RemoveWhitespacePage.writeUp.useCasesP1')}</p>
      
      <h4>{t('RemoveWhitespacePage.writeUp.useCasesDevelopersTitle')}</h4>
      <p>{t('RemoveWhitespacePage.writeUp.useCasesDevelopersP1')}</p>
      <ul>
        <li>{t('RemoveWhitespacePage.writeUp.useCasesDevelopersItem1')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.useCasesDevelopersItem2')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.useCasesDevelopersItem3')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.useCasesDevelopersItem4')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.useCasesDevelopersItem5')}</li>
      </ul>
      
      <h4>{t('RemoveWhitespacePage.writeUp.useCasesDataAnalystsTitle')}</h4>
      <p>{t('RemoveWhitespacePage.writeUp.useCasesDataAnalystsP1')}</p>
      <ul>
        <li>{t('RemoveWhitespacePage.writeUp.useCasesDataAnalystsItem1')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.useCasesDataAnalystsItem2')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.useCasesDataAnalystsItem3')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.useCasesDataAnalystsItem4')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.useCasesDataAnalystsItem5')}</li>
      </ul>
      
      <h4>{t('RemoveWhitespacePage.writeUp.useCasesContentCreatorsTitle')}</h4>
      <p>{t('RemoveWhitespacePage.writeUp.useCasesContentCreatorsP1')}</p>
      <ul>
        <li>{t('RemoveWhitespacePage.writeUp.useCasesContentCreatorsItem1')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.useCasesContentCreatorsItem2')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.useCasesContentCreatorsItem3')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.useCasesContentCreatorsItem4')}</li>
      </ul>
      
      <h4>{t('RemoveWhitespacePage.writeUp.useCasesBusinessTitle')}</h4>
      <p>{t('RemoveWhitespacePage.writeUp.useCasesBusinessP1')}</p>
      <ul>
        <li>{t('RemoveWhitespacePage.writeUp.useCasesBusinessItem1')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.useCasesBusinessItem2')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.useCasesBusinessItem3')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.useCasesBusinessItem4')}</li>
      </ul>
      <p>________________________________________</p>

      <h3>{t('RemoveWhitespacePage.writeUp.comparisonTitle')}</h3>
      <p>{t('RemoveWhitespacePage.writeUp.comparisonP1')}</p>
      
      <h4>{t('RemoveWhitespacePage.writeUp.comparisonSpaceRemoverTitle')}</h4>
      <p>{t('RemoveWhitespacePage.writeUp.comparisonSpaceRemoverP1')}</p>
      
      <h4>{t('RemoveWhitespacePage.writeUp.comparisonTrimTitle')}</h4>
      <p>{t('RemoveWhitespacePage.writeUp.comparisonTrimP1')}</p>
      
      <h4>{t('RemoveWhitespacePage.writeUp.comparisonNormalizeTitle')}</h4>
      <p>{t('RemoveWhitespacePage.writeUp.comparisonNormalizeP1')}</p>
      <p>________________________________________</p>

      <h3>{t('RemoveWhitespacePage.writeUp.bestPracticesTitle')}</h3>
      <p>{t('RemoveWhitespacePage.writeUp.bestPracticesP1')}</p>
      <ul>
        <li>{t('RemoveWhitespacePage.writeUp.bestPracticesItem1')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.bestPracticesItem2')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.bestPracticesItem3')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.bestPracticesItem4')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.bestPracticesItem5')}</li>
      </ul>
      <p>________________________________________</p>

      <h3>{t('RemoveWhitespacePage.writeUp.privacySecurityTitle')}</h3>
      <p>{t('RemoveWhitespacePage.writeUp.privacySecurityP1')}</p>
      <p>{t('RemoveWhitespacePage.writeUp.privacySecurityP2')}</p>
      <p>________________________________________</p>

      <h3>{t('RemoveWhitespacePage.writeUp.limitationsTitle')}</h3>
      <p>{t('RemoveWhitespacePage.writeUp.limitationsP1')}</p>
      <ul>
        <li>{t('RemoveWhitespacePage.writeUp.limitationsItem1')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.limitationsItem2')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.limitationsItem3')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.limitationsItem4')}</li>
        <li>{t('RemoveWhitespacePage.writeUp.limitationsItem5')}</li>
      </ul>
      <p>________________________________________</p>

      <h3>{t('RemoveWhitespacePage.writeUp.conclusionTitle')}</h3>
      <p>{t('RemoveWhitespacePage.writeUp.conclusionP1')}</p>
      <p>{t('RemoveWhitespacePage.writeUp.conclusionP2')}</p>
      <p>{t('RemoveWhitespacePage.writeUp.conclusionP3')}</p>
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
    : tool?.title ?? 'Remove Whitespace';
  const description = t(`Tools.${toolKey}.description`) !== `Tools.${toolKey}.description`
    ? t(`Tools.${toolKey}.description`)
    : tool?.shortDescription ?? 'Remove all whitespace characters from text.';
  const seoTitle = tool?.seoTitle ? (t(`Tools.${toolKey}.seoTitle`) !== `Tools.${toolKey}.seoTitle` ? t(`Tools.${toolKey}.seoTitle`) : tool.seoTitle) : undefined;
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
    locale,
  });
}

export default async function RemoveWhitespacePage() {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  const tool = getToolBySlug(toolSlug);
  if (!tool) return notFound();

  const toolKey = toolSlug;
  const title = t(`Tools.${toolKey}.title`) !== `Tools.${toolKey}.title` 
    ? t(`Tools.${toolKey}.title`) 
    : tool.title;
  const description = t(`Tools.${toolKey}.description`) !== `Tools.${toolKey}.description`
    ? t(`Tools.${toolKey}.description`)
    : tool.shortDescription;

  const url = `${siteUrl}/${toolSlug}/`;

  // Create translated FAQs from translation keys
  const pageFaqs: FaqItem[] = faqKeys.map(({ key, category }) => ({
    category: t(`RemoveWhitespacePage.faqs.${key}.category`) || category,
    question: t(`RemoveWhitespacePage.faqs.${key}.question`),
    answer: t(`RemoveWhitespacePage.faqs.${key}.answer`),
  }));

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...tool, title, shortDescription: description }} ui={<RemoveWhitespaceTool />} related={<RelatedTools currentSlug={tool.slug} />}>
        {createWriteUp(t)}

        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">{t('RemoveWhitespacePage.faqHeading')}</h2>
          <p className="text-slate-700">
            {t('RemoveWhitespacePage.faqIntro')}
          </p>
        </div>

        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
