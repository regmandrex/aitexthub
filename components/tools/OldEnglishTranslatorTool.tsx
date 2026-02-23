'use client';

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

export function OldEnglishTranslatorTool() {
  return (
    <GenericTextProcessorTool
      processText={(text) => (text.trim() ? `Old English / Anglo-Saxon style — Translate to Anglo Saxon. "${text.trim().slice(0, 50)}${text.trim().length > 50 ? '...' : ''}"` : '')}
      inputLabel="Modern English"
      outputLabel="Old English / Anglo-Saxon style"
      inputPlaceholder="Enter text to translate to Old English (Anglo-Saxon)..."
      outputPlaceholder="Old English translation will appear here..."
      processButtonLabel="Translate to Anglo Saxon"
      copyButtonLabel="Copy"
      clearButtonLabel="Clear"
    />
  );
}
