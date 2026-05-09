'use client';

import Link from 'next/link';
import { useState } from 'react';

const menuLinks = [
  { href: '/ai-tools', label: 'All Tools' },
  { href: '/blog', label: 'Blog' },
  { href: '/pro', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function HeaderMobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Link
        href="/ai-tools"
        aria-label="Search all tools"
        className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 110-16 8 8 0 010 16z" />
        </svg>
      </Link>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation"
        aria-expanded={open}
        aria-controls="header-menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {open ? (
        <div
          id="header-menu"
          className="absolute left-0 right-0 top-full border-t border-slate-200 bg-white shadow-lg"
        >
          <div className="mx-auto max-w-6xl px-4 py-3 md:px-6">
            <nav className="flex flex-col gap-1 text-sm font-medium text-slate-700">
              {menuLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-slate-200 pt-3 md:hidden">
                <Link
                  href="/login"
                  className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="rounded-full bg-brand-600 px-4 py-2 text-center text-white hover:bg-brand-700"
                  onClick={() => setOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
