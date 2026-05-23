"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

function formatXml(xml: string, indent: number): string {
  const INDENT = ' '.repeat(indent);
  let depth = 0;
  const result: string[] = [];
  const tokens = xml.replace(/>\s*</g, '><').split(/(?<=>)(?=<)|(?<=<[^>]*>)(?!<)/g);
  for (const raw of tokens) {
    const token = raw.trim();
    if (!token) continue;
    if (token.startsWith('</')) {
      depth = Math.max(0, depth - 1);
      result.push(INDENT.repeat(depth) + token);
    } else if (token.startsWith('<') && !token.startsWith('<?') && !token.startsWith('<!') && !token.endsWith('/>') && !/<[^>]+>.*<\/[^>]+>/.test(token)) {
      result.push(INDENT.repeat(depth) + token);
      depth++;
    } else {
      result.push(INDENT.repeat(depth) + token);
    }
  }
  return result.join('\n');
}

export function XmlFormatterTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [indent, setIndent] = useState(2);
  const [copied, setCopied] = useState(false);

  const format = () => {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(input.trim(), 'application/xml');
      const parseErr = doc.querySelector('parsererror');
      if (parseErr) throw new Error(parseErr.textContent ?? 'Invalid XML');
      const serializer = new XMLSerializer();
      const raw = serializer.serializeToString(doc);
      setOutput(formatXml(raw, indent));
      setError('');
    } catch (e) {
      setError((e as Error).message);
      setOutput('');
    }
  };

  const minify = () => {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(input.trim(), 'application/xml');
      if (doc.querySelector('parsererror')) throw new Error('Invalid XML');
      setOutput(new XMLSerializer().serializeToString(doc).replace(/>\s+</g,'><'));
      setError('');
    } catch (e) {
      setError((e as Error).message);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 text-sm">
        <label className="font-medium text-slate-700">Indent size:</label>
        {[2, 4].map(n => (
          <button key={n} onClick={() => setIndent(n)}
            className={`px-3 py-1 rounded-lg border text-sm transition ${indent === n ? 'bg-blue-600 text-white border-blue-600' : 'border-slate-200 bg-white hover:bg-slate-50'}`}>
            {n} spaces
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextArea label="XML Input" value={input} onChange={setInput} placeholder={'<root>\n  <item id="1">Hello</item>\n</root>'} rows={14} />
        <ToolTextArea label="Formatted XML" value={output} onChange={() => {}} readOnly rows={14} />
      </div>

      {error && <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{error}</p>}

      <div className="flex gap-2 flex-wrap">
        <button onClick={format} className="px-4 py-2 text-sm font-medium rounded-xl bg-blue-600 text-white hover:bg-blue-700">Format XML</button>
        <button onClick={minify} className="px-4 py-2 text-sm font-medium rounded-xl border border-slate-200 bg-white hover:bg-slate-50">Minify</button>
        <button onClick={() => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500); }} disabled={!output}
          className="px-4 py-2 text-sm font-medium rounded-xl border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40">
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      {output && <HumanizerUpsellCard />}
    </div>
  );
}