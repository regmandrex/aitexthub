import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { Outfit } from 'next/font/google';
import Header from '../components/Header';
import { JsonLd } from '../components/JsonLd';
import { BreadcrumbJsonLdAndLang } from '../components/BreadcrumbJsonLdAndLang';
import DeferredThirdPartyScripts from '../components/DeferredThirdPartyScripts';
import GoogleAds from '../components/GoogleAds';
import { webSiteSchema, siteNavigationSchema, organizationSchema } from '../lib/schema/site';
import '../styles/globals.css';

const Footer = dynamic(() => import('../components/Footer'), { ssr: true });

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: true,
  preload: true,
  variable: '--font-outfit',
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://aitextcleanuptools.com'),
    title: {
      default: 'AI Text Cleanup Tools - Free AI Text Utilities',
      template: '%s | AI Text Cleanup Tools',
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
      'AI text clean up',
      'gpt cleaner',
      'AI text cleanup',
      'gpt text cleaner',
      'clean gpt',
      'gpt space remover',
      'gpt clean',
      'AI Text Cleaner',
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
      title: 'AI Text Cleanup Tools - Free AI Text Utilities',
      description: 'Free AI text cleanup tools - remove hidden Unicode, fix spacing, clean ChatGPT output, and normalize text for publishing.',
      url: 'https://aitextcleanuptools.com',
      siteName: 'AI Text Cleanup Tools',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AI Text Cleanup Tools - Free AI Text Utilities',
      description: 'Free AI text cleanup tools - remove hidden Unicode, fix spacing, clean ChatGPT output, and normalize text for publishing.',
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '32x32' },
        { url: '/icon.svg', type: 'image/svg+xml' },
        { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [{ url: '/icon.png', sizes: '512x512', type: 'image/png' }],
    },
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

// Content changes only on deploy — cache at the edge for 30 days to reduce ISR reads.
export const revalidate = 2592000;

type RootLayoutProps = {
  children: ReactNode;
};

const SITE_SCHEMA = webSiteSchema();
const NAV_SCHEMA = siteNavigationSchema();
const ORG_SCHEMA = organizationSchema();

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="alternate" type="application/rss+xml" title="AI Text Cleanup Tools Blog & Tools RSS Feed" href="https://aitextcleanuptools.com/rss.xml" />
      </head>
      <body className={`${outfit.variable} bg-slate-50 text-slate-900 antialiased`}>
        {/* AdSense script disabled site-wide for now — see components/ads/* and GoogleAds.tsx. */}
        <DeferredThirdPartyScripts />
        <JsonLd data={ORG_SCHEMA} />
        <JsonLd data={SITE_SCHEMA} />
        <JsonLd data={NAV_SCHEMA} />
        <BreadcrumbJsonLdAndLang />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <GoogleAds />
      </body>
    </html>
  );
}
