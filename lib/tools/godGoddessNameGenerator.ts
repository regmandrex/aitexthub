/**
 * God & Goddess Name Generator — data and logic.
 * Produces deity-style names with optional meanings for fiction, games, and storytelling.
 * All processing is client-safe (no server calls).
 */

export type DeityType = 'god' | 'goddess' | 'both';
export type Culture = 'greek' | 'norse' | 'egyptian' | 'roman' | 'any';

export type DeityNameResult = {
  name: string;
  meaning?: string;
  culture: string;
  type: 'god' | 'goddess';
};

// Name elements and meanings by culture (inspired by real mythologies; combined for variety)
const GREEK: { prefixes: string[]; stems: string[]; suffixes: string[]; meanings: string[] } = {
  prefixes: ['Zeus', 'Apoll', 'Hades', 'Poseid', 'Hephaest', 'Ares', 'Herm', 'Dionys', 'Helios', 'Chron', 'Ouran', 'Hyperion', 'Atlas', 'Promethe', 'Orpheus'],
  stems: ['-os', '-on', '-eus', '-ius', '-as', '-es', '-or', '-an', '-ion', '-ax'],
  suffixes: ['', 'os', 'on', 'eus', 'ius', 'as', 'es', 'or', 'an', 'ion'],
  meanings: ['sky or thunder', 'light or prophecy', 'underworld', 'sea or earthquakes', 'fire and forge', 'war', 'messenger or travel', 'wine and revelry', 'sun', 'time', 'heaven', 'titan of light', 'bearer of the sky', 'forethought', 'music and poetry'],
};

const GREEK_FEM: { prefixes: string[]; stems: string[]; suffixes: string[]; meanings: string[] } = {
  prefixes: ['Athena', 'Artemis', 'Hera', 'Aphrodite', 'Demeter', 'Hestia', 'Persephone', 'Nike', 'Iris', 'Themis', 'Leto', 'Selene', 'Eos', 'Gaia', 'Rhea'],
  stems: ['-a', '-e', '-is', '-ia', '-ine', '-one', '-ope', '-ia'],
  suffixes: ['', 'a', 'e', 'is', 'ia', 'ine', 'one', 'ope'],
  meanings: ['wisdom and war', 'hunt and moon', 'marriage and queen', 'love and beauty', 'harvest', 'hearth and home', 'spring and underworld', 'victory', 'rainbow and messenger', 'justice', 'mother of Apollo and Artemis', 'moon', 'dawn', 'earth', 'mother of gods'],
};

const NORSE: { prefixes: string[]; stems: string[]; suffixes: string[]; meanings: string[] } = {
  prefixes: ['Odin', 'Thor', 'Loki', 'Tyr', 'Freyr', 'Heimdall', 'Bragi', 'Ullr', 'Forseti', 'Vidar', 'Höðr', 'Baldr', 'Njord', 'Odin', 'Frey'],
  stems: ['-r', '-ir', '-ur', '-i', '-ar', '-or', '-inn', '-arr'],
  suffixes: ['', 'r', 'ir', 'ur', 'i', 'ar', 'or', 'inn', 'arr'],
  meanings: ['all-father, wisdom', 'thunder', 'trickster', 'war and justice', 'fertility and peace', 'guardian of Bifröst', 'poetry and mead', 'hunt and winter', 'peace and justice', 'vengeance and silence', 'darkness', 'light and purity', 'sea and wind', 'wisdom and sacrifice', 'fertility'],
};

const NORSE_FEM: { prefixes: string[]; stems: string[]; suffixes: string[]; meanings: string[] } = {
  prefixes: ['Frigg', 'Freyja', 'Sif', 'Idun', 'Hel', 'Skadi', 'Eir', 'Sigyn', 'Nanna', 'Gefjon', 'Fulla', 'Saga', 'Var', 'Vor', 'Syn'],
  stems: ['-a', '-r', '-ja', '-n', '-ir', '-ur'],
  suffixes: ['', 'a', 'r', 'ja', 'n', 'ir', 'ur'],
  meanings: ['queen, prophecy', 'love and war', 'harvest and hair', 'youth and apples', 'underworld', 'hunt and winter', 'healing', 'fidelity', 'joy and beauty', 'plough and virgins', 'fullness', 'history and storytelling', 'oaths', 'wisdom', 'refusal and guard'],
};

const EGYPTIAN: { prefixes: string[]; stems: string[]; suffixes: string[]; meanings: string[] } = {
  prefixes: ['Ra', 'Osiris', 'Anubis', 'Horus', 'Set', 'Thoth', 'Ptah', 'Amun', 'Khnum', 'Sobek', 'Geb', 'Atum', 'Khonsu', 'Montu', 'Apophis'],
  stems: ['-is', '-us', '-es', '-os', '-er', '-hotep', '-mose', '-re'],
  suffixes: ['', 'is', 'us', 'es', 'os', 'er', 'hotep', 'mose', 're'],
  meanings: ['sun', 'afterlife and rebirth', 'embalming and tombs', 'sky and kingship', 'chaos and desert', 'wisdom and writing', 'craft and creation', 'hidden one, wind', 'source of the Nile', 'crocodile, fertility', 'earth', 'creator', 'moon', 'war', 'serpent of chaos'],
};

