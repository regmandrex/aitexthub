'use client';
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function GanglishTranslatorTool() {
  return (
    <GenericTextProcessorTool
      toolType="translator"
      processText={(text) => callAiTool('ganglish_translator', text)}
      inputLabel="Normal Text"
      outputLabel="Ganglish"
      inputPlaceholder="Enter text to translate to Ganglish..."
      outputPlaceholder="Ganglish translation will appear here..."
      processButtonLabel="Translate to Ganglish"
    />
  );
}