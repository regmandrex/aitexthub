import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FaqJsonLd from '@/components/FaqJsonLd';
import FAQSection from '@/components/FAQSection';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { CaseConverterTool } from '@/components/tools/CaseConverterTool';
import { EmDashRemoverTool } from '@/components/tools/EmDashRemoverTool';
import { FindReplaceTool } from '@/components/tools/FindReplaceTool';
import { InvisibleCharacterDetectorTool } from '@/components/tools/InvisibleCharacterDetectorTool';
import { RemoveDuplicateLinesTool } from '@/components/tools/RemoveDuplicateLinesTool';
import { RemoveLineBreaksTool } from '@/components/tools/RemoveLineBreaksTool';
import { SpaceRemoverTool } from '@/components/tools/SpaceRemoverTool';
import { StripHtmlTool } from '@/components/tools/StripHtmlTool';
import { TextCleanerTool } from '@/components/tools/TextCleanerTool';
import { UrlEncoderDecoderTool } from '@/components/tools/UrlEncoderDecoderTool';
import { WatermarkDetectorTool } from '@/components/tools/WatermarkDetectorTool';
import { WordCounterTool } from '@/components/tools/WordCounterTool';
import { ZeroWidthSpaceRemoverTool } from '@/components/tools/ZeroWidthSpaceRemoverTool';
import { LineSpacingTool } from '@/components/tools/LineSpacingTool';
import { MorseCodeGeneratorTool } from '@/components/tools/MorseCodeGeneratorTool';
import { CombinationGeneratorTool } from '@/components/tools/CombinationGeneratorTool';
import { LineCombinationGeneratorTool } from '@/components/tools/LineCombinationGeneratorTool';
import { PermutationGeneratorTool } from '@/components/tools/PermutationGeneratorTool';
// ChatGPT tools
import { ChatGPTDetectorTool } from '@/components/tools/ChatGPTDetectorTool';
import { ChatGPTHumanizerTool } from '@/components/tools/ChatGPTHumanizerTool';
import { ChatGPTGPTZeroCheckerTool } from '@/components/tools/ChatGPTGPTZeroCheckerTool';
import { ChatGPTTurnitinCheckerTool } from '@/components/tools/ChatGPTTurnitinCheckerTool';
import { ChatGPTOriginalityCheckerTool } from '@/components/tools/ChatGPTOriginalityCheckerTool';
import { ChatGPTCopyleaksCheckerTool } from '@/components/tools/ChatGPTCopyleaksCheckerTool';
import { ChatGPTParaphraserTool } from '@/components/tools/ChatGPTParaphraserTool';
import { ChatGPTSentenceRewriterTool } from '@/components/tools/ChatGPTSentenceRewriterTool';
import { ChatGPTParagraphRewriterTool } from '@/components/tools/ChatGPTParagraphRewriterTool';
import { ChatGPTEssayRewriterTool } from '@/components/tools/ChatGPTEssayRewriterTool';
import { ChatGPTGrammarCheckerTool } from '@/components/tools/ChatGPTGrammarCheckerTool';
import { ChatGPTReadabilityCheckerTool } from '@/components/tools/ChatGPTReadabilityCheckerTool';
import { ChatGPTToneAnalyzerTool } from '@/components/tools/ChatGPTToneAnalyzerTool';
import { ChatGPTStyleAnalyzerTool } from '@/components/tools/ChatGPTStyleAnalyzerTool';
import { ChatGPTPassiveVoiceFixerTool } from '@/components/tools/ChatGPTPassiveVoiceFixerTool';
import { ChatGPTEssayCheckerTool } from '@/components/tools/ChatGPTEssayCheckerTool';
import { ChatGPTThesisCheckerTool } from '@/components/tools/ChatGPTThesisCheckerTool';
import { ChatGPTResearchPaperCheckerTool } from '@/components/tools/ChatGPTResearchPaperCheckerTool';
import { ChatGPTAssignmentCheckerTool } from '@/components/tools/ChatGPTAssignmentCheckerTool';
import { ChatGPTAcademicHumanizerTool } from '@/components/tools/ChatGPTAcademicHumanizerTool';
import { ChatGPTBlogPostValidatorTool } from '@/components/tools/ChatGPTBlogPostValidatorTool';
import { ChatGPTProductDescriptionImproverTool } from '@/components/tools/ChatGPTProductDescriptionImproverTool';
import { ChatGPTMetaDescriptionGeneratorTool } from '@/components/tools/ChatGPTMetaDescriptionGeneratorTool';
import { ChatGPTTitleTagGeneratorTool } from '@/components/tools/ChatGPTTitleTagGeneratorTool';
import { ChatGPTAltTextGeneratorTool } from '@/components/tools/ChatGPTAltTextGeneratorTool';
import { ChatGPTEmailHumanizerTool } from '@/components/tools/ChatGPTEmailHumanizerTool';
import { ChatGPTCoverLetterHumanizerTool } from '@/components/tools/ChatGPTCoverLetterHumanizerTool';
import { ChatGPTResumeHumanizerTool } from '@/components/tools/ChatGPTResumeHumanizerTool';
import { ChatGPTLinkedInRewriterTool } from '@/components/tools/ChatGPTLinkedInRewriterTool';
import { ChatGPTPressReleasePolisherTool } from '@/components/tools/ChatGPTPressReleasePolisherTool';
import { getToolBySlug } from '@/lib/tools/registry';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';

