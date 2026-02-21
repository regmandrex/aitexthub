'use client';

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

export function GanglishTranslatorTool() {
  return (
    <GenericTextProcessorTool
      processText={(text) => (text.trim() ? `Ganglish translation — Connect an API to convert English into Ganglish (English–Punjabi blend) for: "${text.trim().slice(0, 40)}..."` : '')}
      inputLabel="English text"
      outputLabel="Ganglish"
      inputPlaceholder="Enter text to translate into Ganglish..."
      outputPlaceholder="Ganglish translation will appear here..."
      processButtonLabel="Translate to Ganglish"
      copyButtonLabel="Copy"
      clearButtonLabel="Clear"
    />
  );
}
