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
  rating?: number;
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
  capacity?: string;
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
      src: '/images/shows/novecento/novecento-1.webp',
      caption: '',
      category: 'stage',
      categoryLabel: ''
    },
    {
      id: 'nov-2',
      src: '/images/shows/novecento/novecento-2.webp',
      caption: '',
      category: 'stage',
      categoryLabel: ''
    },
    {
      id: 'nov-3',
      src: '/images/shows/novecento/novecento-3.webp',
      caption: '',
      category: 'stage',
      categoryLabel: ''
    },
    {
      id: 'nov-4',
      src: '/images/shows/novecento/novecento-4.webp',
      caption: '',
      category: 'stage',
      categoryLabel: ''
    },
    {
      id: 'nov-5',
      src: '/images/shows/novecento/novecento-5.webp',
      caption: '',
      category: 'stage',
      categoryLabel: ''
    },
    {
      id: 'nov-6',
      src: '/images/shows/novecento/novecento-6.webp',
      caption: '',
      category: 'stage',
      categoryLabel: ''
    },
    {
      id: 'nov-7',
      src: '/images/shows/novecento/novecento-7.webp',
      caption: '',
      category: 'stage',
      categoryLabel: ''
    },
    {
      id: 'nov-8',
      src: '/images/shows/novecento/novecento-8.webp',
      caption: '',
      category: 'stage',
      categoryLabel: ''
    },
    {
      id: 'nov-9',
      src: '/images/shows/novecento/novecento-9.webp',
      caption: '',
      category: 'stage',
      categoryLabel: ''
    },
    {
      id: 'nov-10',
      src: '/images/shows/novecento/novecento-10.webp',
      caption: '',
      category: 'stage',
      categoryLabel: ''
    },
    {
      id: 'nov-11',
      src: '/images/shows/novecento/novecento-11.webp',
      caption: '',
      category: 'stage',
      categoryLabel: ''
    }
  ]
};

export const showDirectors: Record<string, Record<Language, { name: string; role: string; quote: string }>> = {
  'novecento': {
    ru: {
      name: 'Аквиле Рузгите',
      role: 'Режиссер-постановщик',
      quote: '«Мы искали язык, на котором можно рассказать о человеке, который выбрал бесконечность внутри клавиш вместо бесконечности внешнего мира»'
    },
    fi: {
      name: 'Akvile Ruzgytė',
      role: 'Ohjaaja',
      quote: '”Etsimme kieltä kertoaksemme ihmisestä, joka valitsi äärettömyyden pianon koskettimien sisällä ulkomaailman äärettömyyden sijaan”'
    },
    en: {
      name: 'Akvile Ruzgytė',
      role: 'Stage Director',
      quote: '“We searched for a language to tell the story of a man who chose infinity within piano keys instead of the infinity of the outside world”'
    }
  }
};

export const showCast: Record<string, Record<Language, CastMember[]>> = {
  'novecento': {
    ru: [
      { name: 'Сергей Сивульский', role: 'Трубач' },
      { name: 'Виталий Лайдинен', role: 'Пианист, Новеченто' },
      { name: 'Наталья Силевиц', role: 'Американская дама, танцовщица' },
      { name: 'Ольга Хилтунен', role: 'Голос небес' },
      { name: 'Анастасия Угрюмова-Техников', role: 'Танцовщица, хореограф (DanceSport Studio)' },
      { name: 'Александр Казаков & Кирило Петунин', role: 'Художники по свету и звуку' },
      { name: 'Анна Веселова & Дарья Волкова', role: 'Сценография и костюмы' },
      { name: 'Адриана Иванова, Анна Веселова, Дарья Волкова', role: 'Маркетинг и координация' }
    ],
    fi: [
      { name: 'Sergei Sivulski', role: 'Trumpetisti' },
      { name: 'Vitali Laidinen', role: 'Pianisti, Novecento' },
      { name: 'Natalia Silevits', role: 'Amerikkalainen nainen, tanssija' },
      { name: 'Olga Hiltunen', role: 'Taivaan ääni' },
      { name: 'Anastasia Ugrjumova-Tehnikov', role: 'Tanssija, koreografi (DanceSport Studio)' },
      { name: 'Aleksandr Kazakov & Kirilo Petunin', role: 'Valo- ja äänisuunnittelijat' },
      { name: 'Anna Veselova & Daria Volkova', role: 'Lavastus ja puvustus' },
      { name: 'Adriana Ivanova, Anna Veselova, Daria Volkova', role: 'Markkinointi ja koordinointi' }
    ],
    en: [
      { name: 'Sergei Sivulski', role: 'Trumpeter' },
      { name: 'Vitaly Laidinen', role: 'Pianist, Novecento' },
      { name: 'Natalia Silevits', role: 'American Lady, Dancer' },
      { name: 'Olga Hiltunen', role: 'Voice of Heaven' },
      { name: 'Anastasia Ugryumova-Tehnikov', role: 'Dancer, Choreographer (DanceSport Studio)' },
      { name: 'Aleksandr Kazakov & Kirilo Petunin', role: 'Light & Sound Designers' },
      { name: 'Anna Veselova & Daria Volkova', role: 'Set & Costume Design' },
      { name: 'Adriana Ivanova, Anna Veselova, Daria Volkova', role: 'Marketing & Coordination' }
    ]
  }
};

