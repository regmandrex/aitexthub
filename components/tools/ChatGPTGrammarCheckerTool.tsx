"use client";

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

export function ChatGPTGrammarCheckerTool() {
  const processText = (text: string): string => {
    if (!text.trim()) {
      return '';
    }
    
    const words = text.trim().split(/\s+/).length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const avgWordsPerSentence = sentences > 0 ? (words / sentences).toFixed(1) : '0';
    
    return `Text Analysis:\n\n• Length: ${text.length} characters\n• Words: ${words}\n• Sentences: ${sentences}\n• Average words per sentence: ${avgWordsPerSentence}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nNote: This tool is currently in development. Grammar check results will appear here once API integration is complete.`;
  };

  return (
    <GenericTextProcessorTool
      processText={processText}
      inputLabel="Text to Check"
      outputLabel="Grammar Check Results"
      inputPlaceholder="Paste text to check for grammar errors..."
      outputPlaceholder="Grammar check results will appear here..."
    />
  );
}
