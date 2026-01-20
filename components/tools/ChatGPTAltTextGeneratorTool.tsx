"use client";

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

export function ChatGPTAltTextGeneratorTool() {
  const processText = (text: string): string => {
    if (!text.trim()) {
      return '';
    }
    
    const words = text.trim().split(/\s+/).length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    
    return `Text Analysis:\n\n• Length: ${text.length} characters\n• Words: ${words}\n• Sentences: ${sentences}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nNote: This tool is currently in development. Accessible alt text will appear here once API integration is complete.`;
  };

  return (
    <GenericTextProcessorTool
      processText={processText}
      inputLabel="Image Description"
      outputLabel="Generated Alt Text"
      inputPlaceholder="Paste image description to generate alt text..."
      outputPlaceholder="Alt text will appear here..."
    />
  );
}
