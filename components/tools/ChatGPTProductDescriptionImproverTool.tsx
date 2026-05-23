"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTProductDescriptionImproverTool() {
  return (
    <GenericTextProcessorTool
      toolType="rewriter"
      processText={(text) => callAiTool('product_description_improver', text)}
      inputLabel="Product Description"
      outputLabel="Improved Description"
      inputPlaceholder="Paste your product description here..."
      outputPlaceholder="Improved description will appear here..."
      processButtonLabel="Improve Description"
    />
  );
}
