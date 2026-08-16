import { translations, type Language } from './translations';

export interface GalleryItem {
  id: string;
  src: string;
  caption: string;
  category: 'stage' | 'backstage' | 'rehearsal';
  categoryLabel: string;
}

export interface CastMember {
  name: string;
  role: string;
}

export interface Show {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  stage: string;
  price?: string;
  duration: string;
  subtitles: string;
  age: string;
  capacity: string;
  poster: string;
  fientaUrl?: string;
  isFeatured?: boolean;
  quote?: string;
  description: string;
  dateIso?: string;
  expiresAt?: string;
  director?: {
    name: string;
    role: string;
    quote: string;
  };
  cast?: CastMember[];
  gallery?: GalleryItem[];
}

const showPosters: Record<string, {
  poster: string;
  isFeatured: boolean;
  number: string;
  time: string;
  fientaUrl?: string;
  dateIso: string;
  expiresAt?: string;
}> = {
  'novecento': {
    poster: 'https://teatterilogrus.fi/wp-content/uploads/2026/07/fienta.jpg',
    isFeatured: true,
    number: '01',
    time: '19:00',
    dateIso: '2026-08-13T19:00:00+03:00',
    expiresAt: '2026-08-13T23:59:59+03:00',
    fientaUrl: 'https://fienta.com/ru/spektakl-novechento-chetverg-13-avgusta-19-00-21-00'
  }
};

export const showGalleries: Record<string, GalleryItem[]> = {
  'novecento': [
    {
      id: 'nov-1',
      src: '/images/shows/novecento/novecento-1.jpg',
      caption: '',
      category: 'stage',
      categoryLabel: ''
    },
    {
      id: 'nov-2',
      src: '/images/shows/novecento/novecento-2.jpg',
      caption: '',
      category: 'stage',
      categoryLabel: ''
    },
    {
      id: 'nov-3',
      src: '/images/shows/novecento/novecento-3.jpg',
      caption: '',
      category: 'stage',
      categoryLabel: ''
    },
    {
      id: 'nov-4',
      src: '/images/shows/novecento/novecento-4.jpg',
      caption: '',
      category: 'stage',
      categoryLabel: ''
    },
    {
      id: 'nov-5',
      src: '/images/shows/novecento/novecento-5.jpg',
      caption: '',
      category: 'stage',
      categoryLabel: ''
    },
    {
      id: 'nov-6',
      src: '/images/shows/novecento/novecento-6.jpg',
      caption: '',
      category: 'stage',
      categoryLabel: ''
    },
    {
      id: 'nov-7',
      src: '/images/shows/novecento/novecento-7.jpg',
      caption: '',
      category: 'stage',
      categoryLabel: ''
    },
    {
      id: 'nov-8',
      src: '/images/shows/novecento/novecento-8.jpg',
      caption: '',
      category: 'stage',
      categoryLabel: ''
    },
    {
      id: 'nov-9',
      src: '/images/shows/novecento/novecento-9.jpg',
      caption: '',
      category: 'stage',
      categoryLabel: ''
    },
    {
      id: 'nov-10',
      src: '/images/shows/novecento/novecento-10.jpg',
      caption: '',
      category: 'stage',
      categoryLabel: ''
    },
    {
      id: 'nov-11',
      src: '/images/shows/novecento/novecento-11.jpg',
      caption: '',
      category: 'stage',
      categoryLabel: ''
    }
  ]
};

export const showDirectors: Record<string, { name: string; role: string; quote: string }> = {
  'novecento': {
    name: 'Аквиле Рузгите',
    role: 'Режиссер-постановщик',
    quote: '«Мы искали язык, на котором можно рассказать о человеке, который выбрал бесконечность внутри клавиш вместо бесконечности внешнего мира»'
  }
};

export const showCast: Record<string, CastMember[]> = {
  'novecento': [
    { name: 'Сергей Сивульский', role: 'Трубач' },
    { name: 'Виталий Лайдинен', role: 'Пианист, Новеченто' },
    { name: 'Наталья Силевиц', role: 'Американская дама, танцовщица' },
    { name: 'Ольга Хилтунен', role: 'Голос небес' },
    { name: 'Анастасия Угрюмова-Техников', role: 'Танцовщица, хореограф (DanceSport Studio)' },
    { name: 'Александр Казаков & Кирило Петунин', role: 'Художники по свету и звуку' },
    { name: 'Анна Веселова & Дарья Волкова', role: 'Сценография и костюмы' },
    { name: 'Адриана Иванова, Анна Веселова, Дарья Волкова', role: 'Маркетинг и координация' }
  ]
};

export function getShows(lang: Language = 'ru'): Show[] {
  const showDict = translations[lang]?.afisha?.shows || translations.ru.afisha.shows;
  return Object.entries(showDict).map(([id, data]) => ({
    id,
    number: showPosters[id]?.number || '01',
    time: showPosters[id]?.time || '19:00',
    poster: showPosters[id]?.poster || '',
    fientaUrl: showPosters[id]?.fientaUrl,
    isFeatured: showPosters[id]?.isFeatured || false,
    dateIso: showPosters[id]?.dateIso,
    expiresAt: showPosters[id]?.expiresAt,
    gallery: showGalleries[id] || showGalleries['novecento'],
    director: showDirectors[id] || showDirectors['novecento'],
    cast: showCast[id] || showCast['novecento'],
    ...data
  }));
}

export function isShowActive(show: Show, now: Date = new Date()): boolean {
  if (!show.dateIso) return true;
  const expiryTime = show.expiresAt ? new Date(show.expiresAt).getTime() : new Date(show.dateIso).getTime();
  return expiryTime >= now.getTime();
}

export function getActiveShows(lang: Language = 'ru', now: Date = new Date()): Show[] {
  return getShows(lang)
    .filter(show => isShowActive(show, now))
    .sort((a, b) => {
      const timeA = a.dateIso ? new Date(a.dateIso).getTime() : 0;
      const timeB = b.dateIso ? new Date(b.dateIso).getTime() : 0;
      return timeA - timeB;
    });
}

export function getNearestUpcomingShow(lang: Language = 'ru', now: Date = new Date()): Show | undefined {
  const active = getActiveShows(lang, now);
  return active[0];
}

export function getFeaturedShow(lang: Language = 'ru', now: Date = new Date()): Show | undefined {
  const active = getActiveShows(lang, now);
  if (active.length === 0) return undefined;
  return active.find(s => s.isFeatured) || active[0];
}

export function getShowById(id: string, lang: Language = 'ru'): Show | undefined {
  const all = getShows(lang);
  return all.find(s => s.id === id);
}

export function getPastShows(lang: Language = 'ru', now: Date = new Date()): Show[] {
  return getShows(lang)
    .filter(show => !isShowActive(show, now))
    .sort((a, b) => {
      const timeA = a.dateIso ? new Date(a.dateIso).getTime() : 0;
      const timeB = b.dateIso ? new Date(b.dateIso).getTime() : 0;
      return timeB - timeA;
    });
}

export const shows: Show[] = getShows('ru');
export const activeShows: Show[] = getActiveShows('ru');
export const pastShows: Show[] = getPastShows('ru');

