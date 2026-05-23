"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTParaphraserTool() {
  return (
    <GenericTextProcessorTool
      toolType="rewriter"
      processText={(text) => callAiTool('paraphraser', text)}
      inputLabel="Original Text"
      outputLabel="Paraphrased Text"
      inputPlaceholder="Paste text to paraphrase..."
      outputPlaceholder="Paraphrased text will appear here..."
      processButtonLabel="Paraphrase"
    />
  );
}
