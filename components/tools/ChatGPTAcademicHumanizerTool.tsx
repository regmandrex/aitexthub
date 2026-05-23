"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTAcademicHumanizerTool() {
  return (
    <GenericTextProcessorTool
      toolType="humanizer"
      processText={(text) => callAiTool('academic_humanizer', text)}
      inputLabel="Academic Text"
      outputLabel="Humanized Academic Text"
      inputPlaceholder="Paste academic text here..."
      outputPlaceholder="Humanized academic text will appear here..."
      processButtonLabel="Humanize Academic Text"
    />
  );
}
