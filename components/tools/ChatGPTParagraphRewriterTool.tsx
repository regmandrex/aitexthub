"use client";

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

export function ChatGPTParagraphRewriterTool() {
  const processText = (text: string): string => {
    if (!text.trim()) {
      return '';
    }
    
    const words = text.trim().split(/\s+/).length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
    
    return `Text Analysis:\n\n• Length: ${text.length} characters\n• Words: ${words}\n• Sentences: ${sentences}\n• Paragraphs: ${paragraphs}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nNote: This tool is currently in development. Rewritten paragraphs will appear here once AI integration is complete.`;
  };

  return (
    <GenericTextProcessorTool
      processText={processText}
      inputLabel="Paragraphs to Rewrite"
      outputLabel="Rewritten Paragraphs"
      inputPlaceholder="Paste paragraphs to rewrite..."
      outputPlaceholder="Rewritten paragraphs will appear here..."
    />
  );
}
