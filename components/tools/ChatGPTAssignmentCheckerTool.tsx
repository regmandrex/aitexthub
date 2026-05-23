"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTAssignmentCheckerTool() {
  return (
    <GenericTextProcessorTool
      toolType="checker"
      processText={(text) => callAiTool('assignment_checker', text)}
      inputLabel="Assignment to Review"
      outputLabel="Assignment Feedback"
      inputPlaceholder="Paste your assignment here..."
      outputPlaceholder="Assignment feedback will appear here..."
      processButtonLabel="Check Assignment"
    />
  );
}
