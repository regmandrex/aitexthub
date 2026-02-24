/**
 * Transformers Name Generator — data and logic.
 * Generates Transformers-style character/title names (robots, factions, titles).
 * All processing is client-safe (no server calls).
 */

import { seededRandom, pick } from './nameGeneratorUtils';

// Transformer-style prefixes and suffixes (inspired by franchise naming)
const PREFIXES: string[] = [
  'Optimus', 'Megatron', 'Bumble', 'Starscream', 'Ironhide', 'Soundwave', 'Ratchet', 'Jazz',
  'Wheel', 'Sky', 'Silver', 'Blitz', 'Storm', 'Thunder', 'Shadow', 'Night',
  'Prime', 'Strike', 'Blade', 'Razor', 'Crank', 'Gear', 'Bolt', 'Nexus',
];
const SUFFIXES: string[] = [
  'bee', 'prime', 'cracker', 'storm', 'fire', 'strike', 'blade', 'wing',
  'bot', 'tron', 'wave', 'claw', 'hammer', 'charge', 'runner', 'strike',
  'storm', 'blade', 'wing', 'crash', 'strike', 'fire', 'charge', 'mode',
];

const TITLES: string[] = [
  'of the Moon', 'of Cybertron', 'of Earth', 'Dark of the Moon', 'Revenge', 'Rise',
  'Defender', 'Champion', 'Guardian', 'Strike', 'Elite', 'Prime',
];

export type TransformersNameResult = {
  name: string;
  style: 'character' | 'title';
};

export function generateTransformersNames(
  count: number,
  includeTitles: boolean,
  seed?: number
): TransformersNameResult[] {
  const rng = seededRandom(seed ?? Date.now());
  const results: TransformersNameResult[] = [];
  const capped = Math.min(Math.max(count, 1), 24);

  const CHARACTER_NAMES = [
    'Bumblebee', 'Starscream', 'Ironhide', 'Soundwave', 'Ratchet', 'Jazz', 'Wheeljack', 'Skywarp',
    'Thundercracker', 'Shockwave', 'Blitzwing', 'Astrotrain', 'Megatron', 'Optimus Prime', 'Silverbolt',
    'Slag', 'Sludge', 'Snarl', 'Swoop', 'Grimlock', 'Hot Rod', 'Kup', 'Arcee', 'Springer',
  ];

  for (let i = 0; i < capped; i++) {
    const useTitle = includeTitles && rng() < 0.35;
    if (useTitle) {
      const pre = pick(PREFIXES, rng);
      const title = pick(TITLES, rng);
      results.push({ name: `${pre} ${title}`, style: 'title' });
    } else {
      const name = pick(CHARACTER_NAMES, rng);
      results.push({ name, style: 'character' });
    }
  }
  return results;
}
