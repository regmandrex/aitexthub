"use client";

import { useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

export function Base64ToImageTool() {
  const [input, setInput] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [info, setInfo] = useState<{ format: string; sizeKb: string } | null>(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const decode = () => {
    setError(''); setImgSrc(''); setInfo(null);
    let src = input.trim();
    if (!src) return;
    if (!src.startsWith('data:')) {
      src = `data:image/png;base64,${src}`;
    }
    const match = src.match(/^data:(image\/\w+);base64,(.+)$/);
    if (!match) { setError('Invalid Base64 image data. Paste a data URL or raw Base64 string.'); return; }
    const [, mimeType, b64] = match;
    try {
      const binary = atob(b64);
      const sizeKb = (binary.length / 1024).toFixed(1);
      const fmt = mimeType.replace('image/', '').toUpperCase();
      setImgSrc(src);
      setInfo({ format: fmt, sizeKb });
    } catch {
      setError('Failed to decode Base64 — check that the string is valid.');
    }
  };

  const download = () => {
    if (!imgSrc) return;
    const ext = info?.format.toLowerCase() ?? 'png';
    const a = document.createElement('a');
    a.href = imgSrc; a.download = `decoded-image.${ext}`; a.click();
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-semibold text-slate-800 block mb-2">Base64 Input</label>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={'Paste Base64 string or data URL here...\nExample: data:image/png;base64,iVBORw0KGgo...'}
          rows={6}
          className="w-full rounded-xl border-3 border-black bg-white px-3 py-3 text-xs font-mono text-slate-800 shadow-neo-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div className="flex gap-2">
        <button onClick={decode} className="px-4 py-2 text-sm font-medium rounded-xl bg-blue-600 text-white hover:bg-blue-700">
          Decode & Preview
        </button>
        <button onClick={() => { setInput(''); setImgSrc(''); setInfo(null); setError(''); }}
          className="px-4 py-2 text-sm font-medium rounded-xl border-3 border-black bg-white hover:bg-slate-50">
          Clear
        </button>
        {input && (
          <button onClick={() => { navigator.clipboard.writeText(input); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
            className="px-4 py-2 text-sm font-medium rounded-xl border-3 border-black bg-white hover:bg-slate-50">
            {copied ? 'Copied!' : 'Copy Input'}
          </button>
        )}
      </div>

      {error && <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{error}</p>}

      {imgSrc && (
        <div className="rounded-xl border-3 border-black bg-white p-4 space-y-3">
          {info && (
            <div className="flex gap-4 text-sm text-slate-600">
              <span>Format: <strong className="text-slate-900">{info.format}</strong></span>
              <span>Size: <strong className="text-slate-900">~{info.sizeKb} KB</strong></span>
            </div>
          )}
          <img src={imgSrc} alt="Decoded" className="max-w-full rounded-lg border-2 border-black max-h-96 object-contain" />
          <button onClick={download}
            className="px-4 py-2 text-sm font-medium rounded-xl bg-green-600 text-white hover:bg-green-700">
            Download Image
          </button>
        </div>
      )}
    </div>
  );
}
