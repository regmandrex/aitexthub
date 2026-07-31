/**
 * Client footer so we can swap the related tool links based on the current page.
 */
'use client';

import { useMemo } from 'react';
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

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
];

const toolsLinks = [
  { href: '/chatgpt-space-remover', label: 'ChatGPT Space Remover' },
  { href: '/chatgpt-watermark-remover', label: 'ChatGPT Watermark Remover' },
  { href: '/strip-html', label: 'Strip HTML' },
];

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
  { href: '/disclaimer', label: 'Disclaimer' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
  { href: '/refund-policy', label: 'Refund Policy' },
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
  if (!pathname || pathname === '/') {
    return '';
  }
  return pathname.replace(/^\/+/, '').replace(/\/$/, '');
}

function buildRelatedLinks(pathname: string, sourceTools: ToolLink[]): ToolLink[] {
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

  const allTools: ToolLink[] = useMemo(
    () =>
      getAllTools().map((tool) => ({
        slug: tool.slug,
        href: buildToolHref(tool.slug),
        label: tool.title,
        mode: tool.mode,
      })),
    []
  );

  const relatedLinks = useMemo(
    () => {
      const safePath = pathname || '/';
      const seed = hashString(safePath);
      return buildRelatedLinks(safePath, seededShuffle(allTools, seed));
    },
    [pathname, allTools]
  );

  return (
    <footer className="mt-10 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-4 text-sm text-slate-800">
        {relatedLinks.length > 0 ? (
          <div className="flex flex-wrap items-center gap-2 bg-white px-4 py-3 text-xs text-slate-700">
            <span className="font-semibold text-slate-800">Discover More:</span>
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
            <h3 className="text-xs font-bold uppercase text-slate-900">About</h3>
            <p>Free AI text cleanup tools to remove hidden Unicode, fix spacing, and normalize text for publishing.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase text-slate-900">Explore</h3>
            <div className="flex flex-col gap-1">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-brand-700"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase text-slate-900">Top Tools</h3>
            <div className="flex flex-col gap-1">
              {toolsLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-brand-700"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase text-slate-900">Legal</h3>
            <div className="flex flex-col gap-1">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-brand-700"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Nominative fair-use notice. Sitewide because ~450 pages target third-party
            brand keywords (ChatGPT, Gemini, Claude, Midjourney, Turnitin, ...). Full
            version lives at /disclaimer. */}
        <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">
          <h2 className="text-sm font-semibold text-slate-900">Important Disclaimer</h2>
          <p className="mt-1 text-xs leading-relaxed text-slate-700">
            All tools provided on this website are for <strong>educational purposes only</strong> and are not intended to be
            used for any other purpose. All mentions of brand names, trademarks, service marks, and company names are made
            solely for <strong>educational and informational purposes</strong> and do not constitute endorsement, affiliation,
            sponsorship, or approval. We do not intend to infringe upon any copyright, trademark, or intellectual property
            rights. The tools provided are designed for educational use and are not intended to violate, breach, or circumvent
            the terms of service of any mentioned brands or services.{' '}
            <strong>
              We are not affiliated with, endorsed by, or associated with any of the brands, companies, or services mentioned
              on this website.
            </strong>{' '}
            All brand names are the property of their respective owners. Use of these tools is at your own risk and
            responsibility. See our{' '}
            <Link href="/disclaimer" className="font-semibold text-brand-700 hover:underline">
              full disclaimer
            </Link>
            .
          </p>
        </div>

        <div className="mt-6 text-center text-xs text-slate-600">
          © {new Date().getFullYear()}{' '}
          <Link href="https://gptcleanuptools.com" className="font-semibold text-slate-800 hover:underline">
            GPT Cleanup Tools
          </Link>
          . Free AI text cleanup utilities.{' '}
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
