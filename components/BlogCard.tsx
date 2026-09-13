import Link from 'next/link';

type BlogCardProps = {
  title: string;
  description: string;
  href: string;
  date?: string;
};

export default function BlogCard({ title, description, href, date }: BlogCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border-3 border-black bg-white p-5 shadow-neo-sm transition hover:-translate-y-1 hover:shadow-neo"
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-700">{title}</h3>
        {date ? <span className="text-xs font-semibold uppercase text-slate-500">{date}</span> : null}
      </div>
      <p className="mt-2 text-sm text-slate-700">{description}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
        Read article
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
