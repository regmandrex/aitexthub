"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTLinkedInRewriterTool() {
  return (
    <GenericTextProcessorTool
      toolType="humanizer"
      processText={(text) => callAiTool('linkedin_rewriter', text)}
      inputLabel="LinkedIn Content"
      outputLabel="Improved LinkedIn Content"
      inputPlaceholder="Paste your LinkedIn profile content here..."
      outputPlaceholder="Improved content will appear here..."
      processButtonLabel="Improve LinkedIn"
    />
  );
}
