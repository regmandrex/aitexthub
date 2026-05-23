"use client";

import { useMemo, useState } from 'react';
import ToolTextArea from './ToolTextArea';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

type RankTrackerToolProps = {
  modelName?: string;
};

type GenericAiTextToolProps = {
  actionLabel: string;
  outputLabel: string;
  inputPlaceholder: string;
  outputPlaceholder: string;
  helperText: string;
};

type GenericWatermarkToolProps = {
  mode: 'detect' | 'remove';
  media: 'image' | 'video';
  modelName?: string;
};

function modelLabel(modelName?: string) {
  return modelName ?? 'AI';
}

export function RankTrackerTool({ modelName }: RankTrackerToolProps) {
  const [brand, setBrand] = useState('');
  const [domain, setDomain] = useState('');
  const [queries, setQueries] = useState('');
  const [competitors, setCompetitors] = useState('');
  const [brief, setBrief] = useState('');

  const promptCount = useMemo(
    () => queries.split('\n').map((line) => line.trim()).filter(Boolean).length,
    [queries]
  );

  const handleBuild = () => {
    const promptLines = queries.split('\n').map((line) => line.trim()).filter(Boolean);
    const competitorLines = competitors.split('\n').map((line) => line.trim()).filter(Boolean);

    setBrief(
      [
        `${modelLabel(modelName)} rank tracking brief`,
        '',
        `Brand: ${brand.trim() || 'Your brand'}`,
        `Domain: ${domain.trim() || 'example.com'}`,
        `Prompt count: ${promptLines.length}`,
        `Competitor count: ${competitorLines.length}`,
        '',
        'Suggested tracking workflow:',
        '1. Group prompts by intent: best, compare, alternative, pricing, use case.',
        '2. Save baseline answers and rerun the same prompt set on a schedule.',
        '3. Track mention rate, answer position, framing, and cited sources.',
        '4. Compare changes after new content, PR mentions, and landing page updates.',
        '',
        'Tracked prompts:',
        ...(promptLines.length > 0 ? promptLines.map((line, index) => `${index + 1}. ${line}`) : ['1. Add prompts to generate a query brief.']),
        '',
        'Competitor watchlist:',
        ...(competitorLines.length > 0 ? competitorLines.map((line, index) => `${index + 1}. ${line}`) : ['1. Add direct competitors to compare answer share and positioning.']),
      ].join('\n')
    );
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-800">Brand</label>
              <input
                value={brand}
                onChange={(event) => setBrand(event.target.value)}
                placeholder={`${modelLabel(modelName)} project`}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-800">Website</label>
              <input
                value={domain}
                onChange={(event) => setDomain(event.target.value)}
                placeholder="example.com"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
              />
            </div>
          </div>

          <ToolTextArea
            label="Target prompts"
            helperText={`${promptCount} prompts`}
            value={queries}
            onChange={setQueries}
            placeholder="One prompt per line. Example: Best AI SEO tools for agencies"
            rows={9}
          />
        </div>

        <div className="space-y-4">
          <ToolTextArea
            label="Competitors"
            value={competitors}
            onChange={setCompetitors}
            placeholder="One competitor per line"
            rows={9}
          />
          <ToolTextArea
            label="Tracking brief"
            value={brief}
            onChange={setBrief}
            placeholder="Your tracking brief will appear here."
            rows={9}
            readOnly
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleBuild}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          Build tracking brief
        </button>
        <button
          type="button"
          onClick={() => {
            setBrand('');
            setDomain('');
            setQueries('');
            setCompetitors('');
            setBrief('');
          }}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export function GenericAiTextTool({
  actionLabel,
  outputLabel,
  inputPlaceholder,
  outputPlaceholder,
  helperText,
}: GenericAiTextToolProps) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showUpsell, setShowUpsell] = useState(false);

  const inputWords = input.trim() ? input.trim().split(/\s+/).length : 0;
  const outputWords = output.trim() ? output.trim().split(/\s+/).length : 0;

  const handleRun = () => {
    const clean = input.trim();
    if (!clean) {
      setOutput('');
      setShowUpsell(false);
      return;
    }

    const words = clean.split(/\s+/).length;
    const sentences = clean.split(/[.!?]+/).filter((part) => part.trim().length > 0).length;
    setOutput(
      [
        outputLabel,
        '',
        `Characters: ${clean.length}`,
        `Words: ${words}`,
        `Sentences: ${sentences}`,
        '',
        helperText,
      ].join('\n')
    );
    setShowUpsell(true);
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextArea
          label="Input text"
          value={input}
          onChange={setInput}
          placeholder={inputPlaceholder}
          rows={12}
        />
        <ToolTextArea
          label={outputLabel}
          value={output}
          onChange={setOutput}
          placeholder={outputPlaceholder}
          rows={12}
          readOnly
        />
      </div>
      <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
        Input: {input.length} chars / {inputWords} words · Output: {output.length} chars / {outputWords} words
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleRun}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          {actionLabel}
        </button>
        <button
          type="button"
          onClick={() => {
            setInput('');
            setOutput('');
            setShowUpsell(false);
          }}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Clear
        </button>
      </div>
      {showUpsell && output ? <HumanizerUpsellCard /> : null}
    </div>
  );
}

export function GenericWatermarkTool({ mode, media, modelName }: GenericWatermarkToolProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [report, setReport] = useState('');
  const [showUpsell, setShowUpsell] = useState(false);

  const handleRun = () => {
    if (!selectedFile) {
      setReport('');
      setShowUpsell(false);
      return;
    }

    setReport(
      [
        `${modelLabel(modelName)} ${media} watermark ${mode === 'detect' ? 'review' : 'cleanup'} summary`,
        '',
        `File: ${selectedFile.name}`,
        `Type: ${selectedFile.type || 'unknown'}`,
        `Size: ${(selectedFile.size / (1024 * 1024)).toFixed(2)} MB`,
        '',
        mode === 'detect'
          ? 'Review visible overlays, metadata, provenance fields, and platform-stripped exports.'
          : 'Keep the original file, review provenance requirements, then remove or normalize visible and metadata-level watermark layers where your workflow allows it.',
      ].join('\n')
    );
    setShowUpsell(true);
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <label className="text-sm font-semibold text-slate-800">Upload {media}</label>
          <input
            type="file"
            accept={media === 'image' ? 'image/*' : 'video/*'}
            onChange={(event) => setSelectedFile(event.target.files?.[0] ?? null)}
            className="block w-full text-sm text-slate-700 file:mr-4 file:rounded-lg file:border-0 file:bg-brand-700 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-brand-800"
          />
          <p className="text-sm text-slate-600">
            {mode === 'detect'
              ? `Inspect ${modelLabel(modelName)} ${media} exports for visible and metadata-level watermark signals.`
              : `Prepare a ${modelLabel(modelName)} ${media} watermark cleanup workflow.`}
          </p>
        </div>
        <ToolTextArea
          label="Report"
          value={report}
          onChange={setReport}
          placeholder="Your watermark workflow summary will appear here."
          rows={12}
          readOnly
        />
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleRun}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          {mode === 'detect' ? 'Scan file' : 'Prepare cleanup plan'}
        </button>
        <button
          type="button"
          onClick={() => {
            setSelectedFile(null);
            setReport('');
            setShowUpsell(false);
          }}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Clear
        </button>
      </div>
      {selectedFile ? (
        <p className="text-xs text-slate-500">
          Selected file: {selectedFile.name} ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
        </p>
      ) : null}
      {showUpsell && report ? <HumanizerUpsellCard variant="watermark" /> : null}
    </div>
  );
}