"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTHumanizerTool() {
  return (
    <GenericTextProcessorTool
      processText={(text) => callAiTool('humanizer', text)}
      inputLabel="AI-Generated Text"
      outputLabel="Humanized Text"
      inputPlaceholder="Paste ChatGPT-generated text here..."
      outputPlaceholder="Humanized text will appear here..."
      processButtonLabel="Humanize Text"
    />
  );
}
