import type { ReactNode } from 'react';
import type { FaqItem } from '@/components/faqData';

/**
 * Long-form editorial content for a category page. Each category supplies one
 * of these; the route at app/ai-tools/[category] renders it between the tool
 * grid and the FAQ block.
 */
export type CategoryContent = {
  /** Lead paragraphs rendered directly under the H1, above the tool grid. */
  intro: ReactNode;
  /** Main body: the bulk of the long-form content, rendered below the grid. */
  body: ReactNode;
  /** Category FAQs. Minimum 23 per site SEO policy. */
  faqs: FaqItem[];
};
