'use client';
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function NavajoTranslatorTool() {
  return (
    <GenericTextProcessorTool
      toolType="translator"
      processText={(text) => callAiTool('navajo_translator', text)}
      inputLabel="English Text"
      outputLabel="Navajo Translation"
      inputPlaceholder="Enter text to translate to Navajo..."
      outputPlaceholder="Navajo translation will appear here..."
      processButtonLabel="Translate to Navajo"
    />
  );
}