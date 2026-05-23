"use client";
import { GenericTextProcessorTool } from './GenericTextProcessorTool';
import { callAiTool } from '@/lib/tools/aiToolApi';

export function ChatGPTBlogPostValidatorTool() {
  return (
    <GenericTextProcessorTool
      toolType="checker"
      processText={(text) => callAiTool('blog_post_validator', text)}
      inputLabel="Blog Post"
      outputLabel="Validation Report"
      inputPlaceholder="Paste your blog post here..."
      outputPlaceholder="Blog post validation report will appear here..."
      processButtonLabel="Validate Blog Post"
    />
  );
}
