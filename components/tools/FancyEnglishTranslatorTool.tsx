'use client';

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

export function FancyEnglishTranslatorTool() {
  return (
    <GenericTextProcessorTool
      processText={(text) => (text.trim() ? `Fancy English translation for: "${text.trim().slice(0, 50)}${text.trim().length > 50 ? '...' : ''}" — Connect a style API to generate elegant or ornate English.` : '')}
      inputLabel="Your text"
      outputLabel="Fancy English"
      inputPlaceholder="Type or paste text to translate into fancy, stylish English..."
      outputPlaceholder="Fancy text will appear here..."
      processButtonLabel="Translate to Fancy English"
      copyButtonLabel="Copy"
      clearButtonLabel="Clear"
    />
  );
}
