import type { CategoryContent } from './types';

export type { CategoryContent } from './types';

/**
 * Long-form content per category slug, loaded lazily so a single category page
 * only pulls in its own copy rather than all fifteen.
 *
 * Categories absent from this map still render a working page (hero, tool grid,
 * related categories) - they just omit the editorial sections until written.
 */
const LOADERS: Record<string, () => Promise<{ default: CategoryContent }>> = {
  'developer-tools': () => import('./developer-tools'),
  'ai-cleanup-tools': () => import('./ai-cleanup-tools'),
  'ai-humanizer-tools': () => import('./ai-humanizer-tools'),
  'academic-tools': () => import('./academic-tools'),
  'writing-tools': () => import('./writing-tools'),
  'professional-tools': () => import('./professional-tools'),
  'generator-tools': () => import('./generator-tools'),
  'ai-detection-tools': () => import('./ai-detection-tools'),
};

export async function getCategoryContent(slug: string): Promise<CategoryContent | null> {
  const loader = LOADERS[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}

export function hasCategoryContent(slug: string): boolean {
  return slug in LOADERS;
}
