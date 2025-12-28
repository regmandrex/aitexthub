import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { JsonLd } from '../components/JsonLd';
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GPT CLEAN UP - Free AI Text Cleaning Tools',
    description: 'Clean and fix messy AI text from ChatGPT, Gemini, and Claude.',
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
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
      </body>
    </html>
  );
}
