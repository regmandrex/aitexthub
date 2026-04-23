import type { ReactNode } from 'react';
import type { FaqItem } from '@/components/faqData';
import { qrCodeReaderContent } from './qr-code-reader';

export type ToolContent = {
  writeUp: ReactNode;
  faqs: FaqItem[];
};

const toolContentMap: Record<string, ToolContent> = {
  'qr-code-reader': qrCodeReaderContent,
};

export function getToolContent(slug: string): ToolContent | undefined {
  return toolContentMap[slug];
}
