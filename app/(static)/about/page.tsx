import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | GPT CLEAN UP',
  description: 'Learn about GPT CLEAN UP and how we help tidy AI text from ChatGPT, Gemini, and more.',
};

export default function AboutPage() {
  return (
    <article className="prose max-w-none prose-slate">
      <h1>About GPT CLEAN UP</h1>
      <p>
        GPT CLEAN UP is a simple toolkit for cleaning and formatting AI-generated text. We focus on removing messy spacing, blank lines, and
        invisible characters that appear when you paste responses from ChatGPT, Gemini, Claude, and other models.
      </p>
      <p>
        These tools run in your browser-no accounts or logins required. We are not affiliated with OpenAI or Google, and this site is built
        purely to save you time when working with AI content.
      </p>
      <p>
        Try the main <Link href="/">ChatGPT Text Cleaner</Link> or the dedicated{' '}
        <Link href="/chatgpt-space-remover">space remover</Link> if spacing is your biggest issue.
      </p>
    </article>
  );
}
