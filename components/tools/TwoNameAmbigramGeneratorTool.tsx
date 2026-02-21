'use client';

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

export function TwoNameAmbigramGeneratorTool() {
  return (
    <GenericTextProcessorTool
      processText={(text) => {
        const parts = text.trim().split(/\s+/).filter(Boolean);
        if (parts.length < 2) return 'Enter two names (e.g. "John" and "Jane") to generate a two-name ambigram. Connect a design API for visual ambigram output.';
        return `Ambigram concept for "${parts[0]}" and "${parts[1]}" — Connect a design or font API to generate a two-name ambigram (readable as both names when rotated or reflected).`;
      }}
      inputLabel="Two names"
      outputLabel="Ambigram idea / instructions"
      inputPlaceholder="Enter two names separated by space (e.g. John Jane)..."
      outputPlaceholder="Ambigram design instructions or preview will appear here..."
      processButtonLabel="Generate ambigram"
      copyButtonLabel="Copy"
      clearButtonLabel="Clear"
    />
  );
}
