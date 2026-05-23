"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTEmailHumanizerTool() {
  return (
    <GenericTextProcessorTool
      toolType="humanizer"
      processText={(text) => callAiTool('email_humanizer', text)}
      inputLabel="Email Text"
      outputLabel="Humanized Email"
      inputPlaceholder="Paste your email here..."
      outputPlaceholder="Humanized email will appear here..."
      processButtonLabel="Humanize Email"
    />
  );
}
