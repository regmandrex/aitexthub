import type { Metadata } from 'next';
import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import ProFunnelBanner from '../components/ProFunnelBanner';
import { JsonLd } from '../components/JsonLd';
import { BreadcrumbJsonLdAndLang } from '../components/BreadcrumbJsonLdAndLang';
import StickyFooterAd from '../components/ads/StickyFooterAd';
import AdBlockNotice from '../components/ads/AdBlockNotice';
import AdSenseRouteRefresh from '../components/ads/AdSenseRouteRefresh';
import DeferredThirdPartyScripts from '../components/DeferredThirdPartyScripts';
import { webSiteSchema, siteNavigationSchema } from '../lib/schema/site';
import '../styles/globals.css';

const Footer = dynamic(() => import('../components/Footer'), { ssr: true });

const inter = Inter({
  subsets: ['latin'],
  display: 'optional',
  adjustFontFallback: true,
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
      card: 'summary',
      title: 'GPT Clean Up Tools - Free AI Text Cleanup Utilities',
      description: 'Free AI text cleanup tools - remove hidden Unicode, fix spacing, clean ChatGPT output, and normalize text for publishing.',
    },
  };
}

type RootLayoutProps = {
  children: ReactNode;
};

// Cache at edge for 24h to reduce Fast Origin Transfer (layout is now static)
export const revalidate = 86400;

const SITE_SCHEMA = webSiteSchema();
const NAV_SCHEMA = siteNavigationSchema();

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="alternate" type="application/rss+xml" title="GPTCLEANUP AI Blog & Tools RSS Feed" href="https://gptcleanuptools.com/rss.xml" />
      </head>
      <body className={`${inter.variable} bg-slate-50 text-slate-900 antialiased pb-[80px] md:pb-[120px] lg:pb-[140px]`}>
        <DeferredThirdPartyScripts />
        <AdSenseRouteRefresh />
        <JsonLd data={SITE_SCHEMA} />
        <JsonLd data={NAV_SCHEMA} />
        <BreadcrumbJsonLdAndLang />
        <ProFunnelBanner />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyFooterAd />
        <AdBlockNotice />
      </body>
    </html>
  );
}
