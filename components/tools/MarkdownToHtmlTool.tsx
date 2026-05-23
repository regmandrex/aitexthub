'use client';

import { useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';
import { marked } from 'marked';

export function MarkdownToHtmlTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [preview, setPreview] = useState(false);
  const [copied, setCopied] = useState(false);

  function convert() {
    const html = marked.parse(input) as string;
    setOutput(html);
    setCopied(false);
  }

  function copy() {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Markdown input</label>
        <textarea value={input} onChange={e => setInput(e.target.value)} rows={8} placeholder="# Heading&#10;&#10;**Bold text** and *italic text*&#10;&#10;- List item" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <button onClick={convert} className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors">Convert to HTML</button>
      {output && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-slate-700">HTML output</label>
              <button onClick={() => setPreview(p => !p)} className="text-xs text-blue-600 hover:underline">{preview ? 'Show HTML' : 'Preview'}</button>
            </div>
            <button onClick={copy} className={`px-3 py-1 rounded text-xs font-medium transition-colors ${copied ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>{copied ? '✓ Copied!' : 'Copy HTML'}</button>
          </div>
          {preview
            ? <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: output }} />
            : <textarea readOnly value={output} rows={8} className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-mono resize-none" />
          }
        </div>
      )}
      {output && <HumanizerUpsellCard />}
    </div>
  );
}