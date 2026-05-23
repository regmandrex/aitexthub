"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTResumeHumanizerTool() {
  return (
    <GenericTextProcessorTool
      toolType="humanizer"
      processText={(text) => callAiTool('resume_humanizer', text)}
      inputLabel="Resume Content"
      outputLabel="Humanized Resume"
      inputPlaceholder="Paste your resume content here..."
      outputPlaceholder="Humanized resume will appear here..."
      processButtonLabel="Humanize Resume"
    />
  );
}
