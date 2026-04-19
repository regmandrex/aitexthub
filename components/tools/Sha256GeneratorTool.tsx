"use client";

import { useState } from 'react';

async function hashText(text: string, algo: string): Promise<string> {
  const buf = new TextEncoder().encode(text);
  const hashBuf = await crypto.subtle.digest(algo, buf);
  return Array.from(new Uint8Array(hashBuf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

export function Sha256GeneratorTool() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const generate = async () => {
    if (!input) return;
    setLoading(true);
    const [sha1, sha256, sha512] = await Promise.all([
      hashText(input, 'SHA-1'),
      hashText(input, 'SHA-256'),
      hashText(input, 'SHA-512'),
    ]);
    setResults({ 'SHA-1': sha1, 'SHA-256': sha256, 'SHA-512': sha512 });
    setLoading(false);
  };

  const copy = (algo: string, val: string) => {
    navigator.clipboard.writeText(val);
    setCopied(algo);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-semibold text-slate-800 block mb-2">Input Text</label>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter text to hash..."
          rows={5}
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 shadow-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <button onClick={generate} disabled={!input || loading}
        className="px-4 py-2 text-sm font-medium rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40">
        {loading ? 'Hashing...' : 'Generate Hashes'}
      </button>

      {Object.keys(results).length > 0 && (
        <div className="space-y-3">
          {Object.entries(results).map(([algo, hash]) => (
            <div key={algo} className="rounded-xl border border-slate-200 bg-white p-3 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-600">{algo}</span>
                <button onClick={() => copy(algo, hash)}
                  className="text-xs px-2 py-0.5 rounded border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600">
                  {copied === algo ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <p className="text-xs font-mono text-slate-800 break-all">{hash}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
