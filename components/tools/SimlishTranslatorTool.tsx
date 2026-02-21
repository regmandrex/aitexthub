'use client';

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

export function SimlishTranslatorTool() {
  return (
    <GenericTextProcessorTool
      processText={(text) => (text.trim() ? `Simlish translation — Connect a Simlish phrase API to convert: "${text.trim().slice(0, 40)}..." into The Sims-style language.` : '')}
      inputLabel="English (or your text)"
      outputLabel="Simlish"
      inputPlaceholder="Enter text to translate into Simlish..."
      outputPlaceholder="Simlish translation will appear here..."
      processButtonLabel="Translate to Simlish"
      copyButtonLabel="Copy"
      clearButtonLabel="Clear"
    />
  );
}
