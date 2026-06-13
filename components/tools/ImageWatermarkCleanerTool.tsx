"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

type ImageWatermarkCleanerToolProps = {
  modelName?: string;
};

type Loaded = {
  file: File;
  url: string;
  width: number;
  height: number;
  img: HTMLImageElement;
};

type CropPct = { top: number; right: number; bottom: number; left: number };

const NO_CROP: CropPct = { top: 0, right: 0, bottom: 0, left: 0 };

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export function ImageWatermarkCleanerTool({ modelName }: ImageWatermarkCleanerToolProps) {
  const label = modelName ?? 'AI';
  const [loaded, setLoaded] = useState<Loaded | null>(null);
  const [crop, setCrop] = useState<CropPct>(NO_CROP);
  const [format, setFormat] = useState<'image/png' | 'image/jpeg'>('image/png');
  const [error, setError] = useState('');
  const [result, setResult] = useState<{ url: string; size: number; name: string } | null>(null);
  const objectUrls = useRef<string[]>([]);

  const trackUrl = useCallback((url: string) => {
    objectUrls.current.push(url);
    return url;
  }, []);

  useEffect(() => {
    const urls = objectUrls.current;
    return () => {
      urls.forEach((u) => URL.revokeObjectURL(u));
    };
  }, []);

  const handleFile = useCallback(
    (file: File | null) => {
      setError('');
      setResult(null);
      setCrop(NO_CROP);
      if (!file) {
        setLoaded(null);
        return;
      }
      if (!file.type.startsWith('image/')) {
        setError('Please choose an image file (PNG, JPEG, WebP, etc.).');
        setLoaded(null);
        return;
      }
      const url = trackUrl(URL.createObjectURL(file));
      const img = new Image();
      img.onload = () => {
        setLoaded({ file, url, width: img.naturalWidth, height: img.naturalHeight, img });
      };
      img.onerror = () => {
        setError('That image could not be decoded by the browser.');
        setLoaded(null);
      };
      img.src = url;
    },
    [trackUrl],
  );

  const handleClean = useCallback(() => {
    if (!loaded) return;
    setError('');

    const { img, width, height } = loaded;
    const cropX = Math.round((crop.left / 100) * width);
    const cropY = Math.round((crop.top / 100) * height);
    const outW = Math.max(1, Math.round(width - cropX - (crop.right / 100) * width));
    const outH = Math.max(1, Math.round(height - cropY - (crop.bottom / 100) * height));

    const canvas = document.createElement('canvas');
    canvas.width = outW;
    canvas.height = outH;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      setError('Canvas is not supported in this browser.');
      return;
    }
    // Re-drawing pixels into a fresh canvas and re-encoding produces a new file
    // that carries NO original metadata — EXIF, XMP, and C2PA content
    // credentials are all dropped. Cropping additionally removes corner overlays.
    ctx.drawImage(img, cropX, cropY, outW, outH, 0, 0, outW, outH);

    canvas.toBlob(
      (blob) => {
        if (!blob) {
          setError('Could not export the cleaned image.');
          return;
        }
        const ext = format === 'image/png' ? 'png' : 'jpg';
        const base = loaded.file.name.replace(/\.[^.]+$/, '');
        const url = trackUrl(URL.createObjectURL(blob));
        setResult({ url, size: blob.size, name: `${base}-cleaned.${ext}` });
      },
      format,
      format === 'image/jpeg' ? 0.92 : undefined,
    );
  }, [loaded, crop, format, trackUrl]);

  const reset = useCallback(() => {
    setLoaded(null);
    setCrop(NO_CROP);
    setResult(null);
    setError('');
  }, []);

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-[1fr,1fr]">
        <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <label className="block text-sm font-semibold text-slate-800">Upload image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
            className="block w-full text-sm text-slate-700 file:mr-4 file:rounded-lg file:border-0 file:bg-brand-700 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-brand-800"
          />
          <p className="text-sm text-slate-600">
            Strips all embedded metadata from {label} images — EXIF, XMP, and
            C2PA content credentials / provenance tags — by re-encoding the
            pixels in your browser. Nothing is uploaded.
          </p>

          {loaded ? (
            <div className="space-y-3 border-t border-slate-200 pt-3">
              <p className="text-xs text-slate-500">
                {loaded.file.name} — {loaded.width}×{loaded.height}px, {formatBytes(loaded.file.size)}
              </p>

              <div>
                <p className="text-xs font-semibold text-slate-700">Optional crop (for visible corner logos)</p>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
                    <label key={side} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="w-12 capitalize">{side}</span>
                      <input
                        type="range"
                        min={0}
                        max={40}
                        value={crop[side]}
                        onChange={(e) => setCrop((p) => ({ ...p, [side]: Number(e.target.value) }))}
                        className="flex-1"
                      />
                      <span className="w-8 text-right tabular-nums">{crop[side]}%</span>
                    </label>
                  ))}
                </div>
              </div>

              <label className="flex items-center gap-2 text-xs text-slate-700">
                <span className="font-semibold">Output format</span>
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value as 'image/png' | 'image/jpeg')}
                  className="rounded border border-slate-300 px-2 py-1 text-xs"
                >
                  <option value="image/png">PNG (lossless)</option>
                  <option value="image/jpeg">JPEG (smaller)</option>
                </select>
              </label>
            </div>
          ) : null}
        </div>

        <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
          {result ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={result.url} alt="Cleaned output preview" className="max-h-64 w-auto rounded border border-slate-200" />
              <p className="text-xs text-slate-500">Cleaned — {formatBytes(result.size)}, metadata removed</p>
              <a
                href={result.url}
                download={result.name}
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700"
              >
                Download cleaned image ↓
              </a>
            </>
          ) : loaded ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={loaded.url} alt="Source preview" className="max-h-64 w-auto rounded border border-slate-200 opacity-80" />
          ) : (
            <p className="text-center text-sm text-slate-400">Cleaned image preview will appear here.</p>
          )}
        </div>
      </div>

      {error ? <p className="text-sm text-rose-600">{error}</p> : null}

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleClean}
          disabled={!loaded}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Clean image
        </button>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Clear
        </button>
      </div>

      <p className="text-xs text-slate-500">
        Note: this removes embedded metadata and (with crop) visible corner
        overlays. Steganographic watermarks such as Google SynthID are woven
        into the pixels to survive re-encoding and cannot be removed by any
        in-browser tool.
      </p>

      {result ? <HumanizerUpsellCard variant="watermark" /> : null}
    </div>
  );
}
