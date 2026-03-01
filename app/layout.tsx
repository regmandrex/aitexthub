import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { JsonLd } from '../components/JsonLd';
import { BreadcrumbJsonLdAndLang } from '../components/BreadcrumbJsonLdAndLang';
import StickyFooterAd from '../components/ads/StickyFooterAd';
import { webSiteSchema, siteNavigationSchema } from '../lib/schema/site';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
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
      images: [
        {
          url: 'https://gptcleanuptools.com/brand/gpt-clean-up-tools.png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'GPT Clean Up Tools - Free AI Text Cleanup Utilities',
      description: 'Free AI text cleanup tools - remove hidden Unicode, fix spacing, clean ChatGPT output, and normalize text for publishing.',
      images: ['https://gptcleanuptools.com/brand/gpt-clean-up-tools.png'],
    },
  };
}

type RootLayoutProps = {
  children: ReactNode;
};

// Cache at edge for 24h to reduce Fast Origin Transfer (layout is now static)
export const revalidate = 86400;

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="alternate" type="application/rss+xml" title="GPTCLEANUP AI Blog & Tools RSS Feed" href="https://gptcleanuptools.com/rss.xml" />
      </head>
      <body className={`${inter.variable} bg-slate-50 text-slate-900 antialiased pb-[80px] md:pb-[120px] lg:pb-[140px]`}>
        {/* Google tag (gtag.js) - deferred to prevent blocking LCP */}
        <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-YZ37PVSNQ2" />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YZ37PVSNQ2');
            `}
        </Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8764610479002120"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <JsonLd data={webSiteSchema()} />
        <JsonLd data={siteNavigationSchema()} />
        <BreadcrumbJsonLdAndLang />
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
