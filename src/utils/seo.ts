import type { Show } from '../data/shows';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';
import { getLocalizedPath } from './i18n';

export const SITE_URL = 'https://teatterilogrus.fi';

export interface PageMeta {
  title: string;
  description: string;
  keywords: string;
}

export function getHomePageMeta(lang: Language = 'ru'): PageMeta {
  if (lang === 'fi') {
    return {
      title: 'Logrus Teatteri — Teatteri ja näyttelijäkurssit Helsingissä | Narri näyttämö',
      description: 'Helsingin kamariteatteri Narri näyttämöllä (Sörnäisten rantatie 31). Teatteriesitykset, liput, teatteristudio ja aikuisten näyttelijäkurssit Helsingissä, Espoossa ja Vantaalla.',
      keywords: 'teatteri helsinki, venäjänkielinen teatteri helsinki, näyttelijäkurssit helsinki, teatteriesitykset helsinki, teatteristudio helsinki, narri näyttämö, logrus teatteri'
    };
  }
  if (lang === 'en') {
    return {
      title: 'Logrus Teatteri — Chamber Theatre & Acting Classes in Helsinki',
      description: 'Chamber theatre in Helsinki at Narri näyttämö stage (Sörnäisten rantatie 31). Stage performances, tickets, drama studio and acting courses for adults in Helsinki, Espoo and Vantaa.',
      keywords: 'theater helsinki, acting classes helsinki, drama courses helsinki, performances helsinki, logrus teatteri, narri nayttamo, chamber theatre helsinki'
    };
  }
  return {
    title: 'Logrus Teatteri — Русскоязычный театр и курсы актерского мастерства в Хельсинки',
    description: 'Камерный русскоязычный театр в Хельсинки на сцене Narri näyttämö (Sörnäisten rantatie 31). Спектакли, афиша, билеты, театральная студия и курсы актерского мастерства для взрослых в Хельсинки, Эспоо и Вантаа.',
    keywords: 'русский театр хельсинки, театр хельсинки, курсы актерского мастерства хельсинки, актерские курсы эспоо, театральная студия вантаа, спектакли на русском хельсинки, афиша хельсинки, русский театр в финляндии, teatteri helsinki, venäjänkielinen teatteri, acting classes helsinki, logrus teatteri'
  };
}

export function getShowPageMeta(show: Show, lang: Language = 'ru'): PageMeta {
  if (lang === 'fi') {
    return {
      title: `Esitys ”${show.title}” Helsingissä — liput ja tiedot | Logrus Teatteri`,
      description: `${show.title}${show.subtitle ? ' — ' + show.subtitle : ''}. Teatteriesitys Helsingissä Narri näyttämöllä. Liput, valokuvat ja lisätiedot.`,
      keywords: `esitys ${show.title.toLowerCase()}, teatteri helsinki, teatteriesitykset helsinki, logrus teatteri, narri näyttämö, liput teatteriin helsinki`
    };
  }
  if (lang === 'en') {
    return {
      title: `Show "${show.title}" in Helsinki — Tickets & Info | Logrus Teatteri`,
      description: `${show.title}${show.subtitle ? ' — ' + show.subtitle : ''}. Chamber theatre performance in Helsinki at Narri näyttämö stage. Tickets, photo gallery, and production details.`,
      keywords: `show ${show.title.toLowerCase()}, performance helsinki, theatre tickets helsinki, logrus teatteri, narri nayttamo`
    };
  }
  return {
    title: `Спектакль «${show.title}» в Хельсинки — билеты и афиша | Logrus Teatteri`,
    description: `${show.title}${show.subtitle ? ' — ' + show.subtitle : ''}. Русскоязычный спектакль в Хельсинки на сцене Narri näyttämö. Билеты, фотохроника и информация о постановке.`,
    keywords: `спектакль ${show.title.toLowerCase()}, спектакль ${show.title.toLowerCase()} хельсинки, русский театр хельсинки, афиша спектаклей хельсинки, билеты в театр хельсинки, logrus teatteri, narri nayttamo`
  };
}

