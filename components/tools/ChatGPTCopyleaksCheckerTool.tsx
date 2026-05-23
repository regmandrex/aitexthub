"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTCopyleaksCheckerTool() {
  return (
    <GenericTextProcessorTool
      toolType="detector"
      processText={(text) => callAiTool('copyleaks_checker', text)}
      inputLabel="Text to Analyze"
      outputLabel="Copyleaks Report"
      inputPlaceholder="Paste text to analyze with Copyleaks model..."
      outputPlaceholder="Copyleaks report will appear here..."
      processButtonLabel="Analyze with Copyleaks"
    />
  );
}
