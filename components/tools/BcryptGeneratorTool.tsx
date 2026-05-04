'use client';

import { useState } from 'react';
import bcrypt from 'bcryptjs';

export function BcryptGeneratorTool() {
  const [password, setPassword] = useState('');
  const [hash, setHash] = useState('');
  const [verifyInput, setVerifyInput] = useState('');
  const [verifyResult, setVerifyResult] = useState<boolean | null>(null);
  const [rounds, setRounds] = useState(10);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  async function generate() {
    if (!password) return;
    setLoading(true);
    setHash('');
    const h = await bcrypt.hash(password, rounds);
    setHash(h);
    setLoading(false);
    setCopied(false);
  }

  async function verify() {
    if (!verifyInput || !hash) return;
    const result = await bcrypt.compare(verifyInput, hash);
    setVerifyResult(result);
  }

  function copy() {
    navigator.clipboard.writeText(hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Password to hash</label>
          <input type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password..." className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium text-slate-700">Cost factor (rounds)</label>
          <select value={rounds} onChange={e => setRounds(Number(e.target.value))} className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            {[8, 9, 10, 11, 12].map(r => <option key={r} value={r}>{r} {r === 10 ? '(default)' : r >= 12 ? '(slow)' : ''}</option>)}
          </select>
        </div>
        <button onClick={generate} disabled={!password || loading} className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-medium transition-colors">
          {loading ? 'Generating...' : 'Generate hash'}
        </button>
      </div>

      {hash && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">Bcrypt hash</label>
          <div className="flex items-start gap-2">
            <code className="flex-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-mono break-all">{hash}</code>
            <button onClick={copy} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${copied ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>{copied ? '✓ Copied!' : 'Copy'}</button>
          </div>
        </div>
      )}

      {hash && (
        <div className="space-y-2 border-t border-slate-200 pt-4">
          <label className="block text-sm font-medium text-slate-700">Verify password</label>
          <div className="flex gap-2">
            <input type="text" value={verifyInput} onChange={e => { setVerifyInput(e.target.value); setVerifyResult(null); }} placeholder="Enter password to verify..." className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button onClick={verify} className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-800 text-white text-sm font-medium transition-colors">Verify</button>
          </div>
          {verifyResult !== null && (
            <p className={`text-sm font-medium ${verifyResult ? 'text-green-600' : 'text-red-600'}`}>
              {verifyResult ? '✓ Password matches the hash' : '✗ Password does not match'}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
