import { buildMeta } from '@/lib/seo-meta';

export const metadata = buildMeta({
  title: 'Contact | GPT CLEAN UP Tools',
  description: 'Get in touch with the GPT CLEAN UP Tools team for feedback, partnership ideas, or questions about the utilities.',
  urlPath: '/contact',
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f7f9ff]">
      <div className="mx-auto max-w-3xl px-4 py-16 space-y-8">
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-semibold text-slate-900">Contact GPT CLEAN UP Tools</h1>
          <p className="mt-3 text-slate-600">
            Need help with a tool, want to report an issue, or have a suggestion? Drop us a line via email and we will
            respond as soon as possible.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">How to reach us</h2>
          <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50 p-6 text-lg font-semibold text-slate-900">
            <p>EMAIL</p>
            <a href="mailto:support@gpthelpertools.com" className="text-brand-700 hover:underline">
              support@gpthelpertools.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