export const showReviews: Record<string, Record<Language, Review[]>> = {
  'novecento': {
    ru: [
      {
        id: 'rev-1',
        author: 'Евгений Пекки',
        role: 'Зритель',
        city: 'Хельсинки',
        date: 'Ноябрь 2025',
        tag: '«Реалистично, по-взрослому»',
        tagCategory: 'acting',
        text: 'Сходили с женой на спектакль. Немного опасались, что будет модернистская постановка с какими-нибудь вывертами. Оказалось всё с точностью до наоборот: всё было реалистично, по-взрослому. Сергей Сивульский — талант, это бесспорно. Более двух часов вести непрерывный монолог и держать зал в напряжении могут немногие профессионалы. Ранее он был известен как победитель вокальных конкурсов, а теперь это полноценный драматический артист с большим чувством юмора. Артистов в спектакле немного, но каждый их выход в рассказ Трубача — как вишенка на торте. Хорошо схвачена атмосфера времени и места действия. Смотрели семьей, в восторге. Рекомендую!',
        verified: true
      },
      {
        id: 'rev-2',
        author: 'Эмма Юванкоски',
        role: 'Зритель',
        city: 'Хельсинки',
        date: '30 Ноября 2025',
        tag: '«Атмосфера камерного театра»',
        tagCategory: 'atmosphere',
        text: 'Сегодня в первый раз в жизни была в театре Логрус, в первый раз одна. Конечно, знала о его существовании, но, честно говоря, представлялся этаким драмкружком для взрослых... Если кто-то из коллектива увидит мой отзыв — простите мне такие мысли! Спектакль напомнил мне атмосферу настоящего камерного театра в Питере. "Маленький" — совсем не то же самое, что "скучный". Не буду спойлерить, этот спектакль надо смотреть. Я точно стала поклонницей театра Логрус. "Новеченто" надо обязательно смотреть и слушать вживую!',
        verified: true
      },
      {
        id: 'rev-3',
        author: 'Сергей Иванов',
        role: 'Зритель',
        city: 'Хельсинки',
        date: 'Декабрь 2025',
        tag: '«До слез и оваций»',
        tagCategory: 'emotions',
        text: 'Весь зал был покорен! В отдельных моментах на глазах у зрителей наворачивались слёзы, а овация, устроенная артистам по окончании спектакля, показала искреннюю оценку. Всё было реально и вживую. Игра на пианино в исполнении Виталия Лайдинена (Новеченто) была работой настоящего мастера. Отлично дополнил Трубача на своей трубе Алекс Хейккила — вышел на короткое время, но буквально заворожил зал. Можете не верить, но когда в океане был шторм, люстры на нашем корабле реально качались! Спектакль Аквиле Рузгите — отличная режиссерская работа и безусловная победа. Настоятельно рекомендую — не пожалеете!',
        verified: true
      },
      {
        id: 'rev-4',
        author: 'Андрей Петров',
        role: 'Зритель',
        city: 'Хельсинки',
        date: 'Октябрь 2025',
        tag: '«Живая музыка и сюжет»',
        tagCategory: 'music',
        text: 'Классный спектакль! Очень интересный сюжет, классные актёры и живая музыка. Держит внимание от первой до последней минуты, получили огромное удовольствие.',
        verified: true
      },
      {
        id: 'rev-5',
        author: 'Любовь Нумминен',
        role: 'Зритель',
        city: 'Эспоо',
        date: 'Октябрь 2025',
        tag: '«Идти однозначно»',
        tagCategory: 'emotions',
        text: 'Кто ещё не видел — идти однозначно!!! Очень понравился спектакль, проникновенный, глубокий и на одном дыхании. Огромное спасибо труппе театра Логрус!',
        verified: true
      },
      {
        id: 'rev-6',
        author: 'Олег Горбачев',
        role: 'Зритель',
        city: 'Хельсинки',
        date: 'Октябрь 2025',
        tag: '«Смотрел с удовольствием»',
        tagCategory: 'atmosphere',
        text: 'Смотрел с огромным удовольствием. Прекрасная актерская игра, чистый живой звук и удивительно душевная атмосфера в зале. Браво!',
        verified: true
      },
      {
        id: 'rev-7',
        author: 'Дарья и Михаил',
        role: 'Зрители',
        city: 'Вантаа',
        date: 'Ноябрь 2025',
        tag: '«Звук рояля и трубы»',
        tagCategory: 'music',
        text: 'Шли ради легендарного текста Алессандро Барикко, а получили невероятный синтез психологической драмы, живого рояля и трубы. Сцена шторма и музыкальной дуэли сыграна филигранно. Искреннее спасибо за такой вечер!',
        verified: true
      },
      {
        id: 'rev-8',
        author: 'Ирина Карташова',
        role: 'Зритель',
        city: 'Хельсинки',
        date: 'Декабрь 2025',
        tag: '«Полное погружение»',
        tagCategory: 'acting',
        text: 'Потрясающий моноспектакль с живым музыкальным и танцевальным сопровождением. Сергей Сивульский держит внимание каждой секундой своего рассказа. Камерный формат зала дает ощущение, что актер говорит лично с тобой.',
        verified: true
      }
    ],
    fi: [
      {
        id: 'rev-1',
        author: 'Evgeniy Pekki',
        role: 'Katsoja',
        city: 'Helsinki',
        date: 'Marraskuu 2025',
        tag: '«Aitoa draamaa ilman kikkailua»',
        tagCategory: 'acting',
        text: 'Kävimme vaimon kanssa esityksessä. Hieman pelkäsimme modernia kikkailua, mutta kokemus olikin täysin päinvastainen: syvällistä, realistista ja aikuista draamaa. Sergei Sivulski on kiistaton lahjakkuus. Yli kaksi tuntia kestävä monologi, joka pitää salin herkeämättömässä jännityksessä, vaatii todellista ammattitaitoa. Jokainen näyttelijän ja muusikon tulo mukaan tarinaan oli kuin kirsikka kakun päällä. Ajan ja paikan tunnelma välittyi upeasti. Koko perhe oli haltioissaan. Suosittelen lämpimästi!',
        verified: true
      },
      {
        id: 'rev-2',
        author: 'Emma Juvankoski',
        role: 'Katsoja',
        city: 'Helsinki',
        date: '30. marraskuuta 2025',
        tag: '«Kamariteatterin lumoa»',
        tagCategory: 'atmosphere',
        text: 'Olin tänään ensimmäistä kertaa Logrus-teatterissa, ja vieläpä yksin. Tiesin teatterin olemassaolosta, mutta en osannut odottaa näin korkeaa tasoa. Esitys toi mieleeni Pietarin parhaiden kamariteattereiden intiimin hengen. "Pieni sali" ei todellakaan tarkoita tylsää — päinvastoin! En aio paljastaa juonta, tämä täytyy kokea itse. Minusta tuli kertaheitolla Logruksen uskollinen katsoja. Novecento on nähtävä ja kuultava livenä!',
        verified: true
      },
      {
        id: 'rev-3',
        author: 'Sergei Ivanov',
        role: 'Katsoja',
        city: 'Helsinki',
        date: 'Joulukuu 2025',
        tag: '«Kyyneliin ja aplodeihin asti»',
        tagCategory: 'emotions',
        text: 'Koko sali oli mykistetty! Yksittäisissä kohtauksissa katsojien silmiin nousivat kyyneleet, ja esityksen päättyessä raikuvat suosionosoitukset kertoivat kaiken. Kaikki oli aitoa ja elävää. Vitali Laidisen pianonsoitto oli mestarillista työtä, ja Aleks Heikkilän trumpetti lumosi yleisön hetkessä. Kun lavalla koitti myrsky, tuntui kuin salin kattokruunut olisivat oikeasti huojuneet laivan mukana. Akvile Ruzgyten ohjaus on upea saavutus. Vahva suositus!',
        verified: true
      },
      {
        id: 'rev-4',
        author: 'Andrei Petrov',
        role: 'Katsoja',
        city: 'Helsinki',
        date: 'Lokakuu 2025',
        tag: '«Elävä musiikki ja tarina»',
        tagCategory: 'music',
        text: 'Mahtava esitys! Kiinnostava ja vangitseva tarina, loistavat näyttelijät ja upea elävä musiikki. Piti otteessaan ensihetkistä loppuun saakka, nautimme valtavasti.',
        verified: true
      },
      {
        id: 'rev-5',
        author: 'Ljubov Numminen',
        role: 'Katsoja',
        city: 'Espoo',
        date: 'Lokakuu 2025',
        tag: '«Ehdottomasti nähtävä»',
        tagCategory: 'emotions',
        text: 'Kuka ei ole vielä nähnyt — menkää ehdottomasti! Todella koskettava, syvällinen ja intensiivinen teatteri-ilta. Suuret kiitokset Logrus-teatterin työryhmälle!',
        verified: true
      },
      {
        id: 'rev-6',
        author: 'Oleg Gorbatchev',
        role: 'Katsoja',
        city: 'Helsinki',
        date: 'Lokakuu 2025',
        tag: '«Nautin suuresti»',
        tagCategory: 'atmosphere',
        text: 'Katsoin esityksen suurella ilolla. Erinomainen näyttelijäntyö, kirkas elävä ääni ja uskomattoman lämmin tunnelma salissa. Bravo tekijöille!',
        verified: true
      },
      {
        id: 'rev-7',
        author: 'Daria & Mihail',
        role: 'Katsojat',
        city: 'Vantaa',
        date: 'Marraskuu 2025',
        tag: '«Flyygelin ja trumpetin lumoa»',
        tagCategory: 'music',
        text: 'Tulimme Alessandro Bariccon legendaarisen tarinan vuoksi, ja saimme kokea häikäisevän psykologisen draaman, flyygelin ja elävän trumpetin liiton. Myrskykohtaus ja pianoduelli olivat silkkaa taidetta.',
        verified: true
      },
      {
        id: 'rev-8',
        author: 'Irina Kartashova',
        role: 'Katsoja',
        city: 'Helsinki',
        date: 'Joulukuu 2025',
        tag: '«Täysi uppoutuminen»',
        tagCategory: 'acting',
        text: 'Upea monologinäytelmä elävällä musiikilla ja liikkeellä rikastettuna. Sergei Sivulski vangitsee katsojan huomion tarinansa joka sekunnilla. Kamarisalin intiimiys luo tunteen henkilökohtaisesta keskustelusta.',
        verified: true
      }
    ],
    en: [
      {
        id: 'rev-1',
        author: 'Evgeniy Pekki',
        role: 'Audience Member',
        city: 'Helsinki',
        date: 'November 2025',
        tag: '«Realistic and mature drama»',
        tagCategory: 'acting',
        text: 'Attended the performance with my wife. We were somewhat worried it might be an avant-garde show with modern quirks, but it turned out to be the exact opposite: authentic, realistic, mature psychological theater. Sergei Sivulski is undeniably gifted. Sustaining a compelling two-hour monologue while keeping the room breathless is something very few actors can achieve. The ensemble entries were like the cherry on top. The historical atmosphere was captured flawlessly. We attended as a family and were completely captivated. Highly recommended!',
        verified: true
      },
      {
        id: 'rev-2',
        author: 'Emma Juvankoski',
        role: 'Audience Member',
        city: 'Helsinki',
        date: 'November 30, 2025',
        tag: '«Chamber theater magic»',
        tagCategory: 'atmosphere',
        text: 'Visited Logrus Theater for the very first time today, and on my own. I knew it existed, but honestly had imagined something amateurish... Please forgive me those initial doubts! The production instantly evoked the cherished atmosphere of authentic chamber theaters in St. Petersburg. "Small hall" definitely does not mean boring. I won’t spoil the story — you simply must experience it. I have genuinely become a devoted Logrus fan. Novecento must be seen and heard live!',
        verified: true
      },
      {
        id: 'rev-3',
        author: 'Sergey Ivanov',
        role: 'Audience Member',
        city: 'Helsinki',
        date: 'December 2025',
        tag: '«Tears and standing ovations»',
        tagCategory: 'emotions',
        text: 'The entire audience was spellbound. At several moments people were visibly moved to tears, and the standing ovation at the end spoke louder than words. Vitaly Laidinen’s piano performance was masterclass art, and Alex Heikkila’s trumpet captivated the hall in seconds. During the ocean storm scene, the ship’s chandeliers felt like they were genuinely swaying! Akvile Ruzgyte’s direction is a triumphant achievement. Strongly recommended — you will not regret it!',
        verified: true
      },
      {
        id: 'rev-4',
        author: 'Andrei Petrov',
        role: 'Audience Member',
        city: 'Helsinki',
        date: 'October 2025',
        tag: '«Live music and gripping plot»',
        tagCategory: 'music',
        text: 'Fantastic performance! Gripping story, brilliant acting, and superb live music. It held our attention from the very first minute to the last. Pure joy.',
        verified: true
      },
      {
        id: 'rev-5',
        author: 'Ljubov Numminen',
        role: 'Audience Member',
        city: 'Espoo',
        date: 'October 2025',
        tag: '«A must-see production»',
        tagCategory: 'emotions',
        text: 'If you have not seen it yet — go without hesitation! Deeply moving, profound, and watched in a single breath. Heartfelt thanks to the entire Logrus ensemble!',
        verified: true
      },
      {
        id: 'rev-6',
        author: 'Oleg Gorbatchev',
        role: 'Audience Member',
        city: 'Helsinki',
        date: 'October 2025',
        tag: '«A true pleasure to watch»',
        tagCategory: 'atmosphere',
        text: 'Watched with immense pleasure. Wonderful acting, crisp live acoustics, and an extraordinarily warm aura in the hall. Bravo!',
        verified: true
      },
      {
        id: 'rev-7',
        author: 'Daria & Mikhail',
        role: 'Audience Members',
        city: 'Vantaa',
        date: 'November 2025',
        tag: '«Grand piano and trumpet live»',
        tagCategory: 'music',
        text: 'We came for Alessandro Baricco’s timeless story and experienced a brilliant synthesis of psychological drama, grand piano, and trumpet. The ocean duel scene was executed with exquisite precision.',
        verified: true
      },
      {
        id: 'rev-8',
        author: 'Irina Kartashova',
        role: 'Audience Member',
        city: 'Helsinki',
        date: 'December 2025',
        tag: '«Complete immersion»',
        tagCategory: 'acting',
        text: 'A stunning solo drama enriched by live music and choreography. Sergei Sivulski commands attention with every single sentence. The intimate chamber format makes you feel he is speaking directly to you.',
        verified: true
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
    director: showDirectors[id]?.[lang] || showDirectors[id]?.ru || showDirectors['novecento']?.[lang] || showDirectors['novecento']?.ru,
    cast: showCast[id]?.[lang] || showCast[id]?.ru || showCast['novecento']?.[lang] || showCast['novecento']?.ru,
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

