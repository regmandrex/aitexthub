"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTSentenceRewriterTool() {
  return (
    <GenericTextProcessorTool
      toolType="rewriter"
      processText={(text) => callAiTool('sentence_rewriter', text)}
      inputLabel="Original Text"
      outputLabel="Rewritten Text"
      inputPlaceholder="Paste text to rewrite sentences..."
      outputPlaceholder="Rewritten text will appear here..."
      processButtonLabel="Rewrite Sentences"
    />
  );
}
