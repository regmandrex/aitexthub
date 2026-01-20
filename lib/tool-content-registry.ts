import type { ReactNode } from 'react';
import type { FaqItem } from '@/components/faqData';

// This will be populated by importing content from individual tool pages
// For now, it's a placeholder structure
export type ToolContent = {
  writeUp?: () => ReactNode;
  faqs?: FaqItem[];
};

// Registry for tools with custom content
// This will be populated dynamically
export const toolContentRegistry: Record<string, ToolContent> = {};
