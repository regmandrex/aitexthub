"use client";

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

export function ChatGPTOriginalityCheckerTool() {
  const processText = (text: string): string => {
    if (!text.trim()) {
      return '';
    }
    
    const words = text.trim().split(/\s+/).length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    
    return `Text Analysis:\n\n• Length: ${text.length} characters\n• Words: ${words}\n• Sentences: ${sentences}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nNote: This tool is currently in development. Originality check results will appear here once API integration is complete.`;
  };

  return (
    <GenericTextProcessorTool
      processText={processText}
      inputLabel="Text to Check"
      outputLabel="Originality Check Results"
      inputPlaceholder="Paste text to check originality..."
      outputPlaceholder="Originality check results will appear here..."
    />
  );
}
