'use client';

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

export function MiddleEnglishTranslatorTool() {
  return (
    <GenericTextProcessorTool
      processText={(text) => (text.trim() ? `Middle English style — Convert modern text to Middle English (Chaucer-style). "${text.trim().slice(0, 50)}${text.trim().length > 50 ? '...' : ''}"` : '')}
      inputLabel="Modern English"
      outputLabel="Middle English style"
      inputPlaceholder="Enter text for Middle English converter..."
      outputPlaceholder="Middle English translation will appear here..."
      processButtonLabel="Convert to Middle English"
      copyButtonLabel="Copy"
      clearButtonLabel="Clear"
    />
  );
}
