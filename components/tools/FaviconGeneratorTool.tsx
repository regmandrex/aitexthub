'use client';

import { useRef, useState } from 'react';

const SIZES = [16, 32, 48, 64, 128, 256];

export function FaviconGeneratorTool() {
  const [emoji, setEmoji] = useState('⭐');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [size, setSize] = useState(32);
  const [tab, setTab] = useState<'emoji' | 'upload'>('emoji');
  const [uploadSrc, setUploadSrc] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);

  function drawToCanvas(): HTMLCanvasElement | null {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, size, size);
    if (tab === 'emoji') {
      ctx.font = `${size * 0.7}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(emoji, size / 2, size / 2 + size * 0.05);
    } else if (uploadSrc) {
      const img = new Image();
      img.src = uploadSrc;
      ctx.drawImage(img, 0, 0, size, size);
    }
    return canvas;
  }

  function download() {
    const canvas = drawToCanvas();
    if (!canvas) return;
    const a = document.createElement('a');
    a.download = `favicon-${size}x${size}.png`;
    a.href = canvas.toDataURL('image/png');
    a.click();
  }

  function copyDataUrl() {
    const canvas = drawToCanvas();
    if (!canvas) return;
    navigator.clipboard.writeText(canvas.toDataURL('image/png'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => setUploadSrc(ev.target?.result as string);
    reader.readAsDataURL(file);
  }

  const previewSrc = typeof document === 'undefined' ? '' : (() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64; canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (!ctx) return '';
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, 64, 64);
    if (tab === 'emoji') {
      ctx.font = '44px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(emoji, 32, 35);
    }
    return canvas.toDataURL();
  })();

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button onClick={() => setTab('emoji')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === 'emoji' ? 'bg-blue-600 text-white' : 'border-3 border-black text-slate-700 hover:bg-slate-50'}`}>Emoji favicon</button>
        <button onClick={() => setTab('upload')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === 'upload' ? 'bg-blue-600 text-white' : 'border-3 border-black text-slate-700 hover:bg-slate-50'}`}>Upload image</button>
      </div>

      {tab === 'emoji' ? (
        <div className="flex items-center gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Emoji</label>
            <input type="text" value={emoji} onChange={e => setEmoji(e.target.value)} className="w-20 rounded-lg border-3 border-black px-3 py-2 text-2xl text-center focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Background</label>
            <input type="color" value={bgColor} onChange={e => setBgColor(e.target.value)} className="w-10 h-10 rounded cursor-pointer border-3 border-black" />
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => fileRef.current?.click()} className="px-4 py-2 rounded-lg border-3 border-black hover:bg-slate-50 text-slate-700 text-sm font-medium transition-colors">Upload image</button>
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleUpload} />
          {uploadSrc && <img src={uploadSrc} alt="upload" className="mt-2 w-16 h-16 rounded object-cover border-3 border-black" />}
        </div>
      )}

      <div>
        <label className="block text-xs font-medium text-slate-600 mb-1">Export size</label>
        <div className="flex gap-2 flex-wrap">
          {SIZES.map(s => (
            <button key={s} onClick={() => setSize(s)} className={`px-3 py-1.5 rounded border text-xs font-medium transition-colors ${size === s ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-black text-slate-600 hover:bg-slate-50'}`}>{s}×{s}</button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="space-y-1">
          <label className="block text-xs font-medium text-slate-600">Preview</label>
          {tab === 'emoji' && <img src={previewSrc} alt="preview" className="w-16 h-16 rounded border-3 border-black" />}
          {tab === 'upload' && uploadSrc && <img src={uploadSrc} alt="preview" className="w-16 h-16 object-cover rounded border-3 border-black" />}
        </div>
        <div className="space-y-2">
          <button onClick={download} className="block px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors">Download PNG ({size}×{size})</button>
          <button onClick={copyDataUrl} className={`block px-5 py-2 rounded-lg text-sm font-medium transition-colors ${copied ? 'bg-green-500 text-white' : 'border-3 border-black hover:bg-slate-50 text-slate-700'}`}>{copied ? '✓ Copied data URL!' : 'Copy data URL'}</button>
        </div>
      </div>

      <canvas ref={canvasRef} className="hidden" />

      <div className="rounded-lg bg-slate-50 border-3 border-black px-4 py-3 text-xs text-slate-600">
        <p className="font-medium mb-1">Add to your HTML:</p>
        <code>{`<link rel="icon" type="image/png" sizes="${size}x${size}" href="/favicon-${size}x${size}.png">`}</code>
      </div>
    </div>
  );
}
