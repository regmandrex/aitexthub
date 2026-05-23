"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTOriginalityCheckerTool() {
  return (
    <GenericTextProcessorTool
      toolType="detector"
      processText={(text) => callAiTool('originality_checker', text)}
      inputLabel="Text to Check"
      outputLabel="Originality Report"
      inputPlaceholder="Paste text to check originality..."
      outputPlaceholder="Originality report will appear here..."
      processButtonLabel="Check Originality"
    />
  );
}
