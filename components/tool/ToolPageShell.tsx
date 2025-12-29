import { ReactNode } from 'react';
import AdSenseSlot from '../ads/AdSenseSlot';

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

function RailAd({ side }: { side: 'left' | 'right' }) {
  const sideClass = side === 'left' ? 'left-4' : 'right-4';

  return (
    <div className={`hidden xl:block fixed top-[220px] ${sideClass} z-20`}>
      <div className="w-[180px] min-h-[260px] border border-dashed border-[#d7d7d7] rounded-lg p-4 text-center text-sm text-[#666] flex items-center justify-center bg-[#f7f9ff]">
        <AdSenseSlot className="w-full" />
      </div>
    </div>
  );
}

function TopBannerAd() {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-4">
      <div className="mt-4 mb-6">
        <div className="w-full overflow-hidden rounded-xl border border-dashed border-slate-300/70 bg-slate-50/40 px-4 py-6 text-center text-sm font-medium text-slate-500">
          <AdSenseSlot className="w-full" />
        </div>
      </div>
    </div>
  );
}

export function ToolPageShell({ tool, ui, related, children }: ToolPageShellProps) {
  return (
    <div className="relative min-h-screen bg-[#f7f9ff]">
      <RailAd side="left" />
      <RailAd side="right" />
      <TopBannerAd />

      <div className="mx-auto w-full max-w-4xl px-4 py-10">
        <section className="space-y-3 text-center">
          <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">{tool.title}</h1>
          <p className="max-w-2xl mx-auto text-sm text-slate-700 md:text-[15px]">{tool.shortDescription}</p>
        </section>

        <section className="relative w-full mt-6">
          <div className="w-full max-w-none rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
            {ui}
          </div>
        </section>

        {children}

        {related}
      </div>
    </div>
  );
}























