/**
 * Client footer so we can swap the related tool links based on the current page.
 */
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type ToolLink = {
  href: string;
  label: string;
  category: 'cleanup' | 'watermark';
};

const allTools: ToolLink[] = [
  { href: '/', label: 'ChatGPT Text Cleaner', category: 'cleanup' },
  { href: '/chatgpt-space-remover', label: 'ChatGPT Space Remover', category: 'cleanup' },
  { href: '/gemini-space-remover', label: 'Gemini Space Remover', category: 'cleanup' },
  { href: '/claude-watermark-cleaner', label: 'Claude Watermark Cleaner', category: 'watermark' },
  { href: '/deepseek-watermark-cleaner', label: 'DeepSeek Watermark Cleaner', category: 'watermark' },
  { href: '/gemini-watermark-cleaner', label: 'Gemini Watermark Cleaner', category: 'watermark' },
  { href: '/grok-watermark-cleaner', label: 'Grok Watermark Cleaner', category: 'watermark' },
  { href: '/llama-watermark-cleaner', label: 'Llama Watermark Cleaner', category: 'watermark' },
  { href: '/mistral-watermark-cleaner', label: 'Mistral Watermark Cleaner', category: 'watermark' },
  { href: '/perplexity-watermark-cleaner', label: 'Perplexity Watermark Cleaner', category: 'watermark' },
];

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

function buildRelatedLinks(pathname: string): ToolLink[] {
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  const currentTool = allTools.find((tool) => tool.href === normalizedPath);
  const related: ToolLink[] = [];

  if (currentTool) {
    for (const tool of allTools) {
      if (tool.href === currentTool.href) continue;
      if (tool.category === currentTool.category) {
        related.push(tool);
      }
      if (related.length === MAX_RELATED) break;
    }
  }

  if (related.length < MAX_RELATED) {
    for (const tool of allTools) {
      if (currentTool && tool.href === currentTool.href) continue;
      if (related.some((item) => item.href === tool.href)) continue;
      related.push(tool);
      if (related.length === MAX_RELATED) break;
    }
  }

  return related;
}

export default function Footer() {
  const pathname = usePathname();
  const relatedLinks = buildRelatedLinks(pathname || '/');

  return (
    <footer className="mt-10 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-4 text-sm text-slate-800">
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
