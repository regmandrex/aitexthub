'use client';

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

export function CartineseTranslatorTool() {
  return (
    <GenericTextProcessorTool
      processText={(text) => (text.trim() ? `Cartinese (cartoon speech) — Connect an API to turn: "${text.trim().slice(0, 40)}..." into exaggerated cartoon-style dialogue.` : '')}
      inputLabel="Your text"
      outputLabel="Cartinese"
      inputPlaceholder="Enter text to convert to cartoon-style speech..."
      outputPlaceholder="Cartinese version will appear here..."
      processButtonLabel="Translate to Cartinese"
      copyButtonLabel="Copy"
      clearButtonLabel="Clear"
    />
  );
}
