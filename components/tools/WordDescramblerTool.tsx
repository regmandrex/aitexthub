'use client';

import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function WordDescramblerTool() {
  return (
    <GenericTextProcessorTool
      processText={(text) => callAiTool('word_descrambler', text)}
      inputLabel="Scrambled letters"
      outputLabel="Unscrambled words"
      inputPlaceholder="Enter jumbled letters (e.g. ETILSB)..."
      outputPlaceholder="Possible words will appear here..."
      processButtonLabel="Descramble"
      copyButtonLabel="Copy results"
      clearButtonLabel="Clear"
    />
  );
}
