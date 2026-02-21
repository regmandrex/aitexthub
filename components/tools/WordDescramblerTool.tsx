'use client';

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

export function WordDescramblerTool() {
  return (
    <GenericTextProcessorTool
      processText={(text) => {
        const letters = text.replace(/\s/g, '').toLowerCase();
        if (!letters) return '';
        return `Enter your scrambled letters above and click Descramble. Results will show all valid words that can be formed from: ${letters.split('').sort().join(', ')}. Connect a word list or API to display unscrambled words.`;
      }}
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
