'use client';

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

export function MedievalTranslatorTool() {
  return (
    <GenericTextProcessorTool
      processText={(text) => (text.trim() ? `Medieval / Middle English style translation — Enter text to convert to medieval or Middle English style. "${text.trim().slice(0, 50)}${text.trim().length > 50 ? '...' : ''}"` : '')}
      inputLabel="Modern English"
      outputLabel="Medieval / Middle English style"
      inputPlaceholder="Enter text to translate to medieval or Middle English..."
      outputPlaceholder="Medieval translation will appear here..."
      processButtonLabel="Translate to Medieval"
      copyButtonLabel="Copy"
      clearButtonLabel="Clear"
    />
  );
}
