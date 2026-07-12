'use client';

import { trackEvent } from '@/lib/analytics';
import { useSession } from '@/lib/auth-client';
import { withCheckoutEmail } from '@/lib/checkout';

type CheckoutButtonProps = {
  href: string;
  planId: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Client wrapper for checkout links so we can fire the `checkout_started` funnel
 * event from server-rendered pages (e.g. /pro) without making the whole page a
 * client component. Prefills the LS checkout email for signed-in users so the
 * order email always matches the account (required for instant Pro activation).
 */
export default function CheckoutButton({ href, planId, className, children }: CheckoutButtonProps) {
  const { data: session } = useSession();

  return (
    <a
      href={withCheckoutEmail(href, session?.user?.email)}
      onClick={() => trackEvent('checkout_started', { plan: planId, location: 'pro_page' })}
      className={className}
    >
      {children}
    </a>
  );
}
