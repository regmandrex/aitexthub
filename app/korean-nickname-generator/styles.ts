export type StyleKey = 'cute' | 'cool' | 'fun' | 'emotional' | 'short' | 'english' | 'korean';

export type StyleOption = {
  key: StyleKey;
  label: string;
  hint: string;
};

export const STYLE_OPTIONS: StyleOption[] = [
  { key: 'cute', label: '귀여운', hint: '말랑하고 사랑스러운 느낌' },
  { key: 'cool', label: '멋있는', hint: '강하고 카리스마 있는 톤' },
  { key: 'fun', label: '재미있는', hint: '유쾌하고 장난스러운 분위기' },
  { key: 'emotional', label: '감성적인', hint: '잔잔하고 분위기 있는 톤' },
  { key: 'short', label: '짧은', hint: '간결하고 기억하기 쉬운 별명' },
  { key: 'english', label: '영어닉', hint: '영어 스타일의 핸들' },
  { key: 'korean', label: '한글닉', hint: '한글 중심 별명' },
];

export const DEFAULT_FEATURES = [
  '귀여움',
  '활발함',
  '웃음',
  '게임',
  '음악',
  '운동',
  'ì—¬í–‰',
  'íƒí—˜',
  '느긋함',
  '호기심',
  '친절',
  '집중',
];

export const KOREAN_ADJECTIVES: Record<StyleKey, string[]> = {
  cute: ['귀여운', '말랑한', '몽글한', '포근한', '달콤한', '보송한', '반짝이는', '상큼한', '햇살같은', '방긋한', '토실한', '소복한'],
  cool: ['멋진', '강한', '날렵한', '대담한', '빛나는', '카리스마 있는', '차가운', '정예', '검은', '번개같은', '압도적인', '전설의'],
  fun: ['엉뚱한', '신나는', '통통 튀는', '장난꾸러기', '웃음나는', '발랄한', '흥겨운', '우당탕', '깨발랄', '꾸러기', '톡톡한', '유쾌한'],
  emotional: ['잔잔한', '따뜻한', '감성적인', '은은한', '차분한', '조용한', '새벽의', '노을빛', '달빛의', '바람결', '별빛', '포근한'],
  short: ['쿨한', '핫한', '짧은', '딱', '스윗한', '빠른', '담백한', '가벼운', '심플한', '굿', '센', '초록'],
  english: [],
  korean: ['맑은', '밝은', '유쾌한', '따뜻한', '담백한', '산뜻한', '깨끗한', '반짝이는', '힘찬', '부드러운', '순한', '친근한'],
};

export const KOREAN_SUFFIXES: Record<StyleKey, string[]> = {
  cute: ['냥', '콩', '뽀', '둥이', '찡', '뿅', '토리', '쫑', '이', '봉', '루', '팡'],
  cool: ['킹', '전사', '마스터', '에이스', '헌터', '나이트', '캡틴', '블레이드', '스톰', '제트', '챔프', '레전드'],
  fun: ['대장', '폭탄', '요정', '마니아', '박사', '천재', '장인', '친구', '선수', '사장', '팀장', '모험가'],
  emotional: ['하루', '노을', '별', '달', '바람', '새벽', '꿈', '빛', '숲', '구름', '파도', '향기'],
  short: ['짱', '콩', '킹', '팡', '링', '루', '별', '봄', '날', '빛', '뽀', '냥'],
  english: [],
  korean: ['요정', '대장', '천재', '마스터', '별', '바람', '하루', '콩', '냥', '빛', '루키', '친구'],
};

export const KOREAN_NOUNS: Record<StyleKey, string[]> = {
  cute: ['토끼', '햄찌', '모찌', '쿠키', '푸딩', '별', '꽃', '요정', '구름', '솜', '캔디', '딸기'],
  cool: ['전설', '검', '폭풍', '그림자', '불꽃', '늑대', '용', '전사', '번개', '스톰', '레이서', '챔피언'],
  fun: ['바나나', '감자', '토스트', '젤리', '팝콘', '풍선', '웃음', '마이크', '스피커', '댄스', '찌릿', '풍덩'],
  emotional: ['달빛', '노을', '새벽', '바람', '별빛', '구름', '파도', '이슬', '숲', '향기', '하루', '물결'],
  short: ['별', '달', '밤', '구름', '바람', '봄', '여름', '빛', '꿈', '날', '씨', '곰'],
  english: [],
  korean: ['별빛', '햇살', '바람', '구름', '파도', '숲', '모험가', '요정', '전설', '루키', '하루', '친구'],
};

export const KOREAN_ROLES = ['용사', '기사', '마법사', '레인저', '닌자', '전사', '탐험가', '도적', '궁수', '수호자', '마스터', '캡틴'];

export const EN_PREFIXES = [
  'Neo',
  'Ultra',
  'Pixel',
  'Nova',
  'Lucky',
  'Brave',
  'Swift',
  'Sunny',
  'Shadow',
  'Sky',
  'Luna',
  'Mint',
  'Echo',
  'Aero',
  'Zen',
  'Vivid',
  'Stellar',
  'Frost',
];

export const EN_SUFFIXES = [
  'X',
  'Pro',
  'Fox',
  'Bear',
  'Cat',
  'Wolf',
  'Hero',
  'Spark',
  'Byte',
  'Quest',
  'Rider',
  'Pilot',
  'Wave',
  'Arc',
  'Core',
  'Mode',
  'Rush',
  'Prime',
];

export const EN_ADJECTIVES = [
  'Sunny',
  'Brave',
  'Swift',
  'Clever',
  'Lucky',
  'Silent',
  'Bright',
  'Wild',
  'Chill',
  'Fresh',
  'Mellow',
  'Nimble',
  'Vivid',
  'Cozy',
  'Gentle',
];

export const EN_NOUNS = [
  'Comet',
  'Echo',
  'Raven',
  'Breeze',
  'Orbit',
  'Pixel',
  'Rocket',
  'Voyager',
  'Ninja',
  'Wizard',
  'Ranger',
  'Harbor',
  'Bunny',
  'Otter',
  'Panda',
  'Falcon',
  'Cloud',
  'Sparrow',
  'Forest',
  'Flicker',
];

export const EN_DIGITS = ['7', '8', '9', '11', '21', '24', '88'];

export const BLOCKLIST = ['바보', '멍청', '미친', '욕', '혐오', '증오', '폭력', '살인', '자살', 'hate', 'kill'];
