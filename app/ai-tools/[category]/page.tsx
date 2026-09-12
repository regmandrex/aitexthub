import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMeta } from '@/lib/seo-meta';
import { getAllTools } from '@/lib/tools/registry';
import {
  TOOL_CATEGORIES,
  getCategoryBySlug,
  CATEGORY_COUNTS,
} from '@/lib/seo/categories';
import { getCategoryContent } from '@/lib/seo/category-content';
import ToolCard from '@/components/ToolCard';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';

type PageProps = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return TOOL_CATEGORIES.map((category) => ({ category: category.slug }));
}

// Categories are a fixed, known set - anything else is a 404, not an ISR miss.
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return buildMeta({
    title: category.seoTitle,
    description: category.metaDescription,
    urlPath: `/ai-tools/${category.slug}`,
  });
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return notFound();

  const tools = getAllTools()
    .filter((tool) => tool.category === category.key && tool.slug !== '')
    .sort((a, b) => a.title.localeCompare(b.title));

  const content = await getCategoryContent(category.slug);
  // Skip empty categories: linking to a page with no tools wastes the click
  // and dilutes internal link equity.
  const otherCategories = TOOL_CATEGORIES.filter(
    (c) => c.key !== category.key && (CATEGORY_COUNTS[c.key] ?? 0) > 0
  );

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.title,
    description: category.metaDescription,
    url: `https://aitextcleanuptools.com/ai-tools/${category.slug}`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: tools.length,
      itemListElement: tools.map((tool, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: tool.title,
        url: `https://aitextcleanuptools.com/${tool.slug}`,
      })),
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aitextcleanuptools.com' },
      { '@type': 'ListItem', position: 2, name: 'All Tools', item: 'https://aitextcleanuptools.com/ai-tools' },
      {
        '@type': 'ListItem',
        position: 3,
        name: category.title,
        item: `https://aitextcleanuptools.com/ai-tools/${category.slug}`,
      },
    ],
  };

  return (
    <div className="bg-[#f7f9ff] min-h-screen">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={itemListJsonLd} />
      {content ? <FaqJsonLd faqs={content.faqs} name={`${category.title} FAQ`} /> : null}

      <div className="mx-auto w-full max-w-4xl px-4 py-5 space-y-10 sm:py-8 md:py-10">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'All Tools', href: '/ai-tools' },
            { label: category.title, href: `/ai-tools/${category.slug}` },
          ]}
        />

        <section className="space-y-3">
          <h1 className="text-xl font-semibold text-slate-900 sm:text-2xl md:text-3xl">
            {category.heading}
          </h1>
          <p className="text-sm text-slate-700 md:text-[15px]">{category.description}</p>
        </section>

        {content ? (
          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
            <div className="prose prose-slate max-w-none prose-headings:scroll-mt-24">
              {content.intro}
            </div>
          </section>
        ) : null}

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900 md:text-xl">
            Every {category.title.toLowerCase()} tool
          </h2>
          <div className="grid gap-4 md:gap-5 md:grid-cols-2">
            {tools.map((tool) => (
              <ToolCard
                key={tool.slug}
                title={tool.title}
                description={tool.shortDescription}
                href={`/${tool.slug}`}
                ctaLabel="Open Tool"
              />
            ))}
          </div>
        </section>

        {content ? (
          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
            <div className="prose prose-slate max-w-none prose-headings:scroll-mt-24">
              {content.body}
            </div>
          </section>
        ) : null}

        {content ? (
          <FAQSection
            items={content.faqs}
            title={`${category.title}: Frequently Asked Questions`}
            intro={`Common questions about these tools, how they work, and when to reach for each one.`}
          />
        ) : null}

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900 md:text-xl">Browse other categories</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {otherCategories.map((other) => (
              <Link
                key={other.slug}
                href={`/ai-tools/${other.slug}`}
                className="group block rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="block text-sm font-semibold text-slate-900 group-hover:text-brand-700">
                  {other.title}
                </span>
                <span className="mt-1 block text-xs text-slate-600">{other.description}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
