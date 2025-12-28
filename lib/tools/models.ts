export type ModelConfig = {
  slug: string;
  name: string;
};

export const models: ModelConfig[] = [
  { slug: 'chatgpt', name: 'ChatGPT' },
  { slug: 'grok', name: 'Grok' },
  { slug: 'deepseek', name: 'DeepSeek' },
  { slug: 'llama', name: 'LLAMA (Meta AI)' },
  { slug: 'perplexity', name: 'Perplexity' },
  { slug: 'gemini', name: 'Gemini' },
  { slug: 'mistral', name: 'Mistral' },
  { slug: 'claude', name: 'Claude' },
];

export function getModel(slug: string): ModelConfig | undefined {
  return models.find((model) => model.slug === slug);
}

export function modelTools(slug: string) {
  return {
    spaceRemover: `/${slug}-space-remover`,
    watermarkDetector: `/${slug}-watermark-detector`,
  };
}

export function otherModelLinks(currentSlug: string, type: 'space' | 'detector', limit = 3) {
  return models
    .filter((m) => m.slug !== currentSlug)
    .slice(0, limit)
    .map((m) => ({
      label: `${m.name} ${type === 'space' ? 'Space Remover' : 'Watermark Detector'}`,
      href: type === 'space' ? `/${m.slug}-space-remover` : `/${m.slug}-watermark-detector`,
    }));
}
