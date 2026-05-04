import type { ReactNode } from 'react';
import type { FaqItem } from '@/components/faqData';

export type ToolContent = {
  writeUp: ReactNode;
  faqs: FaqItem[];
};
