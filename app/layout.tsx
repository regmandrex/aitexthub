import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Script from 'next/script';
import { headers } from 'next/headers';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { JsonLd } from '../components/JsonLd';
import StickyFooterAd from '../components/ads/StickyFooterAd';
import { webSiteSchema, siteNavigationSchema } from '../lib/schema/site';
import { breadcrumbListSchema } from '../lib/schema/breadcrumb';
import { DEFAULT_LOCALE } from '../lib/i18n';
import { getToolBySlug } from '../lib/tools/registry';
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
  const t = await createServerT(locale);
  const reqHeaders = await headers();
  const pathname = reqHeaders.get('x-site-pathname') || '/';
  
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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body className={bodyClassName}>
        <I18nProvider locale={locale} messages={messages}>
          {/* Google tag (gtag.js) */}
          <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-YZ37PVSNQ2" />
          <Script id="gtag-init" strategy="afterInteractive">
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
            strategy="afterInteractive"
          />
          <JsonLd data={webSiteSchema()} />
          <JsonLd data={siteNavigationSchema()} />
          {(() => {
            // SEO-only breadcrumbs (JSON-LD). No visible UI.
            const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
            const abs = (p: string) => {
              const path = p === '/' ? `${prefix || ''}/` : `${prefix}${p.startsWith('/') ? p : `/${p}`}/`;
              return `https://gptcleanuptools.com${path.replace(/\/{2,}/g, '/')}`;
            };

            const items: Array<{ name: string; url: string }> = [];
            items.push({ name: t('Nav.home') !== 'Nav.home' ? t('Nav.home') : 'Home', url: abs('/') });

            // Blog breadcrumbs
            if (pathname === '/blog' || pathname.startsWith('/blog/')) {
              items.push({ name: t('Nav.blog') !== 'Nav.blog' ? t('Nav.blog') : 'Blog', url: abs('/blog') });
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

            // Tool breadcrumbs: Home -> All Tools -> Tool
            if (pathname === '/all-tools') {
              items.push({
                name: t('Nav.tools') !== 'Nav.tools' ? t('Nav.tools') : 'All Tools',
                url: abs('/all-tools'),
              });
              return <JsonLd data={breadcrumbListSchema(items)} />;
            }

            if (pathname.startsWith('/') && pathname.split('/').filter(Boolean).length === 1) {
              const slug = pathname.slice(1);
              const tool = getToolBySlug(slug);
              if (tool) {
                items.push({
                  name: t('Nav.tools') !== 'Nav.tools' ? t('Nav.tools') : 'All Tools',
                  url: abs('/all-tools'),
                });
                const key = `Tools.${slug}.title`;
                const translatedTitle = t(key);
                items.push({
                  name: translatedTitle !== key ? translatedTitle : tool.title,
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
        </I18nProvider>
      </body>
    </html>
  );
}
