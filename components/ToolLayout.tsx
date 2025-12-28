import { ReactNode } from 'react';
import FAQSection from './FAQSection';
import type { FaqItem } from './faqData';

type ToolLayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  badge?: string;
  faqItems?: FaqItem[];
};

export default function ToolLayout({ title, subtitle, children, badge, faqItems }: ToolLayoutProps) {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        {badge ? (
          <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
            {badge}
          </span>
        ) : null}
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">{title}</h1>
          <p className="text-base text-slate-700">{subtitle}</p>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
        {children}
      </section>

      {faqItems && faqItems.length > 0 ? (
        <section>
          <FAQSection items={faqItems} />
        </section>
      ) : null}
    </div>
  );
}
