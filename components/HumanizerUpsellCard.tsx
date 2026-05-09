import Link from 'next/link';

const DETECTORS = ['TURNITIN', 'GPTZERO', 'ORIGINALITY.AI', 'COPYLEAKS'];

type HumanizerUpsellCardProps = {
  variant?: 'cleanup' | 'watermark';
};

export default function HumanizerUpsellCard({ variant = 'cleanup' }: HumanizerUpsellCardProps) {
  const headline = variant === 'cleanup' ? 'Processing complete!' : 'Watermark stripped!';
  const subline =
    variant === 'cleanup'
      ? 'Next step: Humanize this text to pass'
      : 'Next step: Humanize any AI-generated captions, alt text, or descriptions to pass';

  return (
    <div className="mt-6 rounded-2xl bg-brand-700 p-5 text-white shadow-lg md:p-6">
      <div className="flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-yellow-400">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6L12 2z" />
          </svg>
        </span>
        <div className="flex-1">
          <p className="text-sm font-semibold md:text-base">{headline}</p>
          <p className="mt-1 text-sm text-brand-100">
            {subline} <span className="font-semibold text-yellow-400">99% of AI detectors</span>.
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {DETECTORS.map((d) => (
              <span
                key={d}
                className="rounded border border-brand-600 bg-brand-800/50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-100"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Link
        href="/pro"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-slate-100"
      >
        Humanize Now
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  );
}
