import type { ToolContent } from './types';
import { qrCodeReaderContent } from './qr-code-reader';
import { jwtDecoderContent } from './jwt-decoder';
import { uuidGeneratorContent } from './uuid-generator';
import { regexTesterContent } from './regex-tester';
import { jsonToYamlContent } from './json-to-yaml';
import { md5GeneratorContent } from './md5-generator';
import { bcryptGeneratorContent } from './bcrypt-generator';
import { sqlFormatterContent } from './sql-formatter';
import { yamlFormatterContent } from './yaml-formatter';
import { yamlToJsonContent } from './yaml-to-json';
import { textDiffContent } from './text-diff';
import { markdownToHtmlContent } from './markdown-to-html';
import { urlShortenerContent } from './url-shortener';
import { slugGeneratorContent } from './slug-generator';
import { wordFrequencyCounterContent } from './word-frequency-counter';
import { sortLinesContent } from './sort-lines';
import { hexToRgbContent } from './hex-to-rgb';
import { totpGeneratorContent } from './totp-generator';
import { hmacGeneratorContent } from './hmac-generator';
import { cronGeneratorContent } from './cron-generator';
import { openGraphGeneratorContent } from './open-graph-generator';
import { robotsTxtGeneratorContent } from './robots-txt-generator';
import { imageToBase64Content } from './image-to-base64';
import { asciiArtGeneratorContent } from './ascii-art-generator';
import { borderRadiusGeneratorContent } from './border-radius-generator';
import { boxShadowGeneratorContent } from './box-shadow-generator';
import { cssFlexboxGeneratorContent } from './css-flexbox-generator';
import { cssGridGeneratorContent } from './css-grid-generator';
import { faviconGeneratorContent } from './favicon-generator';
import { htmlTableGeneratorContent } from './html-table-generator';
import { imageCompareContent } from './image-compare';
import { imageMetadataViewerContent } from './image-metadata-viewer';
import { placeholderImageGeneratorContent } from './placeholder-image-generator';
import { svgOptimizerContent } from './svg-optimizer';
import { svgViewerContent } from './svg-viewer';
import { adobeFireflyImageWatermarkDetectorContent } from './adobe-firefly-image-watermark-detector';
import { adobeFireflyImageWatermarkRemoverContent } from './adobe-firefly-image-watermark-remover';
import { adobeFireflyVideoWatermarkDetectorContent } from './adobe-firefly-video-watermark-detector';
import { adobeFireflyVideoWatermarkRemoverContent } from './adobe-firefly-video-watermark-remover';
import { aiRankTrackerContent } from './ai-rank-tracker';
import { arabicAiDetectorContent } from './arabic-ai-detector';
import { arabicAiHumanizerContent } from './arabic-ai-humanizer';
import { blurbGeneratorContent } from './blurb-generator';
import { captionHumanizerContent } from './caption-humanizer';
import { chatgptImageWatermarkDetectorContent } from './chatgpt-image-watermark-detector';
import { chatgptImageWatermarkRemoverContent } from './chatgpt-image-watermark-remover';
import { chatgptRankTrackerContent } from './chatgpt-rank-tracker';
import { chineseAiDetectorContent } from './chinese-ai-detector';
import { chineseAiHumanizerContent } from './chinese-ai-humanizer';
import { claudeRankTrackerContent } from './claude-rank-tracker';
import { coldEmailHumanizerContent } from './cold-email-humanizer';
import { dalleImageWatermarkDetectorContent } from './dalle-image-watermark-detector';
import { dalleImageWatermarkRemoverContent } from './dalle-image-watermark-remover';
import { discordMessageHumanizerContent } from './discord-message-humanizer';
import { discordTextImproverContent } from './discord-text-improver';
import { dndHumanizerContent } from './dnd-humanizer';
import { dndTextGeneratorContent } from './dnd-text-generator';
import { ebookHumanizerContent } from './ebook-humanizer';
import { fanfictionHumanizerContent } from './fanfiction-humanizer';
import { fanfictionRewriterContent } from './fanfiction-rewriter';
import { followUpEmailHumanizerContent } from './follow-up-email-humanizer';
import { frenchAiDetectorContent } from './french-ai-detector';
import { frenchAiHumanizerContent } from './french-ai-humanizer';
import { geminiImageWatermarkRemoverContent } from './gemini-image-watermark-remover';
import { geminiRankTrackerContent } from './gemini-rank-tracker';
import { germanAiDetectorContent } from './german-ai-detector';
import { germanAiHumanizerContent } from './german-ai-humanizer';
import { gpt45DetectorContent } from './gpt-4.5-detector';
import { gpt45HumanizerContent } from './gpt-4.5-humanizer';
import { gpt5DetectorContent } from './gpt-5-detector';
import { gpt5HumanizerContent } from './gpt-5-humanizer';
import { gpt5ProDetectorContent } from './gpt-5-pro-detector';
import { gpt5ProHumanizerContent } from './gpt-5-pro-humanizer';
import { gpt51DetectorContent } from './gpt-5.1-detector';
import { gpt51HumanizerContent } from './gpt-5.1-humanizer';
import { gpt52DetectorContent } from './gpt-5.2-detector';
import { gpt52HumanizerContent } from './gpt-5.2-humanizer';
import { grokImageWatermarkDetectorContent } from './grok-image-watermark-detector';
import { grokImageWatermarkRemoverContent } from './grok-image-watermark-remover';
import { heygenVideoWatermarkRemoverContent } from './heygen-video-watermark-remover';
import { hindiAiDetectorContent } from './hindi-ai-detector';
import { hindiAiHumanizerContent } from './hindi-ai-humanizer';
import { imagenImageWatermarkRemoverContent } from './imagen-image-watermark-remover';
import { indonesianAiDetectorContent } from './indonesian-ai-detector';
import { indonesianAiHumanizerContent } from './indonesian-ai-humanizer';
import { italianAiDetectorContent } from './italian-ai-detector';
import { italianAiHumanizerContent } from './italian-ai-humanizer';
import { japaneseAiDetectorContent } from './japanese-ai-detector';
import { japaneseAiHumanizerContent } from './japanese-ai-humanizer';
import { koreanAiDetectorContent } from './korean-ai-detector';
import { koreanAiHumanizerContent } from './korean-ai-humanizer';
import { lyricsHumanizerContent } from './lyrics-humanizer';
import { mediumArticleHumanizerContent } from './medium-article-humanizer';
import { mediumPostRewriterContent } from './medium-post-rewriter';
import { midjourneyImageWatermarkRemoverContent } from './midjourney-image-watermark-remover';
import { nanoBananaImageWatermarkRemoverContent } from './nano-banana-image-watermark-remover';
import { newsletterHumanizerContent } from './newsletter-humanizer';
import { newsletterRewriterContent } from './newsletter-rewriter';
import { perplexityRankTrackerContent } from './perplexity-rank-tracker';
import { poetryHumanizerContent } from './poetry-humanizer';
import { portugueseAiDetectorContent } from './portuguese-ai-detector';
import { portugueseAiHumanizerContent } from './portuguese-ai-humanizer';
import { quoraAnswerHumanizerContent } from './quora-answer-humanizer';
import { quoraAnswerImproverContent } from './quora-answer-improver';
import { redditCommentGeneratorContent } from './reddit-comment-generator';
import { redditPostHumanizerContent } from './reddit-post-humanizer';
import { roleplayHumanizerContent } from './roleplay-humanizer';
import { roleplayReplyGeneratorContent } from './roleplay-reply-generator';
import { runwayVideoWatermarkRemoverContent } from './runway-video-watermark-remover';
import { russianAiDetectorContent } from './russian-ai-detector';
import { russianAiHumanizerContent } from './russian-ai-humanizer';
import { screenplayRewriterContent } from './screenplay-rewriter';
import { scriptHumanizerContent } from './script-humanizer';
import { sermonHumanizerContent } from './sermon-humanizer';
import { sermonWriterContent } from './sermon-writer';
import { soraImageWatermarkDetectorContent } from './sora-image-watermark-detector';
import { soraImageWatermarkRemoverContent } from './sora-image-watermark-remover';
import { soraVideoWatermarkDetectorContent } from './sora-video-watermark-detector';
import { soraVideoWatermarkRemoverContent } from './sora-video-watermark-remover';
import { spanishAiDetectorContent } from './spanish-ai-detector';
import { spanishAiHumanizerContent } from './spanish-ai-humanizer';
import { stableDiffusionWatermarkRemoverContent } from './stable-diffusion-watermark-remover';
import { synthidImageWatermarkRemoverContent } from './synthid-image-watermark-remover';
import { synthidVideoWatermarkRemoverContent } from './synthid-video-watermark-remover';
import { tweetHumanizerContent } from './tweet-humanizer';
import { veoVideoWatermarkDetectorContent } from './veo-video-watermark-detector';
import { veoVideoWatermarkRemoverContent } from './veo-video-watermark-remover';
import { wattpadStoryHumanizerContent } from './wattpad-story-humanizer';
import { wattpadWriterContent } from './wattpad-writer';

