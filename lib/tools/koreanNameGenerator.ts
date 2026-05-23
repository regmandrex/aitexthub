/**
 * Korean Name Generator — data and logic.
 * Generates authentic Korean names (romanized + Hangul) with optional meanings.
 * All processing is client-safe (no server calls).
 */

export type KoreanGender = 'male' | 'female' | 'any';
export type KoreanNameStyle = 'modern' | 'traditional' | 'idol' | 'any';

export type KoreanNameResult = {
  romanized: string;
  hangul: string;
  meaning?: string;
  gender: 'male' | 'female';
  style: string;
};

export const GENDER_LABELS: Record<KoreanGender, string> = {
  male: 'Male',
  female: 'Female',
  any: 'Any gender',
};

export const STYLE_LABELS: Record<KoreanNameStyle, string> = {
  modern: 'Modern',
  traditional: 'Traditional',
  idol: 'K-pop / Idol',
  any: 'Any style',
};

// Korean family names (surnames) — most common first
const SURNAMES: { romanized: string; hangul: string; meaning: string }[] = [
  { romanized: 'Kim', hangul: '김', meaning: 'gold' },
  { romanized: 'Lee', hangul: '이', meaning: 'plum tree' },
  { romanized: 'Park', hangul: '박', meaning: 'gourd' },
  { romanized: 'Choi', hangul: '최', meaning: 'pinnacle' },
  { romanized: 'Jung', hangul: '정', meaning: 'right, proper' },
  { romanized: 'Kang', hangul: '강', meaning: 'river' },
  { romanized: 'Cho', hangul: '조', meaning: 'morning' },
  { romanized: 'Yoon', hangul: '윤', meaning: 'governor' },
  { romanized: 'Jang', hangul: '장', meaning: 'stretch, senior' },
  { romanized: 'Lim', hangul: '임', meaning: 'forest' },
  { romanized: 'Han', hangul: '한', meaning: 'one, great' },
  { romanized: 'Oh', hangul: '오', meaning: 'crow' },
  { romanized: 'Shin', hangul: '신', meaning: 'new' },
  { romanized: 'Kwon', hangul: '권', meaning: 'authority' },
  { romanized: 'Hwang', hangul: '황', meaning: 'yellow' },
  { romanized: 'Ahn', hangul: '안', meaning: 'peace' },
  { romanized: 'Song', hangul: '송', meaning: 'pine tree' },
  { romanized: 'Ryu', hangul: '류', meaning: 'willow' },
  { romanized: 'Hong', hangul: '홍', meaning: 'vast' },
  { romanized: 'Moon', hangul: '문', meaning: 'gate, writing' },
  { romanized: 'Son', hangul: '손', meaning: 'grandchild' },
  { romanized: 'Bae', hangul: '배', meaning: 'pear tree' },
  { romanized: 'Baek', hangul: '백', meaning: 'white, hundred' },
  { romanized: 'Heo', hangul: '허', meaning: 'permit, allow' },
  { romanized: 'Nam', hangul: '남', meaning: 'south' },
  { romanized: 'Seo', hangul: '서', meaning: 'west' },
  { romanized: 'Jeon', hangul: '전', meaning: 'whole, field' },
  { romanized: 'Noh', hangul: '노', meaning: 'old, experienced' },
  { romanized: 'Ha', hangul: '하', meaning: 'summer, great' },
  { romanized: 'Yoo', hangul: '유', meaning: 'exist, remain' },
];

// Male given names by style
const MALE_MODERN: { romanized: string; hangul: string; meaning: string }[] = [
  { romanized: 'Minjun', hangul: '민준', meaning: 'clever and talented' },
  { romanized: 'Siwoo', hangul: '시우', meaning: 'begin with greatness' },
  { romanized: 'Dohyun', hangul: '도현', meaning: 'attain wisdom' },
  { romanized: 'Jaemin', hangul: '재민', meaning: 'talented and quick' },
  { romanized: 'Jihoon', hangul: '지훈', meaning: 'wisdom and teaching' },
  { romanized: 'Seonho', hangul: '선호', meaning: 'good and bright' },
  { romanized: 'Hyunwoo', hangul: '현우', meaning: 'wise and excellent' },
  { romanized: 'Seojun', hangul: '서준', meaning: 'talented from the west' },
  { romanized: 'Yujun', hangul: '유준', meaning: 'graceful and talented' },
  { romanized: 'Junho', hangul: '준호', meaning: 'talented and bright' },
  { romanized: 'Minho', hangul: '민호', meaning: 'quick and bright' },
  { romanized: 'Taehyun', hangul: '태현', meaning: 'great and wise' },
  { romanized: 'Wonseok', hangul: '원석', meaning: 'original gem' },
  { romanized: 'Kyungjun', hangul: '경준', meaning: 'bright and talented' },
  { romanized: 'Sanghyun', hangul: '상현', meaning: 'auspicious and wise' },
];

