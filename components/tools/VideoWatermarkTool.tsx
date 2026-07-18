'use client';

import { useRef, useState } from 'react';
import ToolTextArea from './ToolTextArea';
import HumanizerUpsellCard from '../HumanizerUpsellCard';
import { scanVideoMetadata, removeVideoMetadata, type MetadataHit } from '@/lib/video/mp4-metadata';

type VideoWatermarkToolProps = {
  mode: 'detect' | 'remove';
  modelName?: string;
};

function fmtKB(bytes: number): string {
  return bytes >= 1024 * 1024
    ? `${(bytes / (1024 * 1024)).toFixed(1)} MB`
    : `${(bytes / 1024).toFixed(1)} KB`;
}

function describeHits(hits: MetadataHit[]): string[] {
  return hits.map((h) => {
    const lines = [`• ${h.label} — ${h.path} (${fmtKB(h.size)})`];
    if (h.details.length > 0) {
      lines.push(`   contains: ${h.details.slice(0, 4).join(' · ')}`);
    }
    return lines.join('\n');
  });
}

export default function VideoWatermarkTool({ mode, modelName }: VideoWatermarkToolProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [report, setReport] = useState('');
  const [busy, setBusy] = useState(false);
  const [cleanedUrl, setCleanedUrl] = useState<string | null>(null);
  const [cleanedName, setCleanedName] = useState('');
  const [showUpsell, setShowUpsell] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const model = modelName ?? 'AI';

  const reset = () => {
    if (cleanedUrl) URL.revokeObjectURL(cleanedUrl);
    setSelectedFile(null);
    setReport('');
    setCleanedUrl(null);
    setCleanedName('');
    setShowUpsell(false);
    if (inputRef.current) inputRef.current.value = '';
  };

  const handleRun = async () => {
    if (!selectedFile || busy) return;
    setBusy(true);
    if (cleanedUrl) URL.revokeObjectURL(cleanedUrl);
    setCleanedUrl(null);

    try {
      const bytes = new Uint8Array(await selectedFile.arrayBuffer());
      const scan = scanVideoMetadata(bytes);

      const header = [
        `${model} video watermark ${mode === 'detect' ? 'scan' : 'removal'} report`,
        '',
        `File: ${selectedFile.name} (${fmtKB(selectedFile.size)})`,
        '',
      ];

      if (scan.container === 'webm') {
        setReport(
          [
            ...header,
            'This file is WebM/MKV, which uses a different container format.',
            'Export or convert the video to MP4 (H.264) and run it again —',
            'metadata watermark handling here supports MP4 and MOV files.',
          ].join('\n'),
        );
        return;
      }
      if (scan.container === 'unknown') {
        setReport(
          [
            ...header,
            'This file does not look like an MP4/MOV container, so it cannot',
            'be scanned for metadata watermarks. Supported formats: MP4, MOV.',
          ].join('\n'),
        );
        return;
      }

      if (scan.hits.length === 0) {
        setReport(
          [
            ...header,
            'No metadata watermarks found.',
            '',
            'Common reasons: the file already passed through a platform that',
            'strips metadata on upload (most social networks do), it was',
            're-exported by an editor, or it was generated before watermarking',
            'was introduced. There is nothing to remove at the metadata layer.',
          ].join('\n'),
        );
        setShowUpsell(true);
        return;
      }

      const found = [
        `Found ${scan.hits.length} metadata ${scan.hits.length === 1 ? 'block' : 'blocks'}:`,
        '',
        ...describeHits(scan.hits),
        '',
      ];

      if (mode === 'detect') {
        setReport(
          [
            ...header,
            ...found,
            'Note: pixel-level signals (e.g. SynthID) are embedded in the video',
            'frames themselves and cannot be detected from the metadata layer.',
          ].join('\n'),
        );
      } else {
        const cleaned = removeVideoMetadata(bytes, scan.hits);
        const blob = new Blob([cleaned.buffer as ArrayBuffer], { type: selectedFile.type || 'video/mp4' });
        const dot = selectedFile.name.lastIndexOf('.');
        const name =
          dot > 0
            ? `${selectedFile.name.slice(0, dot)}-clean${selectedFile.name.slice(dot)}`
            : `${selectedFile.name}-clean.mp4`;
        setCleanedUrl(URL.createObjectURL(blob));
        setCleanedName(name);
        setReport(
          [
            ...header,
            ...found,
            `Removed all ${scan.hits.length} metadata ${scan.hits.length === 1 ? 'block' : 'blocks'} — the cleaned file is ready to download below.`,
            'The video stream itself is untouched: identical quality, identical size.',
            '',
            'Note: pixel-level signals (e.g. SynthID) live in the video frames and',
            'are not affected by metadata removal.',
          ].join('\n'),
        );
      }
      setShowUpsell(true);
    } catch {
      setReport('Could not read this file. Try re-exporting it as a standard MP4 and running it again.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <label className="text-sm font-semibold text-slate-800">Upload video</label>
          <input
            ref={inputRef}
            type="file"
            accept="video/mp4,video/quicktime,.mp4,.mov"
            onChange={(event) => setSelectedFile(event.target.files?.[0] ?? null)}
            className="block w-full text-sm text-slate-700 file:mr-4 file:rounded-lg file:border-0 file:bg-brand-700 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-brand-800"
          />
          <p className="text-sm text-slate-600">
            {mode === 'detect'
              ? `Scans ${model} MP4/MOV exports for C2PA manifests, XMP packets, and encoder tags — entirely in your browser.`
              : `Strips C2PA manifests, XMP packets, and encoder tags from ${model} MP4/MOV exports — entirely in your browser, no upload.`}
          </p>
        </div>
        <ToolTextArea
          label="Report"
          value={report}
          onChange={setReport}
          placeholder={
            mode === 'detect'
              ? 'The metadata scan report will appear here.'
              : 'The removal report will appear here.'
          }
          rows={12}
          readOnly
        />
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleRun}
          disabled={!selectedFile || busy}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {busy ? 'Working…' : mode === 'detect' ? 'Scan file' : 'Remove watermarks'}
        </button>
        {cleanedUrl ? (
          <a
            href={cleanedUrl}
            download={cleanedName}
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700"
          >
            Download cleaned video
          </a>
        ) : null}
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Clear
        </button>
      </div>
      {selectedFile ? (
        <p className="text-xs text-slate-500">
          Selected file: {selectedFile.name} ({fmtKB(selectedFile.size)}) — processed locally, never uploaded.
        </p>
      ) : null}
      <p className="text-xs text-slate-500">
        Metadata removal is complete and reliable. Pixel-level watermarks (such as Google SynthID) are
        woven into the video frames to survive re-encoding and cannot be removed by any metadata tool.
      </p>
      {showUpsell && report ? <HumanizerUpsellCard variant="watermark" /> : null}
    </div>
  );
}
