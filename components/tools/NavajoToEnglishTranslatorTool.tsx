'use client';
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function NavajoToEnglishTranslatorTool() {
  return (
    <GenericTextProcessorTool
      toolType="translator"
      processText={(text) => callAiTool('navajo_to_english_translator', text)}
      inputLabel="Navajo Text"
      outputLabel="English Translation"
      inputPlaceholder="Enter Navajo (Diné bizaad) text to translate to English..."
      outputPlaceholder="English translation will appear here..."
      processButtonLabel="Translate to English"
    />
  );
}
