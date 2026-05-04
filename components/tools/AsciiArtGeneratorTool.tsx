'use client';

import { useState } from 'react';
import figlet from 'figlet';

const fonts = ['Standard', 'Big', 'Block', 'Banner', 'Doom', 'Slant', 'Small', 'Mini', 'Digital', 'Bubble'];

export function AsciiArtGeneratorTool() {
  const [input, setInput] = useState('');
  const [font, setFont] = useState('Standard');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  function generate() {
    setError(''); setOutput(''); setCopied(false);
    if (!input.trim()) return;
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result = figlet.textSync(input, { font: font as any });
      setOutput(result);
    } catch (e: unknown) {
      setError('Could not generate ASCII art. Try a different font or shorter text.');
    }
  }

  function copy() {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="flex-1">
          <label className="block text-sm font-medium text-slate-700 mb-1">Text</label>
          <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && generate()} placeholder="Hello World" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Font</label>
          <select value={font} onChange={e => setFont(e.target.value)} className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            {fonts.map(f => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>
      </div>
      <button onClick={generate} className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors">Generate</button>
      {error && <p className="text-sm text-red-600">{error}</p>}
      {output && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-slate-700">ASCII art</label>
            <button onClick={copy} className={`px-3 py-1 rounded text-xs font-medium transition-colors ${copied ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>{copied ? '✓ Copied!' : 'Copy'}</button>
          </div>
          <pre className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-mono overflow-x-auto whitespace-pre">{output}</pre>
        </div>
      )}
    </div>
  );
}
