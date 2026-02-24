/**
 * Themed name generators — shared pattern: word lists + seeded random.
 * All processing is client-safe (no server calls).
 */

import { seededRandom, pick } from './nameGeneratorUtils';

export type SimpleNameResult = { name: string };

function generateFromLists(
  first: string[],
  second: string[],
  count: number,
  seed?: number
): SimpleNameResult[] {
  const rng = seededRandom(seed ?? Date.now());
  const capped = Math.min(Math.max(count, 1), 24);
  const results: SimpleNameResult[] = [];
  for (let i = 0; i < capped; i++) {
    const a = pick(first, rng);
    const b = second.length ? pick(second, rng) : '';
    results.push({ name: b ? `${a} ${b}` : a });
  }
  return results;
}

// Naruto-style: Japanese-sounding ninja names
const NARUTO_FIRST = ['Naruto', 'Sasuke', 'Sakura', 'Kakashi', 'Itachi', 'Gaara', 'Hinata', 'Shikamaru', 'Choji', 'Kiba', 'Neji', 'Rock', 'Lee', 'Shino', 'Ino', 'Temari', 'Kankuro', 'Jiraiya', 'Tsunade', 'Orochimaru', 'Minato', 'Kushina', 'Hashirama', 'Madara'];
const NARUTO_SECOND = ['Uzumaki', 'Uchiha', 'Haruno', 'Hatake', 'Hyuga', 'Nara', 'Akimichi', 'Inuzuka', 'Aburame', 'Yamanaka', 'Sabaku', 'Sarutobi', 'Senju', 'Namikaze', 'Shimura', ''];

export function generateNarutoNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(NARUTO_FIRST, NARUTO_SECOND, count, seed);
}

// Island names: tropical, fantasy, peaceful
const ISLAND_FIRST = ['Coral', 'Palm', 'Sunset', 'Coconut', 'Paradise', 'Azure', 'Breeze', 'Tropical', 'Serenity', 'Starlight', 'Moon', 'Drift', 'Sandy', 'Crystal', 'Emerald', 'Silver', 'Golden', 'Whisper', 'Dawn', 'Dusk', 'Lagoon', 'Reef', 'Haven', 'Oasis'];
const ISLAND_SECOND = ['Isle', 'Shores', 'Reef', 'Cay', 'Haven', 'Keys', 'Breeze', 'Bay', 'Sands', 'Cove', 'Rest', 'Light', 'Wave', 'Crest', 'Glade', ''];

export function generateIslandNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(ISLAND_FIRST, ISLAND_SECOND, count, seed);
}

// Fallout-style: wasteland, vault, faction
const FALLOUT_FIRST = ['Vault', 'Wasteland', 'Brotherhood', 'Enclave', 'Nuka', 'Rad', 'Steel', 'Iron', 'Rust', 'Ash', 'Dust', 'Bone', 'Scorch', 'Grim', 'Lone', 'Dead', 'Shadow', 'Storm', 'Thunder', 'Atom', 'Nuke', 'Survivor', 'Outcast', 'Raider'];
const FALLOUT_SECOND = ['Dweller', 'Hunter', 'Walker', 'Runner', 'Sentry', 'Guard', 'Scout', 'Ranger', 'Knight', 'Paladin', 'Elder', 'Scribe', 'Initiate', 'Outcast', 'Rebel', ''];

export function generateFalloutNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(FALLOUT_FIRST, FALLOUT_SECOND, count, seed);
}

// Ancient Greek
const GREEK_FIRST = ['Alexandros', 'Dionysios', 'Herodotos', 'Kleon', 'Lysandros', 'Nikandros', 'Philippos', 'Xenophon', 'Aristeides', 'Themistokles', 'Perikles', 'Sokrates', 'Platon', 'Aristoteles', 'Hektor', 'Achilleus', 'Odysseus', 'Perseus', 'Theseus', 'Herakles', 'Apollo', 'Hermes', 'Athena', 'Artemis'];
const GREEK_SECOND = ['of Athens', 'of Sparta', 'the Great', 'the Wise', 'the Bold', 'the Swift', 'son of Zeus', 'of Thebes', 'of Corinth', 'the Strategos', 'the Philosopher', 'the Hero', ''];

