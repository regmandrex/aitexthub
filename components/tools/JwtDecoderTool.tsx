'use client';

import { useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

function base64UrlDecode(str: string) {
  const base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  const padded = base64 + '=='.slice((2 - base64.length * 3) & 3);
  try {
    return JSON.parse(decodeURIComponent(escape(atob(padded))));
  } catch {
    return null;
  }
}

export function JwtDecoderTool() {
  const [input, setInput] = useState('');
  const [header, setHeader] = useState<object | null>(null);
  const [payload, setPayload] = useState<object | null>(null);
  const [error, setError] = useState('');

  function decode() {
    setError('');
    setHeader(null);
    setPayload(null);
    const parts = input.trim().split('.');
    if (parts.length !== 3) {
      setError('Invalid JWT — must have 3 parts separated by dots.');
      return;
    }
    const h = base64UrlDecode(parts[0]);
    const p = base64UrlDecode(parts[1]);
    if (!h || !p) {
      setError('Could not decode JWT — invalid base64url encoding.');
      return;
    }
    setHeader(h);
    setPayload(p);
  }

  const fmt = (obj: object) => JSON.stringify(obj, null, 2);

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">JWT Token</label>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          rows={4}
          placeholder="Paste your JWT token here..."
          className="w-full rounded-lg border-3 border-black px-3 py-2 text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={decode}
        className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
      >
        Decode JWT
      </button>
      {error && <p className="text-sm text-red-600">{error}</p>}
      {header && (
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Header</label>
            <pre className="w-full rounded-lg border-3 border-black bg-slate-50 px-3 py-2 text-xs font-mono overflow-x-auto">{fmt(header)}</pre>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Payload</label>
            <pre className="w-full rounded-lg border-3 border-black bg-slate-50 px-3 py-2 text-xs font-mono overflow-x-auto">{fmt(payload!)}</pre>
          </div>
          <p className="text-xs text-slate-500">Signature is not verified — this tool only decodes the token.</p>
        </div>
      )}
    </div>
  );
}