const EGYPTIAN_FEM: { prefixes: string[]; stems: string[]; suffixes: string[]; meanings: string[] } = {
  prefixes: ['Isis', 'Hathor', 'Bastet', 'Sekhmet', 'Nut', 'Ma\'at', 'Nephthys', 'Taweret', 'Serqet', 'Wadjet', 'Nekhbet', 'Mut', 'Tefnut', 'Neith', 'Satet'],
  stems: ['-et', '-is', '-it', '-ut', '-at', '-es'],
  suffixes: ['', 'et', 'is', 'it', 'ut', 'at', 'es'],
  meanings: ['magic and motherhood', 'love and joy', 'cats and protection', 'lioness, war and healing', 'sky', 'truth and order', 'mourning and protection', 'childbirth', 'scorpions and healing', 'cobra, lower Egypt', 'vulture, upper Egypt', 'mother', 'moisture', 'hunting and weaving', 'flood and fertility'],
};

const ROMAN: { prefixes: string[]; stems: string[]; suffixes: string[]; meanings: string[] } = {
  prefixes: ['Jupiter', 'Mars', 'Mercury', 'Neptune', 'Pluto', 'Apollo', 'Vulcan', 'Saturn', 'Janus', 'Bacchus', 'Sol', 'Cupid', 'Quirinus', 'Terminus', 'Liber'],
  stems: ['-us', '-ius', '-er', '-o', '-is', '-es', '-or'],
  suffixes: ['', 'us', 'ius', 'er', 'o', 'is', 'es', 'or'],
  meanings: ['sky and thunder', 'war', 'messenger and commerce', 'sea', 'underworld', 'sun and prophecy', 'fire and forge', 'time and harvest', 'beginnings and doors', 'wine', 'sun god', 'love', 'citizenship', 'boundaries', 'freedom and wine'],
};

const ROMAN_FEM: { prefixes: string[]; stems: string[]; suffixes: string[]; meanings: string[] } = {
  prefixes: ['Juno', 'Venus', 'Minerva', 'Diana', 'Ceres', 'Vesta', 'Proserpina', 'Luna', 'Aurora', 'Flora', 'Fortuna', 'Pax', 'Bellona', 'Ops', 'Salacia'],
  stems: ['-a', '-ia', '-ina', '-ia'],
  suffixes: ['', 'a', 'ia', 'ina'],
  meanings: ['marriage and queen', 'love and beauty', 'wisdom and craft', 'hunt and moon', 'harvest', 'hearth', 'spring and underworld', 'moon', 'dawn', 'flowers', 'fortune', 'peace', 'war', 'abundance', 'sea'],
};

function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)]!;
}

function seededRandom(seed: number): () => number {
  return () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

function generateForCulture(
  culture: Culture,
  deityType: DeityType,
  count: number,
  includeMeaning: boolean,
  rng: () => number
): DeityNameResult[] {
  const results: DeityNameResult[] = [];
  const cultures: Culture[] = culture === 'any' ? ['greek', 'norse', 'egyptian', 'roman'] : [culture];

  for (let i = 0; i < count; i++) {
    const c = pick(cultures, rng);
    const wantGod = deityType === 'god' || (deityType === 'both' && rng() < 0.5);

    let name: string;
    let meaning: string | undefined;
    let cultureLabel: string;
    let type: 'god' | 'goddess';

    if (c === 'greek') {
      const data = wantGod ? GREEK : GREEK_FEM;
      const pre = pick(data.prefixes, rng);
      name = pre; // use full name from list (already complete in many cases)
      meaning = includeMeaning ? pick(data.meanings, rng) : undefined;
      cultureLabel = 'Greek';
      type = wantGod ? 'god' : 'goddess';
    } else if (c === 'norse') {
      const data = wantGod ? NORSE : NORSE_FEM;
      name = pick(data.prefixes, rng);
      meaning = includeMeaning ? pick(data.meanings, rng) : undefined;
      cultureLabel = 'Norse';
      type = wantGod ? 'god' : 'goddess';
    } else if (c === 'egyptian') {
      const data = wantGod ? EGYPTIAN : EGYPTIAN_FEM;
      name = pick(data.prefixes, rng);
      meaning = includeMeaning ? pick(data.meanings, rng) : undefined;
      cultureLabel = 'Egyptian';
      type = wantGod ? 'god' : 'goddess';
    } else {
      const data = wantGod ? ROMAN : ROMAN_FEM;
      name = pick(data.prefixes, rng);
      meaning = includeMeaning ? pick(data.meanings, rng) : undefined;
      cultureLabel = 'Roman';
      type = wantGod ? 'god' : 'goddess';
    }

    results.push({ name, meaning, culture: cultureLabel, type });
  }

  return results;
}

export function generateGodGoddessNames(
  culture: Culture,
  deityType: DeityType,
  count: number,
  includeMeaning: boolean,
  seed?: number
): DeityNameResult[] {
  const rng = seededRandom(seed ?? Date.now());
  return generateForCulture(culture, deityType, Math.min(Math.max(count, 1), 24), includeMeaning, rng);
}

export const CULTURE_LABELS: Record<Culture, string> = {
  greek: 'Greek',
  norse: 'Norse',
  egyptian: 'Egyptian',
  roman: 'Roman',
  any: 'Any culture',
};

export const DEITY_TYPE_LABELS: Record<DeityType, string> = {
  god: 'Gods only',
  goddess: 'Goddesses only',
  both: 'Gods and goddesses',
};
