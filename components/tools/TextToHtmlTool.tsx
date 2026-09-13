"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

function textToHtml(text: string, opts: { wrapP: boolean; br: boolean; escape: boolean; wrapper: boolean; nbsp: boolean; links: boolean }): string {
  let out = text;
  if (opts.escape) {
    out = out.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  if (opts.nbsp) {
    out = out.replace(/ {2,}/g, m => '&nbsp;'.repeat(m.length));
  }
  if (opts.links) {
    out = out.replace(/(https?:\/\/[^\s<>"]+)/g, '<a href="$1">$1</a>');
  }
  if (opts.wrapP) {
    const paras = out.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
    if (opts.br) {
      out = paras.map(p => `<p>${p.replace(/\n/g,'<br>\n')}</p>`).join('\n\n');
    } else {
      out = paras.map(p => `<p>${p}</p>`).join('\n\n');
    }
  } else if (opts.br) {
    out = out.replace(/\n/g,'<br>\n');
  }
  if (opts.wrapper) {
    out = `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Document</title>\n</head>\n<body>\n${out}\n</body>\n</html>`;
  }
  return out;
}

export function TextToHtmlTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [copied, setCopied] = useState(false);
  const [opts, setOpts] = useState({ wrapP: true, br: true, escape: true, wrapper: false, nbsp: false, links: true });

  const toggle = (k: keyof typeof opts) => setOpts(o => ({ ...o, [k]: !o[k] }));

  const convert = () => setOutput(textToHtml(input, opts));

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {[
          { key: 'wrapP', label: 'Wrap in <p> tags' },
          { key: 'br', label: 'Convert line breaks to <br>' },
          { key: 'escape', label: 'Escape HTML entities' },
          { key: 'links', label: 'Convert URLs to <a> links' },
          { key: 'nbsp', label: 'Preserve extra spaces (&nbsp;)' },
          { key: 'wrapper', label: 'Add <html><body> wrapper' },
        ].map(({ key, label }) => (
          <label key={key} className="flex items-center gap-2 cursor-pointer text-sm">
            <input type="checkbox" checked={opts[key as keyof typeof opts]} onChange={() => toggle(key as keyof typeof opts)} className="rounded" />
            <span className="text-slate-700">{label}</span>
          </label>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextArea label="Plain Text Input" value={input} onChange={setInput} placeholder={"Hello World\n\nThis is a paragraph.\nWith a line break."} rows={12} />
        <ToolTextArea label="HTML Output" value={output} onChange={() => {}} readOnly rows={12} />
      </div>

      <div className="flex gap-2 flex-wrap">
        <button onClick={convert} className="px-4 py-2 text-sm font-medium rounded-xl bg-blue-600 text-white hover:bg-blue-700">Convert to HTML</button>
        <button onClick={() => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500); }} disabled={!output}
          className="px-4 py-2 text-sm font-medium rounded-xl border-3 border-black bg-white hover:bg-slate-50 disabled:opacity-40">
          {copied ? 'Copied!' : 'Copy HTML'}
        </button>
        <button onClick={() => setShowPreview(!showPreview)} disabled={!output}
          className="px-4 py-2 text-sm font-medium rounded-xl border-3 border-black bg-white hover:bg-slate-50 disabled:opacity-40">
          {showPreview ? 'Hide Preview' : 'Preview HTML'}
        </button>
      </div>

      {showPreview && output && (
        <div className="rounded-xl border-3 border-black bg-white p-4">
          <p className="text-xs text-slate-500 mb-2">HTML Preview:</p>
          <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: output }} />
        </div>
      )}
      {output && <HumanizerUpsellCard />}
    </div>
  );
}