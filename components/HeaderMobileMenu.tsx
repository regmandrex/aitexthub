'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/ai-tools', label: 'Free AI Tools' },
];

export default function HeaderMobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-4">
        <button
          type="button"
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
            <div className="mt-2 flex flex-col gap-2 border-t border-slate-200 pt-3">
              <Link
                href="/login"
                className="rounded-lg px-2 py-2 text-slate-700 hover:bg-slate-100"
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
      ) : null}
    </>
  );
}
