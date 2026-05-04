'use client';

import { useState } from 'react';
import yaml from 'js-yaml';

export function YamlFormatterTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  function format() {
    setError(''); setOutput(''); setCopied(false);
    try {
      const parsed = yaml.load(input.trim());
      setOutput(yaml.dump(parsed, { indent: 2 }));
    } catch (e: unknown) {
      setError('Invalid YAML — ' + (e instanceof Error ? e.message : 'please check your input.'));
    }
  }

  function copy() {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">YAML input</label>
        <textarea value={input} onChange={e => setInput(e.target.value)} rows={8} placeholder="Paste YAML to format..." className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <button onClick={format} className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors">Format YAML</button>
      {error && <p className="text-sm text-red-600">{error}</p>}
      {output && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-slate-700">Formatted YAML</label>
            <button onClick={copy} className={`px-3 py-1 rounded text-xs font-medium transition-colors ${copied ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>{copied ? '✓ Copied!' : 'Copy'}</button>
          </div>
          <textarea readOnly value={output} rows={8} className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-mono resize-none" />
        </div>
      )}
    </div>
  );
}
