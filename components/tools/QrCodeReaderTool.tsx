'use client';

import { useRef, useState } from 'react';
import jsQR from 'jsqr';

export function QrCodeReaderTool() {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function decodeFile(file: File) {
    setError('');
    setResult('');
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file (PNG, JPG, GIF, WebP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);
        if (code) {
          setResult(code.data);
        } else {
          setError('No QR code found in this image. Make sure the QR code is clear and fully visible.');
        }
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) decodeFile(file);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) decodeFile(file);
  }

  function handleCopy() {
    if (result) navigator.clipboard.writeText(result);
  }

  function handleClear() {
    setResult('');
    setError('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  return (
    <div className="space-y-4">
      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-lg p-10 text-center cursor-pointer transition-colors ${
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-slate-300 hover:border-blue-400 hover:bg-slate-50'
        }`}
      >
        <svg className="mx-auto mb-3 w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        <p className="text-sm font-medium text-slate-700">Drop a QR code image here or click to upload</p>
        <p className="text-xs text-slate-400 mt-1">PNG, JPG, GIF, WebP supported</p>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      {error && (
        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {result && (
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Decoded content</label>
          <div className="relative">
            <textarea
              readOnly
              value={result}
              rows={4}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 resize-none"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
            >
              Copy result
            </button>
            {result.startsWith('http://') || result.startsWith('https://') ? (
              <a
                href={result}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-medium transition-colors"
              >
                Open URL
              </a>
            ) : null}
            <button
              onClick={handleClear}
              className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium transition-colors"
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
