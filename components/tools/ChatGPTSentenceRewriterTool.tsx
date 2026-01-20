"use client";

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

export function ChatGPTSentenceRewriterTool() {
  const processText = (text: string): string => {
    if (!text.trim()) {
      return '';
    }
    
    const words = text.trim().split(/\s+/).length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    
    return `Text Analysis:\n\n• Length: ${text.length} characters\n• Words: ${words}\n• Sentences: ${sentences}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nNote: This tool is currently in development. Rewritten sentences will appear here once AI integration is complete.`;
  };

  return (
    <GenericTextProcessorTool
      processText={processText}
      inputLabel="Sentences to Rewrite"
      outputLabel="Rewritten Sentences"
      inputPlaceholder="Paste sentences to rewrite..."
      outputPlaceholder="Rewritten sentences will appear here..."
    />
  );
}
