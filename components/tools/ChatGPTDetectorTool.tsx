"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTDetectorTool() {
  return (
    <GenericTextProcessorTool
      processText={(text) => callAiTool('detector', text)}
      inputLabel="Text to Analyze"
      outputLabel="Detection Results"
      inputPlaceholder="Paste your text here to check if it was AI-generated..."
      outputPlaceholder="AI detection results will appear here..."
      processButtonLabel="Detect AI"
    />
  );
}