export function generateAncientGreekNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(GREEK_FIRST, GREEK_SECOND, count, seed);
}

// Drag queen / stage names: glamorous, punny
const DRAG_FIRST = ['Diamond', 'Ruby', 'Velvet', 'Ginger', 'Crystal', 'Blaze', 'Venus', 'Luna', 'Stella', 'Bella', 'Diva', 'Sasha', 'Trixie', 'Latrice', 'Raja', 'Raven', 'Chad', 'Violet', 'Katya', 'Alaska', 'Jinkx', 'Bob', 'Monet', 'Shea'];
const DRAG_SECOND = ['Starr', 'Luxe', 'Fierce', 'Dreams', 'Kisses', 'Sparkle', 'Storm', 'Wilde', 'Masters', 'DuBois', 'O\'Hara', 'Montrese', 'Cole', 'Crawford', ''];

export function generateDragQueenNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(DRAG_FIRST, DRAG_SECOND, count, seed);
}

// Tribe / team / Survivor
const TRIBE_FIRST = ['Thunder', 'Storm', 'Flame', 'Tiger', 'Eagle', 'Wolf', 'Bear', 'Shark', 'Cobra', 'Phoenix', 'Dragon', 'Lion', 'Hawk', 'Viper', 'Panther', 'Raven', 'Falcon', 'Scorpion', 'Jaguar', 'Crocodile', 'Mountain', 'River', 'Sun', 'Moon'];
const TRIBE_SECOND = ['Tribe', 'Clan', 'Alliance', 'Pack', 'Pride', 'Flight', 'Nest', 'Den', 'Fang', 'Strike', 'Fury', 'Spirit', 'Soul', 'Heart', ''];

export function generateTribeNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(TRIBE_FIRST, TRIBE_SECOND, count, seed);
}

// Anime names / nicknames
const ANIME_FIRST = ['Yuki', 'Haruto', 'Sora', 'Hikari', 'Ren', 'Akira', 'Sakura', 'Luna', 'Kai', 'Rin', 'Yui', 'Kira', 'Hana', 'Tsubasa', 'Asuka', 'Rei', 'Shin', 'Ryu', 'Ken', 'Mai', 'Ayame', 'Kazuki', 'Hotaru', 'Natsu'];
const ANIME_SECOND = ['-kun', '-chan', '-san', ' the Brave', ' the Swift', ' of the Wind', ' the Shadow', ' the Flame', ' Star', ' Blade', ' Heart', ' Dream', ''];

export function generateAnimeNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(ANIME_FIRST, ANIME_SECOND, count, seed);
}

// Wrestling names
const WRESTLING_FIRST = ['Stone', 'Iron', 'Razor', 'The', 'Big', 'Macho', 'Heartbreak', 'Nature', 'The Undertaker', 'The Rock', 'Triple', 'Kane', 'Randy', 'John', 'Brock', 'Roman', 'Seth', 'Dean', 'Finn', 'AJ', 'Rey', 'Edge', 'Christian', 'Batista'];
const WRESTLING_SECOND = ['Cold', 'Mike', 'Ramon', 'Hitman', 'Kid', 'Boy', 'Man', 'Warrior', 'King', 'Dragon', 'Phenom', 'Beast', 'Punisher', 'Viper', 'Architect', ''];

export function generateWrestlingNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(WRESTLING_FIRST, WRESTLING_SECOND, count, seed);
}

