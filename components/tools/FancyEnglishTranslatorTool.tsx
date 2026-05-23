'use client';
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function FancyEnglishTranslatorTool() {
  return (
    <GenericTextProcessorTool
      toolType="translator"
      processText={(text) => callAiTool('fancy_english_translator', text)}
      inputLabel="Plain English"
      outputLabel="Fancy English"
      inputPlaceholder="Enter text to make fancy and sophisticated..."
      outputPlaceholder="Fancy translation will appear here..."
      processButtonLabel="Make it Fancy"
    />
  );
}