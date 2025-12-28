"use client";

import { useEffect } from 'react';
import { __debugLineBreaks } from '../lib/tools';

export default function DebugLineBreaks() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      __debugLineBreaks();
    }
  }, []);

  return null;
}
