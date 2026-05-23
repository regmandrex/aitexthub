'use client';
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function MedievalTranslatorTool() {
  return (
    <GenericTextProcessorTool
      toolType="translator"
      processText={(text) => callAiTool('medieval_translator', text)}
      inputLabel="Modern English"
      outputLabel="Medieval English"
      inputPlaceholder="Enter text to translate to medieval English..."
      outputPlaceholder="Medieval translation will appear here..."
      processButtonLabel="Translate to Medieval"
    />
  );
}