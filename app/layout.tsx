import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Script from 'next/script';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { JsonLd } from '../components/JsonLd';
import StickyFooterAd from '../components/ads/StickyFooterAd';
import { webSiteSchema, siteNavigationSchema } from '../lib/schema/site';
import { getServerLocale } from '../lib/server-i18n';
import { I18nProvider } from '../lib/client-i18n';
import { createServerT } from '../lib/server-t';
import '../styles/globals.css';

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  const title = t('Site.meta.title');
  const description = t('Site.meta.description');

  return {
    metadataBase: new URL('https://gptcleanuptools.com'),
    title: {
      default: title,
      template: '%s | GPT CLEAN UP',
    },
    description,
    openGraph: {
      title,
      description,
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
      title,
      description,
      images: ['https://gptcleanuptools.com/brand/gpt-clean-up-tools.png'],
    },
  };
}

type RootLayoutProps = {
  children: ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const { locale, messages } = await getServerLocale();
  
  // Special handling for languages that need specific CSS classes
  const needsBreakKeep = locale === 'ko' || locale === 'zh-cn';
  const bodyClassName = [
    'bg-slate-50',
    'text-slate-900',
    'antialiased',
    needsBreakKeep ? 'break-keep' : '',
    'pb-[80px]',
    'md:pb-[120px]',
    'lg:pb-[140px]',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <html lang={locale} dir="ltr">
      <head>
        {needsBreakKeep ? <meta charSet="utf-8" /> : null}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
      </head>
      <body className={bodyClassName}>
        <I18nProvider locale={locale} messages={messages}>
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
        </I18nProvider>
      </body>
    </html>
  );
}
