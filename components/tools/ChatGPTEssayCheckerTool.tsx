"use client";

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

export function ChatGPTEssayCheckerTool() {
  const processText = (text: string): string => {
    if (!text.trim()) {
      return '';
    }
    
    const words = text.trim().split(/\s+/).length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
    
    return `Text Analysis:\n\n• Length: ${text.length} characters\n• Words: ${words}\n• Sentences: ${sentences}\n• Paragraphs: ${paragraphs}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nNote: This tool is currently in development. Essay check results will appear here once API integration is complete.`;
  };

  return (
    <GenericTextProcessorTool
      processText={processText}
      inputLabel="Essay to Check"
      outputLabel="Essay Check Results"
      inputPlaceholder="Paste essay to check..."
      outputPlaceholder="Essay check results will appear here..."
    />
  );
}
