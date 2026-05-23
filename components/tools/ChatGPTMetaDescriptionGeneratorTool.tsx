"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTMetaDescriptionGeneratorTool() {
  return (
    <GenericTextProcessorTool
      toolType="rewriter"
      processText={(text) => callAiTool('meta_description_generator', text)}
      inputLabel="Page Content"
      outputLabel="Generated Meta Description"
      inputPlaceholder="Paste your page content here..."
      outputPlaceholder="Meta description will appear here..."
      processButtonLabel="Generate Meta Description"
    />
  );
}
