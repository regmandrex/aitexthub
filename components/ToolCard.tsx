import Link from 'next/link';

type ToolCardProps = {
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
};

export default function ToolCard({ title, description, href, ctaLabel = 'Open tool' }: ToolCardProps) {
  return (
    <Link
      href={href}
      className="group block h-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:p-5"
    >
      <h3 className="text-base font-semibold text-slate-900 md:text-lg">{title}</h3>
      <p className="mt-2 text-sm text-slate-700 md:mt-3">{description}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
        {ctaLabel}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4 transition group-hover:translate-x-1"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0-6-6m6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}
