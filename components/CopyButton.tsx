"use client";

import { useEffect, useState } from 'react';

type CopyButtonProps = {
  text: string;
  label?: string;
};

export default function CopyButton({ text, label = 'Copy' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    if (copied) {
      timeout = setTimeout(() => setCopied(false), 1500);
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [copied]);

  const handleCopy = async () => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-lg border-3 border-black bg-brand-600 px-3 py-2 text-sm font-medium text-white shadow-neo-sm transition-transform hover:translate-y-0.5 hover:shadow-none active:translate-y-0.5 disabled:cursor-not-allowed disabled:border-black disabled:bg-slate-400 disabled:shadow-none"
      disabled={!text}
    >
      {copied ? 'Copied!' : label}
    </button>
  );
}
