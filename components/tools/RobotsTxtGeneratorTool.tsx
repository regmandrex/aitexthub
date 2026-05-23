'use client';

import { useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

type Rule = { userAgent: string; allow: string; disallow: string };

export function RobotsTxtGeneratorTool() {
  const [rules, setRules] = useState<Rule[]>([{ userAgent: '*', allow: '/', disallow: '' }]);
  const [sitemap, setSitemap] = useState('');
  const [copied, setCopied] = useState(false);

  function addRule() { setRules(r => [...r, { userAgent: '*', allow: '', disallow: '' }]); }
  function removeRule(i: number) { setRules(r => r.filter((_, j) => j !== i)); }
  function updateRule(i: number, field: keyof Rule, val: string) {
    setRules(r => r.map((rule, j) => j === i ? { ...rule, [field]: val } : rule));
  }

  const output = [
    ...rules.map(r => [
      `User-agent: ${r.userAgent || '*'}`,
      ...(r.allow ? r.allow.split('\n').filter(Boolean).map(l => `Allow: ${l}`) : []),
      ...(r.disallow ? r.disallow.split('\n').filter(Boolean).map(l => `Disallow: ${l}`) : []),
      '',
    ].join('\n')),
    sitemap ? `Sitemap: ${sitemap}` : '',
  ].filter(Boolean).join('\n');

  function copy() {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-4">
      {rules.map((rule, i) => (
        <div key={i} className="rounded-lg border border-slate-200 p-3 space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-slate-600">Rule {i + 1}</label>
            {rules.length > 1 && <button onClick={() => removeRule(i)} className="text-xs text-red-500 hover:text-red-700">Remove</button>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div>
              <label className="block text-xs text-slate-500 mb-1">User-agent</label>
              <input type="text" value={rule.userAgent} onChange={e => updateRule(i, 'userAgent', e.target.value)} placeholder="*" className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-xs text-slate-500 mb-1">Allow (one per line)</label>
              <textarea value={rule.allow} onChange={e => updateRule(i, 'allow', e.target.value)} rows={2} placeholder="/" className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm font-mono resize-none focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-xs text-slate-500 mb-1">Disallow (one per line)</label>
              <textarea value={rule.disallow} onChange={e => updateRule(i, 'disallow', e.target.value)} rows={2} placeholder="/admin/" className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm font-mono resize-none focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>
          </div>
        </div>
      ))}
      <div className="flex gap-2">
        <button onClick={addRule} className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium transition-colors">+ Add rule</button>
      </div>
      <div>
        <label className="block text-xs font-medium text-slate-600 mb-1">Sitemap URL (optional)</label>
        <input type="text" value={sitemap} onChange={e => setSitemap(e.target.value)} placeholder="https://example.com/sitemap.xml" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-slate-700">robots.txt output</label>
          <button onClick={copy} className={`px-3 py-1 rounded text-xs font-medium transition-colors ${copied ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>{copied ? '✓ Copied!' : 'Copy'}</button>
        </div>
        <textarea readOnly value={output} rows={6} className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-mono resize-none" />
      </div>
    </div>
  );
}
