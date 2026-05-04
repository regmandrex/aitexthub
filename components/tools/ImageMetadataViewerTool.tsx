'use client';

import { useRef, useState } from 'react';
import exifr from 'exifr';

export function ImageMetadataViewerTool() {
  const [meta, setMeta] = useState<Record<string, unknown> | null>(null);
  const [basic, setBasic] = useState<{ name: string; size: string; type: string; width?: number; height?: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function processFile(file: File) {
    setMeta(null);
    const sizeMB = (file.size / 1024 / 1024).toFixed(2);
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = async () => {
      setBasic({ name: file.name, size: `${sizeMB} MB`, type: file.type, width: img.width, height: img.height });
      URL.revokeObjectURL(url);
      try {
        const exif = await exifr.parse(file, { tiff: true, exif: true, gps: true, icc: false });
        setMeta(exif || {});
      } catch {
        setMeta({});
      }
    };
    img.src = url;
  }

  const exifEntries = meta ? Object.entries(meta).filter(([, v]) => v !== undefined && v !== null) : [];

  return (
    <div className="space-y-4">
      <div
        onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={e => { e.preventDefault(); setIsDragging(false); const f = e.dataTransfer.files?.[0]; if (f) processFile(f); }}
        onClick={() => fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-slate-300 hover:border-blue-400 hover:bg-slate-50'}`}
      >
        <p className="text-sm font-medium text-slate-700">Drop an image here or click to upload</p>
        <p className="text-xs text-slate-400 mt-1">PNG, JPG, TIFF, HEIC supported</p>
        <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) processFile(f); }} />
      </div>

      {basic && (
        <div className="rounded-lg border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 text-xs font-medium text-slate-600">File info</div>
          <table className="w-full text-sm">
            <tbody>
              {[['File name', basic.name], ['File size', basic.size], ['Type', basic.type], ['Dimensions', basic.width ? `${basic.width} × ${basic.height} px` : '—']].map(([k, v]) => (
                <tr key={k} className="border-b border-slate-100 last:border-0">
                  <td className="px-3 py-2 text-slate-500 font-medium w-1/3">{k}</td>
                  <td className="px-3 py-2 text-slate-800 font-mono text-xs">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {meta && (
        <div className="rounded-lg border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 text-xs font-medium text-slate-600">EXIF / metadata ({exifEntries.length} fields)</div>
          {exifEntries.length === 0
            ? <p className="px-3 py-3 text-sm text-slate-500">No EXIF metadata found in this image.</p>
            : <table className="w-full text-sm">
                <tbody>
                  {exifEntries.map(([k, v]) => (
                    <tr key={k} className="border-b border-slate-100 last:border-0">
                      <td className="px-3 py-2 text-slate-500 font-medium w-2/5">{k}</td>
                      <td className="px-3 py-2 text-slate-800 font-mono text-xs break-all">{String(v)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
          }
        </div>
      )}
    </div>
  );
}
