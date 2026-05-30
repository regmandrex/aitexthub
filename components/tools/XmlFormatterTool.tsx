"use client";

import { useState } from 'react';

type Mode = 'format' | 'minify' | 'validate';

function formatXml(xml: string, indent: number): string {
  const trimmed = xml.replace(/>\s+</g, '><').replace(/^\s+|\s+$/g, '');
  let out = '';
  let pad = 0;
  const pad1 = ' '.repeat(indent);
  const parts = trimmed.replace(/(>)(<)(\/*)/g, '$1\n$2$3').split('\n');

  for (const raw of parts) {
    const node = raw.trim();
    if (!node) continue;
    let dec = 0;
    let inc = 0;

    if (/^<\?xml/i.test(node)) {
      // XML declaration: no indent change
    } else if (/^<!--/.test(node) && /-->$/.test(node)) {
      // single-line comment: no indent change
    } else if (/^<!\[CDATA\[/.test(node)) {
      // CDATA: no indent change
    } else if (/^<\/[^>]+>$/.test(node)) {
      dec = 1;
    } else if (/^<[^!?][^>]*[^/]>$/.test(node) && !/<\/[^>]+>$/.test(node)) {
      inc = 1;
    }

    pad -= dec;
    if (pad < 0) pad = 0;
    out += pad1.repeat(pad) + node + '\n';
    pad += inc;
  }

  return out.trim();
}

function minifyXml(xml: string): string {
  return xml
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/>\s+</g, '><')
    .replace(/\s+/g, ' ')
    .replace(/\s*([<>])\s*/g, '$1')
    .trim();
}

function validateXml(xml: string): { ok: boolean; error?: string; line?: number; column?: number } {
  if (typeof window === 'undefined') return { ok: false, error: 'DOMParser not available.' };
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, 'application/xml');
    const errorNode = doc.querySelector('parsererror');
    if (errorNode) {
      const message = errorNode.textContent ?? 'Unknown parse error.';
      const lineMatch = message.match(/line\s+(\d+)/i);
      const colMatch = message.match(/column\s+(\d+)/i);
      return {
        ok: false,
        error: message.replace(/\n+/g, ' ').trim(),
        line: lineMatch ? Number(lineMatch[1]) : undefined,
        column: colMatch ? Number(colMatch[1]) : undefined,
      };
    }
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Failed to parse XML.' };
  }
}

export function XmlFormatterTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<Mode>('format');
  const [indent, setIndent] = useState(2);
  const [status, setStatus] = useState<{ type: 'ok' | 'error' | 'info'; message: string } | null>(null);
  const [copied, setCopied] = useState(false);

  const run = (selectedMode: Mode) => {
    setMode(selectedMode);
    setCopied(false);
    if (!input.trim()) {
      setOutput('');
      setStatus({ type: 'info', message: 'Paste XML above to begin.' });
      return;
    }

    const validation = validateXml(input);

    if (selectedMode === 'validate') {
      if (validation.ok) {
        setOutput(input);
        setStatus({ type: 'ok', message: 'Valid: XML is well-formed.' });
      } else {
        setOutput('');
        const loc = validation.line ? ` (line ${validation.line}${validation.column ? `, column ${validation.column}` : ''})` : '';
        setStatus({ type: 'error', message: `Invalid XML${loc}: ${validation.error}` });
      }
      return;
    }

    if (!validation.ok) {
      setOutput('');
      const loc = validation.line ? ` (line ${validation.line}${validation.column ? `, column ${validation.column}` : ''})` : '';
      setStatus({ type: 'error', message: `Cannot ${selectedMode}: XML is not well-formed${loc}. ${validation.error}` });
      return;
    }

    try {
      const result = selectedMode === 'format' ? formatXml(input, indent) : minifyXml(input);
      setOutput(result);
      setStatus({
        type: 'ok',
        message: selectedMode === 'format'
          ? `Formatted with ${indent}-space indentation.`
          : `Minified: ${result.length} characters (saved ${Math.max(0, input.length - result.length)}).`,
      });
    } catch (e) {
      setStatus({ type: 'error', message: e instanceof Error ? e.message : 'Operation failed.' });
    }
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setStatus(null);
    setCopied(false);
  };

  const handleSample = () => {
    setInput(`<?xml version="1.0" encoding="UTF-8"?>
<bookstore><book id="1"><title lang="en">Learning XML</title><author>Erik T. Ray</author><year>2003</year><price>39.99</price></book><book id="2"><title lang="en">XML Pocket Reference</title><author>Simon St. Laurent</author><year>2005</year><price>14.95</price></book></bookstore>`);
    setOutput('');
    setStatus(null);
  };

  const statusColor =
    status?.type === 'ok' ? 'text-emerald-700 bg-emerald-50 border-emerald-200' :
    status?.type === 'error' ? 'text-red-700 bg-red-50 border-red-200' :
    'text-slate-600 bg-slate-50 border-slate-200';

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => run('format')}
          className={`px-4 py-2 text-sm font-medium rounded-xl transition ${mode === 'format' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'}`}
        >
          Format / Beautify
        </button>
        <button
          type="button"
          onClick={() => run('minify')}
          className={`px-4 py-2 text-sm font-medium rounded-xl transition ${mode === 'minify' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'}`}
        >
          Minify
        </button>
        <button
          type="button"
          onClick={() => run('validate')}
          className={`px-4 py-2 text-sm font-medium rounded-xl transition ${mode === 'validate' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'}`}
        >
          Validate
        </button>

        <div className="ml-auto flex items-center gap-2">
          <label className="text-xs text-slate-500">Indent:</label>
          <select
            value={indent}
            onChange={(e) => setIndent(Number(e.target.value))}
            className="px-2 py-1 text-sm rounded-lg border border-slate-200 bg-white"
          >
            <option value={2}>2 spaces</option>
            <option value={4}>4 spaces</option>
          </select>
          <button
            type="button"
            onClick={handleSample}
            className="px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600"
          >
            Sample
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col">
          <label className="text-xs font-medium text-slate-500 mb-1">Input XML</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='<?xml version="1.0"?><root><child>value</child></root>'
            rows={14}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-mono text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-1">
            <label className="text-xs font-medium text-slate-500">Output</label>
            {output && (
              <button
                type="button"
                onClick={handleCopy}
                className="text-xs px-2 py-0.5 rounded border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            )}
          </div>
          <textarea
            value={output}
            readOnly
            placeholder="Result appears here..."
            rows={14}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-mono text-slate-900 shadow-sm focus:outline-none"
          />
        </div>
      </div>

      {status && (
        <p className={`text-sm rounded-lg px-3 py-2 border ${statusColor}`}>
          {status.message}
        </p>
      )}

      <p className="text-xs text-slate-500">
        All processing happens in your browser — your XML never leaves your device. Uses the native DOMParser for validation.
      </p>
    </div>
  );
}
