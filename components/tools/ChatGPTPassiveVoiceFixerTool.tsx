"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTPassiveVoiceFixerTool() {
  return (
    <GenericTextProcessorTool
      toolType="rewriter"
      processText={(text) => callAiTool('passive_voice_fixer', text)}
      inputLabel="Text with Passive Voice"
      outputLabel="Active Voice Text"
      inputPlaceholder="Paste text to fix passive voice..."
      outputPlaceholder="Active voice version will appear here..."
      processButtonLabel="Fix Passive Voice"
    />
  );
}
