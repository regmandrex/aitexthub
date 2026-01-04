/**
 * Client footer so we can swap the related tool links based on the current page.
 */
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getAllTools, getToolBySlug } from '@/lib/tools/registry';

type ToolLink = {
  slug: string;
  href: string;
  label: string;
  mode?: string;
};

const WATERMARK_MODES = new Set(['watermark-cleaner', 'watermark-detector']);

function buildToolHref(slug: string) {
  return slug === '' ? '/' : `/${slug}`;
}

const allTools: ToolLink[] = getAllTools().map((tool) => ({
  slug: tool.slug,
  href: buildToolHref(tool.slug),
  label: tool.title,
  mode: tool.mode,
}));

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Get in Touch' },
  { href: '/blog', label: 'Blog' },
];

const toolsLinks = [
  { href: '/chatgpt-space-remover', label: 'ChatGPT Space Remover' },
  { href: '/gemini-space-remover', label: 'Gemini Space Remover' },
  { href: '/', label: 'ChatGPT Text Cleaner' },
];

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
  { href: '/disclaimer', label: 'Disclaimer' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
];

const MAX_RELATED = 4;

function shuffle<T>(items: T[]) {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function getSlugFromPathname(pathname: string) {
  if (!pathname || pathname === '/') {
    return '';
  }
  return pathname.replace(/^\/+/, '').replace(/\/$/, '');
}

function buildRelatedLinks(pathname: string, sourceTools: ToolLink[] = allTools): ToolLink[] {
  const slug = getSlugFromPathname(pathname);
  const currentTool = getToolBySlug(slug);
  const currentHref = buildToolHref(slug);
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
  const [relatedLinks, setRelatedLinks] = useState(() => buildRelatedLinks(pathname || '/'));

  useEffect(() => {
    const randomized = buildRelatedLinks(pathname || '/', shuffle(allTools));
    setRelatedLinks(randomized);
  }, [pathname]);

  return (
    <footer className="mt-10 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-4 text-sm text-slate-800">
        {relatedLinks.length > 0 ? (
          <div className="flex flex-wrap items-center gap-2 bg-white px-4 py-3 text-xs text-slate-700">
            <span className="font-semibold text-slate-800">Discover more tools:</span>
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
            <h3 className="text-xs font-bold uppercase text-slate-900">About GPT CLEAN UP TOOLS</h3>
            <p>Free GPT Clean up Tool - AI Text Cleaner, Fix Formatting and Clean ChatGPT Text</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase text-slate-900">Explore</h3>
            <div className="flex flex-col gap-1">
              {quickLinks.map((link) => (
                <Link key={`${link.href}-${link.label}`} href={link.href} className="hover:text-brand-700">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase text-slate-900">Our Top Tools</h3>
            <div className="flex flex-col gap-1">
              {toolsLinks.map((link) => (
                <Link key={`${link.href}-${link.label}`} href={link.href} className="hover:text-brand-700">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase text-slate-900">Legal</h3>
            <div className="flex flex-col gap-1">
              {legalLinks.map((link) => (
                <Link key={`${link.href}-${link.label}`} href={link.href} className="hover:text-brand-700">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-slate-600">
          © 2025{' '}
          <Link href="https://gptcleanuptools.com" className="font-semibold text-slate-800 hover:underline">
            GPT Cleanup Tools
          </Link>{' '}
          - your trusted ChatGPT watermark detector and AI text cleaner for removing or fixing zero-width spaces and hidden Unicode markers. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
