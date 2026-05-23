'use client';
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function CartineseTranslatorTool() {
  return (
    <GenericTextProcessorTool
      toolType="translator"
      processText={(text) => callAiTool('cartinese_translator', text)}
      inputLabel="Normal Text"
      outputLabel="Cartinese"
      inputPlaceholder="Enter text to translate to Cartinese..."
      outputPlaceholder="Cartinese translation will appear here..."
      processButtonLabel="Translate to Cartinese"
    />
  );
}