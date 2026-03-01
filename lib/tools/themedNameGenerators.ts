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

// Gorilla Tag (VR game) – monkey, parkour, tag-style names
const GORILLA_TAG_FIRST = ['Monkey', 'Gorilla', 'Ape', 'Banana', 'Jungle', 'Vine', 'Swing', 'Tag', 'Chase', 'Climb', 'Leap', 'Bounce', 'Zoom', 'Dash', 'Peak', 'Summit', 'Tree', 'Canopy', 'Shadow', 'Ghost', 'Ninja', 'Speed', 'Turbo', 'Mega'];
const GORILLA_TAG_SECOND = ['King', 'Master', 'Pro', 'X', '99', 'HD', 'VR', 'Tag', 'Runner', 'Hunter', 'Slayer', 'Monkey', 'Ape', 'Gorilla', ''];

export function generateGorillaTagNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(GORILLA_TAG_FIRST, GORILLA_TAG_SECOND, count, seed);
}

// Hollow Knight – game, bug/knight themed
const HOLLOW_KNIGHT_FIRST = ['Hornet', 'Knight', 'Hollow', 'Ghost', 'Zote', 'Quirrel', 'Tiso', 'Cloth', 'Cornifer', 'Iselda', 'Bardoon', 'Leg Eater', 'Divine', 'Salubra', 'Sly', 'Elderbug', 'Bretta', 'Myla', 'Dung', 'Tuk', 'Willoh', 'Mister', 'Snail', 'Shrumal'];
const HOLLOW_KNIGHT_SECOND = ['the Knight', 'the Vessel', 'the Watcher', 'the Defender', ''];

export function generateHollowKnightNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(HOLLOW_KNIGHT_FIRST, HOLLOW_KNIGHT_SECOND, count, seed);
}

// Coven – witch, mystical
const COVEN_FIRST = ['Raven', 'Shadow', 'Luna', 'Stella', 'Thorn', 'Ivy', 'Willow', 'Sage', 'Mystic', 'Crystal', 'Ember', 'Storm', 'Night', 'Silver', 'Onyx', 'Jade', 'Scarlet', 'Violet', 'Hazel', 'Rowan', 'Aspen', 'Birch', 'Morgan', 'Hecate'];
const COVEN_SECOND = ['Coven', 'Witch', 'Seer', 'Sage', ''];

export function generateCovenNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(COVEN_FIRST, COVEN_SECOND, count, seed);
}

// BG3 / Baldur's Gate 3 – fantasy RPG
const BG3_FIRST = ['Astarion', 'Shadowheart', 'Gale', 'Laezel', 'Wyll', 'Karlach', 'Minthara', 'Halsin', 'Jaheira', 'Minsc', 'Tav', 'Durge', 'Orin', 'Gortash', 'Ketheric', 'Raphael', 'Elminster', 'Volo', 'Alfira', 'Isobel', 'Dame', 'Lord', 'Duke', 'Count'];
const BG3_SECOND = ['of Baldur\'s Gate', 'the Dark Urge', ''];

export function generateBg3Names(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(BG3_FIRST, BG3_SECOND, count, seed);
}

// Secret organization
const SECRET_ORG_FIRST = ['Shadow', 'Silent', 'Eclipse', 'Cipher', 'Phoenix', 'Viper', 'Serpent', 'Owl', 'Raven', 'Lotus', 'Ivy', 'Thorn', 'Cabal', 'Circle', 'Order', 'Guild', 'Sector', 'Cell', 'Cadre', 'Coven', 'Lodge', 'Council', 'Syndicate', 'League'];
const SECRET_ORG_SECOND = ['Society', 'Order', 'Guild', 'Circle', ''];

export function generateSecretOrganizationNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(SECRET_ORG_FIRST, SECRET_ORG_SECOND, count, seed);
}

