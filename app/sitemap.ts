import { MetadataRoute } from 'next';
import { cleanUrl } from '../lib/seo/url';
import { toolPages, modelPages, categoryPages } from '../lib/seo/registry';

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  toolPages.forEach((page) => {
    urls.push({
      url: cleanUrl(page.slug),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  modelPages
    .filter((p) => !p.noindex)
    .forEach((page) => {
      urls.push({
        url: cleanUrl(page.slug),
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
      });
    });

  categoryPages
    .filter((p) => !p.noindex)
    .forEach((page) => {
      urls.push({
        url: cleanUrl(page.slug),
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.4,
      });
    });

  return urls;
}
