'use client';

import { useEffect, useState } from 'react';
import * as OTPAuth from 'otpauth';

export function TotpGeneratorTool() {
  const [secret, setSecret] = useState('');
  const [token, setToken] = useState('');
  const [remaining, setRemaining] = useState(30);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [generated, setGenerated] = useState('');

  function generateSecret() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    const arr = crypto.getRandomValues(new Uint8Array(20));
    setGenerated(Array.from(arr).map(b => chars[b % 32]).join(''));
  }

  useEffect(() => {
    const tick = () => setRemaining(30 - (Math.floor(Date.now() / 1000) % 30));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  function generate() {
    setError('');
    const key = secret || generated;
    if (!key) { setError('Enter or generate a secret key first.'); return; }
    try {
      const totp = new OTPAuth.TOTP({ secret: OTPAuth.Secret.fromBase32(key.toUpperCase()), digits: 6, period: 30 });
      setToken(totp.generate());
      setCopied(false);
    } catch {
      setError('Invalid Base32 secret key. Use only A-Z and 2-7.');
    }
  }

  function copy() {
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Secret key (Base32)</label>
        <div className="flex gap-2">
          <input type="text" value={secret || generated} onChange={e => { setSecret(e.target.value); setGenerated(''); }} placeholder="JBSWY3DPEHPK3PXP" className="flex-1 rounded-lg border-3 border-black px-3 py-2 text-sm font-mono uppercase focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button onClick={generateSecret} className="px-4 py-2 rounded-lg border-3 border-black hover:bg-slate-50 text-slate-700 text-sm font-medium transition-colors whitespace-nowrap">Generate secret</button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button onClick={generate} className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors">Generate TOTP</button>
        <div className="flex items-center gap-1.5 text-sm text-slate-500">
          <div className="w-4 h-4 rounded-full border-2 border-black relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-500 transition-all" style={{ clipPath: `polygon(50% 50%, 50% 0%, ${remaining > 15 ? '100% 0%, 100% 100%, 0% 100%, 0% 0%,' : ''} ${50 + 50 * Math.sin((30 - remaining) / 30 * Math.PI * 2)}% ${50 - 50 * Math.cos((30 - remaining) / 30 * Math.PI * 2)}%)` }} />
          </div>
          {remaining}s remaining
        </div>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      {token && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">TOTP token (valid for ~{remaining}s)</label>
          <div className="flex items-center gap-3">
            <code className="text-3xl font-mono font-bold text-slate-900 tracking-widest">{token}</code>
            <button onClick={copy} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${copied ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>{copied ? '✓ Copied!' : 'Copy'}</button>
            <button onClick={generate} className="px-4 py-2 rounded-lg border-3 border-black hover:bg-slate-50 text-slate-700 text-sm font-medium transition-colors">Refresh</button>
          </div>
        </div>
      )}
    </div>
  );
}
