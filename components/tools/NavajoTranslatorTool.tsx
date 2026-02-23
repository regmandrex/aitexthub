'use client';

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

export function NavajoTranslatorTool() {
  return (
    <GenericTextProcessorTool
      processText={(text) => (text.trim() ? `English to Navajo — Translation for learning and respectful use. "${text.trim().slice(0, 50)}${text.trim().length > 50 ? '...' : ''}"` : '')}
      inputLabel="English"
      outputLabel="Navajo"
      inputPlaceholder="Enter English text for Navajo translation..."
      outputPlaceholder="Navajo translation will appear here..."
      processButtonLabel="Translate to Navajo"
      copyButtonLabel="Copy"
      clearButtonLabel="Clear"
    />
  );
}
