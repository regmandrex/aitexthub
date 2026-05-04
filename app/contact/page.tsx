import { buildMeta } from '@/lib/seo-meta';

export const revalidate = 604800;

export async function generateMetadata() {
  return buildMeta({
    title: 'Contact Us - GPT Clean Up Tools',
    description: 'Get in touch with GPT Clean Up Tools. We\'re here to help with questions, feedback, or support.',
    urlPath: '/contact',
  });
}

export default async function ContactPage() {
  return (
    <div className="bg-[#f7f9ff]">
      <div className="mx-auto max-w-3xl px-4 py-16 space-y-8 min-h-screen">
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-semibold text-slate-900">Contact Us</h1>
          <p className="mt-3 text-slate-600">
            Have a question, feedback, or need support? We'd love to hear from you.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">How to Reach Us</h2>
          <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50 p-6 text-lg font-semibold text-slate-900">
            <p>Email:</p>
            <a href="mailto:support@gpthelpertools.com" className="text-brand-700 hover:underline">
              support@gpthelpertools.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}


