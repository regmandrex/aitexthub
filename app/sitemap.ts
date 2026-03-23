import { MetadataRoute } from 'next';
import { siteUrl } from '../lib/seo/url';
import { toolPages, categoryPages, staticPages } from '../lib/seo/registry';
import { getBlogSitemapSlugs } from '../lib/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  // Homepage — highest priority
  urls.push({
    url: siteUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  });

  toolPages.filter((page) => page.slug !== '').forEach((page) => {
    urls.push({
      url: `${siteUrl}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  categoryPages.forEach((page) => {
    urls.push({
      url: page.slug ? `${siteUrl}/${page.slug}` : siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    });
  });

  staticPages.forEach((page) => {
      urls.push({
        url: page.slug ? `${siteUrl}/${page.slug}` : siteUrl,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });

  getBlogSitemapSlugs().forEach((slug) => {
    urls.push({
      url: slug ? `${siteUrl}/${slug}` : siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  return urls;
}
