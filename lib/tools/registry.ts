import { toolPages } from '@/lib/seo/registry';

export type Tool = {
  slug: string;
  title: string;
  shortDescription: string;
  seoTitle?: string;
  category?: string;
  model?: string;
  modelSlug?: string;
  mode?: string;
  modeLabel?: string;
  ui: {
    kind:
      | 'space-remover'
      | 'text-cleaner'
      | 'watermark-detector'
      | 'case-converter'
      | 'em-dash-remover'
      | 'find-and-replace'
      | 'invisible-character-detector'
      | 'remove-duplicate-lines'
      | 'remove-line-breaks'
      | 'remove-whitespace'
      | 'strip-html'
      | 'url-encoder-decoder'
      | 'word-counter'
      | 'zero-width-space-remover'
      | 'line-spacing'
      | 'morse-generator'
      | 'combination-generator'
      | 'line-combination-generator'
      | 'permutation-generator'
      | 'ai-code-cleaner'
      | 'ai-code-fixer'
      | 'rank-tracker'
      | 'ai-detector'
      | 'ai-humanizer'
      | 'watermark-remover';
  };
  content?: {
    disclaimers?: string[];
    introMarkdown?: string;
    faq?: Array<{ q: string; a: string }>;
  };
};

const MODEL_LABELS: Record<string, string> = {
  ai: 'AI',
  chatgpt: 'ChatGPT',
  gemini: 'Gemini',
  claude: 'Claude',
  grok: 'Grok',
  deepseek: 'DeepSeek',
  llama: 'LLAMA',
  mistral: 'Mistral',
  perplexity: 'Perplexity',
};

const MODE_LABELS: Record<string, string> = {
  'text-cleaner': 'Text Cleaner',
  'space-remover': 'Space Remover',
  'watermark-cleaner': 'Watermark Cleaner',
  'watermark-detector': 'Watermark Detector',
  'line-spacing': 'Line Spacing',
  utility: 'Text Utility',
  generator: 'Generator',
  translator: 'Translator',
};

const UTILITY_SLUGS = new Set([
  'case-converter',
  'em-dash-remover',
  'find-and-replace',
  'invisible-character-detector',
  'remove-duplicate-lines',
  'remove-line-breaks',
  'strip-html',
  'url-encoder-decoder',
  'word-counter',
  'zero-width-space-remover',
  'extract-numbers-from-text',
  'text-to-hex',
]);

const GENERATOR_SLUGS = new Set([
  'korean-nickname-generator',
  'god-goddess-name-generator',
  'muslim-name-generator',
  'transformers-name-generator',
  'naruto-name-generator',
  'island-name-generator',
  'fallout-name-generator',
  'ancient-greek-name-generator',
  'drag-queen-name-generator',
  'tribe-name-generator',
  'anime-names-generator',
  'wrestling-name-generator',
  'royal-surname-generator',
  'silly-name-generator',
  'bracket-name-generator',
  'steam-name-generator',
  'elden-ring-name-generator',
  'mlp-name-generator',
  'stripper-name-generator',
  'runescape-name-generator',
  'shopify-store-name-generator',
  'korean-name-generator-male',
  'korean-name-generator-online',
  'gorilla-tag-name-generator',
  'hollow-knight-name-generator',
  'coven-name-generator',
  'bg3-name-generator',
  'secret-organization-name-generator',
  'genderbend-name-generator',
  'motorcycle-club-name-generator',
  'beyblade-name-generator',
  'homestuck-troll-name-generator',
  'symbiote-name-generator',
  'speedster-name-generator',
  'boxer-name-generator',
  'hillbilly-name-generator',
  'crew-name-generator',
  'tadc-name-generator',
  'tadc-oc-maker',
  'httyd-name-generator',
  'drag-king-name-generator',
  'yautja-name-generator',
  'badass-username-generator',
  'army-name-generator',
  'nun-name-generator',
  'clash-royale-name-generator',
  'task-force-name-generator',
  'kik-name-generator',
  'tumblr-blog-name-generator',
  'amusement-park-name-generator',
  'fakemon-name-generator',
  '40k-planet-name-generator',
  'magical-girl-name-generator',
  'morse-code-generator',
  'random-hex-generator',
  'combination-generator',
  'line-combination-generator',
  'permutation-generator',
]);

const MODEL_SLUGS = new Set(Object.keys(MODEL_LABELS));

function getModelSlug(slug: string): string | undefined {
  if (slug === '') {
    return 'chatgpt';
  }
  if (UTILITY_SLUGS.has(slug)) {
    return undefined;
  }
  const candidate = slug.split('-')[0];
  return MODEL_SLUGS.has(candidate) ? candidate : undefined;
}

function getModelLabel(modelSlug?: string): string | undefined {
  if (!modelSlug) return undefined;
  return MODEL_LABELS[modelSlug] ?? `${modelSlug.charAt(0).toUpperCase()}${modelSlug.slice(1)}`;
}

