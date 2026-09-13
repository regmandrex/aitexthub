'use client';

import { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import type { Tool } from '@/lib/tools/registry';
import ToolCard from '@/components/ToolCard';
import { CATEGORY_ORDER, getCategoryByKey } from '@/lib/seo/categories';

type SearchableToolsListProps = {
  tools: Tool[];
};

export default function SearchableToolsList({ tools }: SearchableToolsListProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const resolveToolText = useCallback(
    (tool: Tool, field: 'title' | 'description') => {
      return field === 'title' ? tool.title : tool.shortDescription;
    },
    []
  );

  // Filter tools based on search query
  const filteredTools = useMemo(() => {
    if (!searchQuery.trim()) {
      return tools;
    }

    const query = searchQuery.toLowerCase().trim();
    return tools.filter(
      (tool) =>
        resolveToolText(tool, 'title').toLowerCase().includes(query) ||
        resolveToolText(tool, 'description').toLowerCase().includes(query) ||
        tool.category?.toLowerCase().includes(query) ||
        tool.model?.toLowerCase().includes(query) ||
        tool.slug.toLowerCase().includes(query)
    );
  }, [tools, searchQuery, resolveToolText]);

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
            className={`w-full pl-10 py-3 rounded-xl border-3 border-black bg-white shadow-neo-sm focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm md:text-base text-slate-900 placeholder-slate-400 ${
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
            {`Found ${filteredTools.length} tools matching "${searchQuery}"`}
          </p>
        )}
      </div>

      {/* Tools List */}
      {filteredTools.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-slate-600 text-lg">{`No tools found matching "${searchQuery}"`}</p>
          <p className="text-slate-500 text-sm mt-2">Try a different search term</p>
        </div>
      ) : (
        CATEGORY_ORDER.map((category) => {
          const items = groupedTools[category];
          if (!items?.length) {
            return null;
          }
          const meta = getCategoryByKey(category);
          const title = meta?.title ?? 'Other Tools';
          const description = meta?.description ?? '';
          const href = meta ? `/ai-tools/${meta.slug}` : null;

          return (
            <section key={category} className="space-y-4">
              <div className="space-y-1">
                {href ? (
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 transition hover:text-brand-700"
                  >
                    {title}
                    <span aria-hidden className="tracking-normal transition group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </Link>
                ) : (
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{title}</p>
                )}
                {description ? <p className="text-sm text-slate-600">{description}</p> : null}
              </div>
              <div className="grid gap-4 md:gap-5 md:grid-cols-2">
                {items.map((tool) => (
                  <ToolCard
                    key={tool.slug}
                    title={resolveToolText(tool, 'title')}
                    description={resolveToolText(tool, 'description')}
                    href={tool.slug === '' ? '/' : `/${tool.slug}`}
                    ctaLabel="Open Tool →"
                  />
                ))}
              </div>
              {href ? (
                <Link
                  href={href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 hover:underline"
                >
                  {items.length === 1
                    ? 'View the tool'
                    : `View all ${meta?.ctaNoun ?? title.toLowerCase()}`}
                  <span aria-hidden>&rarr;</span>
                </Link>
              ) : null}
            </section>
          );
        })
      )}
    </div>
  );
}