export type { ToolContent } from './types';

const toolContentMap: Record<string, ToolContent> = {
  'qr-code-reader': qrCodeReaderContent,
  'jwt-decoder': jwtDecoderContent,
  'uuid-generator': uuidGeneratorContent,
  'regex-tester': regexTesterContent,
  'json-to-yaml': jsonToYamlContent,
  'md5-generator': md5GeneratorContent,
  'bcrypt-generator': bcryptGeneratorContent,
  'sql-formatter': sqlFormatterContent,
  'yaml-formatter': yamlFormatterContent,
  'yaml-to-json': yamlToJsonContent,
  'text-diff': textDiffContent,
  'markdown-to-html': markdownToHtmlContent,
  'url-shortener': urlShortenerContent,
  'slug-generator': slugGeneratorContent,
  'word-frequency-counter': wordFrequencyCounterContent,
  'sort-lines': sortLinesContent,
  'hex-to-rgb': hexToRgbContent,
  'totp-generator': totpGeneratorContent,
  'hmac-generator': hmacGeneratorContent,
  'cron-generator': cronGeneratorContent,
  'open-graph-generator': openGraphGeneratorContent,
  'robots-txt-generator': robotsTxtGeneratorContent,
  'image-to-base64': imageToBase64Content,
  'ascii-art-generator': asciiArtGeneratorContent,
  'border-radius-generator': borderRadiusGeneratorContent,
  'box-shadow-generator': boxShadowGeneratorContent,
  'css-flexbox-generator': cssFlexboxGeneratorContent,
  'css-grid-generator': cssGridGeneratorContent,
  'favicon-generator': faviconGeneratorContent,
  'html-table-generator': htmlTableGeneratorContent,
  'image-compare': imageCompareContent,
  'image-metadata-viewer': imageMetadataViewerContent,
  'placeholder-image-generator': placeholderImageGeneratorContent,
  'svg-optimizer': svgOptimizerContent,
  'svg-viewer': svgViewerContent,
  'adobe-firefly-image-watermark-detector': adobeFireflyImageWatermarkDetectorContent,
  'adobe-firefly-image-watermark-remover': adobeFireflyImageWatermarkRemoverContent,
  'adobe-firefly-video-watermark-detector': adobeFireflyVideoWatermarkDetectorContent,
  'adobe-firefly-video-watermark-remover': adobeFireflyVideoWatermarkRemoverContent,
  'ai-rank-tracker': aiRankTrackerContent,
  'arabic-ai-detector': arabicAiDetectorContent,
  'arabic-ai-humanizer': arabicAiHumanizerContent,
  'blurb-generator': blurbGeneratorContent,
  'caption-humanizer': captionHumanizerContent,
  'chatgpt-image-watermark-detector': chatgptImageWatermarkDetectorContent,
  'chatgpt-image-watermark-remover': chatgptImageWatermarkRemoverContent,
  'chatgpt-rank-tracker': chatgptRankTrackerContent,
  'chinese-ai-detector': chineseAiDetectorContent,
  'chinese-ai-humanizer': chineseAiHumanizerContent,
  'claude-rank-tracker': claudeRankTrackerContent,
  'cold-email-humanizer': coldEmailHumanizerContent,
  'dalle-image-watermark-detector': dalleImageWatermarkDetectorContent,
  'dalle-image-watermark-remover': dalleImageWatermarkRemoverContent,
  'discord-message-humanizer': discordMessageHumanizerContent,
  'discord-text-improver': discordTextImproverContent,
  'dnd-humanizer': dndHumanizerContent,
  'dnd-text-generator': dndTextGeneratorContent,
  'ebook-humanizer': ebookHumanizerContent,
  'fanfiction-humanizer': fanfictionHumanizerContent,
  'fanfiction-rewriter': fanfictionRewriterContent,
  'follow-up-email-humanizer': followUpEmailHumanizerContent,
  'french-ai-detector': frenchAiDetectorContent,
  'french-ai-humanizer': frenchAiHumanizerContent,
  'gemini-image-watermark-remover': geminiImageWatermarkRemoverContent,
  'gemini-rank-tracker': geminiRankTrackerContent,
  'german-ai-detector': germanAiDetectorContent,
  'german-ai-humanizer': germanAiHumanizerContent,
  'gpt-4.5-detector': gpt45DetectorContent,
  'gpt-4.5-humanizer': gpt45HumanizerContent,
  'gpt-5-detector': gpt5DetectorContent,
  'gpt-5-humanizer': gpt5HumanizerContent,
  'gpt-5-pro-detector': gpt5ProDetectorContent,
  'gpt-5-pro-humanizer': gpt5ProHumanizerContent,
  'gpt-5.1-detector': gpt51DetectorContent,
  'gpt-5.1-humanizer': gpt51HumanizerContent,
  'gpt-5.2-detector': gpt52DetectorContent,
  'gpt-5.2-humanizer': gpt52HumanizerContent,
  'grok-image-watermark-detector': grokImageWatermarkDetectorContent,
  'grok-image-watermark-remover': grokImageWatermarkRemoverContent,
  'heygen-video-watermark-remover': heygenVideoWatermarkRemoverContent,
  'hindi-ai-detector': hindiAiDetectorContent,
  'hindi-ai-humanizer': hindiAiHumanizerContent,
  'imagen-image-watermark-remover': imagenImageWatermarkRemoverContent,
  'indonesian-ai-detector': indonesianAiDetectorContent,
  'indonesian-ai-humanizer': indonesianAiHumanizerContent,
  'italian-ai-detector': italianAiDetectorContent,
  'italian-ai-humanizer': italianAiHumanizerContent,
  'japanese-ai-detector': japaneseAiDetectorContent,
  'japanese-ai-humanizer': japaneseAiHumanizerContent,
  'korean-ai-detector': koreanAiDetectorContent,
  'korean-ai-humanizer': koreanAiHumanizerContent,
  'lyrics-humanizer': lyricsHumanizerContent,
  'medium-article-humanizer': mediumArticleHumanizerContent,
  'medium-post-rewriter': mediumPostRewriterContent,
  'midjourney-image-watermark-remover': midjourneyImageWatermarkRemoverContent,
  'nano-banana-image-watermark-remover': nanoBananaImageWatermarkRemoverContent,
  'newsletter-humanizer': newsletterHumanizerContent,
  'newsletter-rewriter': newsletterRewriterContent,
  'perplexity-rank-tracker': perplexityRankTrackerContent,
  'poetry-humanizer': poetryHumanizerContent,
  'portuguese-ai-detector': portugueseAiDetectorContent,
  'portuguese-ai-humanizer': portugueseAiHumanizerContent,
  'quora-answer-humanizer': quoraAnswerHumanizerContent,
  'quora-answer-improver': quoraAnswerImproverContent,
  'reddit-comment-generator': redditCommentGeneratorContent,
  'reddit-post-humanizer': redditPostHumanizerContent,
  'roleplay-humanizer': roleplayHumanizerContent,
  'roleplay-reply-generator': roleplayReplyGeneratorContent,
  'runway-video-watermark-remover': runwayVideoWatermarkRemoverContent,
  'russian-ai-detector': russianAiDetectorContent,
  'russian-ai-humanizer': russianAiHumanizerContent,
  'screenplay-rewriter': screenplayRewriterContent,
  'script-humanizer': scriptHumanizerContent,
  'sermon-humanizer': sermonHumanizerContent,
  'sermon-writer': sermonWriterContent,
  'sora-image-watermark-detector': soraImageWatermarkDetectorContent,
  'sora-image-watermark-remover': soraImageWatermarkRemoverContent,
  'sora-video-watermark-detector': soraVideoWatermarkDetectorContent,
  'sora-video-watermark-remover': soraVideoWatermarkRemoverContent,
  'spanish-ai-detector': spanishAiDetectorContent,
  'spanish-ai-humanizer': spanishAiHumanizerContent,
  'stable-diffusion-watermark-remover': stableDiffusionWatermarkRemoverContent,
  'synthid-image-watermark-remover': synthidImageWatermarkRemoverContent,
  'synthid-video-watermark-remover': synthidVideoWatermarkRemoverContent,
  'tweet-humanizer': tweetHumanizerContent,
  'veo-video-watermark-detector': veoVideoWatermarkDetectorContent,
  'veo-video-watermark-remover': veoVideoWatermarkRemoverContent,
  'wattpad-story-humanizer': wattpadStoryHumanizerContent,
  'wattpad-writer': wattpadWriterContent,
};

export function getToolContent(slug: string): ToolContent | undefined {
  return toolContentMap[slug];
}
