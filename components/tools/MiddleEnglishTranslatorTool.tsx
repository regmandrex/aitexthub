'use client';
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function MiddleEnglishTranslatorTool() {
  return (
    <GenericTextProcessorTool
      toolType="translator"
      processText={(text) => callAiTool('middle_english_translator', text)}
      inputLabel="Modern English"
      outputLabel="Middle English"
      inputPlaceholder="Enter text to translate to Middle English..."
      outputPlaceholder="Middle English translation will appear here..."
      processButtonLabel="Translate to Middle English"
    />
  );
}