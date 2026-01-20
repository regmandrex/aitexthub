"use client";

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

export function ChatGPTLinkedInRewriterTool() {
  const processText = (text: string): string => {
    if (!text.trim()) {
      return '';
    }
    
    const words = text.trim().split(/\s+/).length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    
    return `Text Analysis:\n\n• Length: ${text.length} characters\n• Words: ${words}\n• Sentences: ${sentences}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nNote: This tool is currently in development. LinkedIn-optimized content will appear here once AI integration is complete.`;
  };

  return (
    <GenericTextProcessorTool
      processText={processText}
      inputLabel="Content to Rewrite"
      outputLabel="LinkedIn-Optimized Content"
      inputPlaceholder="Paste content to rewrite for LinkedIn..."
      outputPlaceholder="LinkedIn-optimized content will appear here..."
    />
  );
}
