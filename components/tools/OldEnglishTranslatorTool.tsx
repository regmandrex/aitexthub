'use client';
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function OldEnglishTranslatorTool() {
  return (
    <GenericTextProcessorTool
      toolType="translator"
      processText={(text) => callAiTool('old_english_translator', text)}
      inputLabel="Modern English"
      outputLabel="Old English"
      inputPlaceholder="Enter text to translate to Old English..."
      outputPlaceholder="Old English translation will appear here..."
      processButtonLabel="Translate to Old English"
    />
  );
}