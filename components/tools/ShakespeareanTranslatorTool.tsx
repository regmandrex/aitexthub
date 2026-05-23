'use client';
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ShakespeareanTranslatorTool() {
  return (
    <GenericTextProcessorTool
      toolType="translator"
      processText={(text) => callAiTool('shakespearean_translator', text)}
      inputLabel="Modern English"
      outputLabel="Shakespearean English"
      inputPlaceholder="Enter text to translate into Shakespearean..."
      outputPlaceholder="Shakespearean translation will appear here..."
      processButtonLabel="Translate to Shakespearean"
    />
  );
}