// Genderbend – flipped / alternate names
const GENDERBEND_FIRST = ['Alex', 'Sam', 'Jordan', 'Casey', 'Morgan', 'Riley', 'Quinn', 'Avery', 'Skyler', 'Cameron', 'Dakota', 'Jamie', 'Reese', 'Parker', 'Drew', 'Robin', 'Sage', 'River', 'Phoenix', 'Blake', 'Charlie', 'Finley', 'Harper', 'Emery'];
const GENDERBEND_SECOND = ['Rose', 'Lee', 'Gray', 'Bell', ''];

export function generateGenderbendNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(GENDERBEND_FIRST, GENDERBEND_SECOND, count, seed);
}

// Motorcycle club / biker
const MC_FIRST = ['Iron', 'Steel', 'Thunder', 'Storm', 'Shadow', 'Ghost', 'Reaper', 'Viper', 'Cobra', 'Wolf', 'Bear', 'Eagle', 'Hawk', 'Phoenix', 'Outlaw', 'Renegade', 'Savage', 'Fury', 'Rage', 'Bone', 'Skull', 'Demon', 'Devil', 'Hell'];
const MC_SECOND = ['Riders', 'Brothers', 'MC', 'Crew', ''];

export function generateMotorcycleClubNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(MC_FIRST, MC_SECOND, count, seed);
}

// Beyblade
const BEYBLADE_FIRST = ['Dragoon', 'Dranzer', 'Draciel', 'Driger', 'Wolborg', 'Galman', 'Zeus', 'Pegasus', 'Leone', 'Aquario', 'L-Drago', 'Phoenix', 'Storm', 'Lightning', 'Flame', 'Dark', 'Metal', 'Cyber', 'Turbo', 'Strike', 'Blade', 'Burst', 'Evolution', 'Master'];
const BEYBLADE_SECOND = ['Storm', 'Flame', 'Galaxy', 'Fusion', ''];

export function generateBeybladeNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(BEYBLADE_FIRST, BEYBLADE_SECOND, count, seed);
}

// Homestuck troll – alien naming
const HOMESTUCK_FIRST = ['Karkat', 'Terezi', 'Vriska', 'Nepeta', 'Kanaya', 'Aradia', 'Tavros', 'Sollux', 'Equius', 'Gamzee', 'Eridan', 'Feferi', 'Rufioh', 'Diemen', 'Cronus', 'Meenah', 'Aranea', 'Porrim', 'Latula', 'Mituna', 'Kankri', 'Meulin', 'Kurloz', 'Damara'];
const HOMESTUCK_SECOND = ['Makara', 'Vantas', 'Serket', 'Leijon', ''];

export function generateHomestuckTrollNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(HOMESTUCK_FIRST, HOMESTUCK_SECOND, count, seed);
}

// Symbiote (Venom-style)
const SYMBIOTE_FIRST = ['Venom', 'Carnage', 'Toxin', 'Riot', 'Scream', 'Phage', 'Agony', 'Lasher', 'Shadow', 'Void', 'Dark', 'Rage', 'Chaos', 'Fury', 'Sliver', 'Shard', 'Bind', 'Fuse', 'Host', 'Strain', 'Spike', 'Tendril', 'Ooze', 'Black'];
const SYMBIOTE_SECOND = ['the Symbiote', 'X', ''];

export function generateSymbioteNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(SYMBIOTE_FIRST, SYMBIOTE_SECOND, count, seed);
}

// Speedster (Flash-style)
const SPEEDSTER_FIRST = ['Flash', 'Quick', 'Bolt', 'Blur', 'Zoom', 'Velocity', 'Turbo', 'Sonic', 'Lightning', 'Storm', 'Dash', 'Rush', 'Swift', 'Nitro', 'Accel', 'Velocity', 'Streak', 'Blaze', 'Thunder', 'Spark', 'Pulse', 'Surge', 'Jet', 'Rocket'];
const SPEEDSTER_SECOND = ['Runner', 'X', ''];

export function generateSpeedsterNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(SPEEDSTER_FIRST, SPEEDSTER_SECOND, count, seed);
}

