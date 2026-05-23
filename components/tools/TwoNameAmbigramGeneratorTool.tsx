'use client';

import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function TwoNameAmbigramGeneratorTool() {
  return (
    <GenericTextProcessorTool
      processText={(text) => callAiTool('ambigram_generator', text)}
      inputLabel="Two names"
      outputLabel="Ambigram concept & design guide"
      inputPlaceholder="Enter two names separated by space (e.g. John Jane)..."
      outputPlaceholder="Ambigram design concept will appear here..."
      processButtonLabel="Generate ambigram"
      copyButtonLabel="Copy"
      clearButtonLabel="Clear"
    />
  );
}
