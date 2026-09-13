'use client';

import { useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

export function OpenGraphGeneratorTool() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [image, setImage] = useState('');
  const [siteName, setSiteName] = useState('');
  const [type, setType] = useState('website');
  const [copied, setCopied] = useState(false);

  const tags = [
    ['og:title', title],
    ['og:description', description],
    ['og:url', url],
    ['og:image', image],
    ['og:site_name', siteName],
    ['og:type', type],
  ].filter(([, v]) => v);

  const output = tags.map(([p, c]) => `<meta property="${p}" content="${c}" />`).join('\n');

  function copy() {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {([['Title', title, setTitle, 'My Page Title'], ['Site name', siteName, setSiteName, 'My Website'], ['URL', url, setUrl, 'https://example.com/page'], ['Image URL', image, setImage, 'https://example.com/og-image.jpg']] as [string, string, (v: string) => void, string][]).map(([label, val, setter, ph]) => (
          <div key={label}>
            <label className="block text-xs font-medium text-slate-600 mb-1">{label}</label>
            <input type="text" value={val} onChange={e => setter(e.target.value)} placeholder={ph} className="w-full rounded-lg border-3 border-black px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        ))}
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Type</label>
          <select value={type} onChange={e => setType(e.target.value)} className="w-full rounded-lg border-3 border-black px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="website">website</option>
            <option value="article">article</option>
            <option value="product">product</option>
            <option value="profile">profile</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-slate-600 mb-1">Description</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)} rows={2} placeholder="Page description for social sharing..." className="w-full rounded-lg border-3 border-black px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      {output && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-slate-700">Generated tags</label>
            <button onClick={copy} className={`px-3 py-1 rounded text-xs font-medium transition-colors ${copied ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>{copied ? '✓ Copied!' : 'Copy'}</button>
          </div>
          <textarea readOnly value={output} rows={output.split('\n').length + 1} className="w-full rounded-lg border-3 border-black bg-slate-50 px-3 py-2 text-xs font-mono resize-none" />
        </div>
      )}
    </div>
  );
}