// Boxer nicknames
const BOXER_FIRST = ['Iron', 'Steel', 'Golden', 'Sugar', 'Smokin', 'Big', 'The', 'Kid', 'King', 'Champ', 'Heavy', 'Lightning', 'Thunder', 'Raging', 'Pretty', 'Hands', 'Fists', 'Jab', 'Hook', 'Uppercut', 'Dynamite', 'Tiger', 'Lion', 'Bull'];
const BOXER_SECOND = ['Mike', 'Joe', 'Ray', 'Kid', ''];

export function generateBoxerNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(BOXER_FIRST, BOXER_SECOND, count, seed);
}

// Hillbilly / country
const HILLBILLY_FIRST = ['Billy', 'Bobby', 'Cletus', 'Jed', 'Jethro', 'Bubba', 'Duke', 'Earl', 'Hank', 'Jim Bob', 'Larry', 'Merle', 'Cooter', 'Daisy', 'Sue', 'Betty', 'Mabel', 'Maude', 'Vern', 'Dewey', 'Waylon', 'Homer', 'Roscoe', 'Gomer'];
const HILLBILLY_SECOND = ['Joe', 'Ray', 'Lee', ''];

export function generateHillbillyNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(HILLBILLY_FIRST, HILLBILLY_SECOND, count, seed);
}

// Crew / GTA-style
const CREW_FIRST = ['Lost', 'Saints', 'Vagos', 'Ballas', 'Grove', 'Families', 'Mafia', 'Cartel', 'Syndicate', 'Empire', 'Legion', 'Phantom', 'Ghost', 'Shadow', 'Elite', 'Apex', 'Prime', 'Royal', 'Street', 'West', 'East', 'North', 'South', 'Central'];
const CREW_SECOND = ['MC', 'Crew', 'Gang', 'Squad', ''];

export function generateCrewNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(CREW_FIRST, CREW_SECOND, count, seed);
}

// TADC – The Amazing Digital Circus
const TADC_FIRST = ['Pomni', 'Jax', 'Ragatha', 'Zooble', 'Kinger', 'Gangle', 'Caine', 'Bubble', 'Kaufmo', 'Abstract', 'Glitch', 'Digital', 'Pixel', 'Virtual', 'Circus', 'Ringmaster', 'Jester', 'Clown', 'Mime', 'Acrobat', 'Trapeze', 'Tent', 'Carnival', 'Funhouse'];
const TADC_SECOND = ['the Clown', 'the Digital', ''];

export function generateTadcNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(TADC_FIRST, TADC_SECOND, count, seed);
}

// HTTYD – How to Train Your Dragon
const HTTYD_FIRST = ['Toothless', 'Stormfly', 'Hookfang', 'Barf', 'Belch', 'Meatlug', 'Skullcrusher', 'Cloudjumper', 'Screaming', 'Deadly', 'Nadder', 'Monstrous', 'Nightmare', 'Gronckle', 'Zippleback', 'Skrill', 'Bewilderbeast', 'Red', 'Death', 'Light Fury', 'Night Fury', 'Dragon', 'Hiccup', 'Astrid'];
const HTTYD_SECOND = ['the Dragon', ''];

export function generateHttydNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(HTTYD_FIRST, HTTYD_SECOND, count, seed);
}

// Drag king
const DRAG_KING_FIRST = ['Max', 'King', 'Duke', 'Rex', 'Leo', 'Victor', 'Ace', 'Blaze', 'Storm', 'Steel', 'Razor', 'Phoenix', 'Jasper', 'Felix', 'Damien', 'Orion', 'Atlas', 'Titan', 'Zeus', 'Apollo', 'Mars', 'Thor', 'Loki', 'Prince'];
const DRAG_KING_SECOND = ['Power', 'Royale', 'King', ''];

export function generateDragKingNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(DRAG_KING_FIRST, DRAG_KING_SECOND, count, seed);
}