// Royal surnames
const ROYAL_FIRST = ['von', 'de', 'di', 'van', 'of', 'House of', 'Duke of', 'Earl of', 'Count of'];
const ROYAL_SECOND = ['Habsburg', 'Bourbon', 'Windsor', 'Savoy', 'Romanov', 'Hohenzollern', 'Valois', 'Tudor', 'Stuart', 'Medici', 'Borgia', 'Montague', 'Capulet', 'Northumberland', 'Lancaster', 'York'];

export function generateRoyalSurnames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(ROYAL_FIRST, ROYAL_SECOND, count, seed);
}

// Silly / funny names
const SILLY_FIRST = ['Sir', 'Captain', 'Doctor', 'Professor', 'Duke', 'Princess', 'Lord', 'Lady', 'Mr', 'Mrs', 'Tiny', 'Big', 'Super', 'Mega', 'Ultra', 'Fancy', 'Silly', 'Happy', 'Bouncy', 'Wiggly', 'Fluffy', 'Slippery', 'Bubbles', 'Pickle'];
const SILLY_SECOND = ['Pickle', 'Noodle', 'Waffle', 'Pancake', 'McFluff', 'Bottoms', 'Pants', 'Socks', 'Sneakers', 'Wobble', 'Giggles', 'Snickers', 'Fizz', 'Boom', ''];

export function generateSillyNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(SILLY_FIRST, SILLY_SECOND, count, seed);
}

// Bracket / tournament names
const BRACKET_FIRST = ['Thunder', 'Storm', 'Elite', 'Apex', 'Prime', 'Alpha', 'Omega', 'Victory', 'Champion', 'Legacy', 'Dynasty', 'Titans', 'Warriors', 'Gladiators', 'Spartans', 'Vikings', 'Crusaders', 'Knights', 'Eagles', 'Hawks', 'Wolves', 'Lions', 'Tigers', 'Bears'];
const BRACKET_SECOND = ['Squad', 'Team', 'Unit', 'Force', 'Crew', 'Squadron', 'Brigade', 'Legion', 'Alliance', 'Empire', 'Nation', 'Dynasty', ''];

export function generateBracketNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(BRACKET_FIRST, BRACKET_SECOND, count, seed);
}

// Steam / gamer tags
const STEAM_FIRST = ['Shadow', 'Dark', 'Steel', 'Iron', 'Ghost', 'Phantom', 'Storm', 'Blaze', 'Frost', 'Venom', 'Razor', 'Ninja', 'Pro', 'Elite', 'Prime', 'Alpha', 'Omega', 'Mystic', 'Cosmic', 'Neon', 'Cyber', 'Pixel', 'Retro', 'Epic'];
const STEAM_SECOND = ['Gamer', 'Slayer', 'Hunter', 'Killer', 'Master', 'Lord', 'King', 'Queen', 'X', 'Zero', 'One', '99', 'HD', 'Pro', ''];

export function generateSteamNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(STEAM_FIRST, STEAM_SECOND, count, seed);
}

// Elden Ring / Souls
const ELDEN_FIRST = ['Malenia', 'Radahn', 'Morgott', 'Godrick', 'Rykard', 'Mohg', 'Maliketh', 'Hoarah', 'Radagon', 'Marika', 'Ranni', 'Blaidd', 'Melina', 'Fia', 'Roderika', 'Nepheli', 'Alexander', 'Patches', 'Solaire', 'Artorias', 'Gwyn', 'Ornstein', 'Smough', 'Sif'];
const ELDEN_SECOND = [' the Blade', ' the Omen', ' the Grafted', ' Lord of', ' Queen of', ' of the Golden', ' the Tarnished', ' the Elden', ''];

export function generateEldenRingNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(ELDEN_FIRST, ELDEN_SECOND, count, seed);
}

