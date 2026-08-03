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
  price: string;
  duration: string;
  subtitles: string;
  age: string;
  capacity: string;
  poster: string;
  isFeatured?: boolean;
  quote?: string;
  description: string;
  director?: {
    name: string;
    role: string;
    quote: string;
  };
  cast?: CastMember[];
  gallery?: GalleryItem[];
}

const showPosters: Record<string, { poster: string; isFeatured: boolean; number: string; time: string }> = {
  'novecento': {
    poster: 'https://teatterilogrus.fi/wp-content/uploads/2026/07/fienta.jpg',
    isFeatured: true,
    number: '01',
    time: '19:00'
  },
  'cherry-orchard': {
    poster: 'https://picsum.photos/seed/suomi-cherry/700/900',
    isFeatured: false,
    number: '02',
    time: '19:00'
  },
  'maya-sea': {
    poster: 'https://picsum.photos/seed/suomi-sea/700/500',
    isFeatured: false,
    number: '03',
    time: '20:00'
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
    }
  ],
  'cherry-orchard': [
    {
      id: 'co-1',
      src: '/images/shows/novecento/novecento-3.jpg',
      caption: '',
      category: 'stage',
      categoryLabel: ''
    },
    {
      id: 'co-2',
      src: '/images/shows/novecento/novecento-2.jpg',
      caption: '',
      category: 'stage',
      categoryLabel: ''
    },
    {
      id: 'co-3',
      src: '/images/shows/novecento/novecento-5.jpg',
      caption: '',
      category: 'stage',
      categoryLabel: ''
    }
  ],
  'maya-sea': [
    {
      id: 'ms-1',
      src: '/images/shows/novecento/novecento-5.jpg',
      caption: '',
      category: 'stage',
      categoryLabel: ''
    },
    {
      id: 'ms-2',
      src: '/images/shows/novecento/novecento-1.jpg',
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
  },
  'cherry-orchard': {
    name: 'Анна Веденеева',
    role: 'Режиссер',
    quote: '«Вишнёвый сад в Хельсинки — это тишина между словами, где каждый персонаж проживает свою внутреннюю оттепель»'
  },
  'maya-sea': {
    name: 'Михаил Суоминен',
    role: 'Художественный руководитель',
    quote: '«Сплетение человеческого голоса и струн виолончели создает эффект полного immersion в чужое воспоминание»'
  }
};

export const showCast: Record<string, CastMember[]> = {
  'novecento': [
    { name: 'Илья Линдеберг', role: 'Новеченто (Пианист)' },
    { name: 'Елена Ковалева', role: 'Музыкальный аккомпанемент (Фортепиано)' },
    { name: 'Марк Пелтонен', role: 'Световая партитура & Звуковой дизайн' }
  ],
  'cherry-orchard': [
    { name: 'Мария Виртанен', role: 'Раневская Любовь Андреевна' },
    { name: 'Алексей Смирнов', role: 'Лопахин Ермолай Алексеевич' },
    { name: 'София Лехтонен', role: 'Аня' }
  ],
  'maya-sea': [
    { name: 'Катерина Громова', role: 'Майя (Монолог)' },
    { name: 'Юхо Мякеля', role: 'Соло на виолончели' }
  ]
};

export function getShows(lang: Language = 'ru'): Show[] {
  const showDict = translations[lang]?.afisha?.shows || translations.ru.afisha.shows;
  return Object.entries(showDict).map(([id, data]) => ({
    id,
    number: showPosters[id]?.number || '01',
    time: showPosters[id]?.time || '19:00',
    poster: showPosters[id]?.poster || '',
    isFeatured: showPosters[id]?.isFeatured || false,
    gallery: showGalleries[id] || showGalleries['novecento'],
    director: showDirectors[id] || showDirectors['novecento'],
    cast: showCast[id] || showCast['novecento'],
    ...data
  }));
}

export function getShowById(id: string, lang: Language = 'ru'): Show | undefined {
  const all = getShows(lang);
  return all.find(s => s.id === id) || all[0];
}

export const shows: Show[] = getShows('ru');

