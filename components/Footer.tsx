/**
 * Client footer so we can swap the related tool links based on the current page.
 */
'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getAllTools, getToolBySlug } from '@/lib/tools/registry';
import { useI18n, useLocale } from '@/lib/client-i18n';
import { addLocaleToPath, removeLocaleFromPath } from '@/lib/i18n';

type ToolLink = {
  slug: string;
  href: string;
  label: string;
  mode?: string;
};

const WATERMARK_MODES = new Set(['watermark-cleaner', 'watermark-detector']);

function buildToolHref(slug: string, locale: string) {
  const path = slug === '' ? '/' : `/${slug}`;
  return addLocaleToPath(path, locale as any);
}

const quickLinks = [
  { href: '/', key: 'Footer.links.home' },
  { href: '/about', key: 'Footer.links.about' },
  { href: '/contact', key: 'Footer.links.contact' },
  { href: '/blog', key: 'Footer.links.blog' },
];

const toolsLinkKeys = [
  { href: '/chatgpt-space-remover', key: 'Footer.topTools.chatgptSpaceRemover' },
  { href: '/chatgpt-watermark-remover', key: 'Footer.topTools.chatgptWatermarkRemover' },
  { href: '/strip-html', key: 'Footer.topTools.stripHtml' },
];

const legalLinkKeys = [
  { href: '/privacy-policy', key: 'Footer.legal.privacy' },
  { href: '/terms-of-service', key: 'Footer.legal.terms' },
  { href: '/disclaimer', key: 'Footer.legal.disclaimer' },
  { href: '/cookie-policy', key: 'Footer.legal.cookies' },
];

const MAX_RELATED = 4;

function hashString(input: string) {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) | 0;
  }
  return hash >>> 0;
}

function seededShuffle<T>(items: T[], seed: number) {
  const next = [...items];
  let state = seed || 1;
  for (let i = next.length - 1; i > 0; i -= 1) {
    state = (state * 1664525 + 1013904223) >>> 0;
    const j = state % (i + 1);
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function getSlugFromPathname(pathname: string) {
  const pathWithoutLocale = removeLocaleFromPath(pathname);
  if (!pathWithoutLocale || pathWithoutLocale === '/') {
    return '';
  }
  return pathWithoutLocale.replace(/^\/+/, '').replace(/\/$/, '');
}

function buildRelatedLinks(pathname: string, locale: string, sourceTools: ToolLink[]): ToolLink[] {
  const slug = getSlugFromPathname(pathname);
  const currentTool = getToolBySlug(slug);
  const currentHref = buildToolHref(slug, locale);
  const pool = sourceTools.filter((tool) => tool.href !== currentHref);

  if (!currentTool) {
    return pool.slice(0, MAX_RELATED);
  }

  const currentMode = currentTool.mode;
  if (!currentMode) {
    return pool.slice(0, MAX_RELATED);
  }

  let related = pool.filter((tool) => tool.mode === currentMode);

  if (currentMode === 'text-cleaner' && related.length < MAX_RELATED) {
    related = pool.filter((tool) => tool.mode && !WATERMARK_MODES.has(tool.mode));
  }

  return related.slice(0, MAX_RELATED);
}

export default function Footer() {
  const pathname = usePathname();
  const locale = useLocale();
  const { t } = useI18n();

  const allTools: ToolLink[] = useMemo(
    () =>
      getAllTools().map((tool) => {
        const toolKey = tool.slug === '' ? 'home' : tool.slug;
        const translatedTitle = t(`Tools.${toolKey}.title`);
        return {
          slug: tool.slug,
          href: buildToolHref(tool.slug, locale),
          label: translatedTitle && translatedTitle !== `Tools.${toolKey}.title` ? translatedTitle : tool.title,
          mode: tool.mode,
        };
      }),
    [locale, t]
  );

  const relatedLinks = useMemo(
    () => {
      const safePath = pathname || '/';
      const seed = hashString(safePath);
      return buildRelatedLinks(safePath, locale, seededShuffle(allTools, seed));
    },
    [pathname, locale, allTools]
  );

  return (
    <footer className="mt-10 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-4 text-sm text-slate-800">
        {relatedLinks.length > 0 ? (
          <div className="flex flex-wrap items-center gap-2 bg-white px-4 py-3 text-xs text-slate-700">
            <span className="font-semibold text-slate-800">{t('Footer.discoverMore')}</span>
            {relatedLinks.map((link, idx) => (
              <span key={`${link.href}-${link.label}`} className="flex items-center gap-2">
                <Link href={link.href} className="text-brand-700 hover:underline">
                  {link.label}
                </Link>
                {idx < relatedLinks.length - 1 ? <span className="text-slate-400">-</span> : null}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-6 border-b border-slate-200 pb-6" />

        <div className="grid gap-8 pb-6 md:grid-cols-4">
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase text-slate-900">{t('Footer.aboutTitle')}</h3>
            <p>{t('Footer.aboutBlurb')}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase text-slate-900">{t('Footer.exploreTitle')}</h3>
            <div className="flex flex-col gap-1">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={addLocaleToPath(link.href, locale)}
                  className="hover:text-brand-700"
                >
                  {t(link.key)}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase text-slate-900">{t('Footer.topToolsTitle')}</h3>
            <div className="flex flex-col gap-1">
              {toolsLinkKeys.map((link) => (
                <Link
                  key={link.href}
                  href={addLocaleToPath(link.href, locale)}
                  className="hover:text-brand-700"
                >
                  {t(link.key)}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase text-slate-900">{t('Footer.legalTitle')}</h3>
            <div className="flex flex-col gap-1">
              {legalLinkKeys.map((link) => (
                <Link
                  key={link.href}
                  href={addLocaleToPath(link.href, locale)}
                  className="hover:text-brand-700"
                >
                  {t(link.key)}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-slate-600">
          {t('Footer.copyrightPrefix')} {new Date().getFullYear()}{' '}
          <Link href="https://gptcleanuptools.com" className="font-semibold text-slate-800 hover:underline">
            GPT Cleanup Tools
          </Link>
          {t('Footer.tagline')} {t('Footer.rights')}
        </div>
      </div>
    </footer>
  );
}