export function getArchivePageMeta(lang: Language = 'ru'): PageMeta {
  if (lang === 'fi') {
    return {
      title: 'Esitysarkisto — Logrus Teatteri Helsinki',
      description: 'Logrus Teatterin aiempien teatteriesitysten arkisto, ensi-illat ja valokuvakronikka Narri näyttämöllä Helsingissä.',
      keywords: 'teatteriarkisto helsinki, menneet esitykset logrus teatteri, teatteri helsinki, narri näyttämö'
    };
  }
  if (lang === 'en') {
    return {
      title: 'Show Archive — Logrus Teatteri Helsinki',
      description: 'Archive of past theatre productions, premieres, and photo chronicles by Logrus Teatteri at Narri näyttämö stage in Helsinki.',
      keywords: 'theatre archive helsinki, past productions logrus, performances helsinki, stage chronicle'
    };
  }
  return {
    title: 'Архив спектаклей — Logrus Teatteri Helsinki',
    description: 'Архив прошлых театральных постановок, премьер и фотохроника спектаклей русскоязычного театра Logrus Teatteri на сцене Narri näyttämö в Хельсинки.',
    keywords: 'архив спектаклей хельсинки, прошлые спектакли logrus teatteri, русский театр в хельсинки, история постановок хельсинки, teatteri helsinki'
  };
}

/**
 * Theater Organization & Local Business Schema (Helsinki / Espoo / Vantaa catchment)
 */
export function getOrganizationSchema(lang: Language = 'ru') {
  const descriptions: Record<Language, string> = {
    ru: 'Камерный русскоязычный театр и актерская студия в Хельсинки на сцене Narri näyttämö. Спектакли, афиша, билеты и курсы актерского мастерства для взрослых и молодежи.',
    fi: 'Kamariteatteri ja näyttelijästudio Helsingissä Narri näyttämöllä. Esitykset, liput ja aikuisten teatterikurssit.',
    en: 'Chamber theatre and acting studio in Helsinki at Narri näyttämö stage. Stage shows, tickets, and acting courses for adults.'
  };

  const localizedHomeUrl = `${SITE_URL}${getLocalizedPath('/', lang)}`;

  return {
    '@context': 'https://schema.org',
    '@type': ['TheaterGroup', 'PerformingGroup', 'LocalBusiness'],
    '@id': `${SITE_URL}/#organization`,
    name: 'Logrus Teatteri',
    legalName: 'Logrus – Kansainvälinen Nuorisoaloitteiden Tukiyhdistys ry',
    alternateName: [
      'Teatteri Logrus',
      'Театр Логрус',
      'Logrus Theatre Helsinki',
      'Русский театр в Хельсинки',
      'Venäjänkielinen teatteri Helsinki'
    ],
    url: localizedHomeUrl,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    description: descriptions[lang] || descriptions.ru,
    telephone: '+358452656332',
    email: 'info@logrus.fi',
    foundingDate: '2006',
    founder: {
      '@type': 'Person',
      name: 'Akvile Ruzgytė',
      jobTitle: lang === 'fi' ? 'Pääohjaaja ja teatterin johtaja' : (lang === 'en' ? 'Artistic Director & Theatre Lead' : 'Главный режиссер и руководитель театра')
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sörnäisten rantatie 31',
      addressLocality: 'Helsinki',
      postalCode: '00500',
      addressRegion: 'Uusimaa',
      addressCountry: 'FI'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 60.1834,
      longitude: 24.9652
    },
    location: {
      '@type': 'PerformingArtsTheater',
      name: 'Narri näyttämö',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sörnäisten rantatie 31',
        addressLocality: 'Helsinki',
        postalCode: '00500',
        addressCountry: 'FI'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 60.1834,
        longitude: 24.9652
      }
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+358452656332',
        email: 'info@logrus.fi',
        contactType: 'customer service',
        availableLanguage: ['Russian', 'Finnish', 'English'],
        areaServed: ['FI', 'Helsinki', 'Espoo', 'Vantaa']
      }
    ],
    areaServed: [
      { '@type': 'City', name: 'Helsinki' },
      { '@type': 'City', name: 'Espoo' },
      { '@type': 'City', name: 'Vantaa' },
      { '@type': 'AdministrativeArea', name: 'Pääkaupunkiseutu' },
      { '@type': 'Country', name: 'Finland' }
    ],
    knowsLanguage: ['ru', 'fi', 'en'],
    priceRange: '€€',
    sameAs: [
      'https://www.instagram.com/logrus_theatre/',
      'https://fienta.com/o/logrus'
    ]
  };
}

