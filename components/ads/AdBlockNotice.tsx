'use client';
import { useAdBlockDetector } from '@/hooks/useAdBlockDetector';

export default function AdBlockNotice() {
  const { adBlocked, checking } = useAdBlockDetector();

  // While checking: white overlay hides content so user can't see site during detection
  if (checking) {
    return <div className="fixed inset-0 z-[9999] bg-white" aria-hidden="true" />;
  }

  if (!adBlocked) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-amber-200 bg-amber-50 shadow-2xl p-6 text-center">
        <span className="text-3xl">🙏</span>
        <p className="mt-3 text-base font-semibold text-amber-900">Ad blocker detected</p>
        <p className="mt-2 text-sm text-amber-800 leading-relaxed">
          Our tools are 100% free. We rely on ads to keep them running. Please disable your ad blocker and refresh to continue.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-5 w-full rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold py-3 transition-colors"
        >
          I've disabled it — Refresh ↺
        </button>
      </div>
    </div>
  );
}
