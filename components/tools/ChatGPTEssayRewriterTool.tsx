"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTEssayRewriterTool() {
  return (
    <GenericTextProcessorTool
      toolType="humanizer"
      processText={(text) => callAiTool('essay_rewriter', text)}
      inputLabel="Original Essay"
      outputLabel="Rewritten Essay"
      inputPlaceholder="Paste your essay here..."
      outputPlaceholder="Rewritten essay will appear here..."
      processButtonLabel="Rewrite Essay"
    />
  );
}
