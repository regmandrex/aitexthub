'use client';

import { useRef, useState } from 'react';

export function ImageCompareTool() {
  const [left, setLeft] = useState('');
  const [right, setRight] = useState('');
  const [slider, setSlider] = useState(50);
  const leftRef = useRef<HTMLInputElement>(null);
  const rightRef = useRef<HTMLInputElement>(null);

  function loadImg(file: File, side: 'left' | 'right') {
    const reader = new FileReader();
    reader.onload = e => {
      const src = e.target?.result as string;
      if (side === 'left') setLeft(src);
      else setRight(src);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Image A</label>
          <div onClick={() => leftRef.current?.click()} className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:border-blue-400 hover:bg-slate-50 transition-colors">
            {left ? <img src={left} alt="A" className="max-h-32 mx-auto object-contain rounded" /> : <p className="text-xs text-slate-400">Click to upload</p>}
            <input ref={leftRef} type="file" accept="image/*" className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) loadImg(f, 'left'); }} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Image B</label>
          <div onClick={() => rightRef.current?.click()} className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:border-blue-400 hover:bg-slate-50 transition-colors">
            {right ? <img src={right} alt="B" className="max-h-32 mx-auto object-contain rounded" /> : <p className="text-xs text-slate-400">Click to upload</p>}
            <input ref={rightRef} type="file" accept="image/*" className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) loadImg(f, 'right'); }} />
          </div>
        </div>
      </div>

      {left && right && (
        <div className="space-y-3">
          <label className="block text-sm font-medium text-slate-700">Slide to compare</label>
          <input type="range" min={0} max={100} value={slider} onChange={e => setSlider(Number(e.target.value))} className="w-full" />
          <div className="relative rounded-lg overflow-hidden border-3 border-black" style={{ aspectRatio: '16/9' }}>
            <img src={right} alt="B" className="absolute inset-0 w-full h-full object-contain bg-slate-100" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${slider}%` }}>
              <img src={left} alt="A" className="absolute inset-0 w-full h-full object-contain bg-slate-50" style={{ minWidth: `${100 * 100 / slider}%` }} />
            </div>
            <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow" style={{ left: `${slider}%` }} />
          </div>
          <p className="text-xs text-slate-400 text-center">← Image A | Image B →</p>
        </div>
      )}
    </div>
  );
}
