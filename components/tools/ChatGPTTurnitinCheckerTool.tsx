"use client";

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

export function ChatGPTTurnitinCheckerTool() {
  const processText = (text: string): string => {
    if (!text.trim()) {
      return '';
    }
    
    const words = text.trim().split(/\s+/).length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    
    return `Text Analysis:\n\n• Length: ${text.length} characters\n• Words: ${words}\n• Sentences: ${sentences}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nNote: This tool is currently in development. Turnitin check results will appear here once API integration is complete.`;
  };

  return (
    <GenericTextProcessorTool
      processText={processText}
      inputLabel="Text to Check"
      outputLabel="Turnitin Check Results"
      inputPlaceholder="Paste text to check for Turnitin detection..."
      outputPlaceholder="Turnitin check results will appear here..."
    />
  );
}
