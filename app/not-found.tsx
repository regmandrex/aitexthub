import Link from 'next/link';
import ToolCard from '@/components/ToolCard';
import { getAllTools } from '@/lib/tools/registry';

export default async function NotFound() {
  const suggestions = getAllTools()
    .filter((tool) => tool.slug !== '')
    .slice(0, 4);
  const resolveToolText = (tool: { slug: string; title: string; shortDescription: string }, field: 'title' | 'description') => {
    return field === 'title' ? tool.title : tool.shortDescription;
  };

  return (
    <section className="relative overflow-hidden bg-[#f7f9ff]">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_top,_#e0e7ff,_transparent_70%)] opacity-90" />
      <div className="pointer-events-none absolute -bottom-24 right-[-60px] h-56 w-56 rounded-full bg-brand-100 blur-3xl opacity-80" />
      <div className="pointer-events-none absolute bottom-20 left-[-40px] hidden h-40 w-40 rounded-3xl border border-white/60 bg-white/60 shadow-sm md:block" />

      <div className="mx-auto w-full max-w-5xl px-4 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-brand-700">
              404
              <span className="h-2 w-2 rounded-full bg-brand-600" />
              Page Not Found
            </span>
            <h1 className="text-3xl font-semibold text-slate-900 md:text-5xl">
              Oops! Page Not Found
            </h1>
            <p className="max-w-xl text-base text-slate-700 md:text-lg">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-700 hover:text-white"
              >
                Go Home
              </Link>
              <Link
                href="/ai-tools"
                className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:border-slate-300 hover:text-slate-900"
              >
                Browse All Tools
              </Link>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="rounded-full bg-slate-100 px-2 py-1 font-semibold uppercase tracking-wide text-slate-600">
                Tip
              </span>
              Check the URL or try searching for what you need.
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                <span>Error Log</span>
                <span>404</span>
              </div>
              <div className="mt-5 space-y-3">
                <div className="h-3 w-4/5 rounded-full bg-slate-100" />
                <div className="h-3 w-full rounded-full bg-slate-100" />
                <div className="h-3 w-3/5 rounded-full bg-slate-100" />
                <div className="h-3 w-5/6 rounded-full bg-slate-100" />
              </div>
              <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50 px-4 py-3 text-sm text-brand-700">
                Page not found. The requested resource could not be located.
              </div>
            </div>
            <div className="absolute -right-4 -bottom-6 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm md:block">
              <span className="text-5xl font-semibold text-brand-600">404</span>
            </div>
          </div>
        </div>

        {suggestions.length ? (
          <section className="mt-12">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Popular Tools</h2>
              <Link href="/ai-tools" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
                View All Tools
              </Link>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {suggestions.map((tool) => (
                <ToolCard
                  key={tool.slug}
                  title={resolveToolText(tool, 'title')}
                  description={resolveToolText(tool, 'description')}
                  href={`/${tool.slug}`}
                  ctaLabel="Open Tool →"
                />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </section>
  );
}
