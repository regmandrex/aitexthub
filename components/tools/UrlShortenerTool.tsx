'use client';

import { useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

export function UrlShortenerTool() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleShorten() {
    const trimmed = url.trim();
    if (!trimmed) return;
    setError('');
    setShortUrl('');
    setLoading(true);
    try {
      const res = await fetch(
        `https://is.gd/create.php?format=json&url=${encodeURIComponent(trimmed)}`
      );
      const data = await res.json();
      if (data.shorturl) {
        setShortUrl(data.shorturl);
      } else {
        setError(data.errormessage ?? 'Failed to shorten URL. Please check the URL and try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy() {
    if (!shortUrl) return;
    await navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Long URL</label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleShorten()}
          placeholder="https://example.com/very/long/url..."
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <button
        onClick={handleShorten}
        disabled={loading || !url.trim()}
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Shortening…' : 'Shorten URL'}
      </button>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      {shortUrl && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Short URL</label>
          <div className="flex items-center gap-2">
            <input
              readOnly
              value={shortUrl}
              className="flex-1 rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
            />
            <button
              onClick={handleCopy}
              className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-green-100 px-3 py-2 text-sm font-medium text-green-700 hover:bg-green-200"
            >
              Open
            </a>
          </div>
          <HumanizerUpsellCard />
        </div>
      )}
    </div>
  );
}