/**
 * WebSite Schema for Sitename & Search Engine Visibility
 */
export function getWebSiteSchema(lang: Language = 'ru') {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}${getLocalizedPath('/', lang)}`,
    name: 'Logrus Teatteri',
    alternateName: ['Театр Логрус', 'Teatteri Logrus Helsinki'],
    inLanguage: ['ru', 'fi', 'en'],
    publisher: {
      '@id': `${SITE_URL}/#organization`
    }
  };
}

/**
 * Course Schema for Acting Courses (Лампарельс)
 */
export function getCourseSchema(lang: Language = 'ru') {
  const titles: Record<Language, string> = {
    ru: 'Курс актерского мастерства «Лампарельс»',
    fi: '”Lamparels” -näyttelijäkurssi aikuisille',
    en: '“Lamparels” Acting and Drama Course'
  };

  const descriptions: Record<Language, string> = {
    ru: 'Курс актерского мастерства, сценической речи, импровизации и раскрепощения для взрослых и молодежи в Хельсинки. Занятия проходят на сцене Narri näyttämö.',
    fi: 'Näyttelijäntyön, näyttämöpuheen ja improvisaation kurssi aikuisille ja nuorille Helsingissä Narri näyttämöllä.',
    en: 'Acting, stage speech, and improvisation course for adults and youth in Helsinki at Narri näyttämö stage.'
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${SITE_URL}/#course-lamparel`,
    name: titles[lang] || titles.ru,
    alternateName: 'Acting Classes and Drama Studio in Helsinki by Logrus Teatteri',
    description: descriptions[lang] || descriptions.ru,
    provider: {
      '@type': 'TheaterGroup',
      name: 'Logrus Teatteri',
      url: `${SITE_URL}${getLocalizedPath('/', lang)}`
    },
    educationalCredentialAwarded: lang === 'fi' ? 'Osallistuminen Logrus Teatterin näytelmiin' : (lang === 'en' ? 'Participation in Logrus Teatteri stage productions' : 'Участие в спектаклях и сценических показах театра Logrus'),
    inLanguage: 'ru',
    audience: {
      '@type': 'Audience',
      audienceType: lang === 'fi' ? 'Aikuiset ja nuoret (18+)' : (lang === 'en' ? 'Adults and young adults (18+)' : 'Взрослые и молодежь от 18 лет')
    },
    offers: {
      '@type': 'Offer',
      category: 'Free Trial / Registration',
      price: '0',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}${getLocalizedPath('/#courses', lang)}`
    },
    hasCourseInstance: [
      {
        '@type': 'CourseInstance',
        courseMode: 'in-person',
        inLanguage: 'ru',
        location: {
          '@type': 'PerformingArtsTheater',
          name: 'Narri näyttämö',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Sörnäisten rantatie 31',
            addressLocality: 'Helsinki',
            postalCode: '00500',
            addressCountry: 'FI'
          }
        },
        instructor: {
          '@type': 'Person',
          name: 'Akvile Ruzgytė',
          jobTitle: lang === 'fi' ? 'Ohjaaja, näyttelijäntyön opettaja' : (lang === 'en' ? 'Director, Acting Coach' : 'Режиссер, преподаватель актерского мастерства')
        }
      }
    ]
  };
}

/**
 * TheaterEvent Schema for a specific Show
 */
export function getTheaterEventSchema(show: Show, lang: Language = 'ru') {
  const showUrl = `${SITE_URL}${getLocalizedPath(`/shows/${show.id}`, lang)}`;
  const posterUrl = show.poster.startsWith('http')
    ? show.poster
    : `${SITE_URL}${show.poster.startsWith('/') ? '' : '/'}${show.poster}`;

  const priceMatch = show.price ? show.price.match(/\d+([.,]\d+)?/) : null;
  const numericPrice = priceMatch ? priceMatch[0].replace(',', '.') : '25';

  const performers = show.cast && show.cast.length > 0
    ? show.cast.map((c) => ({
        '@type': 'Person',
        name: c.name,
        jobTitle: c.role
      }))
    : [{
        '@type': 'TheaterGroup',
        name: 'Logrus Teatteri',
        url: SITE_URL
      }];

  const hasReviews = show.reviews && show.reviews.length > 0;
  const reviewsSchema = hasReviews
    ? show.reviews!.map((rev) => ({
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: rev.author
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: rev.rating || 5,
          bestRating: 5,
          worstRating: 1
        },
        reviewBody: rev.text
      }))
    : undefined;

  const aggregateRatingSchema = hasReviews
    ? {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: show.reviews!.length,
        bestRating: '5',
        worstRating: '1'
      }
    : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'TheaterEvent',
    '@id': `${showUrl}#event`,
    name: lang === 'fi' ? `Esitys ”${show.title}”` : (lang === 'en' ? `Show "${show.title}"` : `Спектакль «${show.title}»`),
    description: show.description,
    image: posterUrl,
    url: showUrl,
    startDate: show.dateIso || '2026-08-13T19:00:00+03:00',
    ...(show.expiresAt ? { endDate: show.expiresAt } : {}),
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    inLanguage: 'ru',
    typicalAgeRange: show.age || '16+',
    duration: show.duration ? (show.duration.includes('2') ? 'PT2H' : 'PT1H30M') : undefined,
    location: {
      '@type': 'PerformingArtsTheater',
      name: 'Narri näyttämö',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sörnäisten rantatie 31',
        addressLocality: 'Helsinki',
        postalCode: '00500',
        addressCountry: 'FI'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 60.1834,
        longitude: 24.9652
      }
    },
    organizer: {
      '@type': 'TheaterGroup',
      name: 'Logrus Teatteri',
      url: `${SITE_URL}${getLocalizedPath('/', lang)}`
    },
    performer: performers,
    workPerformed: {
      '@type': 'TheaterPlay',
      name: show.title,
      description: show.subtitle || show.description
    },
    ...(show.director ? {
      director: {
        '@type': 'Person',
        name: show.director.name,
        jobTitle: show.director.role
      }
    } : {}),
    ...(show.fientaUrl ? {
      offers: {
        '@type': 'Offer',
        url: show.fientaUrl,
        price: numericPrice || '25',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        validFrom: '2026-01-01T00:00:00+03:00',
        category: 'PrimaryTicket'
      }
    } : {}),
    ...(aggregateRatingSchema ? { aggregateRating: aggregateRatingSchema } : {}),
    ...(reviewsSchema ? { review: reviewsSchema } : {})
  };
}

