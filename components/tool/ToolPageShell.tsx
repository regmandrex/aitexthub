import { ReactNode } from 'react';
import AdSenseSlot from '../ads/AdSenseSlot';
import BelowToolAd from '../ads/BelowToolAd';
import { Breadcrumbs } from '../Breadcrumbs';
import ProFunnelBanner from '../ProFunnelBanner';

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

function RailAd({ side }: { side: 'left' | 'right' }) {
  const sideClass = side === 'left' ? 'left-4' : 'right-4';

  return (
    <div className={`hidden lg:block fixed top-[220px] ${sideClass} z-20`}>
      <div className="w-[180px] min-h-[260px]">
        <AdSenseSlot className="w-full" />
      </div>
    </div>
  );
}

export function ToolPageShell({ tool, ui, related, children }: ToolPageShellProps) {
  return (
    <div className="relative bg-[#f7f9ff]">
      <RailAd side="right" />

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

        <div className="mt-6 -mx-4 md:mx-0 md:rounded-xl md:overflow-hidden">
          <ProFunnelBanner variant="inline" />
        </div>

        <section className="relative w-full mt-6">
          <div className="w-full max-w-none rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
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












































