"use client";

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

export function ChatGPTPassiveVoiceFixerTool() {
  const processText = (text: string): string => {
    if (!text.trim()) {
      return '';
    }
    
    const words = text.trim().split(/\s+/).length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    
    return `Text Analysis:\n\n• Length: ${text.length} characters\n• Words: ${words}\n• Sentences: ${sentences}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nNote: This tool is currently in development. Active voice version will appear here once NLP processing is integrated.`;
  };

  return (
    <GenericTextProcessorTool
      processText={processText}
      inputLabel="Text with Passive Voice"
      outputLabel="Active Voice Text"
      inputPlaceholder="Paste text with passive voice..."
      outputPlaceholder="Active voice text will appear here..."
    />
  );
}