// Yautja / Predator
const YAUTJA_FIRST = ['Wolf', 'Scar', 'Celtic', 'Chopper', 'Falconer', 'Tracker', 'Elder', 'Young', 'City', 'Super', 'Berserker', 'Assassin', 'Hunter', 'Predator', 'Yautja', 'Hish', 'Bad', 'Ahab', 'Prince', 'Dark', 'Ghost', 'Serpent', 'Scorpion', 'Viper'];
const YAUTJA_SECOND = ['Predator', 'Hunter', ''];

export function generateYautjaNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(YAUTJA_FIRST, YAUTJA_SECOND, count, seed);
}

// Badass username
const BADASS_FIRST = ['Dark', 'Shadow', 'Phantom', 'Ghost', 'Razor', 'Viper', 'Storm', 'Blaze', 'Iron', 'Steel', 'Rage', 'Fury', 'Chaos', 'Void', 'Nova', 'Omega', 'Alpha', 'Reaper', 'Slayer', 'Demon', 'Wraith', 'Spectre', 'Onyx', 'Raven'];
const BADASS_SECOND = ['Killer', 'Hunter', 'X', '99', ''];

export function generateBadassUsernameNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(BADASS_FIRST, BADASS_SECOND, count, seed);
}

// Army / military
const ARMY_FIRST = ['Alpha', 'Bravo', 'Delta', 'Echo', 'Foxtrot', 'Ghost', 'Reaper', 'Viper', 'Cobra', 'Raven', 'Hawk', 'Eagle', 'Wolf', 'Bear', 'Titan', 'Spartan', 'Ranger', 'Recon', 'Strike', 'Shadow', 'Phantom', 'Steel', 'Iron', 'Thunder'];
const ARMY_SECOND = ['Squad', 'Team', 'Unit', 'Force', ''];

export function generateArmyNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(ARMY_FIRST, ARMY_SECOND, count, seed);
}

// Nun / religious
const NUN_FIRST = ['Sister', 'Mother', 'Mary', 'Margaret', 'Agnes', 'Bernadette', 'Teresa', 'Catherine', 'Clare', 'Francis', 'Joan', 'Lucy', 'Rose', 'Patricia', 'Elizabeth', 'Anne', 'Rita', 'Monica', 'Veronica', 'Felicity', 'Grace', 'Hope', 'Faith', 'Charity'];
const NUN_SECOND = ['of Mercy', 'of Peace', ''];

export function generateNunNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(NUN_FIRST, NUN_SECOND, count, seed);
}

// Clash Royale
const CLASH_ROYALE_FIRST = ['Royal', 'Dark', 'Ice', 'Fire', 'Electro', 'Mega', 'Super', 'Mini', 'Giant', 'Knight', 'Prince', 'Princess', 'Wizard', 'Witch', 'P.E.K.K.A', 'Hog', 'Dragon', 'Baby', 'Skeleton', 'Golem', 'Lava', 'Sparky', 'Inferno', 'Battle'];
const CLASH_ROYALE_SECOND = ['Rider', 'Tower', 'King', ''];

export function generateClashRoyaleNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(CLASH_ROYALE_FIRST, CLASH_ROYALE_SECOND, count, seed);
}

// Task force
const TASK_FORCE_FIRST = ['Alpha', 'Bravo', 'Delta', 'Ghost', 'Shadow', 'Phantom', 'Raven', 'Viper', 'Strike', 'Rapid', 'Elite', 'Tactical', 'Special', 'Covert', 'Black', 'Red', 'Blue', 'Omega', 'Sigma', 'Zero', 'First', 'Prime', 'Apex', 'Storm'];
const TASK_FORCE_SECOND = ['One', 'Squad', 'Team', 'Unit', ''];

export function generateTaskForceNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(TASK_FORCE_FIRST, TASK_FORCE_SECOND, count, seed);
}

