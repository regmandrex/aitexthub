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
import { RemoveWhitespaceTool } from '@/components/tools/RemoveWhitespaceTool';
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
import { AICodeCleanerTool } from '@/components/tools/AICodeCleanerTool';
import { AICodeFixerTool } from '@/components/tools/AICodeFixerTool';
import { GodGoddessNameGeneratorTool } from '@/components/tools/GodGoddessNameGeneratorTool';
import { QrCodeReaderTool } from '@/components/tools/QrCodeReaderTool';
import { JwtDecoderTool } from '@/components/tools/JwtDecoderTool';
import { UuidGeneratorTool } from '@/components/tools/UuidGeneratorTool';
import { Md5GeneratorTool } from '@/components/tools/Md5GeneratorTool';
import { BcryptGeneratorTool } from '@/components/tools/BcryptGeneratorTool';
import { HmacGeneratorTool } from '@/components/tools/HmacGeneratorTool';
import { TotpGeneratorTool } from '@/components/tools/TotpGeneratorTool';
import { JsonToYamlTool } from '@/components/tools/JsonToYamlTool';
import { YamlToJsonTool } from '@/components/tools/YamlToJsonTool';
import { YamlFormatterTool } from '@/components/tools/YamlFormatterTool';
import { SqlFormatterTool } from '@/components/tools/SqlFormatterTool';
import { MarkdownToHtmlTool } from '@/components/tools/MarkdownToHtmlTool';
import { TextDiffTool } from '@/components/tools/TextDiffTool';
import { RegexTesterTool } from '@/components/tools/RegexTesterTool';
import { SlugGeneratorTool } from '@/components/tools/SlugGeneratorTool';
import { WordFrequencyCounterTool } from '@/components/tools/WordFrequencyCounterTool';
import { SortLinesTool } from '@/components/tools/SortLinesTool';
import { HexToRgbTool } from '@/components/tools/HexToRgbTool';
import { UrlShortenerTool } from '@/components/tools/UrlShortenerTool';
import { ImageToBase64Tool } from '@/components/tools/ImageToBase64Tool';
import { ImageMetadataViewerTool } from '@/components/tools/ImageMetadataViewerTool';
import { ImageCompareTool } from '@/components/tools/ImageCompareTool';
import { SvgViewerTool } from '@/components/tools/SvgViewerTool';
import { SvgOptimizerTool } from '@/components/tools/SvgOptimizerTool';
import { PlaceholderImageGeneratorTool } from '@/components/tools/PlaceholderImageGeneratorTool';
import { FaviconGeneratorTool } from '@/components/tools/FaviconGeneratorTool';
import { AsciiArtGeneratorTool } from '@/components/tools/AsciiArtGeneratorTool';
import { BorderRadiusGeneratorTool } from '@/components/tools/BorderRadiusGeneratorTool';
import { BoxShadowGeneratorTool } from '@/components/tools/BoxShadowGeneratorTool';
import { CssFlexboxGeneratorTool } from '@/components/tools/CssFlexboxGeneratorTool';
import { CssGridGeneratorTool } from '@/components/tools/CssGridGeneratorTool';
import { HtmlTableGeneratorTool } from '@/components/tools/HtmlTableGeneratorTool';
import { OpenGraphGeneratorTool } from '@/components/tools/OpenGraphGeneratorTool';
import { RobotsTxtGeneratorTool } from '@/components/tools/RobotsTxtGeneratorTool';
import { CronGeneratorTool } from '@/components/tools/CronGeneratorTool';
import {
  GenericAiTextTool,
  GenericWatermarkTool,
  RankTrackerTool,
} from '@/components/tools/GenericToolFamilyPanels';
import { ImageWatermarkCleanerTool } from '@/components/tools/ImageWatermarkCleanerTool';
import { ImageWatermarkDetectorTool } from '@/components/tools/ImageWatermarkDetectorTool';
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
import { getToolContent } from '@/lib/tools/content';
import { getSeoExpansionFaqs } from '@/lib/tools/content/seo-expansions';
import { siteUrl } from '@/lib/seo/url';
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
  'remove-whitespace': RemoveWhitespaceTool,
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
  'ai-code-cleaner': AICodeCleanerTool,
  'ai-code-fixer': AICodeFixerTool,
  'god-goddess-name-generator': GodGoddessNameGeneratorTool,
  'qr-code-reader': QrCodeReaderTool,
  'jwt-decoder': JwtDecoderTool,
  'uuid-generator': UuidGeneratorTool,
  'md5-generator': Md5GeneratorTool,
  'bcrypt-generator': BcryptGeneratorTool,
  'hmac-generator': HmacGeneratorTool,
  'totp-generator': TotpGeneratorTool,
  'json-to-yaml': JsonToYamlTool,
  'yaml-to-json': YamlToJsonTool,
  'yaml-formatter': YamlFormatterTool,
  'sql-formatter': SqlFormatterTool,
  'markdown-to-html': MarkdownToHtmlTool,
  'text-diff': TextDiffTool,
  'regex-tester': RegexTesterTool,
  'slug-generator': SlugGeneratorTool,
  'word-frequency-counter': WordFrequencyCounterTool,
  'sort-lines': SortLinesTool,
  'hex-to-rgb': HexToRgbTool,
  'url-shortener': UrlShortenerTool,
  'image-to-base64': ImageToBase64Tool,
  'image-metadata-viewer': ImageMetadataViewerTool,
  'image-compare': ImageCompareTool,
  'svg-viewer': SvgViewerTool,
  'svg-optimizer': SvgOptimizerTool,
  'placeholder-image-generator': PlaceholderImageGeneratorTool,
  'favicon-generator': FaviconGeneratorTool,
  'ascii-art-generator': AsciiArtGeneratorTool,
  'border-radius-generator': BorderRadiusGeneratorTool,
  'box-shadow-generator': BoxShadowGeneratorTool,
  'css-flexbox-generator': CssFlexboxGeneratorTool,
  'css-grid-generator': CssGridGeneratorTool,
  'html-table-generator': HtmlTableGeneratorTool,
  'open-graph-generator': OpenGraphGeneratorTool,
  'robots-txt-generator': RobotsTxtGeneratorTool,
  'cron-generator': CronGeneratorTool,
  'rank-tracker': RankTrackerTool,
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
export async function ToolPageRenderer({ slug }: ToolPageRendererProps) {
  const tool = getToolBySlug(slug);
  if (!tool) return notFound();
  const displayTool = {
    ...tool,
    title: tool.title,
    shortDescription: tool.shortDescription,
  };

  // Get UI component - try slug first (for ChatGPT tools and others with specific components)
  // then fall back to ui.kind (for generic tools)
  const FAMILY_UI_KINDS = new Set(['watermark-remover', 'watermark-detector', 'ai-detector', 'ai-humanizer', 'rank-tracker']);
  const hasSlugComponent = slug in uiComponentMap;
  let UIComponent = uiComponentMap[slug];
  if (!UIComponent && tool.ui?.kind) {
    UIComponent = uiComponentMap[tool.ui.kind];
  }
  if (!UIComponent && !FAMILY_UI_KINDS.has(tool.ui?.kind)) {
    console.warn(`No UI component found for tool: ${slug} (kind: ${tool.ui.kind})`);
    return notFound();
  }

  const url = `${siteUrl}/${tool.slug}`;
  const softwareJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: displayTool.title,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    description: displayTool.shortDescription,
    url: url,
  };

  const generated = getToolContent(slug);
  const generatedFaqs = generated ? [...generated.faqs, ...getSeoExpansionFaqs(tool, generated.faqs.length)] : [];
  const familyUi = hasSlugComponent ? undefined :
    tool.ui.kind === 'rank-tracker' ? (
      <RankTrackerTool modelName={tool.model} />
    ) : tool.ui.kind === 'ai-detector' ? (
      <GenericAiTextTool
        actionLabel="Analyze text"
        outputLabel="Detection report"
        inputPlaceholder={`Paste text to analyze with ${displayTool.title}...`}
        outputPlaceholder="Detection analysis will appear here."
        helperText={`${displayTool.title}: paste the text you want to analyze above and click Analyze text. Results show character count, word count, and sentence count alongside detection notes. Review the output and apply your own judgment for final decisions.`}
      />
    ) : tool.ui.kind === 'ai-humanizer' ? (
      slug.includes('writer') || slug.includes('generator') ? (
        <GenericAiTextTool
          actionLabel="Generate"
          outputLabel="Generated output"
          inputPlaceholder={`Describe what you want ${displayTool.title} to create...`}
          outputPlaceholder="Your generated content will appear here."
          helperText={`${displayTool.title}: describe your prompt or paste a draft above and click Generate. Review the output before use.`}
        />
      ) : (
        <GenericAiTextTool
          actionLabel="Humanize text"
          outputLabel="Humanized output"
          inputPlaceholder={`Paste text to rewrite with ${displayTool.title}...`}
          outputPlaceholder="The rewritten output will appear here."
          helperText={`${displayTool.title}: paste your draft above and click Humanize text. The tool rewrites the text to match the authentic conventions of this content type. Review the output before use.`}
        />
      )
    ) : tool.ui.kind === 'watermark-remover' ? (
      slug.includes('video') ? (
        <GenericWatermarkTool mode="remove" media="video" modelName={tool.model} />
      ) : (
        <ImageWatermarkCleanerTool modelName={tool.model} />
      )
    ) : tool.ui.kind === 'watermark-detector' && slug.includes('image') ? (
      <ImageWatermarkDetectorTool modelName={tool.model} />
    ) : tool.ui.kind === 'watermark-detector' && slug.includes('video') ? (
      <GenericWatermarkTool mode="detect" media="video" modelName={tool.model} />
    ) : undefined;

  return (
    <>
      <JsonLd data={webPageSchema({ name: displayTool.title, url, description: displayTool.shortDescription })} />
      <JsonLd data={softwareJsonLd} />
      <div className="bg-[#f7f9ff]">
        <ToolPageShell tool={displayTool} ui={familyUi ?? <UIComponent />} related={<RelatedTools currentSlug={tool.slug} />}>
          {generated ? (
            <>
              {generated.writeUp}
              <div className="mt-10 space-y-3">
                <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
                <p className="text-slate-700">Common questions about the {displayTool.title}.</p>
              </div>
              <FAQSection items={generatedFaqs} />
              <FaqJsonLd faqs={generatedFaqs} name={`${displayTool.title} – FAQs`} />
            </>
          ) : null}
        </ToolPageShell>
      </div>
    </>
  );
}
