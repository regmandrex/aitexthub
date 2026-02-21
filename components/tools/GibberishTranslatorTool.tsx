'use client';

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

export function GibberishTranslatorTool() {
  return (
    <GenericTextProcessorTool
      processText={(text) => (text.trim() ? `Gibberish encode/decode — Connect an API to encode: "${text.trim().slice(0, 40)}..." into Gibberish or decode Gibberish back to English.` : '')}
      inputLabel="Text to encode or decode"
      outputLabel="Result"
      inputPlaceholder="Enter English or Gibberish..."
      outputPlaceholder="Encoded or decoded text will appear here..."
      processButtonLabel="Translate"
      copyButtonLabel="Copy"
      clearButtonLabel="Clear"
    />
  );
}
