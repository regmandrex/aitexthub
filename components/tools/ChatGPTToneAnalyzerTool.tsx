"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTToneAnalyzerTool() {
  return (
    <GenericTextProcessorTool
      toolType="analyzer"
      processText={(text) => callAiTool('tone_analyzer', text)}
      inputLabel="Text to Analyze"
      outputLabel="Tone Analysis"
      inputPlaceholder="Paste text to analyze tone..."
      outputPlaceholder="Tone analysis will appear here..."
      processButtonLabel="Analyze Tone"
    />
  );
}
