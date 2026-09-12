import Link from 'next/link';
import { buildMeta } from '@/lib/seo-meta';


export async function generateMetadata() {
  return buildMeta({
    title: 'About - Free AI Text Cleaning Tools',
    description: 'Learn about AI Text Cleanup Tools and how we help tidy AI text from ChatGPT, Gemini, and more.',
    urlPath: '/about',
  });
}

export default async function AboutPage() {
  return (
    <article className="prose max-w-none prose-slate">
      <h1>About AI Text Cleanup Tools</h1>
      <p>AI Text Cleanup Tools provides free, browser-based tools to clean and normalize AI-generated text. Our tools help remove hidden Unicode characters, fix spacing issues, and prepare text for publishing.</p>
      <p>All processing happens locally in your browser - your content never leaves your device.</p>
      <p>
        Try our <Link href="/">ChatGPT Text Cleaner</Link> or{' '}
        <Link href="/chatgpt-space-remover">Space Remover</Link> if you're dealing with spacing issues.
      </p>
    </article>
  );
}