// Kik / messenger username
const KIK_FIRST = ['Cool', 'Pro', 'Dark', 'Shadow', 'King', 'Queen', 'Star', 'Moon', 'Sun', 'Fire', 'Ice', 'Storm', 'Ghost', 'Ninja', 'Dragon', 'Wolf', 'Tiger', 'Lion', 'Phoenix', 'Diamond', 'Ruby', 'Neon', 'Cyber', 'Pixel'];
const KIK_SECOND = ['Guy', 'Girl', 'X', '99', ''];

export function generateKikNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(KIK_FIRST, KIK_SECOND, count, seed);
}

// Tumblr blog name
const TUMBLR_BLOG_FIRST = ['Aesthetic', 'Mood', 'Vibe', 'Soft', 'Dark', 'Cottage', 'Witch', 'Cozy', 'Chaos', 'Crystal', 'Luna', 'Stardust', 'Velvet', 'Moss', 'Fern', 'Rain', 'Cloud', 'Dream', 'Sleepy', 'Caffeine', 'Books', 'Art', 'Pixel', 'Retro'];
const TUMBLR_BLOG_SECOND = ['core', 'blog', 'hours', ''];

export function generateTumblrBlogNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(TUMBLR_BLOG_FIRST, TUMBLR_BLOG_SECOND, count, seed);
}

// Amusement park
const AMUSEMENT_PARK_FIRST = ['Fun', 'Magic', 'Adventure', 'Thrill', 'Dream', 'Fantasy', 'Wonder', 'Joy', 'Splash', 'Wild', 'Safari', 'Cosmic', 'Galaxy', 'Storm', 'Lightning', 'Twister', 'Cyclone', 'Hurricane', 'Rocket', 'Star', 'Moon', 'Sun', 'Rainbow', 'Candy'];
const AMUSEMENT_PARK_SECOND = ['Land', 'World', 'Park', 'Kingdom', ''];

export function generateAmusementParkNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(AMUSEMENT_PARK_FIRST, AMUSEMENT_PARK_SECOND, count, seed);
}

// Fakemon (fan-made Pokémon)
const FAKEMON_FIRST = ['Flame', 'Aqua', 'Leaf', 'Spark', 'Frost', 'Shadow', 'Crystal', 'Mist', 'Storm', 'Breeze', 'Moss', 'Vine', 'Thorn', 'Petal', 'Scale', 'Fang', 'Claw', 'Wing', 'Tail', 'Fluff', 'Puff', 'Nimbus', 'Ember', 'Blaze'];
const FAKEMON_SECOND = ['mon', 'eon', 'izard', 'ite', ''];

export function generateFakemonNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(FAKEMON_FIRST, FAKEMON_SECOND, count, seed);
}

// 40K planet (Warhammer)
const FORTYK_FIRST = ['Krieg', 'Cadia', 'Terra', 'Mars', 'Fenris', 'Macragge', 'Armageddon', 'Catachan', 'Valhalla', 'Mordian', 'Tallarn', 'Vostroya', 'Necromunda', 'Ultramar', 'Segmentum', 'Sector', 'Imperium', 'Chaos', 'Warp', 'Eye', 'Cicatrix', 'Crusade', 'Siege', 'Exterminatus'];
const FORTYK_SECOND = ['Prime', 'Secundus', 'Alpha', ''];

export function generateFortykPlanetNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(FORTYK_FIRST, FORTYK_SECOND, count, seed);
}

// Magical girl
const MAGICAL_GIRL_FIRST = ['Sailor', 'Cure', 'Pretty', 'Sparkle', 'Star', 'Moon', 'Crystal', 'Dream', 'Heart', 'Love', 'Peace', 'Hope', 'Light', 'Prism', 'Rainbow', 'Cosmic', 'Luna', 'Stella', 'Nova', 'Celestial', 'Angel', 'Fairy', 'Witch', 'Mystic'];
const MAGICAL_GIRL_SECOND = ['Moon', 'Star', 'Heart', ''];

export function generateMagicalGirlNames(count: number, seed?: number): SimpleNameResult[] {
  return generateFromLists(MAGICAL_GIRL_FIRST, MAGICAL_GIRL_SECOND, count, seed);
}