const MALE_TRADITIONAL: { romanized: string; hangul: string; meaning: string }[] = [
  { romanized: 'Daewon', hangul: '대원', meaning: 'great source' },
  { romanized: 'Chunsik', hangul: '춘식', meaning: 'spring flourish' },
  { romanized: 'Youngho', hangul: '영호', meaning: 'eternal brightness' },
  { romanized: 'Sungmin', hangul: '성민', meaning: 'accomplished and quick' },
  { romanized: 'Inwoo', hangul: '인우', meaning: 'benevolent and excellent' },
  { romanized: 'Kyungsoo', hangul: '경수', meaning: 'bright and long life' },
  { romanized: 'Bongsoo', hangul: '봉수', meaning: 'phoenix and long life' },
  { romanized: 'Jungsik', hangul: '정식', meaning: 'proper and abundant' },
  { romanized: 'Yongsoo', hangul: '용수', meaning: 'dragon and longevity' },
  { romanized: 'Cheolsu', hangul: '철수', meaning: 'iron and longevity' },
  { romanized: 'Gwangsoo', hangul: '광수', meaning: 'bright and longevity' },
  { romanized: 'Mansoo', hangul: '만수', meaning: 'ten thousand and longevity' },
  { romanized: 'Hyungsik', hangul: '형식', meaning: 'elder brother and abundant' },
  { romanized: 'Sangwoo', hangul: '상우', meaning: 'auspicious and excellent' },
  { romanized: 'Donghyun', hangul: '동현', meaning: 'eastern wisdom' },
];

const MALE_IDOL: { romanized: string; hangul: string; meaning: string }[] = [
  { romanized: 'Taehyung', hangul: '태형', meaning: 'great shape' },
  { romanized: 'Jungkook', hangul: '정국', meaning: 'righteous country' },
  { romanized: 'Jimin', hangul: '지민', meaning: 'wise and quick' },
  { romanized: 'Seokjin', hangul: '석진', meaning: 'precious gem' },
  { romanized: 'Namjoon', hangul: '남준', meaning: 'south and talented' },
  { romanized: 'Hoseok', hangul: '호석', meaning: 'bright gem' },
  { romanized: 'Yoongi', hangul: '윤기', meaning: 'glossy and radiant' },
  { romanized: 'Baekhyun', hangul: '백현', meaning: 'white and wise' },
  { romanized: 'Chanyeol', hangul: '찬열', meaning: 'praise and passion' },
  { romanized: 'Jongin', hangul: '종인', meaning: 'follow benevolence' },
  { romanized: 'Kyungsoo', hangul: '경수', meaning: 'bright longevity' },
  { romanized: 'Minseok', hangul: '민석', meaning: 'quick gem' },
  { romanized: 'Jongdae', hangul: '종대', meaning: 'follow greatness' },
  { romanized: 'Yixing', hangul: '이싱', meaning: 'art and star' },
  { romanized: 'Sehun', hangul: '세훈', meaning: 'world and teaching' },
];

// Female given names by style
const FEMALE_MODERN: { romanized: string; hangul: string; meaning: string }[] = [
  { romanized: 'Jiyeon', hangul: '지연', meaning: 'wisdom and lotus' },
  { romanized: 'Soeun', hangul: '소은', meaning: 'small grace' },
  { romanized: 'Yuna', hangul: '유나', meaning: 'gentle and graceful' },
  { romanized: 'Minji', hangul: '민지', meaning: 'quick wisdom' },
  { romanized: 'Sooyeon', hangul: '수연', meaning: 'long life and lotus' },
  { romanized: 'Chaeyeon', hangul: '채연', meaning: 'colorful lotus' },
  { romanized: 'Seoyeon', hangul: '서연', meaning: 'western lotus' },
  { romanized: 'Jimin', hangul: '지민', meaning: 'wise and quick' },
  { romanized: 'Naeun', hangul: '나은', meaning: 'better grace' },
  { romanized: 'Hyerin', hangul: '혜린', meaning: 'wise and beautiful jade' },
  { romanized: 'Yerin', hangul: '예린', meaning: 'elegant jade' },
  { romanized: 'Sojin', hangul: '소진', meaning: 'small gem' },
  { romanized: 'Chaeyoung', hangul: '채영', meaning: 'colorful flower' },
  { romanized: 'Dahyun', hangul: '다현', meaning: 'many and wise' },
  { romanized: 'Jisoo', hangul: '지수', meaning: 'wise and long life' },
];

