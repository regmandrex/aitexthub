'use client';

import { useState } from 'react';

export function UrlShortenerTool() {
  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-6 text-center">
      <p className="text-sm font-medium text-amber-800">URL Shortener</p>
      <p className="text-sm text-amber-700 mt-1">This tool requires a backend API to generate short URLs. Coming soon.</p>
    </div>
  );
}
