import type { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import { JsonLd } from '@/components/JsonLd';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { SpaceRemoverTool } from '@/components/tools/SpaceRemoverTool';
import type { FaqItem } from '@/components/faqData';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

const toolSlug = 'space-remover';

// FAQ keys structure - these will be translated
const faqKeys = [
  { key: 'faq1', category: 'General' },
  { key: 'faq2', category: 'General' },
  { key: 'faq3', category: 'General' },
  { key: 'faq4', category: 'General' },
  { key: 'faq5', category: 'General' },
  { key: 'faq6', category: 'General' },
  { key: 'faq7', category: 'General' },
  { key: 'faq8', category: 'General' },
  { key: 'faq9', category: 'General' },
  { key: 'faq10', category: 'General' },
  { key: 'faq11', category: 'General' },
  { key: 'faq12', category: 'General' },
  { key: 'faq13', category: 'General' },
  { key: 'faq14', category: 'General' },
  { key: 'faq15', category: 'General' },
  { key: 'faq16', category: 'General' },
  { key: 'faq17', category: 'General' },
  { key: 'faq18', category: 'General' },
  { key: 'faq19', category: 'General' },
  { key: 'faq20', category: 'General' },
  { key: 'faq21', category: 'General' },
];

// Helper function to create writeUp content using translations
function createWriteUp(t: (key: string) => string) {
  return (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>{t('SpaceRemoverPage.writeUp.title')}</h2>

      <h3>{t('SpaceRemoverPage.writeUp.introductionTitle')}</h3>
      <p>{t('SpaceRemoverPage.writeUp.introductionP1')}</p>
      <p>{t('SpaceRemoverPage.writeUp.introductionP2')}</p>
      <p>{t('SpaceRemoverPage.writeUp.introductionP3')}</p>
      <p>________________________________________</p>

      <h3>{t('SpaceRemoverPage.writeUp.problemTitle')}</h3>
      <p>{t('SpaceRemoverPage.writeUp.problemIntro')}</p>

      <h4>{t('SpaceRemoverPage.writeUp.readabilityTitle')}</h4>
      <p>{t('SpaceRemoverPage.writeUp.readabilityP1')}</p>
      <ul>
        <li>{t('SpaceRemoverPage.writeUp.readabilityItem1')}</li>
        <li>{t('SpaceRemoverPage.writeUp.readabilityItem2')}</li>
        <li>{t('SpaceRemoverPage.writeUp.readabilityItem3')}</li>
      </ul>

      <h4>{t('SpaceRemoverPage.writeUp.codeDataTitle')}</h4>
      <p>{t('SpaceRemoverPage.writeUp.codeDataP1')}</p>
      <ul>
        <li>{t('SpaceRemoverPage.writeUp.codeDataItem1')}</li>
        <li>{t('SpaceRemoverPage.writeUp.codeDataItem2')}</li>
        <li>{t('SpaceRemoverPage.writeUp.codeDataItem3')}</li>
      </ul>

      <h4>{t('SpaceRemoverPage.writeUp.whereHappensTitle')}</h4>
      <p>{t('SpaceRemoverPage.writeUp.whereHappensP1')}</p>
      <ul>
        <li>{t('SpaceRemoverPage.writeUp.whereHappensItem1')}</li>
        <li>{t('SpaceRemoverPage.writeUp.whereHappensItem2')}</li>
        <li>{t('SpaceRemoverPage.writeUp.whereHappensItem3')}</li>
        <li>{t('SpaceRemoverPage.writeUp.whereHappensItem4')}</li>
      </ul>
      <p>{t('SpaceRemoverPage.writeUp.whereHappensP2')}</p>
      <p>________________________________________</p>

      <h3>{t('SpaceRemoverPage.writeUp.whatIsTitle')}</h3>
      <p>{t('SpaceRemoverPage.writeUp.whatIsP1')}</p>

      <h4>{t('SpaceRemoverPage.writeUp.typesTitle')}</h4>
      <p>{t('SpaceRemoverPage.writeUp.typesP1')}</p>
      <ul>
        <li>{t('SpaceRemoverPage.writeUp.typesItem1')}</li>
        <li>{t('SpaceRemoverPage.writeUp.typesItem2')}</li>
        <li>{t('SpaceRemoverPage.writeUp.typesItem3')}</li>
        <li>{t('SpaceRemoverPage.writeUp.typesItem4')}</li>
      </ul>

      <h4>{t('SpaceRemoverPage.writeUp.exampleToolsTitle')}</h4>
      <ul>
        <li>{t('SpaceRemoverPage.writeUp.exampleToolsItem1')}</li>
        <li>{t('SpaceRemoverPage.writeUp.exampleToolsItem2')}</li>
        <li>{t('SpaceRemoverPage.writeUp.exampleToolsItem3')}</li>
        <li>{t('SpaceRemoverPage.writeUp.exampleToolsItem4')}</li>
        <li>{t('SpaceRemoverPage.writeUp.exampleToolsItem5')}</li>
      </ul>
      <p>{t('SpaceRemoverPage.writeUp.exampleToolsP1')}</p>
      <p>________________________________________</p>

      <h3>{t('SpaceRemoverPage.writeUp.whyNeedTitle')}</h3>
      <p>{t('SpaceRemoverPage.writeUp.whyNeedP1')}</p>
      <ol>
        <li>{t('SpaceRemoverPage.writeUp.whyNeedItem1')}</li>
        <li>{t('SpaceRemoverPage.writeUp.whyNeedItem2')}</li>
        <li>{t('SpaceRemoverPage.writeUp.whyNeedItem3')}</li>
        <li>{t('SpaceRemoverPage.writeUp.whyNeedItem4')}</li>
      </ol>

      <h3>{t('SpaceRemoverPage.writeUp.howWorksTitle')}</h3>
      <p>{t('SpaceRemoverPage.writeUp.howWorksP1')}</p>

      <h4>{t('SpaceRemoverPage.writeUp.identifyingTitle')}</h4>
      <p>{t('SpaceRemoverPage.writeUp.identifyingP1')}</p>
      <ul>
        <li>{t('SpaceRemoverPage.writeUp.identifyingItem1')}</li>
        <li>{t('SpaceRemoverPage.writeUp.identifyingItem2')}</li>
        <li>{t('SpaceRemoverPage.writeUp.identifyingItem3')}</li>
        <li>{t('SpaceRemoverPage.writeUp.identifyingItem4')}</li>
        <li>{t('SpaceRemoverPage.writeUp.identifyingItem5')}</li>
      </ul>
      <p>{t('SpaceRemoverPage.writeUp.identifyingP2')}</p>

      <h4>{t('SpaceRemoverPage.writeUp.regexTitle')}</h4>
      <p>{t('SpaceRemoverPage.writeUp.regexP1')}</p>
      <ul>
        <li>{t('SpaceRemoverPage.writeUp.regexItem1')}</li>
        <li>{t('SpaceRemoverPage.writeUp.regexItem2')}</li>
        <li>{t('SpaceRemoverPage.writeUp.regexItem3')}</li>
      </ul>
      <p>{t('SpaceRemoverPage.writeUp.regexP2')}</p>

      <h4>{t('SpaceRemoverPage.writeUp.cleanFormatTitle')}</h4>
      <p>{t('SpaceRemoverPage.writeUp.cleanFormatP1')}</p>

      <h4>{t('SpaceRemoverPage.writeUp.previewTitle')}</h4>
      <p>{t('SpaceRemoverPage.writeUp.previewP1')}</p>
      <p>{t('SpaceRemoverPage.writeUp.previewP2')}</p>
      <p>________________________________________</p>

      <h3>{t('SpaceRemoverPage.writeUp.keyFeaturesTitle')}</h3>
      <p>{t('SpaceRemoverPage.writeUp.keyFeaturesP1')}</p>
      <ol>
        <li>{t('SpaceRemoverPage.writeUp.keyFeaturesItem1')}</li>
        <li>{t('SpaceRemoverPage.writeUp.keyFeaturesItem2')}</li>
        <li>{t('SpaceRemoverPage.writeUp.keyFeaturesItem3')}</li>
        <li>{t('SpaceRemoverPage.writeUp.keyFeaturesItem4')}</li>
        <li>{t('SpaceRemoverPage.writeUp.keyFeaturesItem5')}</li>
        <li>{t('SpaceRemoverPage.writeUp.keyFeaturesItem6')}</li>
      </ol>
      <p>________________________________________</p>

      <h3>{t('SpaceRemoverPage.writeUp.useCasesTitle')}</h3>
      <p>{t('SpaceRemoverPage.writeUp.useCasesP1')}</p>
      <ol>
        <li>
          <strong>{t('SpaceRemoverPage.writeUp.useCasesBloggersTitle')}</strong> {t('SpaceRemoverPage.writeUp.useCasesBloggersP1')}
          <ul>
            <li>{t('SpaceRemoverPage.writeUp.useCasesBloggersItem1')}</li>
            <li>{t('SpaceRemoverPage.writeUp.useCasesBloggersItem2')}</li>
            <li>{t('SpaceRemoverPage.writeUp.useCasesBloggersItem3')}</li>
          </ul>
        </li>
        <li>
          <strong>{t('SpaceRemoverPage.writeUp.useCasesDevelopersTitle')}</strong> {t('SpaceRemoverPage.writeUp.useCasesDevelopersP1')}
          <ul>
            <li>{t('SpaceRemoverPage.writeUp.useCasesDevelopersItem1')}</li>
            <li>{t('SpaceRemoverPage.writeUp.useCasesDevelopersItem2')}</li>
            <li>{t('SpaceRemoverPage.writeUp.useCasesDevelopersItem3')}</li>
          </ul>
        </li>
        <li>
          <strong>{t('SpaceRemoverPage.writeUp.useCasesAnalystsTitle')}</strong> {t('SpaceRemoverPage.writeUp.useCasesAnalystsP1')}
          <ul>
            <li>{t('SpaceRemoverPage.writeUp.useCasesAnalystsItem1')}</li>
            <li>{t('SpaceRemoverPage.writeUp.useCasesAnalystsItem2')}</li>
            <li>{t('SpaceRemoverPage.writeUp.useCasesAnalystsItem3')}</li>
          </ul>
        </li>
        <li>
          <strong>{t('SpaceRemoverPage.writeUp.useCasesStudentsTitle')}</strong> {t('SpaceRemoverPage.writeUp.useCasesStudentsP1')}
          <ul>
            <li>{t('SpaceRemoverPage.writeUp.useCasesStudentsItem1')}</li>
            <li>{t('SpaceRemoverPage.writeUp.useCasesStudentsItem2')}</li>
            <li>{t('SpaceRemoverPage.writeUp.useCasesStudentsItem3')}</li>
          </ul>
        </li>
      </ol>
      <p>________________________________________</p>

      <h3>{t('SpaceRemoverPage.writeUp.onlineVsOfflineTitle')}</h3>
      <p>{t('SpaceRemoverPage.writeUp.onlineVsOfflineP1')}</p>
      <table>
        <thead>
          <tr>
            <th>{t('SpaceRemoverPage.writeUp.onlineVsOfflineTableFeature')}</th>
            <th>{t('SpaceRemoverPage.writeUp.onlineVsOfflineTableOnline')}</th>
            <th>{t('SpaceRemoverPage.writeUp.onlineVsOfflineTableOffline')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t('SpaceRemoverPage.writeUp.onlineVsOfflineTableAccessibility')}</td>
            <td>{t('SpaceRemoverPage.writeUp.onlineVsOfflineTableAccessibilityOnline')}</td>
            <td>{t('SpaceRemoverPage.writeUp.onlineVsOfflineTableAccessibilityOffline')}</td>
          </tr>
          <tr>
            <td>{t('SpaceRemoverPage.writeUp.onlineVsOfflineTableInternet')}</td>
            <td>{t('SpaceRemoverPage.writeUp.onlineVsOfflineTableInternetOnline')}</td>
            <td>{t('SpaceRemoverPage.writeUp.onlineVsOfflineTableInternetOffline')}</td>
          </tr>
          <tr>
            <td>{t('SpaceRemoverPage.writeUp.onlineVsOfflineTablePrivacy')}</td>
            <td>{t('SpaceRemoverPage.writeUp.onlineVsOfflineTablePrivacyOnline')}</td>
            <td>{t('SpaceRemoverPage.writeUp.onlineVsOfflineTablePrivacyOffline')}</td>
          </tr>
          <tr>
            <td>{t('SpaceRemoverPage.writeUp.onlineVsOfflineTableSpeed')}</td>
            <td>{t('SpaceRemoverPage.writeUp.onlineVsOfflineTableSpeedOnline')}</td>
            <td>{t('SpaceRemoverPage.writeUp.onlineVsOfflineTableSpeedOffline')}</td>
          </tr>
          <tr>
            <td>{t('SpaceRemoverPage.writeUp.onlineVsOfflineTableFeatures')}</td>
            <td>{t('SpaceRemoverPage.writeUp.onlineVsOfflineTableFeaturesOnline')}</td>
            <td>{t('SpaceRemoverPage.writeUp.onlineVsOfflineTableFeaturesOffline')}</td>
          </tr>
          <tr>
            <td>{t('SpaceRemoverPage.writeUp.onlineVsOfflineTablePlatform')}</td>
            <td>{t('SpaceRemoverPage.writeUp.onlineVsOfflineTablePlatformOnline')}</td>
            <td>{t('SpaceRemoverPage.writeUp.onlineVsOfflineTablePlatformOffline')}</td>
          </tr>
        </tbody>
      </table>
      <p>{t('SpaceRemoverPage.writeUp.onlineVsOfflineP2')}</p>

      <h3>{t('SpaceRemoverPage.writeUp.whyOurToolTitle')}</h3>
      <p>{t('SpaceRemoverPage.writeUp.whyOurToolP1')}</p>

      <h4>{t('SpaceRemoverPage.writeUp.builtForSpeedTitle')}</h4>
      <p>{t('SpaceRemoverPage.writeUp.builtForSpeedP1')}</p>

      <h4>{t('SpaceRemoverPage.writeUp.keyFeaturesApartTitle')}</h4>
      <p>{t('SpaceRemoverPage.writeUp.keyFeaturesApartP1')}</p>
      <ul>
        <li>{t('SpaceRemoverPage.writeUp.keyFeaturesApartItem1')}</li>
        <li>{t('SpaceRemoverPage.writeUp.keyFeaturesApartItem2')}</li>
        <li>{t('SpaceRemoverPage.writeUp.keyFeaturesApartItem3')}</li>
        <li>{t('SpaceRemoverPage.writeUp.keyFeaturesApartItem4')}</li>
        <li>{t('SpaceRemoverPage.writeUp.keyFeaturesApartItem5')}</li>
      </ul>

      <h4>{t('SpaceRemoverPage.writeUp.perfectForEveryoneTitle')}</h4>
      <p>{t('SpaceRemoverPage.writeUp.perfectForEveryoneP1')}</p>
      <ul>
        <li>{t('SpaceRemoverPage.writeUp.perfectForEveryoneItem1')}</li>
        <li>{t('SpaceRemoverPage.writeUp.perfectForEveryoneItem2')}</li>
        <li>{t('SpaceRemoverPage.writeUp.perfectForEveryoneItem3')}</li>
        <li>{t('SpaceRemoverPage.writeUp.perfectForEveryoneItem4')}</li>
      </ul>
      <p>{t('SpaceRemoverPage.writeUp.perfectForEveryoneP2')}</p>

      <h4>{t('SpaceRemoverPage.writeUp.whyUseElseTitle')}</h4>
      <p>{t('SpaceRemoverPage.writeUp.whyUseElseP1')}</p>

      <h3>{t('SpaceRemoverPage.writeUp.bestPracticesTitle')}</h3>
      <p>{t('SpaceRemoverPage.writeUp.bestPracticesP1')}</p>
      <ol>
        <li>{t('SpaceRemoverPage.writeUp.bestPracticesItem1')}</li>
        <li>{t('SpaceRemoverPage.writeUp.bestPracticesItem2')}</li>
        <li>{t('SpaceRemoverPage.writeUp.bestPracticesItem3')}</li>
        <li>{t('SpaceRemoverPage.writeUp.bestPracticesItem4')}</li>
        <li>{t('SpaceRemoverPage.writeUp.bestPracticesItem5')}</li>
      </ol>
      <p>{t('SpaceRemoverPage.writeUp.bestPracticesP2')}</p>
      <p>________________________________________</p>

      <h3>{t('SpaceRemoverPage.writeUp.commonMistakesTitle')}</h3>
      <p>{t('SpaceRemoverPage.writeUp.commonMistakesP1')}</p>
      <ol>
        <li>{t('SpaceRemoverPage.writeUp.commonMistakesItem1')}</li>
        <li>{t('SpaceRemoverPage.writeUp.commonMistakesItem2')}</li>
        <li>{t('SpaceRemoverPage.writeUp.commonMistakesItem3')}</li>
        <li>{t('SpaceRemoverPage.writeUp.commonMistakesItem4')}</li>
        <li>{t('SpaceRemoverPage.writeUp.commonMistakesItem5')}</li>
      </ol>
      <p>{t('SpaceRemoverPage.writeUp.commonMistakesP2')}</p>

      <h3>{t('SpaceRemoverPage.writeUp.advancedTitle')}</h3>
      <p>{t('SpaceRemoverPage.writeUp.advancedP1')}</p>
      <ol>
        <li>
          <strong>{t('SpaceRemoverPage.writeUp.advancedRegexTitle')}</strong> {t('SpaceRemoverPage.writeUp.advancedRegexP1')}
          <ul>
            <li>{t('SpaceRemoverPage.writeUp.advancedRegexItem1')}</li>
            <li>{t('SpaceRemoverPage.writeUp.advancedRegexItem2')}</li>
            <li>{t('SpaceRemoverPage.writeUp.advancedRegexItem3')}</li>
          </ul>
          {t('SpaceRemoverPage.writeUp.advancedRegexP2')}
        </li>
        <li>
          <strong>{t('SpaceRemoverPage.writeUp.advancedScriptingTitle')}</strong> {t('SpaceRemoverPage.writeUp.advancedScriptingP1')}
          <pre>
            <code className="language-python">{t('SpaceRemoverPage.writeUp.advancedScriptingCode')}</code>
          </pre>
          {t('SpaceRemoverPage.writeUp.advancedScriptingP2')}
        </li>
        <li>
          <strong>{t('SpaceRemoverPage.writeUp.advancedAutomatingTitle')}</strong> {t('SpaceRemoverPage.writeUp.advancedAutomatingP1')}
          <ul>
            <li>{t('SpaceRemoverPage.writeUp.advancedAutomatingItem1')}</li>
            <li>{t('SpaceRemoverPage.writeUp.advancedAutomatingItem2')}</li>
            <li>{t('SpaceRemoverPage.writeUp.advancedAutomatingItem3')}</li>
          </ul>
          {t('SpaceRemoverPage.writeUp.advancedAutomatingP2')}
        </li>
        <li>
          <strong>{t('SpaceRemoverPage.writeUp.advancedExtensionsTitle')}</strong> {t('SpaceRemoverPage.writeUp.advancedExtensionsP1')}
          <ul>
            <li>{t('SpaceRemoverPage.writeUp.advancedExtensionsItem1')}</li>
            <li>{t('SpaceRemoverPage.writeUp.advancedExtensionsItem2')}</li>
            <li>{t('SpaceRemoverPage.writeUp.advancedExtensionsItem3')}</li>
          </ul>
          {t('SpaceRemoverPage.writeUp.advancedExtensionsP2')}
        </li>
        <li>
          <strong>{t('SpaceRemoverPage.writeUp.advancedBatchTitle')}</strong> {t('SpaceRemoverPage.writeUp.advancedBatchP1')}
          <ul>
            <li>{t('SpaceRemoverPage.writeUp.advancedBatchItem1')}</li>
            <li>{t('SpaceRemoverPage.writeUp.advancedBatchItem2')}</li>
            <li>{t('SpaceRemoverPage.writeUp.advancedBatchItem3')}</li>
          </ul>
          {t('SpaceRemoverPage.writeUp.advancedBatchP2')}
        </li>
      </ol>
      <p>{t('SpaceRemoverPage.writeUp.advancedP2')}</p>
      <p>________________________________________</p>

      <h3>{t('SpaceRemoverPage.writeUp.accessibilityTitle')}</h3>
      <p>{t('SpaceRemoverPage.writeUp.accessibilityP1')}</p>
      <ol>
        <li>
          <strong>{t('SpaceRemoverPage.writeUp.accessibilityCleanTitle')}</strong> {t('SpaceRemoverPage.writeUp.accessibilityCleanP1')}
          <ul>
            <li>{t('SpaceRemoverPage.writeUp.accessibilityCleanItem1')}</li>
            <li>{t('SpaceRemoverPage.writeUp.accessibilityCleanItem2')}</li>
            <li>{t('SpaceRemoverPage.writeUp.accessibilityCleanItem3')}</li>
          </ul>
          {t('SpaceRemoverPage.writeUp.accessibilityCleanP2')}
        </li>
        <li>
          <strong>{t('SpaceRemoverPage.writeUp.accessibilityKeyboardTitle')}</strong> {t('SpaceRemoverPage.writeUp.accessibilityKeyboardP1')}
          <ul>
            <li>{t('SpaceRemoverPage.writeUp.accessibilityKeyboardItem1')}</li>
            <li>{t('SpaceRemoverPage.writeUp.accessibilityKeyboardItem2')}</li>
          </ul>
        </li>
        <li>
          <strong>{t('SpaceRemoverPage.writeUp.accessibilityAriaTitle')}</strong> {t('SpaceRemoverPage.writeUp.accessibilityAriaP1')}
          <ul>
            <li>{t('SpaceRemoverPage.writeUp.accessibilityAriaItem1')}</li>
            <li>{t('SpaceRemoverPage.writeUp.accessibilityAriaItem2')}</li>
          </ul>
        </li>
        <li>
          <strong>{t('SpaceRemoverPage.writeUp.accessibilityReadabilityTitle')}</strong> {t('SpaceRemoverPage.writeUp.accessibilityReadabilityP1')}
          <ul>
            <li>{t('SpaceRemoverPage.writeUp.accessibilityReadabilityItem1')}</li>
            <li>{t('SpaceRemoverPage.writeUp.accessibilityReadabilityItem2')}</li>
            <li>{t('SpaceRemoverPage.writeUp.accessibilityReadabilityItem3')}</li>
          </ul>
        </li>
      </ol>
      <p>{t('SpaceRemoverPage.writeUp.accessibilityP2')}</p>
      <p>________________________________________</p>

      <h3>{t('SpaceRemoverPage.writeUp.examplesTitle')}</h3>
      <p>{t('SpaceRemoverPage.writeUp.examplesP1')}</p>

      <h4>{t('SpaceRemoverPage.writeUp.examplesBlogTitle')}</h4>
      <p>{t('SpaceRemoverPage.writeUp.examplesBlogBefore')}</p>
      <pre>
        <code>{t('SpaceRemoverPage.writeUp.examplesBlogBeforeText')}</code>
      </pre>
      <p>{t('SpaceRemoverPage.writeUp.examplesBlogAfter')}</p>
      <pre>
        <code>{t('SpaceRemoverPage.writeUp.examplesBlogAfterText')}</code>
      </pre>

      <h4>{t('SpaceRemoverPage.writeUp.examplesCodeTitle')}</h4>
      <p>{t('SpaceRemoverPage.writeUp.examplesCodeBefore')}</p>
      <pre>
        <code>{t('SpaceRemoverPage.writeUp.examplesCodeBeforeText')}</code>
      </pre>
      <p>{t('SpaceRemoverPage.writeUp.examplesCodeAfter')}</p>
      <pre>
        <code>{t('SpaceRemoverPage.writeUp.examplesCodeAfterText')}</code>
      </pre>

      <h4>{t('SpaceRemoverPage.writeUp.examplesDataTitle')}</h4>
      <p>{t('SpaceRemoverPage.writeUp.examplesDataBefore')}</p>
      <pre>
        <code>{t('SpaceRemoverPage.writeUp.examplesDataBeforeText')}</code>
      </pre>
      <p>{t('SpaceRemoverPage.writeUp.examplesDataAfter')}</p>
      <pre>
        <code>{t('SpaceRemoverPage.writeUp.examplesDataAfterText')}</code>
      </pre>
      <p>________________________________________</p>

      <h3>{t('SpaceRemoverPage.writeUp.conclusionTitle')}</h3>
      <p>{t('SpaceRemoverPage.writeUp.conclusionP1')}</p>
      <p>{t('SpaceRemoverPage.writeUp.conclusionP2')}</p>
      <p>{t('SpaceRemoverPage.writeUp.conclusionP3')}</p>
      <p>{t('SpaceRemoverPage.writeUp.conclusionP4')}</p>
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
    : tool?.title ?? 'Space Remover';
  const description = t(`Tools.${toolKey}.description`) !== `Tools.${toolKey}.description`
    ? t(`Tools.${toolKey}.description`)
    : tool?.shortDescription ?? 'Remove extra spaces, trim lines, and normalize whitespace.';
  const seoTitle = tool?.seoTitle ? (t(`Tools.${toolKey}.seoTitle`) !== `Tools.${toolKey}.seoTitle` ? t(`Tools.${toolKey}.seoTitle`) : tool.seoTitle) : undefined;
  
  return buildToolMeta({
    title,
    description,
    seoTitle,
    urlPath: `/${toolSlug}`,
    locale,
  });
}

export default async function SpaceRemoverPage() {
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
    category: t(`SpaceRemoverPage.faqs.${key}.category`) || category,
    question: t(`SpaceRemoverPage.faqs.${key}.question`),
    answer: t(`SpaceRemoverPage.faqs.${key}.answer`),
  }));

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...tool, title, shortDescription: description }} ui={<SpaceRemoverTool />} related={<RelatedTools currentSlug={tool.slug} />}>
        {createWriteUp(t)}

        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">{t('SpaceRemoverPage.faqHeading')}</h2>
          <p className="text-slate-700">
            {t('SpaceRemoverPage.faqIntro')}
          </p>
        </div>

        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
