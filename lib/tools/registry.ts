import { toolPages } from '@/lib/seo/registry';

export type Tool = {
  slug: string;
  title: string;
  shortDescription: string;
  category?: string;
  model?: string;
  modelSlug?: string;
  mode?: string;
  modeLabel?: string;
  ui: {
    kind: 'space-remover' | 'text-cleaner' | 'watermark-detector';
  };
  content?: {
    disclaimers?: string[];
    introMarkdown?: string;
    faq?: Array<{ q: string; a: string }>;
  };
};

const MODEL_LABELS: Record<string, string> = {
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
};

function getModelSlug(slug: string): string {
  if (slug === '') {
    return 'chatgpt';
  }
  return slug.split('-')[0] || 'chatgpt';
}

function getModelLabel(modelSlug: string): string {
  return MODEL_LABELS[modelSlug] ?? `${modelSlug.charAt(0).toUpperCase()}${modelSlug.slice(1)}`;
}

function getModeSlug(slug: string): string {
  if (slug === '') {
    return 'text-cleaner';
  }
  if (slug.includes('watermark-detector')) {
    return 'watermark-detector';
  }
  if (slug.includes('space-remover')) {
    return 'space-remover';
  }
  if (slug.includes('watermark-cleaner') || slug.includes('watermark-remover')) {
    return 'watermark-cleaner';
  }
  return 'text-cleaner';
}

function getModeLabel(mode: string): string {
  return MODE_LABELS[mode] ?? 'Tool';
}

// Map slugs to UI kinds
function getUIKind(slug: string): 'space-remover' | 'text-cleaner' | 'watermark-detector' {
  if (slug === '') {
    return 'text-cleaner';
  }
  if (slug.includes('watermark-detector')) {
    return 'watermark-detector';
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
  const mode = getModeSlug(page.slug);

  return {
    slug: page.slug,
    title: page.title,
    shortDescription: page.description,
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






























