type ToolPage = {
  slug: string; // without leading slash
  title: string;
  description: string;
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

type ModelPage = {
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

export const modelPages: ModelPage[] = [
  {
    slug: 'models/chatgpt',
    title: 'ChatGPT Tools',
    description: 'Tools tailored for ChatGPT outputs.',
  },
  {
    slug: 'models/gemini',
    title: 'Gemini Tools',
    description: 'Tools tailored for Gemini outputs.',
  },
];
