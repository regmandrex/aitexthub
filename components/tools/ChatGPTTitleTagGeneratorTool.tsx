"use client";

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

export function ChatGPTTitleTagGeneratorTool() {
  const processText = (text: string): string => {
    if (!text.trim()) {
      return '';
    }
    
    const words = text.trim().split(/\s+/).length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    
    return `Text Analysis:\n\n• Length: ${text.length} characters\n• Words: ${words}\n• Sentences: ${sentences}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nNote: This tool is currently in development. SEO-optimized title tag will appear here once API integration is complete.`;
  };

  return (
    <GenericTextProcessorTool
      processText={processText}
      inputLabel="Content for Title Tag"
      outputLabel="Generated Title Tag"
      inputPlaceholder="Paste content to generate title tag..."
      outputPlaceholder="Title tag will appear here..."
    />
  );
}
