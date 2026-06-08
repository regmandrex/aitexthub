'use client';

import { trackEvent } from '@/lib/analytics';

type CheckoutButtonProps = {
  href: string;
  planId: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Client wrapper for checkout links so we can fire the `checkout_started` funnel
 * event from server-rendered pages (e.g. /pro) without making the whole page a
 * client component.
 */
export default function CheckoutButton({ href, planId, className, children }: CheckoutButtonProps) {
  return (
    <a
      href={href}
      onClick={() => trackEvent('checkout_started', { plan: planId, location: 'pro_page' })}
      className={className}
    >
      {children}
    </a>
  );
}