function getModeSlug(slug: string, category?: string): string {
  if (slug === '') {
    return 'text-cleaner';
  }
  if (UTILITY_SLUGS.has(slug)) {
    return 'utility';
  }
  if (slug.includes('watermark-detector')) {
    return 'watermark-detector';
  }
  if (slug.includes('line-spacing')) {
    return 'line-spacing';
  }
  if (slug.includes('space-remover')) {
    return 'space-remover';
  }
  if (slug.includes('watermark-cleaner') || slug.includes('watermark-remover')) {
    return 'watermark-cleaner';
  }

  // Use category when available to avoid misclassification (e.g. generators, encoding tools)
  if (category === 'translator') {
    return 'translator';
  }
  if (category === 'generator' || GENERATOR_SLUGS.has(slug)) {
    return 'generator';
  }
  if (
    category === 'text' ||
    category === 'encoding' ||
    category === 'data-format' ||
    category === 'number-systems' ||
    category === 'color-css'
  ) {
    return 'utility';
  }

  return 'text-cleaner';
}

function getModeLabel(mode: string): string {
  return MODE_LABELS[mode] ?? 'Tool';
}

// Map slugs to UI kinds
function getUIKind(
  slug: string
):
  | 'space-remover'
  | 'text-cleaner'
  | 'watermark-detector'
  | 'case-converter'
  | 'em-dash-remover'
  | 'find-and-replace'
  | 'invisible-character-detector'
  | 'remove-duplicate-lines'
  | 'remove-line-breaks'
  | 'remove-whitespace'
  | 'strip-html'
  | 'url-encoder-decoder'
  | 'word-counter'
  | 'zero-width-space-remover'
  | 'line-spacing'
  | 'morse-generator'
  | 'combination-generator'
  | 'line-combination-generator'
  | 'permutation-generator'
  | 'ai-code-cleaner'
  | 'ai-code-fixer'
  | 'rank-tracker'
  | 'ai-detector'
  | 'ai-humanizer'
  | 'watermark-remover' {
  if (slug === '') {
    return 'text-cleaner';
  }
  if (slug === 'combination-generator') {
    return 'combination-generator';
  }
  if (slug === 'line-combination-generator') {
    return 'line-combination-generator';
  }
  if (slug === 'permutation-generator') {
    return 'permutation-generator';
  }
  if (slug === 'ai-code-cleaner') {
    return 'ai-code-cleaner';
  }
  if (slug === 'ai-code-fixer') {
    return 'ai-code-fixer';
  }
  if (slug.includes('rank-tracker')) {
    return 'rank-tracker';
  }
  if (UTILITY_SLUGS.has(slug)) {
    return slug as Tool['ui']['kind'];
  }
  if (slug.includes('watermark-detector')) {
    return 'watermark-detector';
  }
  if (slug.includes('watermark-remover') || slug.includes('watermark-cleaner')) {
    return 'watermark-remover';
  }
  if (slug.includes('detector')) {
    return 'ai-detector';
  }
  if (
    slug.includes('humanizer') ||
    slug.includes('rewriter') ||
    slug.includes('improver') ||
    slug.includes('validator') ||
    slug.includes('checker') ||
    slug.includes('writer') ||
    slug.includes('generator') ||
    slug.includes('enhancer') ||
    slug.includes('polisher')
  ) {
    return 'ai-humanizer';
  }
  if (slug.includes('line-spacing')) {
    return 'line-spacing';
  }
  if (slug.includes('morse-code-generator') || slug === 'text-to-morse-code') {
    return 'morse-generator';
  }
  if (slug.includes('space-remover')) {
    return 'space-remover';
  }
  // Default fallback
  return 'text-cleaner';
}

// Convert toolPages to Tool format
const tools: Tool[] = toolPages.map((page) => {
  const modelSlug = getModelSlug(page.slug);
  const mode = getModeSlug(page.slug, page.category);

  return {
    slug: page.slug,
    title: page.title,
    shortDescription: page.description,
    seoTitle: page.seoTitle,
    category: page.category,
    model: getModelLabel(modelSlug),
    modelSlug,
    mode,
    modeLabel: getModeLabel(mode),
    ui: {
      kind: getUIKind(page.slug),
    },
  };
});

export function getAllTools(): Tool[] {
  return tools;
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getRelatedTools(currentTool: Tool, limit: number = 8): Tool[] {
  const related: Tool[] = [];
  
  // First, try to find tools in the same category
  if (currentTool.category) {
    const sameCategory = tools.filter(
      (tool) => tool.slug !== currentTool.slug && tool.category === currentTool.category
    );
    related.push(...sameCategory);
  }
  
  // If we don't have enough, add other tools
  if (related.length < limit) {
    const others = tools.filter(
      (tool) => tool.slug !== currentTool.slug && !related.some((r) => r.slug === tool.slug)
    );
    related.push(...others);
  }
  
  return related.slice(0, limit);
}










































