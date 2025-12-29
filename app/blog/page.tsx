import BlogCard from '../../components/BlogCard';
import AdSenseSlot from '../../components/ads/AdSenseSlot';

const posts = [
  {
    slug: 'why-chatgpt-text-looks-messy-and-how-to-fix-it',
    title: 'Why ChatGPT Text Looks Messy and How to Fix It',
    description: 'Understand the spacing, line-break, and bullet quirks in AI text, plus quick fixes with our cleaner.',
    date: 'Jan 2025',
  },
  {
    slug: 'chatgpt-formatting-fixer-for-word-and-docs',
  title: 'ChatGPT Formatting Fixer - Clean AI Output for Word & Docs',
    description: 'Learn how to prep AI-generated content for Word or Google Docs without double spaces or odd bullets.',
    date: 'Jan 2025',
  },
];

export default function BlogIndexPage() {
  return (
    <div className="space-y-6">
      <div className="ad-slot">
        <AdSenseSlot className="w-full" />
      </div>
      <div className="grid gap-4">
        {posts.map((post) => (
          <BlogCard key={post.slug} href={`/blog/${post.slug}`} title={post.title} description={post.description} date={post.date} />
        ))}
      </div>
    </div>
  );
}
