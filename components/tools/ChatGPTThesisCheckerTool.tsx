"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTThesisCheckerTool() {
  return (
    <GenericTextProcessorTool
      toolType="checker"
      processText={(text) => callAiTool('thesis_checker', text)}
      inputLabel="Thesis Text"
      outputLabel="Thesis Review"
      inputPlaceholder="Paste your thesis here..."
      outputPlaceholder="Thesis review will appear here..."
      processButtonLabel="Check Thesis"
    />
  );
}
