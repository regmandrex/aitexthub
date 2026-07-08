import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import { JsonLd } from '../components/JsonLd';
import { BreadcrumbJsonLdAndLang } from '../components/BreadcrumbJsonLdAndLang';
import StickyFooterAd from '../components/ads/StickyFooterAd';
import TopBannerAd from '../components/ads/TopBannerAd';
import AdBlockNotice from '../components/ads/AdBlockNotice';
import AdSenseRouteRefresh from '../components/ads/AdSenseRouteRefresh';
import EzoicRouteAds from '../components/ads/EzoicRouteAds';
import DeferredThirdPartyScripts from '../components/DeferredThirdPartyScripts';
import { webSiteSchema, siteNavigationSchema } from '../lib/schema/site';
import '../styles/globals.css';

const Footer = dynamic(() => import('../components/Footer'), { ssr: true });

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: true,
  preload: true,
  variable: '--font-inter',
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://gptcleanuptools.com'),
    title: {
      default: 'GPT Clean Up Tools - Free AI Text Cleanup Utilities',
      template: '%s | GPTCLEANUP AI',
    },
    description: 'Free AI text cleanup tools - remove hidden Unicode, fix spacing, clean ChatGPT output, and normalize text for publishing.',
    keywords: [
      'chatgpt space remover',
      'chatgpt text cleaner',
      'chatgpt cleaner',
      'chat gpt space remover',
      'clean chatgpt text',
      'chat gpt cleaner',
      'chatgpt clean',
      'gpt clean up',
      'gpt cleaner',
      'gpt cleanup',
      'gpt text cleaner',
      'clean gpt',
      'gpt space remover',
      'gpt clean',
      'gptcleanup',
      'remove gpt spaces',
      'remove chatgpt formatting',
      'chatgpt format remover',
      'chatgpt formatting remover',
      'chat gpt format remover',
      'clear chatgpt formatting',
      'ai text cleaner',
      'clean ai text',
      'text cleaner ai',
      'ai cleaner text',
      'ai space remover',
      'remove ai spacing',
      'ai spaces remover',
      'space remover ai',
      'get rid of ai spacing',
    ],
    openGraph: {
      title: 'GPT Clean Up Tools - Free AI Text Cleanup Utilities',
      description: 'Free AI text cleanup tools - remove hidden Unicode, fix spacing, clean ChatGPT output, and normalize text for publishing.',
      url: 'https://gptcleanuptools.com',
      siteName: 'GPTCLEANUP AI',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'GPT Clean Up Tools - Free AI Text Cleanup Utilities',
      description: 'Free AI text cleanup tools - remove hidden Unicode, fix spacing, clean ChatGPT output, and normalize text for publishing.',
    },
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

type RootLayoutProps = {
  children: ReactNode;
};

const SITE_SCHEMA = webSiteSchema();
const NAV_SCHEMA = siteNavigationSchema();

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Ezoic integration — must load as high as possible in <head>, privacy
            scripts before the header script, no defer/conditional loading.
            Ezoic requires these CMP scripts to load synchronously, which is
            intentionally at odds with Next's no-sync-scripts rule.
            See https://docs.ezoic.com/docs/ezoicads/integration/ */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script data-cfasync="false" src="https://cmp.gatekeeperconsent.com/min.js" />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script data-cfasync="false" src="https://the.gatekeeperconsent.com/cmp.min.js" />
        {/* Loaded synchronously (no async) so it executes AFTER the CMP privacy
            scripts above — Ezoic's debugger flags cmp.min.js loading after
            sa.min.js when sa.min.js is async and wins the race. */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://www.ezojs.com/ezoic/sa.min.js" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              'window.ezstandalone = window.ezstandalone || {}; ezstandalone.cmd = ezstandalone.cmd || [];',
          }}
        />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://ezoicanalytics.com/analytics.js" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="alternate" type="application/rss+xml" title="GPTCLEANUP AI Blog & Tools RSS Feed" href="https://gptcleanuptools.com/rss.xml" />
      </head>
      <body className={`${inter.variable} bg-slate-50 text-slate-900 antialiased pb-[80px] md:pb-[120px] lg:pb-[140px]`}>
        <DeferredThirdPartyScripts />
        <AdSenseRouteRefresh />
        <EzoicRouteAds />
        <JsonLd data={SITE_SCHEMA} />
        <JsonLd data={NAV_SCHEMA} />
        <BreadcrumbJsonLdAndLang />
        <Header />
        <TopBannerAd />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyFooterAd />
        <AdBlockNotice />
      </body>
    </html>
  );
}
