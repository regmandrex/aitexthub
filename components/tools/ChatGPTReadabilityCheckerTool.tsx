"use client";

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

export function ChatGPTReadabilityCheckerTool() {
  const processText = (text: string): string => {
    if (!text.trim()) {
      return '';
    }
    
    const words = text.trim().split(/\s+/).length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const avgWordsPerSentence = sentences > 0 ? (words / sentences).toFixed(1) : '0';
    
    return `Text Analysis:\n\n• Length: ${text.length} characters\n• Words: ${words}\n• Sentences: ${sentences}\n• Average words per sentence: ${avgWordsPerSentence}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nNote: This tool is currently in development. Full readability scores will appear here once API integration is complete.`;
  };

  return (
    <GenericTextProcessorTool
      processText={processText}
      inputLabel="Text to Analyze"
      outputLabel="Readability Analysis"
      inputPlaceholder="Paste text to analyze readability..."
      outputPlaceholder="Readability analysis will appear here..."
    />
  );
}
