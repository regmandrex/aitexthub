import { blogPosts, blogDateToRfc822 } from '@/lib/blog-posts';
import { toolPages } from '@/lib/seo/registry';

const SITE_URL = 'https://gptcleanuptools.com';

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toolUrl(slug: string): string {
  if (!slug) return `${SITE_URL}/`;
  return `${SITE_URL}/${slug}/`;
}

export function GET() {
  const lastBuild = new Date().toUTCString();

  const blogItems = blogPosts.map(
    (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}/</link>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${blogDateToRfc822(post.date)}</pubDate>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}/</guid>
    </item>`
  );

  const toolItems = toolPages.map(
    (tool) => `
    <item>
      <title>${escapeXml(tool.seoTitle ?? tool.title)}</title>
      <link>${toolUrl(tool.slug)}</link>
      <description>${escapeXml(tool.description)}</description>
      <pubDate>${lastBuild}</pubDate>
      <guid isPermaLink="true">${toolUrl(tool.slug)}</guid>
    </item>`
  );

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>GPTCLEANUP AI - Blog &amp; Tools</title>
    <link>${SITE_URL}</link>
    <description>Free AI text cleanup tools and guides: ChatGPT Text Cleaner, Space Remover, formatting fixes, and practical guides for cleaning AI output for documents and SEO.</description>
    <language>en</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${blogItems.join('')}
    ${toolItems.join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
