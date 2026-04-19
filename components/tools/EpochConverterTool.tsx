"use client";

import { useState, useEffect, useRef } from 'react';

function detectAndConvert(raw: string): { seconds: number; ms: number } | null {
  const n = Number(raw.trim());
  if (isNaN(n) || raw.trim() === '') return null;
  if (raw.trim().length >= 13) return { seconds: Math.floor(n / 1000), ms: n };
  return { seconds: n, ms: n * 1000 };
}

function relativeTime(seconds: number): string {
  const now = Math.floor(Date.now() / 1000);
  const diff = seconds - now;
  const abs = Math.abs(diff);
  const past = diff < 0;
  if (abs < 60) return past ? `${abs} seconds ago` : `in ${abs} seconds`;
  if (abs < 3600) return past ? `${Math.floor(abs / 60)} minutes ago` : `in ${Math.floor(abs / 60)} minutes`;
  if (abs < 86400) return past ? `${Math.floor(abs / 3600)} hours ago` : `in ${Math.floor(abs / 3600)} hours`;
  if (abs < 2592000) return past ? `${Math.floor(abs / 86400)} days ago` : `in ${Math.floor(abs / 86400)} days`;
  if (abs < 31536000) return past ? `${Math.floor(abs / 2592000)} months ago` : `in ${Math.floor(abs / 2592000)} months`;
  return past ? `${Math.floor(abs / 31536000)} years ago` : `in ${Math.floor(abs / 31536000)} years`;
}

function dayOfYear(d: Date): number {
  const start = new Date(d.getFullYear(), 0, 0);
  return Math.floor((d.getTime() - start.getTime()) / 86400000);
}

function CopyBtn({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button onClick={() => { navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
      className="text-xs px-2 py-0.5 rounded border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600 shrink-0">
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 py-2 border-b border-slate-100 last:border-0">
      <span className="text-xs font-medium text-slate-500 w-40 shrink-0">{label}</span>
      <span className="text-sm text-slate-800 font-mono flex-1 truncate">{value}</span>
      <CopyBtn value={value} />
    </div>
  );
}

export function EpochConverterTool() {
  const [tab, setTab] = useState<'toDate' | 'toEpoch'>('toDate');
  const [tsInput, setTsInput] = useState('');
  const [tsResult, setTsResult] = useState<Record<string, string> | null>(null);
  const [tsError, setTsError] = useState('');
  const [dtInput, setDtInput] = useState('');
  const [dtResult, setDtResult] = useState<Record<string, string> | null>(null);
  const [nowTs, setNowTs] = useState(Math.floor(Date.now() / 1000));
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => setNowTs(Math.floor(Date.now() / 1000)), 1000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, []);

  const convertTs = () => {
    const parsed = detectAndConvert(tsInput);
    if (!parsed) { setTsError('Invalid timestamp — enter a 10-digit (seconds) or 13-digit (ms) number.'); setTsResult(null); return; }
    setTsError('');
    const d = new Date(parsed.ms);
    const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    setTsResult({
      'Local Date / Time': d.toLocaleString(),
      'UTC Date / Time': d.toUTCString(),
      'ISO 8601': d.toISOString(),
      'Relative Time': relativeTime(parsed.seconds),
      'Day of Week': DAYS[d.getDay()],
      'Day of Year': String(dayOfYear(d)),
      'Unix (seconds)': String(parsed.seconds),
      'Unix (milliseconds)': String(parsed.ms),
    });
  };

  const convertDt = () => {
    if (!dtInput) return;
    const d = new Date(dtInput);
    if (isNaN(d.getTime())) return;
    const sec = Math.floor(d.getTime() / 1000);
    setDtResult({
      'Unix Timestamp (seconds)': String(sec),
      'Unix Timestamp (ms)': String(d.getTime()),
      'UTC String': d.toUTCString(),
      'ISO 8601': d.toISOString(),
      'Local String': d.toLocaleString(),
    });
  };

  return (
    <div className="space-y-5">
      <div className="rounded-xl bg-slate-900 text-green-400 px-4 py-3 font-mono flex items-center justify-between gap-3">
        <span className="text-slate-400 text-xs">Current Unix Timestamp</span>
        <span className="text-xl font-bold tracking-wide">{nowTs}</span>
        <CopyBtn value={String(nowTs)} />
      </div>

      <div className="flex gap-1 rounded-lg bg-slate-100 p-1">
        {(['toDate', 'toEpoch'] as const).map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition ${tab === t ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}>
            {t === 'toDate' ? 'Timestamp → Date' : 'Date → Timestamp'}
          </button>
        ))}
      </div>

      {tab === 'toDate' && (
        <div className="space-y-3">
          <div className="flex gap-2">
            <input value={tsInput} onChange={e => setTsInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && convertTs()}
              placeholder="Unix timestamp (e.g. 1713456000 or 1713456000000)"
              className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-100" />
            <button onClick={() => { setTsInput(String(nowTs)); setTsError(''); setTsResult(null); }}
              className="px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600 whitespace-nowrap">Now</button>
            <button onClick={convertTs}
              className="px-4 py-2 text-sm font-medium rounded-xl bg-blue-600 text-white hover:bg-blue-700">Convert</button>
          </div>
          {tsError && <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{tsError}</p>}
          {tsResult && (
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              {Object.entries(tsResult).map(([l, v]) => <Row key={l} label={l} value={v} />)}
            </div>
          )}
        </div>
      )}

      {tab === 'toEpoch' && (
        <div className="space-y-3">
          <div className="flex gap-2">
            <input type="datetime-local" value={dtInput} onChange={e => setDtInput(e.target.value)}
              className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100" />
            <button onClick={convertDt}
              className="px-4 py-2 text-sm font-medium rounded-xl bg-blue-600 text-white hover:bg-blue-700">Convert</button>
          </div>
          {dtResult && (
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              {Object.entries(dtResult).map(([l, v]) => <Row key={l} label={l} value={v} />)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
