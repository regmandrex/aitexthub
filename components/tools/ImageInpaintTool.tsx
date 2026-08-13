'use client';

import { useRef, useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';
import AuthModal from '../AuthModal';
import PricingModal from '../PricingModal';

type Box = { x: number; y: number; w: number; h: number };
type Phase = 'idle' | 'ready' | 'working' | 'done' | 'error';

export default function ImageInpaintTool(_props: { modelName?: string }) {
  const [file, setFile] = useState<File | null>(null);
  const [phase, setPhase] = useState<Phase>('idle');
  const [message, setMessage] = useState('');
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [box, setBox] = useState<Box | null>(null);
  const [showAuth, setShowAuth] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const dims = useRef({ w: 0, h: 0 });
  const drawing = useRef<{ x: number; y: number } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const reset = () => {
    setFile(null);
    setPhase('idle');
    setMessage('');
    setResultUrl(null);
    setBox(null);
    imgRef.current = null;
    if (inputRef.current) inputRef.current.value = '';
  };

  const onFile = (f: File | null) => {
    reset();
    if (!f) return;
    setFile(f);
    const img = new Image();
    img.onload = () => {
      imgRef.current = img;
      dims.current = { w: img.naturalWidth, h: img.naturalHeight };
      const c = canvasRef.current!;
      const maxW = 640;
      const scale = Math.min(1, maxW / img.naturalWidth);
      c.width = Math.round(img.naturalWidth * scale);
      c.height = Math.round(img.naturalHeight * scale);
      c.getContext('2d')!.drawImage(img, 0, 0, c.width, c.height);
      setPhase('ready');
      setMessage('Drag a box over the watermark you want removed.');
    };
    img.src = URL.createObjectURL(f);
  };

  const redraw = (b: Box | null) => {
    const c = canvasRef.current;
    const img = imgRef.current;
    if (!c || !img) return;
    const ctx = c.getContext('2d')!;
    ctx.drawImage(img, 0, 0, c.width, c.height);
    if (b) {
      ctx.fillStyle = 'rgba(124,58,237,0.35)';
      ctx.fillRect(b.x, b.y, b.w, b.h);
      ctx.strokeStyle = '#7c3aed';
      ctx.lineWidth = 2;
      ctx.strokeRect(b.x, b.y, b.w, b.h);
    }
  };

  const pos = (e: React.PointerEvent) => {
    const r = canvasRef.current!.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };
  const onDown = (e: React.PointerEvent) => {
    if (phase !== 'ready' && phase !== 'done') return;
    drawing.current = pos(e);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!drawing.current) return;
    const p = pos(e);
    const s = drawing.current;
    const b = { x: Math.min(s.x, p.x), y: Math.min(s.y, p.y), w: Math.abs(p.x - s.x), h: Math.abs(p.y - s.y) };
    setBox(b);
    redraw(b);
  };
  const onUp = () => {
    drawing.current = null;
  };

  const buildMask = (): Promise<Blob> => {
    const c = canvasRef.current!;
    const sx = dims.current.w / c.width;
    const sy = dims.current.h / c.height;
    const m = document.createElement('canvas');
    m.width = dims.current.w;
    m.height = dims.current.h;
    const ctx = m.getContext('2d')!;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, m.width, m.height);
    if (box) {
      ctx.fillStyle = '#fff';
      ctx.fillRect(box.x * sx, box.y * sy, box.w * sx, box.h * sy);
    }
    return new Promise((res) => m.toBlob((b) => res(b!), 'image/png'));
  };

  const run = async () => {
    if (!file || !box || box.w < 4 || box.h < 4) {
      setMessage('Draw a box over the watermark first.');
      return;
    }
    setPhase('working');
    setMessage('Removing the watermark…');
    setResultUrl(null);
    try {
      const maskBlob = await buildMask();
      const fd = new FormData();
      fd.append('image', file);
      fd.append('mask', maskBlob, 'mask.png');
      const res = await fetch('/api/inpaint-image', { method: 'POST', body: fd });
      const data = await res.json();
      if (!res.ok) {
        // The API flags auth failures separately: open the sign-in modal
        // instead of printing "please sign in" as an inline error the user
        // can't act on. The upload and box selection survive, so onSuccess
        // can retry the removal directly.
        if (data.needsAuth) {
          setPhase('ready');
          setMessage('');
          setShowAuth(true);
          return;
        }
        // Removal is Pro-gated, so a fresh signup still lands here. Show the
        // plans rather than a dead-end error — the upload and box survive, so
        // they can complete checkout and click Remove again.
        if (data.upgradeRequired) {
          setPhase('ready');
          setMessage('');
          setShowPricing(true);
          return;
        }
        setPhase('error');
        setMessage(data.error ?? 'Could not remove the watermark.');
        return;
      }
      setResultUrl(data.output as string);
      setPhase('done');
      setMessage('Done — your cleaned image is ready to download.');
    } catch {
      setPhase('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  const busy = phase === 'working';

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3">
        <label className="block text-sm font-semibold text-slate-800">Upload image</label>
        <input
          ref={inputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp,.png,.jpg,.jpeg,.webp"
          onChange={(e) => onFile(e.target.files?.[0] ?? null)}
          disabled={busy}
          className="block w-full text-sm text-slate-700 file:mr-4 file:rounded-lg file:border-0 file:bg-brand-700 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-brand-800 disabled:opacity-50"
        />
      </div>

      {phase !== 'idle' ? (
        <div className="space-y-3">
          <canvas
            ref={canvasRef}
            onPointerDown={onDown}
            onPointerMove={onMove}
            onPointerUp={onUp}
            className="max-w-full cursor-crosshair rounded-lg border border-slate-300 touch-none"
          />
          {message ? (
            <p className={`text-sm ${phase === 'error' ? 'text-rose-600' : 'text-slate-600'}`}>{message}</p>
          ) : null}
        </div>
      ) : null}

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={run}
          disabled={busy || phase === 'idle' || !box}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {busy ? 'Working…' : !box && phase !== 'idle' ? 'Draw a box first' : 'Remove watermark'}
        </button>
        {resultUrl ? (
          <a
            href={resultUrl}
            download
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700"
          >
            Download cleaned image
          </a>
        ) : null}
        <button
          type="button"
          onClick={reset}
          disabled={busy}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
        >
          Clear
        </button>
      </div>

      {resultUrl ? (
        <div className="space-y-2">
          <p className="text-sm font-semibold text-slate-800">Result</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={resultUrl} alt="Cleaned result" className="max-w-full rounded-lg border border-slate-300" />
        </div>
      ) : null}

      {phase === 'done' ? <HumanizerUpsellCard variant="watermark" /> : null}

      {showAuth ? (
        <AuthModal
          initialMode="signup"
          purpose="AI watermark removal"
          onClose={() => setShowAuth(false)}
          onSuccess={() => {
            setShowAuth(false);
            void run();
          }}
        />
      ) : null}

      {showPricing ? <PricingModal onClose={() => setShowPricing(false)} /> : null}
    </div>
  );
}
