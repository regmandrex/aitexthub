"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTCoverLetterHumanizerTool() {
  return (
    <GenericTextProcessorTool
      toolType="humanizer"
      processText={(text) => callAiTool('cover_letter_humanizer', text)}
      inputLabel="Cover Letter"
      outputLabel="Humanized Cover Letter"
      inputPlaceholder="Paste your cover letter here..."
      outputPlaceholder="Humanized cover letter will appear here..."
      processButtonLabel="Humanize Cover Letter"
    />
  );
}
