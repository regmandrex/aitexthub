'use client';
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function GibberishTranslatorTool() {
  return (
    <GenericTextProcessorTool
      toolType="translator"
      processText={(text) => callAiTool('gibberish_translator', text)}
      inputLabel="Normal Text"
      outputLabel="Gibberish"
      inputPlaceholder="Enter text to translate to gibberish..."
      outputPlaceholder="Gibberish translation will appear here..."
      processButtonLabel="Translate to Gibberish"
    />
  );
}