import type { Show } from '../data/shows';

export const SITE_URL = 'https://teatterilogrus.fi';

/**
 * Theater Organization & Local Business Schema (Helsinki / Espoo / Vantaa catchment)
 */
export function getOrganizationSchema() {
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
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    description:
      'Камерный русскоязычный театр и актерская студия в Хельсинки на сцене Narri näyttämö. Спектакли, афиша, билеты и курсы актерского мастерства для взрослых и молодежи.',
    telephone: '+358452656332',
    email: 'info@logrus.fi',
    foundingDate: '2006',
    founder: {
      '@type': 'Person',
      name: 'Akvile Ruzgytė',
      jobTitle: 'Главный режиссер и руководитель театра'
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
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
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
export function getCourseSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${SITE_URL}/#course-lamparel`,
    name: 'Курс актерского мастерства «Лампарельс»',
    alternateName: 'Acting Classes and Drama Studio in Helsinki by Logrus Teatteri',
    description:
      'Курс актерского мастерства, сценической речи, импровизации и раскрепощения для взрослых и молодежи в Хельсинки. Занятия проходят на сцене Narri näyttämö.',
    provider: {
      '@type': 'TheaterGroup',
      name: 'Logrus Teatteri',
      url: SITE_URL
    },
    educationalCredentialAwarded: 'Участие в спектаклях и сценических показах театра Logrus',
    inLanguage: 'ru',
    audience: {
      '@type': 'Audience',
      audienceType: 'Взрослые и молодежь от 18 лет'
    },
    offers: {
      '@type': 'Offer',
      category: 'Free Trial / Registration',
      price: '0',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/#courses`
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
          jobTitle: 'Режиссер, преподаватель актерского мастерства'
        }
      }
    ]
  };
}

/**
 * TheaterEvent Schema for a specific Show
 */
export function getTheaterEventSchema(show: Show) {
  const showUrl = `${SITE_URL}/shows/${show.id}`;
  const posterUrl = show.poster.startsWith('http')
    ? show.poster
    : `${SITE_URL}${show.poster.startsWith('/') ? '' : '/'}${show.poster}`;

  // Parse price if available
  const numericPrice = show.price ? show.price.replace(/[^0-9.,]/g, '').replace(',', '.') : undefined;

  // Build performers list from cast
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

  // Build reviews if available
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
    name: `Спектакль «${show.title}»`,
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
      name: show.stage || 'Narri näyttämö',
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
      url: SITE_URL
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
export function getEventsListSchema(shows: Show[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Афиша спектаклей Logrus Teatteri',
    itemListElement: shows.map((show, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: getTheaterEventSchema(show)
    }))
  };
}

/**
 * CollectionPage Schema for Archive
 */
export function getArchiveSchema(shows: Show[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Архив спектаклей Logrus Teatteri',
    url: `${SITE_URL}/shows/archive`,
    description: 'Архив прошлых театральных постановок и фотохроника спектаклей театра Logrus в Хельсинки.',
    mainEntity: {
      '@type': 'ItemList',
      name: 'Архивные постановки',
      itemListElement: shows.map((show, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: show.title,
        url: `${SITE_URL}/shows/${show.id}`
      }))
    }
  };
}

/**
 * BreadcrumbList Schema
 */
export function getBreadcrumbsSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`
    }))
  };
}
