import Link from 'next/link';

export type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

/**
 * Visible breadcrumb nav for tool and other pages. Complements JSON-LD breadcrumbs for SEO.
 */
export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  if (items.length === 0) return null;
  return (
    <nav aria-label="Breadcrumb" className={`text-sm text-slate-600 ${className}`}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-x-2">
            {i > 0 && <span className="text-slate-400" aria-hidden>/</span>}
            {i === items.length - 1 ? (
              <span className="font-medium text-slate-900">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-brand-700 hover:underline">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
