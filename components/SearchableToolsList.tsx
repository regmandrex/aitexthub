'use client';

import { useState, useMemo } from 'react';
import type { Tool } from '@/lib/tools/registry';
import ToolCard from '@/components/ToolCard';

const CATEGORY_ORDER: Array<string> = [
  'ai-cleanup',
  'text',
  'encoding',
  'data-format',
  'number-systems',
  'color-css',
  'generator',
];

const CATEGORY_CONFIG: Record<string, { title: string; description: string }> = {
  'ai-cleanup': {
    title: 'AI Cleanup Tools',
    description: 'Watermark detectors, cleaners, and model-specific space removers for AI-generated text.',
  },
  text: {
    title: 'Text Tools',
    description: 'General cleanup and formatting helpers for tightening up your writing.',
  },
  encoding: {
    title: 'Encoding & Decoding',
    description: 'Encode, decode, or translate text for safe transport and display.',
  },
  'data-format': {
    title: 'Data Format Converters',
    description: 'Flip between JSON, XML, Markdown, and HTML representations.',
  },
  'number-systems': {
    title: 'Number Systems & Logic',
    description: 'Base conversions, XOR, and related helpers for precise numeric formatting.',
  },
  'color-css': {
    title: 'Color & CSS Converters',
    description: 'HEX, RGB, rem, and px converters for styling and design work.',
  },
  generator: {
    title: 'Generators',
    description: 'Random or playful generators for hex data and nicknames.',
  },
};

type SearchableToolsListProps = {
  tools: Tool[];
};

export default function SearchableToolsList({ tools }: SearchableToolsListProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter tools based on search query
  const filteredTools = useMemo(() => {
    if (!searchQuery.trim()) {
      return tools;
    }

    const query = searchQuery.toLowerCase().trim();
    return tools.filter(
      (tool) =>
        tool.title.toLowerCase().includes(query) ||
        tool.shortDescription.toLowerCase().includes(query) ||
        tool.category?.toLowerCase().includes(query) ||
        tool.model?.toLowerCase().includes(query)
    );
  }, [tools, searchQuery]);

  // Group filtered tools by category
  const groupedTools = useMemo(() => {
    return filteredTools.reduce<Record<string, Tool[]>>((acc, tool) => {
      const bucket = tool.category ?? 'text';
      if (!acc[bucket]) {
        acc[bucket] = [];
      }
      acc[bucket].push(tool);
      return acc;
    }, {});
  }, [filteredTools]);

  return (
    <div className="space-y-10">
      {/* Search Bar */}
      <div className="sticky top-4 z-10">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-10 py-3 rounded-xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm md:text-base text-slate-900 placeholder-slate-400 ${
              searchQuery ? 'pr-10' : 'pr-4'
            }`}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Clear search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
        {searchQuery && (
          <p className="mt-2 text-sm text-slate-600">
            Found {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        )}
      </div>

      {/* Tools List */}
      {filteredTools.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-slate-600 text-lg">No tools found matching "{searchQuery}"</p>
          <p className="text-slate-500 text-sm mt-2">Try a different search term</p>
        </div>
      ) : (
        CATEGORY_ORDER.map((category) => {
          const items = groupedTools[category];
          if (!items?.length) {
            return null;
          }
          const config = CATEGORY_CONFIG[category] ?? {
            title: 'Other Tools',
            description: '',
          };

          return (
            <section key={category} className="space-y-4">
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{config.title}</p>
                {config.description ? <p className="text-sm text-slate-600">{config.description}</p> : null}
              </div>
              <div className="grid gap-4 md:gap-5 md:grid-cols-2">
                {items.map((tool) => (
                  <ToolCard
                    key={tool.slug}
                    title={tool.title}
                    description={tool.shortDescription}
                    href={tool.slug === '' ? '/' : `/${tool.slug}`}
                  />
                ))}
              </div>
            </section>
          );
        })
      )}
    </div>
  );
}

