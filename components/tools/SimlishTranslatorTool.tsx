'use client';
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function SimlishTranslatorTool() {
  return (
    <GenericTextProcessorTool
      toolType="translator"
      processText={(text) => callAiTool('simlish_translator', text)}
      inputLabel="Normal Text"
      outputLabel="Simlish"
      inputPlaceholder="Enter text to translate to Simlish..."
      outputPlaceholder="Simlish translation will appear here..."
      processButtonLabel="Translate to Simlish"
    />
  );
}