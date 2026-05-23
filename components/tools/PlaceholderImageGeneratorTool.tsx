'use client';

import { useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

export function PlaceholderImageGeneratorTool() {
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(300);
  const [bg, setBg] = useState('#94a3b8');
  const [fg, setFg] = useState('#ffffff');
  const [text, setText] = useState('');
  const [copied, setCopied] = useState('');

  const label = text || `${width}×${height}`;

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="${width}" height="${height}" fill="${bg}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="${Math.max(12, Math.min(width, height) / 8)}" fill="${fg}">${label}</text></svg>`;
  const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgContent)}`;

  const presets = [
    { label: 'Banner', w: 1200, h: 400 },
    { label: 'Square', w: 400, h: 400 },
    { label: 'Thumbnail', w: 320, h: 240 },
    { label: 'Profile', w: 150, h: 150 },
    { label: 'Card', w: 600, h: 400 },
    { label: 'Full HD', w: 1920, h: 1080 },
  ];

  function copy(val: string, key: string) {
    navigator.clipboard.writeText(val);
    setCopied(key);
    setTimeout(() => setCopied(''), 2000);
  }

  const htmlTag = `<img src="https://via.placeholder.com/${width}x${height}/${bg.replace('#', '')}/${fg.replace('#', '')}" alt="${label}" />`;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Width (px)</label>
          <input type="number" min={1} max={2000} value={width} onChange={e => setWidth(Number(e.target.value))} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Height (px)</label>
          <input type="number" min={1} max={2000} value={height} onChange={e => setHeight(Number(e.target.value))} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Background</label>
          <div className="flex gap-1">
            <input type="color" value={bg} onChange={e => setBg(e.target.value)} className="w-10 h-[38px] rounded cursor-pointer border border-slate-200" />
            <input type="text" value={bg} onChange={e => setBg(e.target.value)} className="flex-1 rounded-lg border border-slate-200 px-2 py-2 text-xs font-mono focus:outline-none" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Text color</label>
          <div className="flex gap-1">
            <input type="color" value={fg} onChange={e => setFg(e.target.value)} className="w-10 h-[38px] rounded cursor-pointer border border-slate-200" />
            <input type="text" value={fg} onChange={e => setFg(e.target.value)} className="flex-1 rounded-lg border border-slate-200 px-2 py-2 text-xs font-mono focus:outline-none" />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-600 mb-1">Custom text (optional)</label>
        <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder={`${width}×${height}`} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <div className="flex gap-2 flex-wrap">
        {presets.map(p => (
          <button key={p.label} onClick={() => { setWidth(p.w); setHeight(p.h); }} className="px-3 py-1.5 rounded border border-slate-200 text-xs text-slate-700 hover:bg-slate-50 transition-colors">{p.label} {p.w}×{p.h}</button>
        ))}
      </div>

      <div className="space-y-3">
        <div className="rounded-lg border border-slate-200 bg-slate-100 p-4 flex items-center justify-center" style={{ minHeight: '120px' }}>
          <img src={dataUrl} alt={label} style={{ maxWidth: '100%', maxHeight: '200px', width: width > 600 ? '100%' : width }} />
        </div>

        <div className="flex gap-2">
          <a href={dataUrl} download={`placeholder-${width}x${height}.svg`} className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors">Download SVG</a>
          <button onClick={() => copy(dataUrl, 'dataurl')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${copied === 'dataurl' ? 'bg-green-500 text-white' : 'border border-slate-200 hover:bg-slate-50 text-slate-700'}`}>{copied === 'dataurl' ? '✓ Copied!' : 'Copy data URL'}</button>
          <button onClick={() => copy(htmlTag, 'html')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${copied === 'html' ? 'bg-green-500 text-white' : 'border border-slate-200 hover:bg-slate-50 text-slate-700'}`}>{copied === 'html' ? '✓ Copied!' : 'Copy HTML'}</button>
        </div>
      </div>
    </div>
  );
}
