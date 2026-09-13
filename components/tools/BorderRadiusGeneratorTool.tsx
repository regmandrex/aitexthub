'use client';

import { useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

export function BorderRadiusGeneratorTool() {
  const [tl, setTl] = useState(8);
  const [tr, setTr] = useState(8);
  const [br, setBr] = useState(8);
  const [bl, setBl] = useState(8);
  const [linked, setLinked] = useState(true);
  const [copied, setCopied] = useState(false);

  function setAll(v: number) { setTl(v); setTr(v); setBr(v); setBl(v); }

  const css = tl === tr && tr === br && br === bl
    ? `border-radius: ${tl}px;`
    : `border-radius: ${tl}px ${tr}px ${br}px ${bl}px;`;

  function copy() {
    navigator.clipboard.writeText(css);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const corners = [
    ['Top left', tl, setTl],
    ['Top right', tr, setTr],
    ['Bottom right', br, setBr],
    ['Bottom left', bl, setBl],
  ] as const;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 flex-wrap">
        <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
          <input type="checkbox" checked={linked} onChange={e => setLinked(e.target.checked)} className="rounded" />
          Link all corners
        </label>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {corners.map(([label, val, setter]) => (
          <div key={label}>
            <label className="block text-xs font-medium text-slate-600 mb-1">{label}: {val}px</label>
            <input
              type="range" min={0} max={100} value={val}
              onChange={e => { const v = Number(e.target.value); linked ? setAll(v) : setter(v); }}
              className="w-full"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <div
          className="w-32 h-32 bg-blue-500"
          style={{ borderRadius: `${tl}px ${tr}px ${br}px ${bl}px` }}
        />
        <div className="space-y-2 flex-1">
          <label className="block text-sm font-medium text-slate-700">CSS</label>
          <div className="flex items-center gap-2">
            <code className="flex-1 rounded border-3 border-black bg-slate-50 px-3 py-2 text-sm font-mono">{css}</code>
            <button onClick={copy} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${copied ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>{copied ? '✓ Copied!' : 'Copy'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
