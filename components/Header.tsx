import Link from 'next/link';
import HeaderMobileMenu from './HeaderMobileMenu';

export default function Header() {
  return (
    <header className="relative z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="relative mx-auto flex max-w-5xl items-center justify-between px-4 py-4 md:px-1">
        <Link href="/" className="flex items-center text-lg font-semibold text-slate-900 hover:text-slate-700">
          GPTCLEANUP AI
        </Link>
        <HeaderMobileMenu />
      </div>
    </header>
  );
}
