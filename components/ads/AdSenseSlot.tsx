'use client';

import { useEffect } from 'react';
import type { CSSProperties } from 'react';

type AdSenseSlotProps = {
  className?: string;
  style?: CSSProperties;
};

const AD_CLIENT = 'ca-pub-8764610479002120';
const AD_SLOT = '3825906278';

export default function AdSenseSlot({ className, style }: AdSenseSlotProps) {
  useEffect(() => {
    const win = window as Window & { adsbygoogle?: Array<unknown> };
    (win.adsbygoogle = win.adsbygoogle || []).push({});
  }, []);

  const classes = ['adsbygoogle', className].filter(Boolean).join(' ');

  return (
    <ins
      className={classes}
      style={{ display: 'block', ...style }}
      data-ad-client={AD_CLIENT}
      data-ad-slot={AD_SLOT}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
