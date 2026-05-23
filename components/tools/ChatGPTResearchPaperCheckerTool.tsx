"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTResearchPaperCheckerTool() {
  return (
    <GenericTextProcessorTool
      toolType="checker"
      processText={(text) => callAiTool('research_paper_checker', text)}
      inputLabel="Research Paper"
      outputLabel="Paper Review"
      inputPlaceholder="Paste your research paper here..."
      outputPlaceholder="Research paper review will appear here..."
      processButtonLabel="Check Research Paper"
    />
  );
}