/**
 * ItemList Schema for upcoming active shows (for index / afisha)
 */
export function getEventsListSchema(shows: Show[], lang: Language = 'ru') {
  const names: Record<Language, string> = {
    ru: 'Афиша спектаклей Logrus Teatteri',
    fi: 'Logrus Teatterin esityskalenteri',
    en: 'Logrus Teatteri Performance Schedule'
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: names[lang] || names.ru,
    itemListElement: shows.map((show, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: getTheaterEventSchema(show, lang)
    }))
  };
}

/**
 * CollectionPage Schema for Archive
 */
export function getArchiveSchema(shows: Show[], lang: Language = 'ru') {
  const names: Record<Language, string> = {
    ru: 'Архив спектаклей Logrus Teatteri',
    fi: 'Logrus Teatterin esitysarkisto',
    en: 'Logrus Teatteri Production Archive'
  };

  const descriptions: Record<Language, string> = {
    ru: 'Архив прошлых театральных постановок и фотохроника спектаклей театра Logrus в Хельсинки.',
    fi: 'Logrus Teatterin aiempien esitysten arkisto ja valokuvat Helsingissä.',
    en: 'Archive of past stage productions and photo chronicles by Logrus Teatteri in Helsinki.'
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: names[lang] || names.ru,
    url: `${SITE_URL}${getLocalizedPath('/shows/archive', lang)}`,
    description: descriptions[lang] || descriptions.ru,
    mainEntity: {
      '@type': 'ItemList',
      name: lang === 'fi' ? 'Arkistoidut esitykset' : (lang === 'en' ? 'Archived Productions' : 'Архивные постановки'),
      itemListElement: shows.map((show, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: show.title,
        url: `${SITE_URL}${getLocalizedPath(`/shows/${show.id}`, lang)}`
      }))
    }
  };
}

/**
 * BreadcrumbList Schema
 */
export function getBreadcrumbsSchema(items: { name: string; url: string }[], lang: Language = 'ru') {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${getLocalizedPath(item.url, lang)}`
    }))
  };
}
