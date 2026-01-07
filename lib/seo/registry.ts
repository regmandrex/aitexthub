type ToolPage = {
  slug: string; // without leading slash
  title: string;
  description: string;
  seoTitle?: string;
  category?: string;
  models?: string[];
  canonicalTo?: string;
  noindex?: boolean;
};

type CategoryPage = {
  slug: string;
  title: string;
  description: string;
  noindex?: boolean;
};

export const toolPages: ToolPage[] = [
  {
    slug: '',
    title: 'ChatGPT Text Cleaner',
    description: 'Clean and normalize AI output by removing hidden Unicode and fixing spacing.',
    category: 'text',
  },
  {
    slug: 'space-remover',
    title: 'Space Remover',
    description: 'Remove extra spaces, trim lines, and normalize whitespace for clean, paste-ready text.',
    category: 'text',
  },
  {
    slug: 'ai-space-remover',
    title: 'AI Space Remover',
    description: 'Remove extra spaces, hidden Unicode, and irregular whitespace from AI-era text.',
    category: 'ai-cleanup',
  },
  {
    slug: 'case-converter',
    title: 'Case Converter',
    description: 'Convert text to uppercase, lowercase, title case, or sentence case.',
    seoTitle: 'Case Converter - Uppercase, Lowercase, Title & Sentence Case',
    category: 'text',
  },
  {
    slug: 'em-dash-remover',
    title: 'Em Dash Remover / Replacer',
    description: 'Remove or replace em dashes and en dashes with your preferred spacing.',
    seoTitle: 'Em Dash Remover - Replace or Remove Em & En Dashes',
    category: 'text',
  },
  {
    slug: 'find-and-replace',
    title: 'Find & Replace',
    description: 'Find text and replace it with custom values, with optional case matching.',
    seoTitle: 'Find and Replace Tool - Bulk Text Replace Online',
    category: 'text',
  },
  {
    slug: 'invisible-character-detector',
    title: 'Invisible Character Detector',
    description: 'Detect hidden Unicode characters and show where they appear in your text.',
    seoTitle: 'Invisible Character Detector - Find Hidden Unicode',
    category: 'text',
  },
  {
    slug: 'remove-duplicate-lines',
    title: 'Remove Duplicate Lines',
    description: 'Remove duplicate lines while keeping the original order intact.',
    seoTitle: 'Remove Duplicate Lines - Delete Duplicate Text',
    category: 'text',
  },
  {
    slug: 'remove-line-breaks',
    title: 'Remove Line Breaks',
    description: 'Join wrapped lines into clean paragraphs by removing line breaks.',
    seoTitle: 'Remove Line Breaks - Join Lines into Paragraphs',
    category: 'text',
  },
  {
    slug: 'strip-html',
    title: 'Strip HTML',
    description: 'Remove HTML tags and return clean plain text.',
    seoTitle: 'Strip HTML Tags - Convert HTML to Plain Text Free',
    category: 'text',
  },
  {
    slug: 'url-encoder-decoder',
    title: 'URL Encoder / Decoder',
    description: 'Encode or decode URLs, query strings, and text fragments.',
    seoTitle: 'URL Encoder Decoder - Encode or Decode URLs',
    category: 'encoding',
  },
  {
    slug: 'word-counter',
    title: 'Word Counter',
    description: 'Count words, characters, lines, sentences, and paragraphs.',
    seoTitle: 'Word Counter - Count Words, Characters & Lines',
    category: 'text',
  },
  {
    slug: 'zero-width-space-remover',
    title: 'Zero-Width Space Remover',
    description: 'Remove zero-width spaces and invisible Unicode characters.',
    seoTitle: 'Zero-Width Space Remover - Remove Invisible Unicode',
    category: 'text',
  },
  {
    slug: 'hex-to-binary',
    title: 'Hex to Binary Converter',
    description: 'Convert hexadecimal strings to binary with formatting options.',
    seoTitle: 'Hex to Binary Converter - Fast Hex to Binary Tool',
    category: 'number-systems',
  },
  {
    slug: 'random-hex-generator',
    title: 'Random Hex Number Generator',
    description: 'Generate random hex strings with length and format controls.',
    seoTitle: 'Random Hex Generator - Secure Random Hex Strings',
    category: 'generator',
  },
  {
    slug: 'morse-code-translator',
    title: 'Morse Code Translator',
    description: 'Translate text to Morse code or decode Morse back to text.',
    seoTitle: 'Morse Code Translator - Encode and Decode Morse',
    category: 'encoding',
  },
  {
    slug: 'idn-encode',
    title: 'IDN Encode',
    description: 'Convert international domain names to ASCII Punycode.',
    seoTitle: 'IDN Encode - Convert International Domains to Punycode',
    category: 'encoding',
  },
  {
    slug: 'idn-decode',
    title: 'IDN Decode',
    description: 'Convert Punycode domains back to readable Unicode.',
    seoTitle: 'IDN Decode - Convert Punycode Domains to Unicode',
    category: 'encoding',
  },
  {
    slug: 'utf-8-encode',
    title: 'UTF-8 Encode',
    description: 'Encode text into UTF-8 byte values for accurate transport.',
    seoTitle: 'UTF-8 Encode - Convert Text to UTF-8 Bytes',
    category: 'encoding',
  },
  {
    slug: 'utf-8-decode',
    title: 'UTF-8 Decode',
    description: 'Decode UTF-8 byte values back into readable text.',
    seoTitle: 'UTF-8 Decode - Convert UTF-8 Bytes to Text',
    category: 'encoding',
  },
  {
    slug: 'url-encode',
    title: 'URL Encode',
    description: 'Encode URL text and query values into safe percent encoded strings.',
    seoTitle: 'URL Encode - Percent Encode URLs and Query Text',
    category: 'encoding',
  },
  {
    slug: 'url-decode',
    title: 'URL Decode',
    description: 'Decode percent encoded URLs and query strings into readable text.',
    seoTitle: 'URL Decode - Convert Percent Encoded URLs to Text',
    category: 'encoding',
  },
  {
    slug: 'base64-encode',
    title: 'Base64 Encode',
    description: 'Convert text to Base64 for safe transport in apps and configs.',
    seoTitle: 'Base64 Encode - Convert Text to Base64 Strings',
    category: 'encoding',
  },
  {
    slug: 'base64-decode',
    title: 'Base64 Decode',
    description: 'Decode Base64 strings back to readable text with UTF-8 support.',
    seoTitle: 'Base64 Decode - Convert Base64 to Text',
    category: 'encoding',
  },
  {
    slug: 'html-entities-to-text',
    title: 'HTML Entities to Text Converter',
    description: 'Decode HTML entities like &amp; and &#169; into readable text.',
    seoTitle: 'HTML Entities to Text Converter - Decode HTML Entities',
    category: 'encoding',
  },
  {
    slug: 'text-to-html-entities',
    title: 'Text to HTML Entities Converter',
    description: 'Encode text into HTML entities for safe markup.',
    seoTitle: 'Text to HTML Entities Converter - Encode HTML Entities',
    category: 'encoding',
  },
  {
    slug: 'morse-code-generator',
    title: 'Morse Code Generator',
    description: 'Convert plain text into clean Morse code with slashes or spaces, ready for puzzles, learning, and signaling.',
    seoTitle: 'Morse Code Generator - Encode Text to Morse Code',
    category: 'generator',
  },
  {
    slug: 'korean-nickname-generator',
    title: '한국어 닉네임 생성기',
    description:
      '이름과 특징을 입력하면 20개의 닉네임 추천을 바로 보여주는 닉네임 생성기 도구입니다. 귀여운·멋있는·재미있는·감성적인·짧은·영어닉·한글닉까지 로컬에서 규칙 기반으로 생성합니다.',
    seoTitle: '별명 짓기 | 닉네임 추천 생성기',
    category: 'generator',
  },
  {
    slug: 'chatgpt-space-remover',
    title: 'ChatGPT Space Remover',
    description: 'Remove extra spaces and blank lines from ChatGPT output in one click.',
    category: 'ai-cleanup',
  },
  {
    slug: 'chatgpt-line-spacing',
    title: 'ChatGPT Line Spacing Tool',
    description: 'Adjust line spacing in ChatGPT text to single, 1.5, double, or custom spacing for professional formatting.',
    seoTitle: 'ChatGPT Line Spacing Tool - Adjust Line Spacing in ChatGPT Text',
    category: 'text',
  },
  {
    slug: 'chatgpt-watermark-remover',
    title: 'ChatGPT Watermark Remover',
    description: 'Remove hidden characters and formatting artifacts from ChatGPT output.',
    category: 'ai-cleanup',
  },
  {
    slug: 'ai-watermark-remover',
    title: 'AI Watermark Remover',
    description: 'Clean formatting artifacts, normalize Unicode, and tidy AI-era text for publishing.',
    category: 'ai-cleanup',
  },
  {
    slug: 'gemini-space-remover',
    title: 'Gemini Space Remover',
    description: 'Clean extra spaces and blank lines from Google Gemini output.',
    category: 'ai-cleanup',
  },
  {
    slug: 'gemini-watermark-cleaner',
    title: 'Gemini Watermark Cleaner',
    description: 'Remove hidden watermarks and invisible Unicode from Gemini outputs.',
    category: 'ai-cleanup',
  },
  {
    slug: 'grok-watermark-cleaner',
    title: 'Grok Watermark Cleaner',
    description: 'Remove hidden watermarks and invisible Unicode from Grok outputs.',
    category: 'ai-cleanup',
  },
  {
    slug: 'deepseek-watermark-cleaner',
    title: 'DeepSeek Watermark Cleaner',
    description: 'Remove hidden watermarks and invisible Unicode from DeepSeek outputs.',
    category: 'ai-cleanup',
  },
  {
    slug: 'claude-watermark-cleaner',
    title: 'Claude Watermark Cleaner',
    description: 'Remove hidden watermarks and invisible Unicode from Claude outputs.',
    category: 'ai-cleanup',
  },
  {
    slug: 'llama-watermark-cleaner',
    title: 'LLAMA Watermark Cleaner',
    description: 'Remove hidden watermarks and invisible Unicode from LLAMA outputs.',
    category: 'ai-cleanup',
  },
  {
    slug: 'perplexity-watermark-cleaner',
    title: 'Perplexity Watermark Cleaner',
    description: 'Remove hidden watermarks and invisible Unicode from Perplexity outputs.',
    category: 'ai-cleanup',
  },
  {
    slug: 'grok-space-remover',
    title: 'Grok Space Remover',
    description: 'Clean extra spaces and normalize Grok AI text for easy pasting.',
    category: 'ai-cleanup',
  },
  {
    slug: 'deepseek-space-remover',
    title: 'DeepSeek Space Remover',
    description: 'Collapse extra whitespace in DeepSeek outputs while keeping meaning intact.',
    category: 'ai-cleanup',
  },
  {
    slug: 'llama-space-remover',
    title: 'LLAMA Space Remover',
    description: 'Tidy LLAMA (Meta AI) text by trimming lines and stabilizing spacing.',
    category: 'ai-cleanup',
  },
  {
    slug: 'perplexity-space-remover',
    title: 'Perplexity Space Remover',
    description: 'Fix spacing and hidden whitespace in Perplexity responses.',
    category: 'ai-cleanup',
  },
  {
    slug: 'mistral-space-remover',
    title: 'Mistral Space Remover',
    description: 'Normalize whitespace in Mistral-generated text.',
    category: 'ai-cleanup',
  },
  {
    slug: 'mistral-watermark-cleaner',
    title: 'Mistral Watermark Cleaner',
    description: 'Remove hidden watermarks and invisible Unicode from Mistral outputs.',
    category: 'ai-cleanup',
  },
  {
    slug: 'claude-space-remover',
    title: 'Claude Space Remover',
    description: 'Trim, collapse, and normalize spaces in Claude outputs.',
    category: 'ai-cleanup',
  },
  {
    slug: 'chatgpt-watermark-detector',
    title: 'ChatGPT Watermark Detector',
    description: 'Inspect ChatGPT text for possible formatting artifacts and hidden Unicode.',
    category: 'ai-cleanup',
  },
  {
    slug: 'ai-watermark-detector',
    title: 'AI Watermark Detector',
    description: 'Analyze text for hidden Unicode, spacing patterns, and structural signals.',
    category: 'ai-cleanup',
  },
  {
    slug: 'grok-watermark-detector',
    title: 'Grok Watermark Detector',
    description: 'Analyze Grok text for potential AI-text artifacts and spacing anomalies.',
    category: 'ai-cleanup',
  },
  {
    slug: 'deepseek-watermark-detector',
    title: 'DeepSeek Watermark Detector',
    description: 'Scan DeepSeek text for possible watermark-like formatting signals.',
    category: 'ai-cleanup',
  },
  {
    slug: 'llama-watermark-detector',
    title: 'LLAMA Watermark Detector',
    description: 'Check LLAMA (Meta AI) text for hidden Unicode and whitespace patterns.',
    category: 'ai-cleanup',
  },
  {
    slug: 'perplexity-watermark-detector',
    title: 'Perplexity Watermark Detector',
    description: 'Surface potential formatting artifacts in Perplexity AI text.',
    category: 'ai-cleanup',
  },
  {
    slug: 'gemini-watermark-detector',
    title: 'Gemini Watermark Detector',
    description: 'Inspect Gemini text for hidden characters and whitespace signals.',
    category: 'ai-cleanup',
  },
  {
    slug: 'mistral-watermark-detector',
    title: 'Mistral Watermark Detector',
    description: 'Identify possible AI-text formatting patterns in Mistral outputs.',
    category: 'ai-cleanup',
  },
  {
    slug: 'claude-watermark-detector',
    title: 'Claude Watermark Detector',
    description: 'Analyze Claude text for hidden Unicode and spacing artifacts.',
    category: 'ai-cleanup',
  },
  {
    slug: 'text-to-morse-code',
    title: 'Text to Morse Code Converter',
    description: 'Convert plain text into Morse code using standard ITU encoding. Fast, accurate, and privacy-friendly.',
    seoTitle: 'Text to Morse Code Converter - Free Online Morse Code Encoding Tool',
    category: 'encoding',
  },
  {
    slug: 'extract-numbers-from-text',
    title: 'Extract Numbers From Text',
    description: 'Extract all numbers from text, including integers and decimals. Options for ordering, uniqueness, and delimiters.',
    seoTitle: 'Extract Numbers From Text - Free Online Number Extraction Tool',
    category: 'text',
  },
  {
    slug: 'text-to-hex',
    title: 'Text to HEX Converter',
    description: 'Convert text characters into hexadecimal representation. Supports UTF-8 encoding with uppercase/lowercase and spacing options.',
    seoTitle: 'Text to HEX Converter - Free Online Hexadecimal Encoding Tool',
    category: 'encoding',
  },
];

export const categoryPages: CategoryPage[] = [
  {
    slug: 'tools/text',
    title: 'Text Tools',
    description: 'AI text cleanup and formatting tools.',
    noindex: true,
  },
];

export function getToolPageBySlug(slug: string): ToolPage | undefined {
  return toolPages.find((page) => page.slug === slug);
}