'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useSession } from '@/lib/auth-client';
import AuthModal from '@/components/AuthModal';

const DETECTORS = ['TURNITIN', 'GPTZERO', 'ORIGINALITY.AI', 'COPYLEAKS'];

const THEME_PROMPTS: Record<string, string> = {
  'naruto': 'Generate {count} unique Naruto-style ninja character names. Mix Japanese-inspired syllables with meanings that suggest power, nature, or combat. Return only the names, one per line.',
  'island': 'Generate {count} unique fictional island names. Mix tropical, mythical, and exotic-sounding syllables. Return only the names, one per line.',
  'fallout': 'Generate {count} unique Fallout-style post-apocalyptic character names. Mix retro-Americana with wasteland grit. Return only the names, one per line.',
  'ancient-greek': 'Generate {count} unique Ancient Greek-style names. Use authentic Greek phonetics and mythological influence. Return only the names, one per line.',
  'drag-queen': 'Generate {count} unique drag queen stage names. Make them glamorous, witty, punny, and memorable. Return only the names, one per line.',
  'tribe': 'Generate {count} unique fictional tribe names. Mix primal, earthy, and powerful-sounding syllables. Return only the names, one per line.',
  'anime': 'Generate {count} unique anime character names. Mix Japanese first names with creative surnames that suggest personality traits. Return only the names, one per line.',
  'wrestling': 'Generate {count} unique pro wrestling ring names. Make them bold, intimidating, and crowd-friendly. Return only the names, one per line.',
  'royal': 'Generate {count} unique royal-sounding surnames. Think aristocratic, old-money, regal. Return only the names, one per line.',
  'silly': 'Generate {count} unique silly, absurd, and funny names. Make them genuinely laugh-out-loud ridiculous. Return only the names, one per line.',
  'bracket': 'Generate {count} unique tournament bracket team names. Creative, competitive, memorable. Return only the names, one per line.',
  'steam': 'Generate {count} unique Steam gaming usernames. Mix gaming culture, humor, and internet slang. Return only the names, one per line.',
  'elden-ring': 'Generate {count} unique Elden Ring-style character names. Dark fantasy, Souls-like, mysterious and ancient-sounding. Return only the names, one per line.',
  'mlp': 'Generate {count} unique My Little Pony-style character names. Combine cute words with nature, colors, or personality traits. Return only the names, one per line.',
  'stripper': 'Generate {count} unique exotic dancer stage names. Glamorous, alluring, and catchy. Return only the names, one per line.',
  'runescape': 'Generate {count} unique RuneScape-style character names. Mix medieval fantasy with gaming culture. Return only the names, one per line.',
  'shopify': 'Generate {count} unique Shopify store names. Modern, brandable, memorable, and available-sounding. Return only the names, one per line.',
  'korean-male': 'Generate {count} unique Korean male names with both hangul and romanized versions. Format: Romanized (Hangul). Return only the names, one per line.',
  'gorilla-tag': 'Generate {count} unique Gorilla Tag usernames. Fun, energetic, monkey-themed or silly. Return only the names, one per line.',
  'hollow-knight': 'Generate {count} unique Hollow Knight-style character names. Dark, insectoid, mysterious, and ancient. Return only the names, one per line.',
  'coven': 'Generate {count} unique witch coven names. Mystical, dark, powerful, and atmospheric. Return only the names, one per line.',
  'bg3': "Generate {count} unique Baldur's Gate 3-style character names. High fantasy D&D inspired, varied by race (elf, tiefling, dwarf, human). Return only the names, one per line.",
  'secret-organization': 'Generate {count} unique secret organization names. Mysterious, conspiratorial, powerful-sounding. Return only the names, one per line.',
  'genderbend': 'Generate {count} pairs of genderbent names (original → flipped version). Format: OriginalName → GenderbentName. Return only the pairs, one per line.',
  'motorcycle-club': 'Generate {count} unique motorcycle club names. Tough, rebellious, road-warrior vibes. Return only the names, one per line.',
  'beyblade': 'Generate {count} unique Beyblade-style spinning top names. Powerful, elemental, dramatic. Return only the names, one per line.',
  'homestuck-troll': 'Generate {count} unique Homestuck troll names. Follow the 6-letter first name, 6-letter last name convention. Return only the names, one per line.',
  'symbiote': 'Generate {count} unique symbiote names inspired by Marvel Venom-style characters. Dark, aggressive, alien-sounding. Return only the names, one per line.',
  'speedster': 'Generate {count} unique speedster superhero names. Fast, dynamic, lightning/wind themed. Return only the names, one per line.',
  'boxer': 'Generate {count} unique boxing ring names/nicknames. Tough, intimidating, crowd-pleasing. Return only the names, one per line.',
  'hillbilly': 'Generate {count} unique hillbilly/redneck character names. Funny, Southern, rustic. Return only the names, one per line.',
  'crew': 'Generate {count} unique crew/squad names. Cool, unified, team-oriented. Return only the names, one per line.',
  'tadc': 'Generate {count} unique The Amazing Digital Circus-style character names. Whimsical, digital, circus-themed, slightly unsettling. Return only the names, one per line.',
  'httyd': 'Generate {count} unique How to Train Your Dragon-style dragon names. Viking-inspired, powerful, nature-themed. Return only the names, one per line.',
  'drag-king': 'Generate {count} unique drag king stage names. Bold, masculine, theatrical, and punny. Return only the names, one per line.',
  'yautja': 'Generate {count} unique Yautja/Predator-style alien names. Harsh consonants, clicks, alien phonetics. Return only the names, one per line.',
  'badass-username': 'Generate {count} unique badass usernames for gaming or social media. Dark, cool, intimidating. Return only the names, one per line.',
  'army': 'Generate {count} unique military unit/army names. Strategic, disciplined, powerful. Return only the names, one per line.',
  'nun': 'Generate {count} unique nun/religious order character names. Mix traditional saint names with creative religious themes. Return only the names, one per line.',
  'clash-royale': 'Generate {count} unique Clash Royale-style player names. Gaming culture, medieval fantasy, competitive. Return only the names, one per line.',
  'task-force': 'Generate {count} unique special task force names. Military, covert ops, elite unit vibes. Return only the names, one per line.',
  'kik': 'Generate {count} unique Kik messenger usernames. Social, catchy, youthful. Return only the names, one per line.',
  'tumblr-blog': 'Generate {count} unique Tumblr blog names. Aesthetic, quirky, internet culture. Return only the names, one per line.',
  'amusement-park': 'Generate {count} unique amusement park names. Fun, magical, family-friendly, memorable. Return only the names, one per line.',
  'fakemon': 'Generate {count} unique Fakemon (fan-made Pokemon) names with their types. Format: Name (Type1/Type2). Return only the entries, one per line.',
  'fortyk-planet': 'Generate {count} unique Warhammer 40K-style planet names. Grimdark, Imperial, war-torn. Return only the names, one per line.',
  'magical-girl': 'Generate {count} unique magical girl character names. Cute, celestial, flower/gem themed. Return only the names, one per line.',
};

