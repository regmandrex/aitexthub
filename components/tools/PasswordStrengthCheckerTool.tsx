"use client";

import { useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

const COMMON = ['password','123456','qwerty','abc123','letmein','monkey','iloveyou','admin','welcome','login'];

function checkPassword(pwd: string) {
  const len = pwd.length;
  const hasUpper = /[A-Z]/.test(pwd);
  const hasLower = /[a-z]/.test(pwd);
  const hasNum = /[0-9]/.test(pwd);
  const hasSymbol = /[^A-Za-z0-9]/.test(pwd);
  const noCommonSeq = !/123|abc|qwe|asd|zxc|password|letme/i.test(pwd);
  const noRepeat = !/(.)\1{2,}/.test(pwd);
  const notCommon = !COMMON.includes(pwd.toLowerCase());

  let score = 0;
  if (len >= 8) score += 10;
  if (len >= 12) score += 15;
  if (len >= 16) score += 15;
  if (hasUpper) score += 10;
  if (hasLower) score += 10;
  if (hasNum) score += 10;
  if (hasSymbol) score += 15;
  if (noCommonSeq) score += 8;
  if (noRepeat) score += 4;
  if (notCommon) score += 3;

  let label: string, color: string;
  if (score < 20) { label = 'Very Weak'; color = 'bg-red-500'; }
  else if (score < 40) { label = 'Weak'; color = 'bg-orange-400'; }
  else if (score < 60) { label = 'Fair'; color = 'bg-yellow-400'; }
  else if (score < 80) { label = 'Strong'; color = 'bg-blue-500'; }
  else { label = 'Very Strong'; color = 'bg-green-500'; }

  // Crack time estimate
  const charSpace = (hasLower ? 26 : 0) + (hasUpper ? 26 : 0) + (hasNum ? 10 : 0) + (hasSymbol ? 32 : 0);
  const combinations = Math.pow(Math.max(charSpace, 1), len);
  const guessesPerSec = 1e10;
  const seconds = combinations / guessesPerSec;
  let crackTime: string;
  if (seconds < 1) crackTime = 'instantly';
  else if (seconds < 60) crackTime = `${Math.ceil(seconds)} seconds`;
  else if (seconds < 3600) crackTime = `${Math.ceil(seconds / 60)} minutes`;
  else if (seconds < 86400) crackTime = `${Math.ceil(seconds / 3600)} hours`;
  else if (seconds < 2592000) crackTime = `${Math.ceil(seconds / 86400)} days`;
  else if (seconds < 31536000) crackTime = `${Math.ceil(seconds / 2592000)} months`;
  else if (seconds < 3.15e9) crackTime = `${Math.ceil(seconds / 31536000)} years`;
  else crackTime = 'centuries';

  return { score, label, color, crackTime, criteria: { len8: len >= 8, len12: len >= 12, len16: len >= 16, hasUpper, hasLower, hasNum, hasSymbol, noCommonSeq, noRepeat, notCommon } };
}

function generatePassword(): string {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const nums = '0123456789';
  const syms = '!@#$%^&*()-_=+[]{}|;:,.<>?';
  const all = upper + lower + nums + syms;
  const arr = new Uint32Array(16);
  crypto.getRandomValues(arr);
  const pwd = Array.from(arr).map((n, i) => {
    if (i === 0) return upper[n % upper.length];
    if (i === 1) return lower[n % lower.length];
    if (i === 2) return nums[n % nums.length];
    if (i === 3) return syms[n % syms.length];
    return all[n % all.length];
  });
  return pwd.sort(() => Math.random() - 0.5).join('');
}

function Criterion({ label, met }: { label: string; met: boolean }) {
  return (
    <div className={`flex items-center gap-2 text-sm ${met ? 'text-green-700' : 'text-slate-400'}`}>
      <span className={`w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold ${met ? 'bg-green-100' : 'bg-slate-100'}`}>
        {met ? '✓' : '✗'}
      </span>
      {label}
    </div>
  );
}

export function PasswordStrengthCheckerTool() {
  const [pwd, setPwd] = useState('');
  const [show, setShow] = useState(false);
  const [generated, setGenerated] = useState('');
  const [copiedGen, setCopiedGen] = useState(false);

  const result = pwd ? checkPassword(pwd) : null;

  const gen = () => {
    const p = generatePassword();
    setGenerated(p);
    setPwd(p);
  };

  return (
    <div className="space-y-5">
      <div className="relative">
        <input
          type={show ? 'text' : 'password'}
          value={pwd}
          onChange={e => setPwd(e.target.value)}
          placeholder="Type or paste your password..."
          className="w-full rounded-xl border-3 border-black px-4 py-3 pr-20 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-100 font-mono"
        />
        <button onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-700 px-2 py-1 border-3 border-black rounded-lg bg-white">
          {show ? 'Hide' : 'Show'}
        </button>
      </div>

      {result && (
        <>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-700">Strength: <span className="font-semibold">{result.label}</span></span>
              <span className="text-slate-500">Score: {result.score}/100</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5">
              <div className={`h-2.5 rounded-full transition-all ${result.color}`} style={{ width: `${result.score}%` }} />
            </div>
            <p className="text-sm text-slate-600">Estimated crack time: <strong>{result.crackTime}</strong></p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 rounded-xl border-3 border-black bg-slate-50 p-4">
            <Criterion label="At least 8 characters" met={result.criteria.len8} />
            <Criterion label="At least 12 characters" met={result.criteria.len12} />
            <Criterion label="At least 16 characters" met={result.criteria.len16} />
            <Criterion label="Uppercase letters (A–Z)" met={result.criteria.hasUpper} />
            <Criterion label="Lowercase letters (a–z)" met={result.criteria.hasLower} />
            <Criterion label="Numbers (0–9)" met={result.criteria.hasNum} />
            <Criterion label="Special characters (!@#...)" met={result.criteria.hasSymbol} />
            <Criterion label="No common sequences" met={result.criteria.noCommonSeq} />
            <Criterion label="No repeated characters" met={result.criteria.noRepeat} />
            <Criterion label="Not a common password" met={result.criteria.notCommon} />
          </div>
        </>
      )}

      <div className="border-t-2 border-black pt-4">
        <p className="text-sm font-medium text-slate-700 mb-2">Generate a strong password:</p>
        <div className="flex gap-2 items-center">
          <button onClick={gen} className="px-4 py-2 text-sm font-medium rounded-xl bg-green-600 text-white hover:bg-green-700">
            Generate Password
          </button>
          {generated && (
            <>
              <span className="text-sm font-mono text-slate-800 bg-slate-100 px-3 py-1.5 rounded-lg flex-1 truncate">{generated}</span>
              <button onClick={() => { navigator.clipboard.writeText(generated); setCopiedGen(true); setTimeout(() => setCopiedGen(false), 1500); }}
                className="text-xs px-2 py-1.5 rounded-lg border-3 border-black bg-white hover:bg-slate-50">
                {copiedGen ? 'Copied!' : 'Copy'}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
