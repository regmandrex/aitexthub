'use client';

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

export function SpeciesNameGeneratorTool() {
  return (
    <GenericTextProcessorTool
      processText={(text) => (text.trim() ? `Species name ideas based on: "${text.trim().slice(0, 50)}..." — Connect a generator to create scientific-style binomial names (e.g. Genus species).` : '')}
      inputLabel="Keywords or description"
      outputLabel="Species names"
      inputPlaceholder="e.g. dragon, blue, fire..."
      outputPlaceholder="Generated species names will appear here..."
      processButtonLabel="Generate species names"
      copyButtonLabel="Copy"
      clearButtonLabel="Clear"
    />
  );
}