type ThemedNameGeneratorToolProps = {
  generatorKey: string;
  resultLabel?: string;
};

export function ThemedNameGeneratorTool({ generatorKey, resultLabel = 'Generated names' }: ThemedNameGeneratorToolProps) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const isLoggedIn = !!session?.user;

  const [count, setCount] = useState(10);
  const [results, setResults] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [useCount, setUseCount] = useState(0);
  const [authOpen, setAuthOpen] = useState(false);
  const [error, setError] = useState('');

  const loginUrl = `/login?redirect=${encodeURIComponent(pathname)}`;

  const handleGenerate = async () => {
    const currentUse = useCount + 1;
    setUseCount(currentUse);
    setError('');

    if (currentUse > 1 && !isLoggedIn) {
      setAuthOpen(true);
      return;
    }

    setIsGenerating(true);
    setShowPaywall(false);

    const prompt = THEME_PROMPTS[generatorKey];
    if (!prompt) {
      setError('Generator not configured.');
      setIsGenerating(false);
      return;
    }

    try {
      const res = await fetch('/api/ai-tool', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tool: 'themed_name_generator',
          text: prompt.replace('{count}', String(count)),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Error ${res.status}`);
      }

      const data = await res.json();
      const names = (data.output ?? '')
        .split('\n')
        .map((line: string) => line.replace(/^\d+[\.\)]\s*/, '').trim())
        .filter((line: string) => line.length > 0);

      setResults(names);

      if (currentUse > 1 && isLoggedIn) {
        setShowPaywall(true);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }

    setIsGenerating(false);
  };

  const outputText = results.join('\n');
  const handleCopy = () => { if (outputText) navigator.clipboard.writeText(outputText); };

  const upsell = isLoggedIn
    ? { headline: "You've hit your free limit!", subline: 'Upgrade to Pro for unlimited generations and access to', cta: 'Upgrade to Pro' }
    : { headline: 'Generation complete!', subline: 'Sign in to keep generating and unlock', cta: 'Sign in to Continue' };

  return (
    <>
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <label htmlFor="themed-count" className="mb-1 block text-sm font-medium text-slate-700">
            Number of names (1–24)
          </label>
          <input
            id="themed-count"
            type="number"
            min={1}
            max={24}
            value={count}
            onChange={(e) => setCount(Math.min(24, Math.max(1, Number(e.target.value) || 1)))}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleGenerate}
          disabled={isGenerating}
          className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isGenerating ? (
            <>
              <svg className="h-4 w-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Generating...
            </>
          ) : 'Generate names'}
        </button>
        <button type="button" onClick={handleCopy} disabled={results.length === 0} className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50">
          Copy
        </button>
        <button type="button" onClick={() => { setResults([]); setShowPaywall(false); }} disabled={results.length === 0} className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50">
          Clear
        </button>
      </div>

      {error && (
        <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      {/* Upsell card */}
      {showPaywall && !isGenerating && (
        <div className="rounded-2xl bg-slate-900 text-white shadow-xl">
          <div className="p-5 md:p-6">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-yellow-300 shadow-sm">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold tracking-tight text-white md:text-base">{upsell.headline}</p>
                <p className="mt-0.5 text-sm text-slate-300 leading-snug">
                  {upsell.subline}{' '}
                  <span className="font-semibold text-yellow-400">all 60+ tools.</span>
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {DETECTORS.map((d) => (
                <span key={d} className="rounded-full border border-slate-700 bg-slate-800 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-slate-300">{d}</span>
              ))}
            </div>
            <button
              type="button"
              onClick={() => isLoggedIn ? window.location.href = '/pro' : setAuthOpen(true)}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-700 active:scale-[0.98]"
            >
              {upsell.cta}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <p className="mt-2 text-center text-[10px] uppercase tracking-widest text-slate-500">
              {isLoggedIn ? 'From $3.99/week · Cancel anytime' : 'Free to sign up · No credit card'}
            </p>
          </div>
        </div>
      )}

      {/* Results */}
      {results.length > 0 && (
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">{resultLabel}</label>
          <div className={`rounded-lg border border-slate-200 bg-slate-50 p-4 ${showPaywall ? 'blur-[3px] select-none pointer-events-none' : ''}`}>
            <ul className="space-y-2 text-slate-800">
              {results.map((name, i) => (
                <li key={`${name}-${i}`} className="font-medium">{name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
    {authOpen && <AuthModal onClose={() => setAuthOpen(false)} onSuccess={() => { setAuthOpen(false); setShowPaywall(false); setUseCount(0); window.location.reload(); }} />}
    </>
  );
}
