import { toolPages } from '@/lib/seo/registry';

export const TOOL_SLUGS = toolPages
  .map((page) => page.slug)
  .filter((slug) => Boolean(slug));

export const TOOL_SLUGS_SET = new Set(TOOL_SLUGS);

