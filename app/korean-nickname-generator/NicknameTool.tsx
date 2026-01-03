"use client";

import { useEffect, useMemo, useState } from 'react';
import {
  BLOCKLIST,
  EN_ADJECTIVES,
  EN_DIGITS,
  EN_NOUNS,
  EN_PREFIXES,
  EN_SUFFIXES,
  KOREAN_ADJECTIVES,
  KOREAN_NOUNS,
  KOREAN_ROLES,
  KOREAN_SUFFIXES,
  STYLE_OPTIONS,
  type StyleKey,
} from './styles';

const MAX_RESULTS = 20;
const MAX_ATTEMPTS = 320;
const FAVORITES_KEY = 'nickname-favorites-v1';

const HANGUL_START = 0xac00;
const HANGUL_END = 0xd7a3;
const INITIAL_ROMAN = ['g', 'kk', 'n', 'd', 'tt', 'r', 'm', 'b', 'pp', 's', 'ss', 'ng', 'j', 'jj', 'ch', 'k', 't', 'p', 'h'];

function hashString(input: string): number {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

// Deterministic RNG so rerolls are repeatable per input + roll.
function createRng(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick<T>(rng: () => number, list: T[]): T {
  return list[Math.floor(rng() * list.length)];
}

function normalizeName(value: string) {
  return value.replace(/\s+/g, '').trim();
}

function normalizeFeatures(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return [];
  const segments = trimmed.split(/[,/|·•\n\r]+/).map((segment) => segment.trim()).filter(Boolean);
  const tokens = new Set<string>();
  segments.forEach((segment) => {
    tokens.add(segment);
    segment.split(/\s+/).forEach((word) => tokens.add(word.trim()));
  });

  return Array.from(tokens)
    .map((token) => token.replace(/[^0-9a-zA-Z가-힣\s]/g, '').trim())
    .filter(Boolean);
}

function trimToken(value: string, maxLength = 6) {
  const compact = value.replace(/\s+/g, '');
  return Array.from(compact).slice(0, maxLength).join('');
}

function containsBlocked(value: string) {
  const lowered = value.toLowerCase();
  return BLOCKLIST.some((blocked) => lowered.includes(blocked));
}

function sanitizeNickname(value: string, style: StyleKey) {
  let cleaned = value.replace(/\s+/g, ' ').trim();
  if (style === 'short') {
    cleaned = cleaned.replace(/\s+/g, '');
  }
  if (style === 'english') {
    cleaned = cleaned.replace(/[^a-zA-Z0-9]/g, '');
  }
  return cleaned;
}

function uniqueKey(value: string) {
  return value.replace(/[\s_-]+/g, '').toLowerCase();
}

function buildNamePieces(name: string) {
  const chars = Array.from(name);
  const first = chars[0] ?? '';
  const last = chars[chars.length - 1] ?? '';
  const short = chars.length >= 2 ? chars.slice(-2).join('') : name;
  const alt = chars.length >= 2 ? chars.slice(0, 2).join('') : name;
  return { name, first, last, short, alt };
}

function combineSyllables(a: string, b: string) {
  const aChars = Array.from(a);
  const bChars = Array.from(b);
  if (!aChars.length || !bChars.length) return `${a}${b}`;
  return `${aChars[0]}${bChars[bChars.length - 1]}`;
}

function getHangulInitials(text: string) {
  let result = '';
  for (const char of text) {
    const code = char.charCodeAt(0);
    if (code < HANGUL_START || code > HANGUL_END) continue;
    const syllableIndex = code - HANGUL_START;
    const initialIndex = Math.floor(syllableIndex / 588);
    result += INITIAL_ROMAN[initialIndex] ?? '';
  }
  return result;
}

function toTitleCase(value: string) {
  if (!value) return value;
  return `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`;
}

function buildEnglishBase(name: string, features: string[], rng: () => number) {
  const latin = name.replace(/[^a-zA-Z0-9]/g, '');
  if (latin) return toTitleCase(latin.slice(0, 10));
  const initials = getHangulInitials(name).slice(0, 8);
  if (initials) return toTitleCase(initials);
  const featureEnglish = features.find((feature) => /[a-zA-Z]/.test(feature));
  if (featureEnglish) return toTitleCase(featureEnglish.replace(/[^a-zA-Z0-9]/g, '').slice(0, 10));
  return pick(rng, EN_NOUNS);
}

function generateNicknames({
  name,
  features,
  style,
  roll,
}: {
  name: string;
  features: string;
  style: StyleKey;
  roll: number;
}) {
  const cleanedName = normalizeName(name);
  const rawFeatures = normalizeFeatures(features).filter((feature) => !containsBlocked(feature));
  const seed = hashString(`${cleanedName}|${rawFeatures.join(',')}|${style}|${roll}`);
  const rng = createRng(seed);

  const results = new Set<string>();
  const keys = new Set<string>();

  const addCandidate = (candidate: string) => {
    const cleaned = sanitizeNickname(candidate, style);
    if (!cleaned) return;
    if (containsBlocked(cleaned)) return;
    const minLength = style === 'english' ? 3 : 2;
    const maxLength = style === 'english' ? 18 : 14;
    if (cleaned.length < minLength || cleaned.length > maxLength) return;
    const key = uniqueKey(cleaned);
    if (keys.has(key)) return;
    keys.add(key);
    results.add(cleaned);
  };

  if (style === 'english') {
    const base = buildEnglishBase(cleanedName, rawFeatures, rng);
    const patterns = [
      () => `${pick(rng, EN_PREFIXES)}${base}`,
      () => `${pick(rng, EN_ADJECTIVES)}${base}`,
      () => `${base}${pick(rng, EN_SUFFIXES)}`,
      () => `${pick(rng, EN_ADJECTIVES)}${pick(rng, EN_NOUNS)}`,
      () => `${pick(rng, EN_NOUNS)}${pick(rng, EN_SUFFIXES)}`,
      () => `${pick(rng, EN_PREFIXES)}${pick(rng, EN_NOUNS)}`,
      () => `${base}${pick(rng, EN_NOUNS)}`,
      () => `${pick(rng, EN_ADJECTIVES)}${pick(rng, EN_NOUNS)}${pick(rng, EN_DIGITS)}`,
      () => `${base}${pick(rng, EN_DIGITS)}`,
    ];

    for (let i = 0; i < MAX_ATTEMPTS && results.size < MAX_RESULTS; i += 1) {
      addCandidate(pick(rng, patterns)());
    }

    return Array.from(results).slice(0, MAX_RESULTS);
  }

  const adjectives = KOREAN_ADJECTIVES[style].length ? KOREAN_ADJECTIVES[style] : KOREAN_ADJECTIVES.korean;
  const suffixes = KOREAN_SUFFIXES[style].length ? KOREAN_SUFFIXES[style] : KOREAN_SUFFIXES.korean;
  const nouns = KOREAN_NOUNS[style].length ? KOREAN_NOUNS[style] : KOREAN_NOUNS.korean;
  const hasName = Boolean(cleanedName);
  const hasFeatures = rawFeatures.length > 0;
  const namePieces = buildNamePieces(cleanedName);
  const nameTokens = [namePieces.name, namePieces.short, namePieces.alt].filter(Boolean);

  const pickName = () => pick(rng, nameTokens);
  const pickFeature = () => trimToken(pick(rng, rawFeatures));

  const patterns: Array<() => string> = [];

  if (hasName) {
    patterns.push(() => `${pick(rng, adjectives)} ${pickName()}`);
    patterns.push(() => `${pick(rng, adjectives)} ${namePieces.short}`);
    patterns.push(() => `${pickName()}${pick(rng, suffixes)}`);
    patterns.push(() => `${namePieces.short}${pick(rng, suffixes)}`);
    patterns.push(() => `${pick(rng, nouns)}${namePieces.short}`);
    patterns.push(() => `${namePieces.short}${pick(rng, nouns)}`);
  }

  if (hasFeatures) {
    patterns.push(() => `${pick(rng, adjectives)} ${pickFeature()}`);
    patterns.push(() => `${pickFeature()}${pick(rng, suffixes)}`);
    patterns.push(() => `${pickFeature()}${pick(rng, nouns)}`);
    patterns.push(() => `${pick(rng, nouns)}${pickFeature()}`);
  }

  if (hasName && hasFeatures) {
    patterns.push(() => `${pickFeature()}${namePieces.short}`);
    patterns.push(() => `${namePieces.short}${pickFeature()}`);
    patterns.push(() => combineSyllables(namePieces.short, pickFeature()));
  }

  patterns.push(() => `${pick(rng, adjectives)}${pick(rng, nouns)}`);
  patterns.push(() => `${pick(rng, nouns)}${pick(rng, suffixes)}`);

  if (style === 'cool' || style === 'fun' || style === 'korean') {
    patterns.push(() => `${(hasFeatures ? pickFeature() : pick(rng, nouns))}${pick(rng, KOREAN_ROLES)}`);
    if (hasName) {
      patterns.push(() => `${namePieces.short}${pick(rng, KOREAN_ROLES)}`);
    }
  }

  if (style === 'emotional') {
    patterns.push(() => `${pick(rng, nouns)} ${hasName ? namePieces.short : pick(rng, nouns)}`);
    patterns.push(() => `${pick(rng, nouns)}의 ${hasName ? namePieces.short : pick(rng, nouns)}`);
  }

  if (style === 'short') {
    const shortBase = hasName ? namePieces.short : hasFeatures ? pickFeature() : pick(rng, nouns);
    patterns.push(() => trimToken(shortBase, 4));
    patterns.push(() => combineSyllables(shortBase, hasFeatures ? pickFeature() : pick(rng, nouns)));
    patterns.push(() => `${trimToken(pick(rng, nouns), 2)}${pick(rng, suffixes)}`);
  }

  for (let i = 0; i < MAX_ATTEMPTS && results.size < MAX_RESULTS; i += 1) {
    addCandidate(pick(rng, patterns)());
  }

  return Array.from(results).slice(0, MAX_RESULTS);
}

export function NicknameTool() {
  const [name, setName] = useState('');
  const [features, setFeatures] = useState('');
  const [style, setStyle] = useState<StyleKey>('cute');
  const [results, setResults] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [roll, setRoll] = useState(0);
  const [copiedValue, setCopiedValue] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const favoriteSet = useMemo(() => new Set(favorites), [favorites]);
  const activeStyle = useMemo(() => STYLE_OPTIONS.find((option) => option.key === style), [style]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as string[];
        if (Array.isArray(parsed)) {
          setFavorites(parsed);
        }
      }
    } catch {
      setFavorites([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch {
      // Ignore storage errors.
    }
  }, [favorites]);

  useEffect(() => {
    if (!copiedValue) return undefined;
    const timeout = setTimeout(() => setCopiedValue(null), 1400);
    return () => clearTimeout(timeout);
  }, [copiedValue]);

  const handleGenerate = (nextRoll?: number) => {
    if (!name.trim() && !features.trim()) {
      setError('이름 또는 특징 중 하나를 입력해 주세요.');
      return;
    }
    const resolvedRoll = nextRoll ?? roll + 1;
    const nextResults = generateNicknames({ name, features, style, roll: resolvedRoll });
    setResults(nextResults);
    setRoll(resolvedRoll);
    setError('');
  };

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedValue(value);
    } catch {
      setCopiedValue(null);
    }
  };

  const toggleFavorite = (value: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(value)) {
        next.delete(value);
      } else {
        next.add(value);
      }
      return Array.from(next);
    });
  };

  const removeFavorite = (value: string) => {
    setFavorites((prev) => prev.filter((item) => item !== value));
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700" htmlFor="nickname-name">
            이름 (선택)
          </label>
          <input
            id="nickname-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="예: 김한나"
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
          />
        </div>

        <div className="space-y-2 md:col-span-1">
          <label className="text-sm font-medium text-slate-700" htmlFor="nickname-features">
            특징 (선택)
          </label>
          <textarea
            id="nickname-features"
            value={features}
            onChange={(event) => setFeatures(event.target.value)}
            placeholder="예: 귀여움, 활발함, 게임 좋아함"
            rows={3}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <label className="text-sm font-medium text-slate-700">스타일</label>
          <span className="text-xs text-slate-500">{activeStyle?.hint}</span>
        </div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="별명 스타일 선택">
          {STYLE_OPTIONS.map((option) => (
            <button
              key={option.key}
              type="button"
              role="tab"
              aria-selected={style === option.key}
              onClick={() => setStyle(option.key)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                style === option.key
                  ? 'border-brand-600 bg-brand-600 text-white'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-brand-200'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => handleGenerate()}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          별명 생성하기
        </button>
        {results.length > 0 ? (
          <button
            type="button"
            onClick={() => handleGenerate(roll + 1)}
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            다시 생성
          </button>
        ) : null}
        <span className="text-xs text-slate-500">★ 버튼으로 즐겨찾기(로컬 저장)</span>
      </div>

      {error ? <p className="text-sm text-rose-600">{error}</p> : null}

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-semibold text-slate-900">추천 결과</h3>
          <span className="rounded-full bg-white px-2 py-1 text-xs text-slate-600">
            {results.length}/{MAX_RESULTS}
          </span>
        </div>

        {results.length === 0 ? (
          <p className="mt-3 text-sm text-slate-600">
            이름이나 특징을 입력하고 버튼을 누르면 20개의 별명 추천이 생성됩니다.
          </p>
        ) : (
          <div className="mt-3 space-y-2">
            {results.map((item) => (
              <div
                key={item}
                className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2"
              >
                <span className="text-sm font-medium text-slate-900">{item}</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => toggleFavorite(item)}
                    className={`rounded-lg border px-2.5 py-1 text-xs font-semibold ${
                      favoriteSet.has(item)
                        ? 'border-yellow-400 bg-yellow-100 text-yellow-700'
                        : 'border-slate-200 bg-white text-slate-600'
                    }`}
                    aria-pressed={favoriteSet.has(item)}
                    aria-label="즐겨찾기 토글"
                  >
                    {favoriteSet.has(item) ? '★ 즐겨찾기' : '☆ 즐겨찾기'}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCopy(item)}
                    className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    {copiedValue === item ? '복사됨' : '복사'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {favorites.length > 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="text-sm font-semibold text-slate-900">즐겨찾기</h4>
            <span className="text-xs text-slate-500">이 브라우저에만 저장됩니다.</span>
          </div>
          <div className="mt-3 space-y-2">
            {favorites.map((item) => (
              <div key={item} className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-200 px-3 py-2">
                <span className="text-sm text-slate-800">{item}</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopy(item)}
                    className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    {copiedValue === item ? '복사됨' : '복사'}
                  </button>
                  <button
                    type="button"
                    onClick={() => removeFavorite(item)}
                    className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                  >
                    삭제
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
