'use client';

import { useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

export function BoxShadowGeneratorTool() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(4);
  const [blur, setBlur] = useState(6);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState('#00000033');
  const [inset, setInset] = useState(false);
  const [copied, setCopied] = useState(false);

  const css = `box-shadow: ${inset ? 'inset ' : ''}${x}px ${y}px ${blur}px ${spread}px ${color};`;

  function copy() {
    navigator.clipboard.writeText(css);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const sliders = [
    ['Horizontal (X)', x, setX, -50, 50],
    ['Vertical (Y)', y, setY, -50, 50],
    ['Blur', blur, setBlur, 0, 100],
    ['Spread', spread, setSpread, -50, 50],
  ] as const;

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sliders.map(([label, val, setter, min, max]) => (
          <div key={label}>
            <label className="block text-xs font-medium text-slate-600 mb-1">{label}: {val}px</label>
            <input type="range" min={min} max={max} value={val} onChange={e => setter(Number(e.target.value) as never)} className="w-full" />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-slate-700">Color</label>
          <input type="color" value={color.slice(0, 7)} onChange={e => setColor(e.target.value + color.slice(7))} className="w-10 h-8 rounded cursor-pointer border-3 border-black" />
          <input type="text" value={color} onChange={e => setColor(e.target.value)} className="w-28 rounded border-3 border-black px-2 py-1 text-xs font-mono focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
          <input type="checkbox" checked={inset} onChange={e => setInset(e.target.checked)} className="rounded" />
          Inset
        </label>
      </div>

      <div className="flex items-center gap-6">
        <div className="w-32 h-32 bg-white rounded-lg" style={{ boxShadow: `${inset ? 'inset ' : ''}${x}px ${y}px ${blur}px ${spread}px ${color}` }} />
        <div className="space-y-2 flex-1">
          <label className="block text-sm font-medium text-slate-700">CSS</label>
          <div className="flex items-center gap-2">
            <code className="flex-1 rounded border-3 border-black bg-slate-50 px-3 py-2 text-xs font-mono break-all">{css}</code>
            <button onClick={copy} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${copied ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>{copied ? '✓ Copied!' : 'Copy'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
