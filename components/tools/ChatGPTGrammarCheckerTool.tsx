"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTGrammarCheckerTool() {
  return (
    <GenericTextProcessorTool
      processText={(text) => callAiTool('grammar', text)}
      inputLabel="Text to Check"
      outputLabel="Corrected Text"
      inputPlaceholder="Paste text to check for grammar errors..."
      outputPlaceholder="Grammar-corrected text will appear here..."
      processButtonLabel="Check Grammar"
    />
  );
}
