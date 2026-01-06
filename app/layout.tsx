import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Script from 'next/script';
import { headers } from 'next/headers';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { JsonLd } from '../components/JsonLd';
import StickyFooterAd from '../components/ads/StickyFooterAd';
import { webSiteSchema, siteNavigationSchema } from '../lib/schema/site';
import '../styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://gptcleanuptools.com'),
  title: {
    default: 'GPT CLEAN UP - Free AI Text Cleaning Tools',
    template: '%s | GPT CLEAN UP',
  },
  description:
    'Clean and fix messy AI text from ChatGPT, Gemini, and Claude. Remove weird spacing, normalize formatting, and prepare content for Word or Docs.',
  openGraph: {
    title: 'GPT CLEAN UP - Free AI Text Cleaning Tools',
    description: 'Clean and fix messy AI text from ChatGPT, Gemini, and Claude.',
    url: 'https://gptcleanuptools.com',
    siteName: 'GPT CLEAN UP',
    type: 'website',
    images: [
      {
        url: 'https://gptcleanuptools.com/brand/gpt-clean-up-tools.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GPT CLEAN UP - Free AI Text Cleaning Tools',
    description: 'Clean and fix messy AI text from ChatGPT, Gemini, and Claude.',
    images: ['https://gptcleanuptools.com/brand/gpt-clean-up-tools.png'],
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const headerList = await headers();
  const lang = headerList.get('x-site-lang') === 'ko' ? 'ko' : 'en';
  const bodyClassName = [
    'bg-slate-50',
    'text-slate-900',
    'antialiased',
    lang === 'ko' ? 'break-keep' : '',
    'pb-[80px]',
    'md:pb-[120px]',
    'lg:pb-[140px]',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <html lang={lang}>
      <head>
        {lang === 'ko' ? <meta charSet="utf-8" /> : null}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
      </head>
      <body className={bodyClassName}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8764610479002120"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <JsonLd data={webSiteSchema()} />
        <JsonLd data={siteNavigationSchema()} />
        {/* Example AdSense integration (replace ca-pub-XXXX with your publisher id)
        <Script
          id="adsense-init"
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          data-ad-client="ca-pub-XXXX"
          async
        />
        */}
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyFooterAd />
      </body>
    </html>
  );
}
