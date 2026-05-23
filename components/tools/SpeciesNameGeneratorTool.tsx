'use client';

import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function SpeciesNameGeneratorTool() {
  return (
    <GenericTextProcessorTool
      processText={(text) => callAiTool('species_name_generator', text)}
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
