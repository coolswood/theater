import { translations, type Language } from './translations';

export interface Show {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  stage: string;
  price: string;
  duration: string;
  subtitles: string;
  age: string;
  capacity: string;
  poster: string;
  isFeatured?: boolean;
  quote?: string;
  description: string;
}

const showPosters: Record<string, { poster: string; isFeatured: boolean; number: string; time: string }> = {
  'cherry-orchard': {
    poster: 'https://picsum.photos/seed/suomi-cherry/700/900',
    isFeatured: true,
    number: '01',
    time: '19:00'
  },
  'maya-sea': {
    poster: 'https://picsum.photos/seed/suomi-sea/700/500',
    isFeatured: false,
    number: '02',
    time: '20:00'
  }
};

export function getShows(lang: Language = 'ru'): Show[] {
  const showDict = translations[lang]?.afisha?.shows || translations.ru.afisha.shows;
  return Object.entries(showDict).map(([id, data]) => ({
    id,
    number: showPosters[id]?.number || '01',
    time: showPosters[id]?.time || '19:00',
    poster: showPosters[id]?.poster || '',
    isFeatured: showPosters[id]?.isFeatured || false,
    ...data
  }));
}

export const shows: Show[] = getShows('ru');
