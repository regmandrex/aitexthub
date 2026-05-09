import Link from 'next/link';
import HeaderMobileMenu from './HeaderMobileMenu';

export default function Header() {
  return (
    <header className="relative z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center text-lg font-semibold tracking-tight text-slate-900 hover:text-slate-700">
          GPTCLEANUP <span className="font-normal text-slate-500">AI</span>
        </Link>

        <div className="flex items-center gap-1 md:gap-2">
          <Link
            href="/login"
            className="hidden text-sm font-medium text-slate-700 hover:text-slate-900 md:inline-flex md:px-3 md:py-2"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="hidden rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-brand-700 md:inline-flex"
          >
            Get Started
          </Link>
          <HeaderMobileMenu />
        </div>
      </div>
    </header>
  );
}
