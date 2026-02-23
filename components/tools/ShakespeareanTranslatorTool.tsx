'use client';

import { GenericTextProcessorTool } from './GenericTextProcessorTool';

// Simple demo: replace common words with Shakespearean equivalents
function toShakespearean(text: string): string {
  const map: Record<string, string> = {
    you: 'thee',
    your: 'thy',
    are: 'art',
    is: 'hath',
    have: 'hast',
    do: 'dost',
    does: 'doth',
    will: 'wilt',
    would: 'wouldst',
    can: 'canst',
    shall: 'shalt',
    not: 'nay',
    yes: 'aye',
    hello: 'hark',
    goodbye: 'farewell',
    please: 'prithee',
    thank: 'gramercy',
    friend: 'good sir',
    sir: 'sir',
    madam: 'madam',
  };
  let out = text;
  const words = text.split(/\b/);
  out = words
    .map((w) => {
      const lower = w.toLowerCase();
      if (map[lower]) return w === w.toUpperCase() ? map[lower].toUpperCase() : map[lower];
      return w;
    })
    .join('');
  return out || text;
}

export function ShakespeareanTranslatorTool() {
  return (
    <GenericTextProcessorTool
      processText={(text) => (text.trim() ? toShakespearean(text.trim()) : '')}
      inputLabel="Modern English"
      outputLabel="Shakespearean English"
      inputPlaceholder="Enter text to translate into Shakespearean..."
      outputPlaceholder="Shakespearean translation will appear here..."
      processButtonLabel="Translate to Shakespearean"
      copyButtonLabel="Copy"
      clearButtonLabel="Clear"
    />
  );
}
