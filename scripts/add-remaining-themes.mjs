// Add remaining themed generator configs to themed-generator-themes.json
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const configPath = path.join(__dirname, 'themed-generator-themes.json');

const REMAINING = [
  { slug: '40k-planet-name-generator', key: 'fortyk-planet', title: '40K Planet Name Generator', nameType: 'planet and world names', useCase: 'fiction and games', style: 'Warhammer 40K-style', subtitle: 'Warhammer Planet & World Names' },
  { slug: 'amusement-park-name-generator', key: 'amusement-park', title: 'Amusement Park Name Generator', nameType: 'theme park names', useCase: 'creative projects', style: 'amusement park-style', subtitle: 'Theme Park Name Ideas' },
  { slug: 'ancient-greek-name-generator', key: 'ancient-greek', title: 'Ancient Greek Name Generator', nameType: 'character names', useCase: 'fiction and mythology', style: 'Greek-style', subtitle: 'Greek Names for Characters & Mythology' },
  { slug: 'anime-names-generator', key: 'anime', title: 'Anime Names Generator', nameType: 'character names and nicknames', useCase: 'fan fiction and creative writing', style: 'anime-style', subtitle: 'Character Names & Nicknames' },
  { slug: 'army-name-generator', key: 'army', title: 'Army Name Generator', nameType: 'squad and unit names', useCase: 'games and fiction', style: 'military-style', subtitle: 'Squad & Military Name Ideas' },
  { slug: 'beyblade-name-generator', key: 'beyblade', title: 'Beyblade Name Generator', nameType: 'names for tops and characters', useCase: 'fiction and games', style: 'Beyblade-style', subtitle: 'Name Ideas for Tops & Characters' },
  { slug: 'bg3-name-generator', key: 'bg3', title: 'BG3 Name Generator', nameType: 'character names', useCase: 'games and fiction', style: 'Baldur\'s Gate 3-style', subtitle: 'Baldur\'s Gate 3 Name Ideas' },
  { slug: 'bracket-name-generator', key: 'bracket', title: 'Bracket Name Generator', nameType: 'team names', useCase: 'tournaments and events', style: 'bold and memorable', subtitle: 'Tournament Team Names' },
  { slug: 'boxer-name-generator', key: 'boxer', title: 'Boxer Name Generator', nameType: 'fighter nicknames', useCase: 'games and fiction', style: 'boxer-style', subtitle: 'Fighter Nickname Ideas' },
  { slug: 'coven-name-generator', key: 'coven', title: 'Coven Name Generator', nameType: 'coven and witch names', useCase: 'fiction and creative projects', style: 'witch-style', subtitle: 'Witch & Coven Name Ideas' },
  { slug: 'crew-name-generator', key: 'crew', title: 'Crew Name Generator', nameType: 'crew and gang names', useCase: 'games and fiction', style: 'crew-style', subtitle: 'Gang & Crew Name Ideas' },
  { slug: 'drag-king-name-generator', key: 'drag-king', title: 'Drag King Name Generator', nameType: 'stage names', useCase: 'performers', style: 'bold and memorable', subtitle: 'Stage Name Ideas' },
  { slug: 'drag-queen-name-generator', key: 'drag-queen', title: 'Drag Queen Name Generator', nameType: 'stage names', useCase: 'performers', style: 'glamorous', subtitle: 'Stage Name Ideas' },
  { slug: 'fakemon-name-generator', key: 'fakemon', title: 'Fakemon Name Generator', nameType: 'creature names', useCase: 'fan projects', style: 'Pokémon-style', subtitle: 'Fan-Made Pokémon Names' },
  { slug: 'fallout-name-generator', key: 'fallout', title: 'Fallout Name Generator', nameType: 'wasteland and faction names', useCase: 'games and fiction', style: 'Fallout-style', subtitle: 'Wasteland & Faction Names' },
  { slug: 'genderbend-name-generator', key: 'genderbend', title: 'Genderbend Name Generator', nameType: 'alternate name ideas', useCase: 'fiction and creative projects', style: 'flexible', subtitle: 'Alternate Name Ideas' },
  { slug: 'hillbilly-name-generator', key: 'hillbilly', title: 'Hillbilly Name Generator', nameType: 'country-style names', useCase: 'fiction and humor', style: 'country-style', subtitle: 'Country Name Ideas' },
  { slug: 'hollow-knight-name-generator', key: 'hollow-knight', title: 'Hollow Knight Name Generator', nameType: 'character and creature names', useCase: 'games and fiction', style: 'Hollow Knight-style', subtitle: 'Character & Creature Name Ideas' },
  { slug: 'homestuck-troll-name-generator', key: 'homestuck-troll', title: 'Homestuck Troll Name Generator', nameType: 'troll names', useCase: 'fan fiction', style: 'Homestuck troll-style', subtitle: 'Troll Name Ideas' },
  { slug: 'httyd-name-generator', key: 'httyd', title: 'HTTYD Name Generator', nameType: 'dragon and character names', useCase: 'fiction and games', style: 'How to Train Your Dragon-style', subtitle: 'Dragon & Character Names' },
  { slug: 'island-name-generator', key: 'island', title: 'Island Name Generator', nameType: 'island names', useCase: 'fiction and creative projects', style: 'tropical and fantasy', subtitle: 'Tropical & Island Names' },
  { slug: 'magical-girl-name-generator', key: 'magical-girl', title: 'Magical Girl Name Generator', nameType: 'character and transformation names', useCase: 'fiction and creative projects', style: 'magical girl-style', subtitle: 'Character Name Ideas' },
  { slug: 'mlp-name-generator', key: 'mlp', title: 'MLP Name Generator', nameType: 'pony character names', useCase: 'fan fiction and creative projects', style: 'My Little Pony-style', subtitle: 'Pony Name Ideas' },
  { slug: 'motorcycle-club-name-generator', key: 'motorcycle-club', title: 'Motorcycle Club Name Generator', nameType: 'club and biker names', useCase: 'fiction and creative projects', style: 'biker-style', subtitle: 'MC & Biker Names' },
  { slug: 'naruto-name-generator', key: 'naruto', title: 'Naruto Name Generator', nameType: 'ninja and character names', useCase: 'fan fiction and creative writing', style: 'Naruto-style', subtitle: 'Ninja & Character Names' },
  { slug: 'nun-name-generator', key: 'nun', title: 'Nun Name Generator', nameType: 'religious-order names', useCase: 'fiction', style: 'religious-order-style', subtitle: 'Religious Name Ideas' },
  { slug: 'royal-surname-generator', key: 'royal', title: 'Royal Surname Generator', nameType: 'royal surnames', useCase: 'fiction and creative projects', style: 'noble-style', subtitle: 'Noble Surname Ideas' },
  { slug: 'secret-organization-name-generator', key: 'secret-organization', title: 'Secret Organization Name Generator', nameType: 'organization names', useCase: 'fiction and games', style: 'mysterious', subtitle: 'Society Name Ideas' },
  { slug: 'silly-name-generator', key: 'silly', title: 'Silly Name Generator', nameType: 'silly and funny names', useCase: 'games and creative projects', style: 'silly', subtitle: 'Funny Name Ideas' },
  { slug: 'speedster-name-generator', key: 'speedster', title: 'Speedster Name Generator', nameType: 'speedster names', useCase: 'fiction and creative projects', style: 'speedster-style', subtitle: 'Speedster Name Ideas' },
  { slug: 'stripper-name-generator', key: 'stripper', title: 'Stripper Name Generator', nameType: 'stage names', useCase: 'performers', style: 'glamorous', subtitle: 'Stage Name Ideas' },
  { slug: 'symbiote-name-generator', key: 'symbiote', title: 'Symbiote Name Generator', nameType: 'symbiote names', useCase: 'fiction and creative projects', style: 'Venom-style', subtitle: 'Venom-Style Names' },
  { slug: 'tadc-name-generator', key: 'tadc', title: 'TADC Name Generator', nameType: 'character names', useCase: 'fan fiction', style: 'The Amazing Digital Circus-style', subtitle: 'Digital Circus Name Ideas' },
  { slug: 'task-force-name-generator', key: 'task-force', title: 'Task Force Name Generator', nameType: 'unit names', useCase: 'games and fiction', style: 'military-style', subtitle: 'Unit Name Ideas' },
  { slug: 'tribe-name-generator', key: 'tribe', title: 'Tribe Name Generator', nameType: 'tribe and clan names', useCase: 'games and fiction', style: 'tribe-style', subtitle: 'Tribe & Clan Names' },
  { slug: 'wrestling-name-generator', key: 'wrestling', title: 'Wrestling Name Generator', nameType: 'wrestler names', useCase: 'games and creative projects', style: 'wrestling-style', subtitle: 'Wrestler Name Ideas' },
  { slug: 'yautja-name-generator', key: 'yautja', title: 'Yautja Name Generator', nameType: 'Predator-style names', useCase: 'fiction and creative projects', style: 'Yautja-style', subtitle: 'Predator Name Ideas' },
];

const existing = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const existingSlugs = new Set(existing.map((t) => t.slug));

const fiction = {
  platform: 'your game or story',
  availabilityNote: 'Use the names in your story, game, or worldbuilding',
};

for (const r of REMAINING) {
  if (existingSlugs.has(r.slug)) continue;
  existing.push({
    slug: r.slug,
    generatorKey: r.key,
    resultLabel: null,
    title: r.title,
    description: `Free ${r.title.toLowerCase()} for ${r.nameType}. Create ${r.style} name ideas in your browser with no sign-up.`,
    seoTitle: `${r.title} – ${r.subtitle}`,
    toolName: r.title.replace(/ Name Generator$/, '') + ' name generator',
    shortName: r.title.replace(/ Name Generator$/, ''),
    nameType: r.nameType,
    useCase: r.useCase,
    styleDesc: r.style,
    ...fiction,
    subtitle: r.subtitle,
  });
  existingSlugs.add(r.slug);
}

fs.writeFileSync(configPath, JSON.stringify(existing, null, 2), 'utf8');
console.log('Added', REMAINING.length, 'themes. Total:', existing.length);
