"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/ai-tools', label: 'Free AI Tools' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="relative mx-auto flex max-w-5xl items-center justify-between px-4 py-4 md:px-1">
        <Link href="/" className="flex items-center">
          <Image
            src="/brand/gpt-clean-up-tools.png"
            alt="GPT Clean Up Tools"
            width={200}
            height={56}
            className="h-[52px] w-auto"
            priority
          />
        </Link>
        <div className="flex items-center gap-4">
          <button
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-brand-700">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-2 hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