type ToolPageRendererProps = {
  slug: string;
};

// Comprehensive UI component map for all tools
const uiComponentMap: Record<string, React.ComponentType> = {
  'case-converter': CaseConverterTool,
  'em-dash-remover': EmDashRemoverTool,
  'find-and-replace': FindReplaceTool,
  'invisible-character-detector': InvisibleCharacterDetectorTool,
  'remove-duplicate-lines': RemoveDuplicateLinesTool,
  'remove-line-breaks': RemoveLineBreaksTool,
  'space-remover': SpaceRemoverTool,
  'strip-html': StripHtmlTool,
  'text-cleaner': TextCleanerTool,
  'url-encoder-decoder': UrlEncoderDecoderTool,
  'watermark-detector': WatermarkDetectorTool,
  'word-counter': WordCounterTool,
  'zero-width-space-remover': ZeroWidthSpaceRemoverTool,
  'line-spacing': LineSpacingTool,
  'morse-generator': MorseCodeGeneratorTool,
  'combination-generator': CombinationGeneratorTool,
  'line-combination-generator': LineCombinationGeneratorTool,
  'permutation-generator': PermutationGeneratorTool,
  // ChatGPT tools
  'chatgpt-detector': ChatGPTDetectorTool,
  'chatgpt-humanizer': ChatGPTHumanizerTool,
  'chatgpt-gptzero-checker': ChatGPTGPTZeroCheckerTool,
  'chatgpt-turnitin-checker': ChatGPTTurnitinCheckerTool,
  'chatgpt-originality-checker': ChatGPTOriginalityCheckerTool,
  'chatgpt-copyleaks-checker': ChatGPTCopyleaksCheckerTool,
  'chatgpt-paraphraser': ChatGPTParaphraserTool,
  'chatgpt-sentence-rewriter': ChatGPTSentenceRewriterTool,
  'chatgpt-paragraph-rewriter': ChatGPTParagraphRewriterTool,
  'chatgpt-essay-rewriter': ChatGPTEssayRewriterTool,
  'chatgpt-grammar-checker': ChatGPTGrammarCheckerTool,
  'chatgpt-readability-checker': ChatGPTReadabilityCheckerTool,
  'chatgpt-tone-analyzer': ChatGPTToneAnalyzerTool,
  'chatgpt-style-analyzer': ChatGPTStyleAnalyzerTool,
  'chatgpt-passive-voice-fixer': ChatGPTPassiveVoiceFixerTool,
  'chatgpt-essay-checker': ChatGPTEssayCheckerTool,
  'chatgpt-thesis-checker': ChatGPTThesisCheckerTool,
  'chatgpt-research-paper-checker': ChatGPTResearchPaperCheckerTool,
  'chatgpt-assignment-checker': ChatGPTAssignmentCheckerTool,
  'chatgpt-academic-humanizer': ChatGPTAcademicHumanizerTool,
  'chatgpt-blog-post-validator': ChatGPTBlogPostValidatorTool,
  'chatgpt-product-description-improver': ChatGPTProductDescriptionImproverTool,
  'chatgpt-meta-description-generator': ChatGPTMetaDescriptionGeneratorTool,
  'chatgpt-title-tag-generator': ChatGPTTitleTagGeneratorTool,
  'chatgpt-alt-text-generator': ChatGPTAltTextGeneratorTool,
  'chatgpt-email-humanizer': ChatGPTEmailHumanizerTool,
  'chatgpt-cover-letter-humanizer': ChatGPTCoverLetterHumanizerTool,
  'chatgpt-resume-humanizer': ChatGPTResumeHumanizerTool,
  'chatgpt-linkedin-rewriter': ChatGPTLinkedInRewriterTool,
  'chatgpt-press-release-polisher': ChatGPTPressReleasePolisherTool,
  // ChatGPT-specific tools that use generic components
  'chatgpt-watermark-detector': WatermarkDetectorTool,
  'chatgpt-line-spacing': LineSpacingTool,
  'chatgpt-watermark-remover': WatermarkDetectorTool, // Uses watermark detector component
  'chatgpt-space-remover': SpaceRemoverTool,
};

