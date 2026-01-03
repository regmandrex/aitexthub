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
    category: 'text',
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
    slug: 'korean-nickname-generator',
    title: '별명 짓기',
    description: '이름과 특징을 입력하면 어울리는 별명 추천을 생성하는 한국어 닉네임 생성기.',
    seoTitle: '별명 짓기 | 닉네임 추천 생성기',
    category: 'text',
  },
  {
    slug: 'chatgpt-space-remover',
    title: 'ChatGPT Space Remover',
    description: 'Remove extra spaces and blank lines from ChatGPT output in one click.',
    category: 'text',
  },
  {
    slug: 'chatgpt-watermark-remover',
    title: 'ChatGPT Watermark Remover',
    description: 'Remove hidden characters and formatting artifacts from ChatGPT output.',
    category: 'text',
  },
  {
    slug: 'gemini-space-remover',
    title: 'Gemini Space Remover',
    description: 'Clean extra spaces and blank lines from Google Gemini output.',
    category: 'text',
    canonicalTo: 'chatgpt-space-remover',
  },
  {
    slug: 'gemini-watermark-cleaner',
    title: 'Gemini Watermark Cleaner',
    description: 'Remove hidden watermarks and invisible Unicode from Gemini outputs.',
    category: 'text',
  },
  {
    slug: 'grok-watermark-cleaner',
    title: 'Grok Watermark Cleaner',
    description: 'Remove hidden watermarks and invisible Unicode from Grok outputs.',
    category: 'text',
  },
  {
    slug: 'deepseek-watermark-cleaner',
    title: 'DeepSeek Watermark Cleaner',
    description: 'Remove hidden watermarks and invisible Unicode from DeepSeek outputs.',
    category: 'text',
  },
  {
    slug: 'claude-watermark-cleaner',
    title: 'Claude Watermark Cleaner',
    description: 'Remove hidden watermarks and invisible Unicode from Claude outputs.',
    category: 'text',
  },
  {
    slug: 'llama-watermark-cleaner',
    title: 'LLAMA Watermark Cleaner',
    description: 'Remove hidden watermarks and invisible Unicode from LLAMA outputs.',
    category: 'text',
  },
  {
    slug: 'perplexity-watermark-cleaner',
    title: 'Perplexity Watermark Cleaner',
    description: 'Remove hidden watermarks and invisible Unicode from Perplexity outputs.',
    category: 'text',
  },
  {
    slug: 'grok-space-remover',
    title: 'Grok Space Remover',
    description: 'Clean extra spaces and normalize Grok AI text for easy pasting.',
    category: 'text',
  },
  {
    slug: 'deepseek-space-remover',
    title: 'DeepSeek Space Remover',
    description: 'Collapse extra whitespace in DeepSeek outputs while keeping meaning intact.',
    category: 'text',
  },
  {
    slug: 'llama-space-remover',
    title: 'LLAMA Space Remover',
    description: 'Tidy LLAMA (Meta AI) text by trimming lines and stabilizing spacing.',
    category: 'text',
  },
  {
    slug: 'perplexity-space-remover',
    title: 'Perplexity Space Remover',
    description: 'Fix spacing and hidden whitespace in Perplexity responses.',
    category: 'text',
  },
  {
    slug: 'mistral-space-remover',
    title: 'Mistral Space Remover',
    description: 'Normalize whitespace in Mistral-generated text.',
    category: 'text',
  },
  {
    slug: 'mistral-watermark-cleaner',
    title: 'Mistral Watermark Cleaner',
    description: 'Remove hidden watermarks and invisible Unicode from Mistral outputs.',
    category: 'text',
  },
  {
    slug: 'claude-space-remover',
    title: 'Claude Space Remover',
    description: 'Trim, collapse, and normalize spaces in Claude outputs.',
    category: 'text',
  },
  {
    slug: 'chatgpt-watermark-detector',
    title: 'ChatGPT Watermark Detector',
    description: 'Inspect ChatGPT text for possible formatting artifacts and hidden Unicode.',
    category: 'text',
  },
  {
    slug: 'grok-watermark-detector',
    title: 'Grok Watermark Detector',
    description: 'Analyze Grok text for potential AI-text artifacts and spacing anomalies.',
    category: 'text',
  },
  {
    slug: 'deepseek-watermark-detector',
    title: 'DeepSeek Watermark Detector',
    description: 'Scan DeepSeek text for possible watermark-like formatting signals.',
    category: 'text',
  },
  {
    slug: 'llama-watermark-detector',
    title: 'LLAMA Watermark Detector',
    description: 'Check LLAMA (Meta AI) text for hidden Unicode and whitespace patterns.',
    category: 'text',
  },
  {
    slug: 'perplexity-watermark-detector',
    title: 'Perplexity Watermark Detector',
    description: 'Surface potential formatting artifacts in Perplexity AI text.',
    category: 'text',
  },
  {
    slug: 'gemini-watermark-detector',
    title: 'Gemini Watermark Detector',
    description: 'Inspect Gemini text for hidden characters and whitespace signals.',
    category: 'text',
  },
  {
    slug: 'mistral-watermark-detector',
    title: 'Mistral Watermark Detector',
    description: 'Identify possible AI-text formatting patterns in Mistral outputs.',
    category: 'text',
  },
  {
    slug: 'claude-watermark-detector',
    title: 'Claude Watermark Detector',
    description: 'Analyze Claude text for hidden Unicode and spacing artifacts.',
    category: 'text',
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
