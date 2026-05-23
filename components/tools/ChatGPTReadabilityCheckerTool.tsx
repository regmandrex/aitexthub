"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTReadabilityCheckerTool() {
  return (
    <GenericTextProcessorTool
      toolType="checker"
      processText={(text) => callAiTool('readability', text)}
      inputLabel="Text to Analyze"
      outputLabel="Readability Report"
      inputPlaceholder="Paste text to analyze readability..."
      outputPlaceholder="Readability report will appear here..."
      processButtonLabel="Analyze Readability"
    />
  );
}
