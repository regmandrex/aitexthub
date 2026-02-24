/**
 * Muslim Name Generator — data and logic.
 * Generates Islamic/Arabic-style names for characters, babies, or creative use.
 * All processing is client-safe (no server calls).
 */

import { generateThemedNames, seededRandom, pick } from './nameGeneratorUtils';

// Arabic/Islamic name elements (respectful, common patterns)
const MALE_FIRST: string[] = [
  'Abdul', 'Ahmed', 'Omar', 'Hassan', 'Ibrahim', 'Yusuf', 'Khalid', 'Tariq',
  'Rashid', 'Amir', 'Karim', 'Jamal', 'Nabil', 'Samir', 'Zaid', 'Farid',
  'Hamza', 'Bilal', 'Idris', 'Imran', 'Jafar', 'Malik', 'Nasser', 'Rami',
];
const MALE_SECOND: string[] = [
  'Rahman', 'Aziz', 'Hakim', 'Rashid', 'Karim', 'Sabir', 'Wali', 'Nasir',
  'Faris', 'Tariq', 'Kareem', 'Jamil', 'Nadir', 'Samir', 'Zaki', 'Fadil',
];
const FEMALE_FIRST: string[] = [
  'Aisha', 'Fatima', 'Zainab', 'Mariam', 'Safiya', 'Khadija', 'Amina', 'Layla',
  'Noor', 'Hana', 'Yasmin', 'Leila', 'Dalia', 'Rania', 'Samira', 'Nadia',
  'Farida', 'Jamila', 'Karima', 'Lina', 'Mona', 'Rasha', 'Sana', 'Zara',
];
const FEMALE_SECOND: string[] = [
  'Bint', 'Noor', 'Saba', 'Amira', 'Hana', 'Lina', 'Rania', 'Yasmin',
];

const MEANINGS: string[] = [
  'servant of the Merciful', 'praiseworthy', 'flourishing', 'wise', 'rightly guided',
  'generous', 'noble', 'beautiful', 'pure', 'light', 'bloom', 'flower',
  'gift', 'peace', 'hope', 'radiant', 'exalted',
];

export type MuslimNameGender = 'male' | 'female' | 'both';

export type MuslimNameResult = {
  name: string;
  meaning?: string;
  gender: 'male' | 'female';
};

export function generateMuslimNames(
  gender: MuslimNameGender,
  count: number,
  includeMeaning: boolean,
  seed?: number
): MuslimNameResult[] {
  const rng = seededRandom(seed ?? Date.now());
  const results: MuslimNameResult[] = [];
  const capped = Math.min(Math.max(count, 1), 24);

  for (let i = 0; i < capped; i++) {
    const useFemale = gender === 'female' || (gender === 'both' && rng() < 0.5);
    const first = useFemale ? pick(FEMALE_FIRST, rng) : pick(MALE_FIRST, rng);
    const secondArr = useFemale ? FEMALE_SECOND : MALE_SECOND;
    const second = pick(secondArr, rng);
    const name = `${first} ${second}`.trim();
    const meaning = includeMeaning ? pick(MEANINGS, rng) : undefined;
    results.push({
      name,
      meaning,
      gender: useFemale ? 'female' : 'male',
    });
  }
  return results;
}
