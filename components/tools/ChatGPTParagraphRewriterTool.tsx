"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTParagraphRewriterTool() {
  return (
    <GenericTextProcessorTool
      toolType="rewriter"
      processText={(text) => callAiTool('paragraph_rewriter', text)}
      inputLabel="Original Text"
      outputLabel="Rewritten Text"
      inputPlaceholder="Paste text to rewrite paragraphs..."
      outputPlaceholder="Rewritten text will appear here..."
      processButtonLabel="Rewrite Paragraphs"
    />
  );
}
