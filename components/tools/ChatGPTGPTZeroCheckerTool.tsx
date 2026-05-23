"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTGPTZeroCheckerTool() {
  return (
    <GenericTextProcessorTool
      toolType="detector"
      processText={(text) => callAiTool('gptzero_checker', text)}
      inputLabel="Text to Analyze"
      outputLabel="GPTZero Analysis"
      inputPlaceholder="Paste text to analyze with GPTZero model..."
      outputPlaceholder="GPTZero analysis will appear here..."
      processButtonLabel="Analyze with GPTZero"
    />
  );
}
