"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTTurnitinCheckerTool() {
  return (
    <GenericTextProcessorTool
      toolType="detector"
      processText={(text) => callAiTool('turnitin_checker', text)}
      inputLabel="Text to Check"
      outputLabel="Turnitin Risk Report"
      inputPlaceholder="Paste text to check Turnitin risk..."
      outputPlaceholder="Turnitin risk report will appear here..."
      processButtonLabel="Check Turnitin Risk"
    />
  );
}
