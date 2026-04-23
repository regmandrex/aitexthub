import { qrCodeReaderContent } from './qr-code-reader';

export type ToolContent = {
  introMarkdown: string;
  faq: Array<{ q: string; a: string }>;
};

export const toolContentMap: Record<string, ToolContent> = {
  'qr-code-reader': qrCodeReaderContent,
};

export function getToolContent(slug: string): ToolContent | undefined {
  return toolContentMap[slug];
}
