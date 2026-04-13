export const languages = {
  en: 'EN',
  ja: 'JA',
} as const;

export const defaultLang = 'en' as const;
export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'nav.positive': 'Positive',
    'nav.performance': 'Performance',
    'footer.text': 'General Education Course Study Notes',
    'home.subtitle': 'Study notes from a college general education course covering the fundamentals of psychology.',
    'card.viewNotes': 'View notes →',
    'positive.title': 'Positive Psychology',
    'positive.description': 'Study notes on well-being, strengths, resilience, flow, and the science of human flourishing.',
    'positive.badge': 'Positive Psychology',
    'performance.title': 'Performance Psychology',
    'performance.description': 'Study notes on motivation, focus, goal-setting, and optimizing performance under pressure.',
    'performance.badge': 'Performance Psychology',
    'article.backToPositive': '← Back to Positive Psychology',
    'article.backToPerformance': '← Back to Performance Psychology',
  },
  ja: {
    'nav.positive': 'ポジティブ心理学',
    'nav.performance': 'パフォーマンス心理学',
    'footer.text': '一般教養コース 学習ノート',
    'home.subtitle': 'カレッジの一般教養コースで学んだ心理学の基礎をまとめたノートです。',
    'card.viewNotes': 'ノートを見る →',
    'positive.title': 'ポジティブ心理学',
    'positive.description': 'ウェルビーイング・強み・レジリエンス・フローなど、人間のポジティブな側面を科学的に探求する分野の学習ノート。',
    'positive.badge': 'ポジティブ心理学',
    'performance.title': 'パフォーマンス心理学',
    'performance.description': 'モチベーション・集中・目標設定など、パフォーマンス向上に関する学習ノート。',
    'performance.badge': 'パフォーマンス心理学',
    'article.backToPositive': '← ポジティブ心理学に戻る',
    'article.backToPerformance': '← パフォーマンス心理学に戻る',
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
