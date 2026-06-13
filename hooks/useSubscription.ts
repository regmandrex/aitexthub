'use client';
import { useEffect, useState } from 'react';

export type Subscription = {
  isPro: boolean;
  plan: string | null;
  wordsUsed: number;
  wordsLimit: number | null;
};

// Shared across components on a page: one fetch of /api/subscription, cached.
let cached: Subscription | null = null;
let inflight: Promise<Subscription> | null = null;

async function fetchSubscription(): Promise<Subscription> {
  if (cached) return cached;
  if (!inflight) {
    inflight = fetch('/api/subscription', { credentials: 'include' })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then((data: Subscription) => {
        cached = data;
        return data;
      })
      .catch(() => {
        const fallback: Subscription = { isPro: false, plan: null, wordsUsed: 0, wordsLimit: null };
        cached = fallback;
        return fallback;
      })
      .finally(() => {
        inflight = null;
      });
  }
  return inflight;
}

/** Returns the current user's subscription, or `undefined` while loading. */
export function useSubscription(): Subscription | undefined {
  const [sub, setSub] = useState<Subscription | undefined>(cached ?? undefined);

  useEffect(() => {
    // fetchSubscription resolves from the module cache when available, so the
    // setState always happens in a microtask, never synchronously in the effect.
    let active = true;
    fetchSubscription().then((data) => {
      if (active) setSub(data);
    });
    return () => {
      active = false;
    };
  }, []);

  return sub;
}