// Dynamic content loader - tries to load custom write-ups and FAQs
async function loadToolContent(slug: string): Promise<{ writeUp?: () => React.ReactNode; faqs?: FaqItem[] } | null> {
  try {
    // Try to dynamically import custom content
    const contentModule = await import(`@/app/${slug}/content`).catch(() => null);
    if (contentModule) {
      return {
        writeUp: contentModule.createWriteUp,
        faqs: contentModule.faqs,
      };
    }
  } catch {
    // Content file doesn't exist, that's fine
  }
  return null;
}

export async function ToolPageRenderer({ slug }: ToolPageRendererProps) {
  const tool = getToolBySlug(slug);
  if (!tool) return notFound();
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  const resolveToolText = (field: 'title' | 'description' | 'seoTitle'): string => {
    const slugKey = tool.slug === '' ? 'home' : tool.slug;
    const key = `Tools.${slugKey}.${field}`;
    const translated = t(key);
    if (translated !== key) return translated;
    if (field === 'title') return tool.title;
    if (field === 'description') return tool.shortDescription;
    return tool.seoTitle || tool.title;
  };
  const displayTool = {
    ...tool,
    title: resolveToolText('title'),
    shortDescription: resolveToolText('description'),
  };

  // Get UI component - try slug first (for ChatGPT tools and others with specific components)
  // then fall back to ui.kind (for generic tools)
  let UIComponent = uiComponentMap[slug];
  if (!UIComponent) {
    // Fall back to ui.kind for tools that use generic components
    UIComponent = uiComponentMap[tool.ui.kind];
  }
  if (!UIComponent) {
    console.warn(`No UI component found for tool: ${slug} (kind: ${tool.ui.kind})`);
    return notFound();
  }

  // Try to load custom content
  const customContent = await loadToolContent(slug);
  
  const disclaimers =
    tool.content?.disclaimers ?? [
      t('ToolPage.disclaimer1'),
      t('ToolPage.disclaimer2'),
      t('ToolPage.disclaimer3'),
    ];

  const url = `${siteUrl}/${tool.slug}/`;
  const softwareJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: displayTool.title,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    description: displayTool.shortDescription,
    url: `https://gptcleanuptools.com/${tool.slug}`,
  };

  return (
    <>
      <JsonLd data={webPageSchema({ name: displayTool.title, url, description: displayTool.shortDescription })} />
      <JsonLd data={softwareJsonLd} />
      <div className="bg-[#f7f9ff]">
        <ToolPageShell tool={displayTool} ui={<UIComponent />} related={<RelatedTools currentSlug={tool.slug} />}>
          {/* Custom write-up from content file */}
          {customContent?.writeUp ? customContent.writeUp() : null}
          
          {/* Registry-based intro markdown */}
          {!customContent?.writeUp && tool.content?.introMarkdown ? (
            <section className="prose prose-slate mt-10 max-w-4xl">
              {tool.content.introMarkdown.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </section>
          ) : null}

          {/* Custom FAQs from content file */}
          {customContent?.faqs && customContent.faqs.length > 0 ? (
            <>
              <div className="mt-10 space-y-3">
                <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
                <p className="text-slate-700">
                  Common questions about {displayTool.title} and how it works.
                </p>
              </div>
              <FAQSection items={customContent.faqs} />
              <FaqJsonLd faqs={customContent.faqs} />
            </>
          ) : null}

          {/* Registry-based FAQs */}
          {!customContent?.faqs && tool.content?.faq && tool.content.faq.length > 0 ? (
            <>
              <section className="mt-10 space-y-4">
                <h2 className="text-xl font-semibold text-slate-900">{t('ToolPage.faqTitle')}</h2>
                <div className="space-y-3">
                  {tool.content.faq.map((item, idx) => (
                    <div key={idx} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                      <h3 className="text-base font-semibold text-slate-900">{item.q}</h3>
                      <p className="mt-2 text-sm text-slate-700">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>
              <FaqJsonLd
                faqs={tool.content.faq.map((item) => ({
                  category: 'General',
                  question: item.q,
                  answer: item.a,
                }))}
              />
            </>
          ) : null}

          <section className="mt-10 space-y-2">
            <h2 className="text-base font-semibold text-slate-900">{t('ToolPage.disclaimersTitle')}</h2>
            <ul className="space-y-1 text-sm text-slate-700">
              {disclaimers.map((line, idx) => (
                <li key={idx}>&bull; {line}</li>
              ))}
            </ul>
          </section>
        </ToolPageShell>
      </div>
    </>
  );
}
