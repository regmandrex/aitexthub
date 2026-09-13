import type { CSSProperties } from 'react';

type AdSenseSlotProps = {
  className?: string;
  style?: CSSProperties;
};

// AdSense is temporarily disabled site-wide. Returning null here (rather than
// editing every call site) keeps all existing <AdSenseSlot /> usages working
// with zero rendered output. Restore the previous implementation to re-enable.
export default function AdSenseSlot(_props: AdSenseSlotProps) {
  return null;
}
