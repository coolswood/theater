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

export interface Review {
  id: string;
  author: string;
  role: string;
  city?: string;
  date: string;
  rating: number;
  text: string;
  tag?: string;
  tagCategory?: 'emotions' | 'acting' | 'music' | 'atmosphere' | 'all';
  verified?: boolean;
  likes?: number;
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
  reviews?: Review[];
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

export const showReviews: Record<string, Record<Language, Review[]>> = {
  'novecento': {
    ru: [
      {
        id: 'rev-1',
        author: 'Елена Васильева',
        role: 'Зритель премьеры',
        city: 'Хельсинки',
        date: '14 Августа 2026',
        rating: 5,
        tag: '«До слез и мурашек»',
        tagCategory: 'emotions',
        text: 'Невероятная глубина и атмосфера камерного зала. С первых минут забываешь, где находишься — кажется, что под ногами действительно качается палуба океанского лайнера «Вирджиния». Игра Виталия Лайдинена на разрыв души! Браво!',
        verified: true,
        likes: 24
      },
      {
        id: 'rev-2',
        author: 'Markus Lindqvist',
        role: 'Зритель / Театральный критик',
        city: 'Helsinki',
        date: '13 Августа 2026',
        rating: 5,
        tag: '«Магия звука и света»',
        tagCategory: 'atmosphere',
        text: 'Удивительно тонкая, красивая постановка на сцене Narri näyttämö. Свет и звук создают эффект полного погружения в безграничный океан. Рекомендую всем ценителям глубокого психологического театра.',
        verified: true,
        likes: 19
      },
      {
        id: 'rev-3',
        author: 'Дмитрий и Анна Соколовы',
        role: 'Постоянные зрители',
        city: 'Эспоо',
        date: '13 Августа 2026',
        rating: 5,
        tag: '«Живая музыка и труба»',
        tagCategory: 'music',
        text: 'Ходили вдвоем, под сильнейшим впечатлением. Трогательная история о призвании, музыке и выборе человека. Живое звучание трубы Сергея Сивульского и пластика актеров — это настоящая магия!',
        verified: true,
        likes: 16
      },
      {
        id: 'rev-4',
        author: 'София Корхонен',
        role: 'Культурный обозреватель',
        city: 'Хельсинки',
        date: '14 Августа 2026',
        rating: 5,
        tag: '«Блестящая актерская игра»',
        tagCategory: 'acting',
        text: 'Один из самых сильных камерных спектаклей сезона в Хельсинки. Режиссерская работа Аквиле Рузгите и эмоциональная отдача актерского ансамбля заслуживают высшей оценки.',
        verified: true,
        likes: 31
      },
      {
        id: 'rev-5',
        author: 'Михаил Романов',
        role: 'Зритель',
        city: 'Тампере',
        date: '13 Августа 2026',
        rating: 5,
        tag: '«Глубокий след в сердце»',
        tagCategory: 'emotions',
        text: 'Специально приехали из Тампере на премьеру и ни секунды не пожалели. Камерность зала позволяет уловить каждый взгляд и каждую эмоцию. Искренний, живой и глубокий театр!',
        verified: true,
        likes: 12
      }
    ],
    fi: [
      {
        id: 'rev-1',
        author: 'Elena Vasilieva',
        role: 'Ensi-illan katsoja',
        city: 'Helsinki',
        date: '14. elokuuta 2026',
        rating: 5,
        tag: '«Koskettava ja syvällinen»',
        tagCategory: 'emotions',
        text: 'Uskomattoman intiimi ja syvä tunnelma kamarisalissa. Heti alusta asti tuntuu kuin seisoisi itse höyrylaivan kannella. Näyttelijöiden heittäytyminen on mykistävää. Bravo!',
        verified: true,
        likes: 24
      },
      {
        id: 'rev-2',
        author: 'Markus Lindqvist',
        role: 'Teatterin ystävä / Kriitikko',
        city: 'Helsinki',
        date: '13. elokuuta 2026',
        rating: 5,
        tag: '«Äänen ja valon taikaa»',
        tagCategory: 'atmosphere',
        text: 'Upea, visuaalisesti erittäin kaunis esitys Narri näyttämöllä. Valo- ja äänisuunnittelu loivat maagisen tunnelman. Suosittelen lämpimästi kaikille draaman ystäville.',
        verified: true,
        likes: 19
      },
      {
        id: 'rev-3',
        author: 'Dmitri & Anna Sokolov',
        role: 'Vakiokatsojat',
        city: 'Espoo',
        date: '13. elokuuta 2026',
        rating: 5,
        tag: '«Elävä musiikki ja trumpetti»',
        tagCategory: 'music',
        text: 'Olimme katsomassa yhdessä ja vaikutus kantaa edelleen. Herkkä ja koskettava tarina kutsumuksesta ja musiikista. Trumpetin elävä sointi ja liikekieli olivat silkkaa lumoa!',
        verified: true,
        likes: 16
      },
      {
        id: 'rev-4',
        author: 'Sofia Korhonen',
        role: 'Kulttuuriblogi',
        city: 'Helsinki',
        date: '14. elokuuta 2026',
        rating: 5,
        tag: '«Loistava näyttelijäntyö»',
        tagCategory: 'acting',
        text: 'Yksi kauden vaikuttavimmista teatterikokemuksista Helsingissä. Ohjaus ja näyttelijäkaartin intensiteetti ansaitsevat täydet pisteet. Vahvaa kamaritaidetta.',
        verified: true,
        likes: 31
      },
      {
        id: 'rev-5',
        author: 'Mihail Romanov',
        role: 'Katsoja',
        city: 'Tampere',
        date: '13. elokuuta 2026',
        rating: 5,
        tag: '«Jättää syvän jäljen»',
        tagCategory: 'emotions',
        text: 'Matkustimme varta vasten Tampereelta esitykseen emmekä katuneet hetkeäkään. Salin intiimiys tekee jokaisesta katseesta ja tunteesta totta. Aitoa, elävää teatteria!',
        verified: true,
        likes: 12
      }
    ],
    en: [
      {
        id: 'rev-1',
        author: 'Elena Vasilieva',
        role: 'Premiere Attendee',
        city: 'Helsinki',
        date: 'August 14, 2026',
        rating: 5,
        tag: '«Profound and Touching»',
        tagCategory: 'emotions',
        text: 'Incredible depth and intimacy in the chamber hall. From the opening minutes you genuinely feel the roll of the Virginia ocean liner underfoot. The acting is breathtaking!',
        verified: true,
        likes: 24
      },
      {
        id: 'rev-2',
        author: 'Markus Lindqvist',
        role: 'Theater Enthusiast / Reviewer',
        city: 'Helsinki',
        date: 'August 13, 2026',
        rating: 5,
        tag: '«Magic of Sound & Light»',
        tagCategory: 'atmosphere',
        text: 'A beautifully crafted, poetic production at Narri näyttämö. Light and acoustic design create pure immersion into an endless ocean. Highly recommended for drama lovers.',
        verified: true,
        likes: 19
      },
      {
        id: 'rev-3',
        author: 'Dmitri & Anna Sokolov',
        role: 'Regular Audience',
        city: 'Espoo',
        date: 'August 13, 2026',
        rating: 5,
        tag: '«Live Music & Trumpet»',
        tagCategory: 'music',
        text: 'We attended together and are still moved days later. A delicate, lyrical story of destiny, music, and courage. The live trumpet and choreography were mesmerizing!',
        verified: true,
        likes: 16
      },
      {
        id: 'rev-4',
        author: 'Sofia Korhonen',
        role: 'Culture Columnist',
        city: 'Helsinki',
        date: 'August 14, 2026',
        rating: 5,
        tag: '«Brilliant Acting»',
        tagCategory: 'acting',
        text: 'One of the most powerful chamber theater productions in Helsinki this season. The ensemble devotion and direction deserve top marks. Truly resonant art.',
        verified: true,
        likes: 31
      },
      {
        id: 'rev-5',
        author: 'Mikhail Romanov',
        role: 'Audience Member',
        city: 'Tampere',
        date: 'August 13, 2026',
        rating: 5,
        tag: '«Left a Lasting Mark»',
        tagCategory: 'emotions',
        text: 'Travelled from Tampere specifically for the show and loved every single moment. The intimate format lets you experience every emotion up close. Honest and vivid theater!',
        verified: true,
        likes: 12
      }
    ]
  }
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
    reviews: (showReviews[id] && showReviews[id][lang]) || showReviews['novecento']?.[lang] || showReviews['novecento']?.ru || [],
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

