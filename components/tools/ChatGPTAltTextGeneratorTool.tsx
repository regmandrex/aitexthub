"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTAltTextGeneratorTool() {
  return (
    <GenericTextProcessorTool
      toolType="rewriter"
      processText={(text) => callAiTool('alt_text_generator', text)}
      inputLabel="Image Description"
      outputLabel="Generated Alt Text"
      inputPlaceholder="Describe your image here..."
      outputPlaceholder="Alt text options will appear here..."
      processButtonLabel="Generate Alt Text"
    />
  );
}
