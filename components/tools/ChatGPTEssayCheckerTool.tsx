"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTEssayCheckerTool() {
  return (
    <GenericTextProcessorTool
      toolType="checker"
      processText={(text) => callAiTool('essay_checker', text)}
      inputLabel="Essay to Review"
      outputLabel="Essay Feedback"
      inputPlaceholder="Paste your essay here..."
      outputPlaceholder="Essay feedback will appear here..."
      processButtonLabel="Check Essay"
    />
  );
}
