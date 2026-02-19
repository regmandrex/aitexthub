import BlogCard from '../../components/BlogCard';
import AdSenseSlot from '../../components/ads/AdSenseSlot';
import { buildMeta } from '@/lib/seo-meta';
import { blogPosts } from '@/lib/blog-posts';

export async function generateMetadata() {
  return buildMeta({
    title: 'AI Text Cleaning Blog - GPT CLEAN UP Guides & Tips',
    description: 'Practical guides for cleaning up AI output, fixing formatting issues, and preparing ChatGPT or Gemini text for documents.',
    urlPath: '/blog',
  });
}

export default async function BlogIndexPage() {
  return (
    <div className="space-y-6">
      <div className="ad-slot">
        <AdSenseSlot className="w-full" />
      </div>
      <div className="grid gap-4">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} href={`/blog/${post.slug}`} title={post.title} description={post.description} date={post.date} />
        ))}
      </div>
    </div>
  );
}

