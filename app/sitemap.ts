import { MetadataRoute } from 'next';
import { siteUrl } from '../lib/seo/url';
import { toolPages, categoryPages, staticPages } from '../lib/seo/registry';
import { getBlogSitemapSlugs } from '../lib/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  toolPages.forEach((page) => {
    urls.push({
      url: page.slug ? `${siteUrl}/${page.slug}` : siteUrl,
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
        priority: 0.5,
      });
    });

  getBlogSitemapSlugs().forEach((slug) => {
    urls.push({
      url: slug ? `${siteUrl}/${slug}` : siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    });
  });

  return urls;
}
