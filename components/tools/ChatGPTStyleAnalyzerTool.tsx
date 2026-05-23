"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTStyleAnalyzerTool() {
  return (
    <GenericTextProcessorTool
      toolType="analyzer"
      processText={(text) => callAiTool('style_analyzer', text)}
      inputLabel="Text to Analyze"
      outputLabel="Style Analysis"
      inputPlaceholder="Paste text to analyze writing style..."
      outputPlaceholder="Style analysis will appear here..."
      processButtonLabel="Analyze Style"
    />
  );
}
