'use client';

import { useRef, useState } from 'react';

export function ImageToBase64Tool() {
  const [result, setResult] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [copied, setCopied] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function processFile(file: File) {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = e => {
      const dataUrl = e.target?.result as string;
      setImgSrc(dataUrl);
      setResult(dataUrl);
      setCopied('');
    };
    reader.readAsDataURL(file);
  }

  function copy(text: string, key: string) {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(''), 2000);
  }

  const base64Only = result.split(',')[1] || '';

  return (
    <div className="space-y-4">
      <div
        onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={e => { e.preventDefault(); setIsDragging(false); const f = e.dataTransfer.files?.[0]; if (f) processFile(f); }}
        onClick={() => fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-black hover:border-blue-400 hover:bg-slate-50'}`}
      >
        <p className="text-sm font-medium text-slate-700">Drop an image here or click to upload</p>
        <p className="text-xs text-slate-400 mt-1">PNG, JPG, GIF, WebP, SVG</p>
        <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) processFile(f); }} />
      </div>

      {imgSrc && (
        <div className="flex items-center gap-3">
          <img src={imgSrc} alt="Preview" className="w-16 h-16 rounded object-cover border-3 border-black" />
          <span className="text-sm text-slate-600">Image loaded</span>
        </div>
      )}

      {result && (
        <div className="space-y-3">
          {[['Data URL (full)', result, 'dataurl'], ['Base64 only', base64Only, 'b64'], ['CSS background', `background-image: url('${result}');`, 'css'], ['HTML img tag', `<img src="${result}" alt="" />`, 'html']].map(([label, val, key]) => (
            <div key={key} className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-slate-600">{label}</label>
                <button onClick={() => copy(val, key)} className={`px-3 py-1 rounded text-xs font-medium transition-colors ${copied === key ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>{copied === key ? '✓ Copied!' : 'Copy'}</button>
              </div>
              <textarea readOnly value={val} rows={2} className="w-full rounded border-3 border-black bg-slate-50 px-2 py-1.5 text-xs font-mono resize-none" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
