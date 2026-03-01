'use client';

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

export function CartineseTranslatorTool() {
  return (
    <GenericTextProcessorTool
      processText={(text) => (text.trim() ? `Cartinese (Playboi Carti style) — Connect an API to turn: "${text.trim().slice(0, 40)}..." into vamp/Carti-style text with ad-libs and signature styling.` : '')}
      inputLabel="Your text"
      outputLabel="Cartinese"
      inputPlaceholder="Enter text to convert to Playboi Carti style..."
      outputPlaceholder="Cartinese (Carti-style) result will appear here..."
      processButtonLabel="Translate to Cartinese"
      copyButtonLabel="Copy"
      clearButtonLabel="Clear"
    />
  );
}
