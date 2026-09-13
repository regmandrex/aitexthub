import { ReactNode } from 'react';
import BelowToolAd from '../ads/BelowToolAd';
import { Breadcrumbs } from '../Breadcrumbs';

type Tool = {
  slug: string;
  title: string;
  shortDescription: string;
};

type ToolPageShellProps = {
  tool: Tool;
  ui: ReactNode;
  related: ReactNode;
  children?: ReactNode;
};

const toolBreadcrumbItems = (tool: Tool) => [
  { label: 'Home', href: '/' },
  { label: 'AI Tools', href: '/ai-tools' },
  { label: tool.title, href: tool.slug === '' ? '/' : `/${tool.slug}` },
];

export function ToolPageShell({ tool, ui, related, children }: ToolPageShellProps) {
  return (
    <div className="relative bg-[#f7f9ff]">
      <div className="mx-auto w-full max-w-4xl px-4 py-10 min-h-screen">
        <Breadcrumbs items={toolBreadcrumbItems(tool)} className="mb-4" />

        <section className="space-y-3 text-center">
          <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">{tool.title}</h1>
          <p className="max-w-2xl mx-auto text-sm text-slate-700 md:text-[15px]">{tool.shortDescription}</p>
          <div className="flex items-center justify-center gap-1 text-sm text-slate-500">
            <span className="text-yellow-500">★★★★★</span>
            <span>4.9</span>
            <span>·</span>
            <span>Free</span>
          </div>
        </section>

        <section className="relative w-full mt-6">
          <div className="w-full max-w-none rounded-2xl border-3 border-black bg-white p-4 shadow-neo-lg md:p-6">
            {ui}
          </div>
        </section>

        <BelowToolAd />

        {related}

        {children}
      </div>
    </div>
  );
}










































