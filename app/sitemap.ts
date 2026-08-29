import { MetadataRoute } from 'next';
import { siteUrl } from '../lib/seo/url';
import { toolPages, categoryPages, staticPages } from '../lib/seo/registry';
import { TOOL_CATEGORIES, CATEGORY_COUNTS } from '../lib/seo/categories';
import { blogPosts, blogDateToDate } from '../lib/blog-posts';

// lastModified is only set where we have a real date (blog posts). Reporting
// `new Date()` on every URL tells Google everything changed on every crawl,
// which trains it to ignore our lastmod entirely.
export const revalidate = 2592000;

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  // Homepage — highest priority
  urls.push({
    url: siteUrl,
    changeFrequency: 'monthly',
    priority: 1.0,
  });

  toolPages.filter((page) => page.slug !== '').forEach((page) => {
    urls.push({
      url: `${siteUrl}/${page.slug}`,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  categoryPages.forEach((page) => {
    urls.push({
      url: page.slug ? `${siteUrl}/${page.slug}` : siteUrl,
      changeFrequency: 'monthly',
      priority: 0.4,
    });
  });

  // Category hub pages under /ai-tools/. Higher priority than legacy
  // categoryPages since these are real long-form landing pages.
  // Categories with no registered tools are skipped: submitting an empty
  // listing page reads as thin content regardless of its word count.
  TOOL_CATEGORIES.filter((category) => (CATEGORY_COUNTS[category.key] ?? 0) > 0).forEach((category) => {
    urls.push({
      url: `${siteUrl}/ai-tools/${category.slug}`,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  staticPages.forEach((page) => {
    urls.push({
      url: page.slug ? `${siteUrl}/${page.slug}` : siteUrl,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  const newestPostDate = blogPosts
    .map((post) => blogDateToDate(post.date))
    .reduce((latest, d) => (d > latest ? d : latest), new Date(0));

  urls.push({
    url: `${siteUrl}/blog`,
    lastModified: newestPostDate,
    changeFrequency: 'weekly',
    priority: 0.6,
  });

  blogPosts.forEach((post) => {
    urls.push({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: blogDateToDate(post.date),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  return urls;
}
