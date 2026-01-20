'use client';

import { useState, useMemo } from 'react';
import type { Tool } from '@/lib/tools/registry';
import ToolCard from '@/components/ToolCard';
import { useI18n } from '@/lib/client-i18n';

const CATEGORY_ORDER: Array<string> = [
  'ai-cleanup',
  'text',
  'encoding',
  'data-format',
  'number-systems',
  'color-css',
  'generator',
  'academic',
  'writing',
  'seo',
  'professional',
];

const CATEGORY_KEYS: Record<string, { titleKey: string; descriptionKey: string }> = {
  'ai-cleanup': {
    titleKey: 'AllTools.categories.ai-cleanup.title',
    descriptionKey: 'AllTools.categories.ai-cleanup.description',
  },
  text: {
    titleKey: 'AllTools.categories.text.title',
    descriptionKey: 'AllTools.categories.text.description',
  },
  encoding: {
    titleKey: 'AllTools.categories.encoding.title',
    descriptionKey: 'AllTools.categories.encoding.description',
  },
  'data-format': {
    titleKey: 'AllTools.categories.data-format.title',
    descriptionKey: 'AllTools.categories.data-format.description',
  },
  'number-systems': {
    titleKey: 'AllTools.categories.number-systems.title',
    descriptionKey: 'AllTools.categories.number-systems.description',
  },
  'color-css': {
    titleKey: 'AllTools.categories.color-css.title',
    descriptionKey: 'AllTools.categories.color-css.description',
  },
  generator: {
    titleKey: 'AllTools.categories.generator.title',
    descriptionKey: 'AllTools.categories.generator.description',
  },
  academic: {
    titleKey: 'AllTools.categories.academic.title',
    descriptionKey: 'AllTools.categories.academic.description',
  },
  writing: {
    titleKey: 'AllTools.categories.writing.title',
    descriptionKey: 'AllTools.categories.writing.description',
  },
  seo: {
    titleKey: 'AllTools.categories.seo.title',
    descriptionKey: 'AllTools.categories.seo.description',
  },
  professional: {
    titleKey: 'AllTools.categories.professional.title',
    descriptionKey: 'AllTools.categories.professional.description',
  },
};

type SearchableToolsListProps = {
  tools: Tool[];
};

export default function SearchableToolsList({ tools }: SearchableToolsListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useI18n();
  const resolveToolText = (tool: Tool, field: 'title' | 'description') => {
    const slugKey = tool.slug === '' ? 'home' : tool.slug;
    const key = `Tools.${slugKey}.${field === 'title' ? 'title' : 'description'}`;
    const translated = t(key);
    if (translated !== key) return translated;
    return field === 'title' ? tool.title : tool.shortDescription;
  };

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
            placeholder={t('AllTools.searchPlaceholder')}
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
              aria-label={t('AllTools.clearSearch')}
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
            {t('AllTools.foundCountTemplate', { count: filteredTools.length, query: searchQuery })}
          </p>
        )}
      </div>

      {/* Tools List */}
      {filteredTools.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-slate-600 text-lg">{t('AllTools.noResultsTitleTemplate', { query: searchQuery })}</p>
          <p className="text-slate-500 text-sm mt-2">{t('AllTools.noResultsHint')}</p>
        </div>
      ) : (
        CATEGORY_ORDER.map((category) => {
          const items = groupedTools[category];
          if (!items?.length) {
            return null;
          }
          const configKeys = CATEGORY_KEYS[category];
          const title = configKeys ? t(configKeys.titleKey) : t('AllTools.otherToolsTitle');
          const description = configKeys ? t(configKeys.descriptionKey) : '';

          return (
            <section key={category} className="space-y-4">
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{title}</p>
                {description ? <p className="text-sm text-slate-600">{description}</p> : null}
              </div>
              <div className="grid gap-4 md:gap-5 md:grid-cols-2">
                {items.map((tool) => (
                  <ToolCard
                    key={tool.slug}
                    title={resolveToolText(tool, 'title')}
                    description={resolveToolText(tool, 'description')}
                    href={tool.slug === '' ? '/' : `/${tool.slug}`}
                    ctaLabel={t('ToolCard.openTool')}
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
