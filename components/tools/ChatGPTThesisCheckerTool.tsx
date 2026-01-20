"use client";

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

export function ChatGPTThesisCheckerTool() {
  const processText = (text: string): string => {
    if (!text.trim()) {
      return '';
    }
    
    const words = text.trim().split(/\s+/).length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    
    return `Text Analysis:\n\n• Length: ${text.length} characters\n• Words: ${words}\n• Sentences: ${sentences}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nNote: This tool is currently in development. Thesis check results will appear here once API integration is complete.`;
  };

  return (
    <GenericTextProcessorTool
      processText={processText}
      inputLabel="Thesis to Check"
      outputLabel="Thesis Check Results"
      inputPlaceholder="Paste thesis statement to check..."
      outputPlaceholder="Thesis check results will appear here..."
    />
  );
}
