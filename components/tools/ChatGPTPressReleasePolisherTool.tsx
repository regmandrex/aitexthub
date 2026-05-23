"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTPressReleasePolisherTool() {
  return (
    <GenericTextProcessorTool
      toolType="rewriter"
      processText={(text) => callAiTool('press_release_polisher', text)}
      inputLabel="Press Release"
      outputLabel="Polished Press Release"
      inputPlaceholder="Paste your press release here..."
      outputPlaceholder="Polished press release will appear here..."
      processButtonLabel="Polish Press Release"
    />
  );
}
