'use client';

import { useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

function hexToRgb(hex: string) {
  const clean = hex.replace('#', '');
  const full = clean.length === 3 ? clean.split('').map(c => c + c).join('') : clean;
  if (!/^[0-9a-fA-F]{6}$/.test(full)) return null;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return { r, g, b };
}

function rgbToHex(r: number, g: number, b: number) {
  return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
}

export function HexToRgbTool() {
  const [hex, setHex] = useState('#3b82f6');
  const [r, setR] = useState('59');
  const [g, setG] = useState('130');
  const [b, setB] = useState('246');
  const [mode, setMode] = useState<'hex' | 'rgb'>('hex');
  const [copied, setCopied] = useState('');

  const rgb = hexToRgb(hex);
  const hexFromRgb = rgbToHex(Number(r), Number(g), Number(b));

  function copy(text: string, key: string) {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(''), 2000);
  }

  const previewColor = mode === 'hex' ? hex : hexFromRgb;

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button onClick={() => setMode('hex')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${mode === 'hex' ? 'bg-blue-600 text-white' : 'border-3 border-black text-slate-700 hover:bg-slate-50'}`}>HEX → RGB</button>
        <button onClick={() => setMode('rgb')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${mode === 'rgb' ? 'bg-blue-600 text-white' : 'border-3 border-black text-slate-700 hover:bg-slate-50'}`}>RGB → HEX</button>
      </div>

      {mode === 'hex' ? (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <input type="color" value={rgb ? hex : '#000000'} onChange={e => setHex(e.target.value)} className="w-10 h-10 rounded cursor-pointer border-3 border-black" />
            <input type="text" value={hex} onChange={e => setHex(e.target.value)} placeholder="#3b82f6" className="rounded-lg border-3 border-black px-3 py-2 text-sm font-mono w-32 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          {rgb ? (
            <div className="space-y-2">
              {[['rgb()', `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`], ['rgba()', `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`], ['Individual', `R: ${rgb.r}  G: ${rgb.g}  B: ${rgb.b}`]].map(([label, val]) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 w-16">{label}</span>
                  <code className="flex-1 rounded border-3 border-black bg-slate-50 px-2 py-1.5 text-xs font-mono">{val}</code>
                  <button onClick={() => copy(val, label)} className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${copied === label ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>{copied === label ? '✓' : 'Copy'}</button>
                </div>
              ))}
            </div>
          ) : <p className="text-sm text-red-600">Invalid hex color</p>}
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <input type="color" value={hexFromRgb} onChange={e => { const c = hexToRgb(e.target.value); if (c) { setR(String(c.r)); setG(String(c.g)); setB(String(c.b)); }}} className="w-10 h-10 rounded cursor-pointer border-3 border-black" />
            {([['R', r, setR], ['G', g, setG], ['B', b, setB]] as [string, string, (v: string) => void][]).map(([label, val, setter]) => (
              <div key={label} className="flex items-center gap-1">
                <span className="text-xs font-medium text-slate-600">{label}</span>
                <input type="number" min={0} max={255} value={val} onChange={e => setter(e.target.value)} className="w-16 rounded-lg border-3 border-black px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <code className="flex-1 rounded border-3 border-black bg-slate-50 px-3 py-2 text-sm font-mono">{hexFromRgb}</code>
            <button onClick={() => copy(hexFromRgb, 'hex')} className={`px-4 py-2 rounded text-sm font-medium transition-colors ${copied === 'hex' ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>{copied === 'hex' ? '✓ Copied!' : 'Copy'}</button>
          </div>
        </div>
      )}

      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg border-3 border-black shadow-inner" style={{ backgroundColor: previewColor }} />
        <span className="text-sm text-slate-600">Color preview</span>
      </div>
    </div>
  );
}
