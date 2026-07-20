'use client';

import { useRef, useState, useCallback } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

type Box = { x: number; y: number; w: number; h: number };
type Phase = 'idle' | 'ready' | 'uploading' | 'processing' | 'done' | 'error';

type VideoInpaintToolProps = { modelName?: string };

export default function VideoInpaintTool(_props: VideoInpaintToolProps) {
  const [file, setFile] = useState<File | null>(null);
  const [phase, setPhase] = useState<Phase>('idle');
  const [message, setMessage] = useState('');
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [box, setBox] = useState<Box | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dims = useRef({ w: 0, h: 0 }); // native video dimensions
  const drawing = useRef<{ startX: number; startY: number } | null>(null);

  const reset = () => {
    setFile(null);
    setPhase('idle');
    setMessage('');
    setResultUrl(null);
    setBox(null);
  };

  // Load first frame onto the canvas for mask drawing.
  const onFile = (f: File | null) => {
    reset();
    if (!f) return;
    setFile(f);
    setPhase('ready');
    setMessage('Loading video…');

    const url = URL.createObjectURL(f);
    const v = videoRef.current!;

    // Paint the first frame onto the canvas so the user can draw a mask box.
    const paintFrame = () => {
      if (!v.videoWidth) return false;
      dims.current = { w: v.videoWidth, h: v.videoHeight };
      const c = canvasRef.current;
      if (!c) return false;
      // Fit canvas to a max display width while preserving aspect ratio.
      const maxW = 640;
      const scale = Math.min(1, maxW / v.videoWidth);
      c.width = Math.round(v.videoWidth * scale);
      c.height = Math.round(v.videoHeight * scale);
      c.getContext('2d')!.drawImage(v, 0, 0, c.width, c.height);
      setMessage('Drag a box over the watermark you want removed.');
      return true;
    };

    v.onloadeddata = () => {
      // Try immediately, then nudge past frame 0 in case frame 0 is blank.
      if (!paintFrame()) return;
      try {
        v.currentTime = Math.min(0.1, (v.duration || 1) / 2);
      } catch {
        /* seeking unsupported — the frame we already painted is fine */
      }
    };
    v.onseeked = () => paintFrame();
    v.onerror = () => {
      setPhase('error');
      setMessage(
        'Could not read this video. Try an MP4 (H.264) file — some formats cannot be previewed in the browser.',
      );
    };

    v.src = url;
    v.load();
  };

  const redraw = useCallback((b: Box | null) => {
    const c = canvasRef.current;
    const v = videoRef.current;
    if (!c || !v) return;
    const ctx = c.getContext('2d')!;
    ctx.drawImage(v, 0, 0, c.width, c.height);
    if (b) {
      ctx.fillStyle = 'rgba(124,58,237,0.35)';
      ctx.fillRect(b.x, b.y, b.w, b.h);
      ctx.strokeStyle = '#7c3aed';
      ctx.lineWidth = 2;
      ctx.strokeRect(b.x, b.y, b.w, b.h);
    }
  }, []);

  const pos = (e: React.PointerEvent) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const onDown = (e: React.PointerEvent) => {
    if (phase !== 'ready') return;
    const p = pos(e);
    drawing.current = { startX: p.x, startY: p.y };
  };
  const onMove = (e: React.PointerEvent) => {
    if (!drawing.current) return;
    const p = pos(e);
    const { startX, startY } = drawing.current;
    const b = {
      x: Math.min(startX, p.x),
      y: Math.min(startY, p.y),
      w: Math.abs(p.x - startX),
      h: Math.abs(p.y - startY),
    };
    setBox(b);
    redraw(b);
  };
  const onUp = () => {
    drawing.current = null;
  };

  // Build a black PNG with a white filled rectangle at the box, at native
  // video resolution — this is the mask ProPainter expects (white = remove).
  const buildMask = (): Promise<Blob> => {
    const c = canvasRef.current!;
    const scaleX = dims.current.w / c.width;
    const scaleY = dims.current.h / c.height;
    const mask = document.createElement('canvas');
    mask.width = dims.current.w;
    mask.height = dims.current.h;
    const mctx = mask.getContext('2d')!;
    mctx.fillStyle = '#000';
    mctx.fillRect(0, 0, mask.width, mask.height);
    if (box) {
      mctx.fillStyle = '#fff';
      mctx.fillRect(box.x * scaleX, box.y * scaleY, box.w * scaleX, box.h * scaleY);
    }
    return new Promise((res) => mask.toBlob((b) => res(b!), 'image/png'));
  };

  const run = async () => {
    if (!file || !box || box.w < 4 || box.h < 4) {
      setMessage('Draw a box over the watermark first.');
      return;
    }
    setPhase('uploading');
    setMessage('Uploading and starting AI removal…');
    setResultUrl(null);
    try {
      const maskBlob = await buildMask();
      const fd = new FormData();
      fd.append('video', file);
      fd.append('mask', maskBlob, 'mask.png');

      const startRes = await fetch('/api/inpaint/start', { method: 'POST', body: fd });
      const startData = await startRes.json();
      if (!startRes.ok) {
        setPhase('error');
        setMessage(startData.error ?? 'Could not start removal.');
        return;
      }

      setPhase('processing');
      setMessage('Removing the watermark — this can take a minute or two…');

      // Poll status until done.
      const id = startData.id as string;
      for (;;) {
        await new Promise((r) => setTimeout(r, 4000));
        const sRes = await fetch(`/api/inpaint/status?id=${encodeURIComponent(id)}`);
        const s = await sRes.json();
        if (s.status === 'succeeded' && s.output) {
          setResultUrl(s.output as string);
          setPhase('done');
          setMessage('Done — your cleaned video is ready to download.');
          return;
        }
        if (s.status === 'failed' || s.status === 'canceled' || s.error) {
          setPhase('error');
          setMessage(s.error ?? 'Removal failed. Please try again.');
          return;
        }
        // else keep polling
      }
    } catch {
      setPhase('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  const busy = phase === 'uploading' || phase === 'processing';

  return (
    <div className="space-y-4">
      <video ref={videoRef} className="hidden" muted playsInline preload="auto" />

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3">
        <label className="block text-sm font-semibold text-slate-800">Upload video</label>
        <input
          type="file"
          accept="video/mp4,video/quicktime,.mp4,.mov"
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
            <p className={`text-sm ${phase === 'error' ? 'text-rose-600' : 'text-slate-600'}`}>
              {message}
            </p>
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
            Download cleaned video
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

      {phase === 'done' ? <HumanizerUpsellCard variant="watermark" /> : null}
    </div>
  );
}
