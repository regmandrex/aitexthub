'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbListSchema } from '@/lib/schema/breadcrumb';
import { getToolBySlug } from '@/lib/tools/registry';

const SITE = 'https://gptcleanuptools.com';

function abs(p: string) {
  const path = p === '/' ? '/' : `${p.startsWith('/') ? p : `/${p}`}/`;
  return `${SITE}${path.replace(/\/{2,}/g, '/')}`;
}

export function BreadcrumbJsonLdAndLang() {
  const pathname = usePathname() || '/';

  // Sync document lang for korean-nickname-generator (e.g. for screen readers)
  useEffect(() => {
    const lang =
      pathname === '/korean-nickname-generator' || pathname.startsWith('/korean-nickname-generator/')
        ? 'ko'
        : 'en';
    if (typeof document !== 'undefined' && document.documentElement.getAttribute('lang') !== lang) {
      document.documentElement.setAttribute('lang', lang);
    }
  }, [pathname]);

  const items: Array<{ name: string; url: string }> = [];
  items.push({ name: 'Home', url: abs('/') });

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

  if (pathname === '/ai-tools') {
    items.push({ name: 'AI Tools', url: abs('/ai-tools') });
    return <JsonLd data={breadcrumbListSchema(items)} />;
  }

  const slug = pathname.replace(/^\//, '').split('/')[0] || '';
  if (slug && pathname.split('/').filter(Boolean).length === 1) {
    const tool = getToolBySlug(slug);
    if (tool) {
      items.push({ name: 'AI Tools', url: abs('/ai-tools') });
      items.push({ name: tool.title, url: abs(`/${slug}`) });
      return <JsonLd data={breadcrumbListSchema(items)} />;
    }
  }

  if (pathname !== '/' && pathname.startsWith('/') && slug) {
    const label = slug
      .split('-')
      .filter(Boolean)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    items.push({ name: label, url: abs(`/${slug}`) });
    return items.length > 1 ? <JsonLd data={breadcrumbListSchema(items)} /> : null;
  }

  return null;
}
