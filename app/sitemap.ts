import { MetadataRoute } from 'next';
import { siteUrl } from '../lib/seo/url';
import { toolPages, categoryPages, staticPages } from '../lib/seo/registry';
import { blogPosts, blogDateToDate } from '../lib/blog-posts';

// lastModified is only set where we have a real date (blog posts). Reporting
// `new Date()` on every URL tells Google everything changed on every crawl,
// which trains it to ignore our lastmod entirely.
export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  // Homepage — highest priority
  urls.push({
    url: siteUrl,
    changeFrequency: 'weekly',
    priority: 1.0,
  });

  toolPages.filter((page) => page.slug !== '').forEach((page) => {
    urls.push({
      url: `${siteUrl}/${page.slug}`,
      changeFrequency: 'weekly',
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