const FEMALE_TRADITIONAL: { romanized: string; hangul: string; meaning: string }[] = [
  { romanized: 'Soonja', hangul: '순자', meaning: 'obedient and graceful' },
  { romanized: 'Kyungsook', hangul: '경숙', meaning: 'bright and good' },
  { romanized: 'Younghee', hangul: '영희', meaning: 'eternal joy' },
  { romanized: 'Myungsook', hangul: '명숙', meaning: 'bright and good' },
  { romanized: 'Jungsook', hangul: '정숙', meaning: 'righteous and good' },
  { romanized: 'Eunsook', hangul: '은숙', meaning: 'graceful and good' },
  { romanized: 'Insook', hangul: '인숙', meaning: 'benevolent and good' },
  { romanized: 'Boksoon', hangul: '복순', meaning: 'fortunate obedience' },
  { romanized: 'Geumok', hangul: '금옥', meaning: 'gold jade' },
  { romanized: 'Dalrae', hangul: '달래', meaning: 'soothing and moon' },
  { romanized: 'Chorong', hangul: '초롱', meaning: 'lantern, clear eyes' },
  { romanized: 'Boreum', hangul: '보름', meaning: 'full moon' },
  { romanized: 'Areum', hangul: '아름', meaning: 'beauty' },
  { romanized: 'Harang', hangul: '하랑', meaning: 'bright sky' },
  { romanized: 'Nari', hangul: '나리', meaning: 'lily flower' },
];

const FEMALE_IDOL: { romanized: string; hangul: string; meaning: string }[] = [
  { romanized: 'Jennie', hangul: '제니', meaning: 'graceful and clever' },
  { romanized: 'Rosé', hangul: '로제', meaning: 'rose' },
  { romanized: 'Lisa', hangul: '리사', meaning: 'promise' },
  { romanized: 'Jisoo', hangul: '지수', meaning: 'wise longevity' },
  { romanized: 'Irene', hangul: '아이린', meaning: 'peace' },
  { romanized: 'Seulgi', hangul: '슬기', meaning: 'wisdom' },
  { romanized: 'Wendy', hangul: '웬디', meaning: 'friend' },
  { romanized: 'Yeri', hangul: '예리', meaning: 'sharp and elegant' },
  { romanized: 'Nayeon', hangul: '나연', meaning: 'graceful lotus' },
  { romanized: 'Jeongyeon', hangul: '정연', meaning: 'righteous lotus' },
  { romanized: 'Momo', hangul: '모모', meaning: 'peach' },
  { romanized: 'Sana', hangul: '사나', meaning: 'sincere' },
  { romanized: 'Jihyo', hangul: '지효', meaning: 'wise and filial' },
  { romanized: 'Mina', hangul: '미나', meaning: 'beautiful and graceful' },
  { romanized: 'Dahyun', hangul: '다현', meaning: 'many wise' },
];

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

function getMaleNames(style: KoreanNameStyle): typeof MALE_MODERN {
  if (style === 'modern') return MALE_MODERN;
  if (style === 'traditional') return MALE_TRADITIONAL;
  if (style === 'idol') return MALE_IDOL;
  return [...MALE_MODERN, ...MALE_TRADITIONAL, ...MALE_IDOL];
}

function getFemaleNames(style: KoreanNameStyle): typeof FEMALE_MODERN {
  if (style === 'modern') return FEMALE_MODERN;
  if (style === 'traditional') return FEMALE_TRADITIONAL;
  if (style === 'idol') return FEMALE_IDOL;
  return [...FEMALE_MODERN, ...FEMALE_TRADITIONAL, ...FEMALE_IDOL];
}

export function generateKoreanNames(
  gender: KoreanGender,
  style: KoreanNameStyle,
  count: number,
  includeMeaning: boolean,
): KoreanNameResult[] {
  const rng = seededRandom(Date.now() ^ (count * 31337));
  const results: KoreanNameResult[] = [];
  const seen = new Set<string>();

  let attempts = 0;
  while (results.length < count && attempts < count * 10) {
    attempts++;
    const resolvedGender: 'male' | 'female' =
      gender === 'any' ? (rng() < 0.5 ? 'male' : 'female') : gender;

    const givenNames =
      resolvedGender === 'male' ? getMaleNames(style) : getFemaleNames(style);

    const surname = pick(SURNAMES, rng);
    const given = pick(givenNames, rng);
    const key = `${surname.romanized}-${given.romanized}`;
    if (seen.has(key)) continue;
    seen.add(key);

    const resolvedStyle =
      style === 'any'
        ? MALE_MODERN.includes(given as (typeof MALE_MODERN)[number]) ||
          FEMALE_MODERN.includes(given as (typeof FEMALE_MODERN)[number])
          ? 'Modern'
          : MALE_IDOL.includes(given as (typeof MALE_IDOL)[number]) ||
              FEMALE_IDOL.includes(given as (typeof FEMALE_IDOL)[number])
            ? 'K-pop'
            : 'Traditional'
        : style === 'modern'
          ? 'Modern'
          : style === 'idol'
            ? 'K-pop'
            : 'Traditional';

    results.push({
      romanized: `${surname.romanized} ${given.romanized}`,
      hangul: `${surname.hangul}${given.hangul}`,
      meaning: includeMeaning
        ? `${given.meaning} (surname: ${surname.meaning})`
        : undefined,
      gender: resolvedGender,
      style: resolvedStyle,
    });
  }

  return results;
}
