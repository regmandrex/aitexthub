'use client';

import { useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

async function generateHmac(message: string, key: string, algo: string): Promise<string> {
  const enc = new TextEncoder();
  const keyData = await crypto.subtle.importKey('raw', enc.encode(key), { name: 'HMAC', hash: algo }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', keyData, enc.encode(message));
  return Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, '0')).join('');
}

export function HmacGeneratorTool() {
  const [message, setMessage] = useState('');
  const [key, setKey] = useState('');
  const [algo, setAlgo] = useState('SHA-256');
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);

  async function generate() {
    if (!message || !key) return;
    const hash = await generateHmac(message, key, algo);
    setResult(hash);
    setCopied(false);
  }

  function copy() {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
        <textarea value={message} onChange={e => setMessage(e.target.value)} rows={3} placeholder="Enter the message to sign..." className="w-full rounded-lg border-3 border-black px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Secret key</label>
        <input type="text" value={key} onChange={e => setKey(e.target.value)} placeholder="Enter your secret key..." className="w-full rounded-lg border-3 border-black px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="flex items-center gap-3">
        <label className="text-sm font-medium text-slate-700">Algorithm</label>
        <select value={algo} onChange={e => setAlgo(e.target.value)} className="rounded-lg border-3 border-black px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="SHA-256">HMAC-SHA256</option>
          <option value="SHA-384">HMAC-SHA384</option>
          <option value="SHA-512">HMAC-SHA512</option>
          <option value="SHA-1">HMAC-SHA1</option>
        </select>
      </div>
      <button onClick={generate} disabled={!message || !key} className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-medium transition-colors">Generate HMAC</button>
      {result && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">HMAC ({algo})</label>
          <div className="flex items-start gap-2">
            <code className="flex-1 rounded-lg border-3 border-black bg-slate-50 px-3 py-2 text-xs font-mono break-all">{result}</code>
            <button onClick={copy} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${copied ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>{copied ? '✓ Copied!' : 'Copy'}</button>
          </div>
        </div>
      )}
    </div>
  );
}