// MLP-style: cute, pony
const MLP_FIRST = ['Twilight', 'Rainbow', 'Pinkie', 'Fluttershy', 'Rarity', 'Applejack', 'Sunset', 'Starlight', 'Trixie', 'Luna', 'Celestia', 'Cadance', 'Shining', 'Spike', 'Discord', 'Maud', 'Derpy', 'Lyra', 'Bon', 'Berry', 'Minty', 'Star', 'Cloud', 'Sweet'];
const MLP_SECOND = ['Sparkle', 'Dash', 'Pie', 'Shy', 'Glimmer', 'Jack', 'Shimmer', 'Belle', 'Heart', 'Wings', 'Dust', 'Breeze', 'Drops', 'Scoops', ''];

export function generateMLPNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(MLP_FIRST, MLP_SECOND, count, seed);
}

// Stage names (stripper / performer)
const STAGE_FIRST = ['Diamond', 'Ruby', 'Jade', 'Scarlet', 'Velvet', 'Angel', 'Candy', 'Cherry', 'Honey', 'Sugar', 'Cinnamon', 'Pepper', 'Storm', 'Blaze', 'Luna', 'Stella', 'Bella', 'Sasha', 'Lexi', 'Destiny', 'Harmony', 'Serenity', 'Mystic', 'Jasmine'];
const STAGE_SECOND = ['Rose', 'Lane', 'Bliss', 'Sky', 'Raine', 'Lane', 'Fox', 'Wilde', 'Kiss', 'Dreams', 'Star', 'Moon', 'Fire', 'Storm', ''];

export function generateStripperNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(STAGE_FIRST, STAGE_SECOND, count, seed);
}

// RuneScape / OSRS
const RS_FIRST = ['Zezima', 'Lynx', 'Wolf', 'Dragon', 'Iron', 'Bronze', 'Steel', 'Mithril', 'Adamant', 'Rune', 'Dragon', 'Bandos', 'Armadyl', 'Zamorak', 'Saradomin', 'Guthix', 'Slayer', 'Skiller', 'Pure', 'Main', 'HCIM', 'IM', 'Noob', 'Pro'];
const RS_SECOND = ['Slayer', 'King', 'Lord', 'Master', 'X', '99', 'Max', 'Pure', 'Bot', 'Scape', 'RS', 'OSRS', ''];

export function generateRunescapeNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(RS_FIRST, RS_SECOND, count, seed);
}

// Shopify / business names
const SHOPIFY_FIRST = ['Shop', 'Store', 'Market', 'Boutique', 'Co', 'The', 'My', 'Our', 'Urban', 'Pure', 'Fresh', 'Smart', 'Quick', 'Easy', 'Best', 'Prime', 'Elite', 'Happy', 'Bright', 'Clear', 'Simple', 'True', 'Real', 'Good'];
const SHOPIFY_SECOND = ['Hub', 'Zone', 'Place', 'Space', 'Lab', 'Studio', 'Co', '& Co', 'Goods', 'Store', 'Shop', 'Market', 'Depot', 'House', ''];

export function generateShopifyStoreNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(SHOPIFY_FIRST, SHOPIFY_SECOND, count, seed);
}

// Korean male names (Family + Given, e.g. Kim Min-ho)
const KOREAN_MALE_FAMILY = ['Kim', 'Lee', 'Park', 'Choi', 'Jung', 'Kang', 'Cho', 'Yoon', 'Jang', 'Lim', 'Han', 'Hong', 'Song', 'Shin', ''];
const KOREAN_MALE_GIVEN = ['Min-ho', 'Jun-seo', 'Si-woo', 'Ha-jun', 'Do-yun', 'Seo-jun', 'Ji-ho', 'Hyun-woo', 'Sung-min', 'Jae-young', 'Tae-hyun', 'Sang-woo', 'Young-soo', 'Kyung-soo', 'Joon-ho', 'Woo-jin', 'Yoon-ho', 'Bin', 'Hyeon', 'Seung', 'Jin', 'Soo', 'Dae', 'Chan'];

export function generateKoreanMaleNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(KOREAN_MALE_FAMILY, KOREAN_MALE_GIVEN, count, seed);
}
