"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTTitleTagGeneratorTool() {
  return (
    <GenericTextProcessorTool
      toolType="rewriter"
      processText={(text) => callAiTool('title_tag_generator', text)}
      inputLabel="Page Content"
      outputLabel="Generated Title Tags"
      inputPlaceholder="Paste your page content here..."
      outputPlaceholder="Title tags will appear here..."
      processButtonLabel="Generate Title Tags"
    />
  );
}
