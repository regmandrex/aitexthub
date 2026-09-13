'use client';

import { useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

const presets = [
  { label: 'Every minute', cron: '* * * * *' },
  { label: 'Every 5 minutes', cron: '*/5 * * * *' },
  { label: 'Every hour', cron: '0 * * * *' },
  { label: 'Every day at midnight', cron: '0 0 * * *' },
  { label: 'Every day at noon', cron: '0 12 * * *' },
  { label: 'Every Monday at 9am', cron: '0 9 * * 1' },
  { label: 'Every weekday at 8am', cron: '0 8 * * 1-5' },
  { label: 'Every Sunday at midnight', cron: '0 0 * * 0' },
  { label: 'First day of month', cron: '0 0 1 * *' },
  { label: 'Every year Jan 1', cron: '0 0 1 1 *' },
];

function describe(cron: string): string {
  const parts = cron.trim().split(/\s+/);
  if (parts.length !== 5) return 'Invalid cron expression (need 5 parts)';
  const [min, hour, dom, month, dow] = parts;
  const pre = presets.find(p => p.cron === cron.trim());
  if (pre) return pre.label;
  const parts2: string[] = [];
  if (min === '*') parts2.push('every minute');
  else if (min.startsWith('*/')) parts2.push(`every ${min.slice(2)} minutes`);
  else parts2.push(`at minute ${min}`);
  if (hour !== '*') parts2.push(hour.startsWith('*/') ? `every ${hour.slice(2)} hours` : `hour ${hour}`);
  if (dom !== '*') parts2.push(`on day ${dom}`);
  if (month !== '*') parts2.push(`in month ${month}`);
  if (dow !== '*') parts2.push(`on weekday ${dow}`);
  return parts2.join(', ');
}

export function CronGeneratorTool() {
  const [cron, setCron] = useState('0 * * * *');
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(cron);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Cron expression</label>
        <div className="flex gap-2">
          <input type="text" value={cron} onChange={e => setCron(e.target.value)} className="flex-1 rounded-lg border-3 border-black px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="* * * * *" />
          <button onClick={copy} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${copied ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>{copied ? '✓ Copied!' : 'Copy'}</button>
        </div>
        <p className="mt-2 text-xs text-slate-500 font-mono">minute · hour · day-of-month · month · day-of-week</p>
      </div>

      <div className="rounded-lg bg-slate-50 border-3 border-black px-4 py-3">
        <p className="text-sm text-slate-700"><span className="font-medium">Meaning: </span>{describe(cron)}</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Common presets</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {presets.map(p => (
            <button key={p.cron} onClick={() => setCron(p.cron)} className={`text-left px-3 py-2 rounded-lg border text-sm transition-colors ${cron === p.cron ? 'border-blue-500 bg-blue-50 text-blue-800' : 'border-black hover:bg-slate-50 text-slate-700'}`}>
              <span className="font-mono text-xs text-slate-500 block">{p.cron}</span>
              {p.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
