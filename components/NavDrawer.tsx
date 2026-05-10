'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { getAllTools, type Tool } from '@/lib/tools/registry';

type NavDrawerProps = {
  open: boolean;
  onClose: () => void;
};

type Group = {
  key: string;
  label: string;
  tools: Tool[];
};

const MODEL_ORDER = ['chatgpt', 'claude', 'gemini', 'llama', 'grok', 'perplexity', 'deepseek', 'mistral'];
const MODEL_LABELS: Record<string, string> = {
  chatgpt: 'ChatGPT Tools',
  claude: 'Claude Tools',
  gemini: 'Gemini Tools',
  llama: 'LLaMA Tools',
  grok: 'Grok Tools',
  perplexity: 'Perplexity Tools',
  deepseek: 'DeepSeek Tools',
  mistral: 'Mistral Tools',
};

const CATEGORY_LABELS: Record<string, string> = {
  watermark: 'Watermark Tools',
  generator: 'Name & Code Generators',
  translator: 'Translators',
  'developer-tool': 'Developer Tools',
  'ai-detection': 'AI Detection',
  'ai-cleanup': 'Text Cleanup',
  'ai-humanizer': 'AI Humanizers',
  encoding: 'Encoding & Hashing',
  text: 'Text Utilities',
  seo: 'SEO Tools',
  writing: 'Writing Tools',
  academic: 'Academic Tools',
  professional: 'Professional Tools',
};

function buildGroups(tools: Tool[]): Group[] {
  const byModel = new Map<string, Tool[]>();
  const byCategory = new Map<string, Tool[]>();

  for (const tool of tools) {
    if (tool.modelSlug && MODEL_LABELS[tool.modelSlug]) {
      const list = byModel.get(tool.modelSlug) ?? [];
      list.push(tool);
      byModel.set(tool.modelSlug, list);
    } else if (tool.category) {
      const list = byCategory.get(tool.category) ?? [];
      list.push(tool);
      byCategory.set(tool.category, list);
    }
  }

  const groups: Group[] = [];

  for (const slug of MODEL_ORDER) {
    const list = byModel.get(slug);
    if (list && list.length > 0) {
      groups.push({ key: `model-${slug}`, label: MODEL_LABELS[slug], tools: list });
    }
  }

  const categoryOrder = Object.keys(CATEGORY_LABELS);
  for (const cat of categoryOrder) {
    const list = byCategory.get(cat);
    if (list && list.length > 0) {
      groups.push({ key: `cat-${cat}`, label: CATEGORY_LABELS[cat], tools: list });
    }
  }

  return groups;
}

export default function NavDrawer({ open, onClose }: NavDrawerProps) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const tools = useMemo(() => getAllTools(), []);
  const groups = useMemo(() => buildGroups(tools), [tools]);
  const totalCount = tools.length;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  function toggleGroup(key: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-slate-900/40 transition-opacity ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-[88vw] max-w-md flex-col bg-white shadow-2xl transition-transform ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Navigation"
        aria-hidden={!open}
      >
        <div className="flex items-start justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Navigation</h2>
            <p className="mt-0.5 text-xs text-slate-500">{totalCount} tools total</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-3">
          <Link
            href="/ai-tools"
            onClick={onClose}
            className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            All Tools
          </Link>

          <div className="my-2 h-px bg-slate-200" />

          {groups.map((group) => {
            const isOpen = expanded.has(group.key);
            return (
              <div key={group.key} className="border-b border-slate-100 last:border-b-0">
                <button
                  type="button"
                  onClick={() => toggleGroup(group.key)}
                  className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50"
                  aria-expanded={isOpen}
                >
                  <span>
                    {group.label} <span className="text-slate-400">({group.tools.length})</span>
                  </span>
                  <svg
                    className={`h-4 w-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen ? (
                  <div className="pb-2">
                    {group.tools.slice(0, 12).map((tool) => (
                      <Link
                        key={tool.slug}
                        href={`/${tool.slug}`}
                        onClick={onClose}
                        className="block rounded-lg px-6 py-2 text-xs text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      >
                        {tool.title}
                      </Link>
                    ))}
                    {group.tools.length > 12 ? (
                      <Link
                        href="/ai-tools"
                        onClick={onClose}
                        className="block rounded-lg px-6 py-2 text-xs font-semibold text-brand-600 hover:bg-slate-50 hover:text-brand-700"
                      >
                        View all {group.tools.length} →
                      </Link>
                    ) : null}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="border-t border-slate-200 px-5 py-4 space-y-2">
          <Link
            href="/signup"
            onClick={onClose}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
          >
            <span className="text-yellow-300">✦</span> Get Started
          </Link>
          <Link
            href="/login"
            onClick={onClose}
            className="block rounded-full border border-slate-200 bg-white px-4 py-2 text-center text-sm text-slate-600 transition hover:bg-slate-50"
          >
            Already have an account? Log in
          </Link>
          <p className="pt-2 text-center text-xs text-slate-400">GPT Cleanup Tools — Free AI Text Tools</p>
        </div>
      </aside>
    </>
  );
}
