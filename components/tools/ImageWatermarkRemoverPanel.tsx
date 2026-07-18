'use client';

import { useState } from 'react';
import { ImageWatermarkCleanerTool } from './ImageWatermarkCleanerTool';
import ImageInpaintTool from './ImageInpaintTool';

/**
 * Image watermark remover page UI. Two modes:
 *  - Free: metadata + crop (client-side, unlimited)
 *  - Pro:  AI inpaint erase (LaMa via Replicate, Pro-gated + metered)
 */
export default function ImageWatermarkRemoverPanel({ modelName }: { modelName?: string }) {
  const [mode, setMode] = useState<'free' | 'ai'>('free');

  return (
    <div className="space-y-4">
      <div className="inline-flex rounded-lg border border-slate-200 bg-slate-100 p-1">
        <button
          type="button"
          onClick={() => setMode('free')}
          className={`rounded-md px-4 py-1.5 text-sm font-semibold transition ${
            mode === 'free' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Metadata &amp; crop
        </button>
        <button
          type="button"
          onClick={() => setMode('ai')}
          className={`rounded-md px-4 py-1.5 text-sm font-semibold transition ${
            mode === 'ai' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          AI erase
          <span className="ml-1.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-700 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-white">
            Pro
          </span>
        </button>
      </div>

      {mode === 'free' ? (
        <ImageWatermarkCleanerTool modelName={modelName} />
      ) : (
        <ImageInpaintTool modelName={modelName} />
      )}
    </div>
  );
}
