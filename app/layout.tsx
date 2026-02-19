import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Script from 'next/script';
import { headers } from 'next/headers';
import { Inter } from 'next/font/google';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { JsonLd } from '../components/JsonLd';
import StickyFooterAd from '../components/ads/StickyFooterAd';
import { webSiteSchema, siteNavigationSchema } from '../lib/schema/site';
import { breadcrumbListSchema } from '../lib/schema/breadcrumb';
import { getToolBySlug } from '../lib/tools/registry';
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

export default async function RootLayout({ children }: RootLayoutProps) {
  // Try to get pathname from headers, fallback to 'en'
  const reqHeaders = await headers();
  const pathname = reqHeaders.get('x-site-pathname') || reqHeaders.get('x-pathname') || '/';
  const lang = pathname === '/korean-nickname-generator' || pathname.startsWith('/korean-nickname-generator/') ? 'ko' : 'en';

  return (
    <html lang={lang} dir="ltr">
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
        {(() => {
          // SEO-only breadcrumbs (JSON-LD). No visible UI.
          const abs = (p: string) => {
            const path = p === '/' ? '/' : `${p.startsWith('/') ? p : `/${p}`}/`;
            return `https://gptcleanuptools.com${path.replace(/\/{2,}/g, '/')}`;
          };

          const items: Array<{ name: string; url: string }> = [];
          items.push({ name: 'Home', url: abs('/') });

          // Blog breadcrumbs
          if (pathname === '/blog' || pathname.startsWith('/blog/')) {
            items.push({ name: 'Blog', url: abs('/blog') });
            if (pathname !== '/blog') {
              const slug = pathname.replace(/^\/blog\//, '').replace(/\/$/, '');
              const title = slug
                .split('-')
                .filter(Boolean)
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(' ');
              items.push({ name: title || 'Post', url: abs(`/blog/${slug}`) });
            }
            return items.length > 1 ? <JsonLd data={breadcrumbListSchema(items)} /> : null;
          }

          // Tool breadcrumbs: Home -> AI Tools -> Tool
          if (pathname === '/ai-tools') {
            items.push({
              name: 'AI Tools',
              url: abs('/ai-tools'),
            });
            return <JsonLd data={breadcrumbListSchema(items)} />;
          }

          if (pathname.startsWith('/') && pathname.split('/').filter(Boolean).length === 1) {
            const slug = pathname.slice(1);
            const tool = getToolBySlug(slug);
            if (tool) {
              items.push({
                name: 'AI Tools',
                url: abs('/ai-tools'),
              });
              items.push({
                name: tool.title,
                url: abs(`/${slug}`),
              });
              return <JsonLd data={breadcrumbListSchema(items)} />;
            }
          }

          // Static/other pages: Home -> Page
          if (pathname !== '/' && pathname.startsWith('/')) {
            const seg = pathname.split('/').filter(Boolean)[0] || '';
            if (seg) {
              const label = seg
                .split('-')
                .filter(Boolean)
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(' ');
              items.push({ name: label, url: abs(`/${seg}`) });
              return items.length > 1 ? <JsonLd data={breadcrumbListSchema(items)} /> : null;
            }
          }

          return null;
        })()}
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
