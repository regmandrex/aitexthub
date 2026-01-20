"use client";

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

export function ChatGPTToneAnalyzerTool() {
  const processText = (text: string): string => {
    if (!text.trim()) {
      return '';
    }
    
    const words = text.trim().split(/\s+/).length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    
    return `Text Analysis:\n\n• Length: ${text.length} characters\n• Words: ${words}\n• Sentences: ${sentences}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nNote: This tool is currently in development. Tone analysis results will appear here once API integration is complete.`;
  };

  return (
    <GenericTextProcessorTool
      processText={processText}
      inputLabel="Text to Analyze"
      outputLabel="Tone Analysis"
      inputPlaceholder="Paste text to analyze tone..."
      outputPlaceholder="Tone analysis will appear here..."
    />
  );
}
