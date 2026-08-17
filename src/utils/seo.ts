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
    alternateName: ['Teatteri Logrus', 'Театр Логрус', 'Logrus Theatre Helsinki'],
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    description:
      'Камерный русскоязычный театр и актерская студия в Хельсинки на сцене Narri näyttämö. Спектакли, афиша и курсы актерского мастерства.',
    telephone: '+358452656332',
    email: 'info@logrus.fi',
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
      }
    },
    areaServed: [
      { '@type': 'City', name: 'Helsinki' },
      { '@type': 'City', name: 'Espoo' },
      { '@type': 'City', name: 'Vantaa' },
      { '@type': 'AdministrativeArea', name: 'Pääkaupunkiseutu' }
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
    inLanguage: 'ru',
    hasCourseInstance: [
      {
        '@type': 'CourseInstance',
        courseMode: 'in-person',
        inLanguage: 'ru',
        location: {
          '@type': 'Place',
          name: 'Narri näyttämö',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Sörnäisten rantatie 31',
            addressLocality: 'Helsinki',
            postalCode: '00500',
            addressCountry: 'FI'
          }
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
  const posterUrl = show.poster.startsWith('http') ? show.poster : `${SITE_URL}${show.poster.startsWith('/') ? '' : '/'}${show.poster}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'TheaterEvent',
    '@id': `${showUrl}#event`,
    name: `Спектакль «${show.title}»`,
    description: show.description,
    image: posterUrl,
    url: showUrl,
    startDate: show.dateIso || '2026-08-13T19:00:00+03:00',
    endDate: show.expiresAt,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    inLanguage: 'ru',
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
    performer: {
      '@type': 'TheaterGroup',
      name: 'Logrus Teatteri',
      url: SITE_URL
    },
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
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        validFrom: '2026-01-01T00:00:00+03:00'
      }
    } : {})
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
