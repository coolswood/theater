export type Language = 'ru' | 'fi' | 'en';

export interface TranslationSchema {
  nav: {
    afisha: string;
    courses: string;
    about: string;
    contacts: string;
    buyTicket: string;
  };
  hero: {
    countryTag: string;
    stageTag: string;
    title: string;
    description: string;
    locationLabel: string;
    locationName: string;
    locationDesc: string;
    langLabel: string;
    langValue: string;
  };
  afisha: {
    tag: string;
    title: string;
    subtitlesNote: string;
    premiereTag: string;
    durationLabel: string;
    subtitlesLabel: string;
    ageLabel: string;
    ticketsLabel: string;
    bookTicketBtn: string;
    aboutShowBtn: string;
    secondaryPriceLabel: string;
    secondaryBuyBtn: string;
    shows: Record<string, {
      title: string;
      subtitle: string;
      date: string;
      stage: string;
      price: string;
      duration: string;
      subtitles: string;
      age: string;
      capacity: string;
      quote?: string;
      description: string;
    }>;
  };
  courses: {
    tag: string;
    title: string;
    subtitle: string;
    swipeNote: string;
    enrollBtn: string;
    detailsBtn: string;
    slides: Array<{
      id: string;
      title: string;
      subtitle: string;
      location: string;
      tag: string;
      quote?: string;
    }>;
    centralCourse: {
      title: string;
      studioName: string;
      badge: string;
      headline: string;
      subtitle: string;
      description: string;
      targetAudience: string;
      trialInfo: string;
      phone: string;
      email: string;
      location: string;
      schedule: string;
      closingQuote: string;
      pillars: Array<{
        num: string;
        title: string;
        desc: string;
      }>;
    };
  };
  about: {
    tag: string;
    title: string;
    italicQuote: string;
    text: string;
    mobileFeaturesTitle: string;
    swipeLabel: string;
    feature1Tag: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Tag: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Tag: string;
    feature3Title: string;
    feature3Desc: string;
  };
  contacts: {
    heading: string;
    cardTitle: string;
    addressTag: string;
    contactTag: string;
    boxOfficeTag: string;
    boxOfficeHours: string;
    socialsTag: string;
    mapTag: string;
    mapTitle: string;
    btnStage: string;
    btnKamppi: string;
    btnStation: string;
    locationText: string;
    hslRoute: string;
  };
  footer: {
    copyright: string;
    toTop: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  ru: {
    nav: {
      afisha: 'Афиша',
      courses: 'Курсы',
      about: 'О театре',
      contacts: 'Контакты',
      buyTicket: 'Купить билет'
    },
    hero: {
      countryTag: 'Финляндия · Хельсинки',
      stageTag: 'Русскоязычная камерная сцена',
      title: 'Русская драма<br />в северной <span class="font-dramatic italic font-normal text-suomi">тишине</span><span class="text-redru">.</span>',
      description: '<span class="font-dramatic italic text-suomi text-2xl sm:text-3xl font-semibold">Logrus Teatteri</span> — прохладная скандинавская эстетика пространства в центре Хельсинки и глубокое уважение к русской драматической традиции.',
      locationLabel: '— Наша локация —',
      locationName: 'Helsinki · Kamppi',
      locationDesc: 'Камерный зал на 90 мест в районе Камппи',
      langLabel: 'Язык спектаклей',
      langValue: 'Русский (с финскими субтитрами)'
    },
    afisha: {
      tag: 'Ожидаемые показы // Октябрь 2026',
      title: 'Репертуар<span class="font-dramatic italic font-normal text-suomi">.</span>',
      subtitlesNote: 'Субтитры на финском языке (suomenkieliset тексты)',
      premiereTag: 'Премьера в Хельсинки',
      durationLabel: 'Время',
      subtitlesLabel: 'Субтитры',
      ageLabel: 'Возраст',
      ticketsLabel: 'Билеты',
      bookTicketBtn: 'Забронировать билет',
      aboutShowBtn: 'О спектакле',
      secondaryPriceLabel: 'Цена',
      secondaryBuyBtn: 'Билеты',
      shows: {
        'cherry-orchard': {
          title: 'Вишнёвый сад',
          subtitle: 'А. П. Чехов · Постановка Анны Веденеевой',
          date: '12 Октября / 12.10',
          stage: 'Kamppi Main Stage',
          price: 'от 25 €',
          duration: '2ч 40мин',
          subtitles: 'Suomi (FI)',
          age: '14+',
          capacity: '90 мест',
          quote: '«О моё детство, чистота моя! В этой спальне я спала, отсюда смотрела на сад, счастье просыпалось вместе со мною каждое утро...»',
          description: 'Чеховская классика в скандинавской трактовке — строгая, прозрачная, с тихими паузами и глубокой акцентировкой на человеческом одиночестве. Спектакль идет на русском языке с финскими синхронными субтитрами.'
        },
        'maya-sea': {
          title: 'Майя и море',
          subtitle: 'Современная монодрама с живой виолончелью',
          date: '18 Октября / 18.10',
          stage: 'Камерная сцена',
          price: 'от 20 €',
          duration: '1ч 50мин',
          subtitles: 'Suomi (FI)',
          age: '16+',
          capacity: '60 мест',
          description: 'История адаптации и памяти, сыгранная на русском языке. Уникальный моноспектакль в камерной атмосфере на 60 мест.'
        }
      }
    },
    courses: {
      tag: 'Сценическая лаборатория // Набор 2026',
      title: 'Актерские курсы<span class="font-dramatic italic font-normal text-suomi">.</span>',
      subtitle: 'Раскройте свой сценический потенциал, голос и харизму под руководством профессиональных режиссеров в центре Хельсинки.',
      swipeNote: 'Свайп слайдов →',
      enrollBtn: 'Записаться на курс',
      detailsBtn: 'Подробнее о программе',
      slides: [
        {
          id: 'slide-1',
          title: 'Природный талант и эмоциональная свобода',
          subtitle: 'Раскрепощение, снятие телесных и психологических блоков',
          location: 'Камерный зал · Kamppi',
          tag: '01 // ЭМОЦИИ И СВОБОДА',
          quote: '«Представьте: вы выходите на сцену или в кадр, и все взгляды прикованы к вам...»'
        },
        {
          id: 'slide-2',
          title: 'Постановка голоса, речи и пластики',
          subtitle: 'Полетное звучание, идеальная дикция и выразительное тело',
          location: 'Репетиционный зал Logrus',
          tag: '02 // ГОЛОС И ПЛАСТИКА',
          quote: '«Голос звучит уверенно, а страх публичных выступлений исчезает навсегда»'
        },
        {
          id: 'slide-3',
          title: 'Уверенность, харизма и внимание',
          subtitle: 'Умение держать аудиторию и быть убедительным в жизни',
          location: 'Сценическое пространство',
          tag: '03 // ХАРИЗМА И ВНИМАНИЕ',
          quote: '«Курс подходит и тем, кто мечтает о сцене, и тем, кто хочет стать ярче в жизни»'
        },
        {
          id: 'slide-4',
          title: 'Первые роли и работа с режиссером',
          subtitle: 'Проработка драматургии, партнерство и репетиции этюдов',
          location: 'Гримерная & Сцена',
          tag: '04 // ЭТЮДЫ И РОЛИ',
          quote: '«Сыграйте свои первые настоящие роли под руководством опытного режиссера»'
        },
        {
          id: 'slide-5',
          title: 'Выпускной показ перед зрителями',
          subtitle: 'Полноценный театральный выход на профессиональной сцене Хельсинки',
          location: 'Главная сцена Logrus',
          tag: '05 // ВЫХОД НА СЦЕНУ',
          quote: '«Хватит играть чужие роли в жизни. Пора сыграть свою — ярко и по-настоящему!»'
        }
      ],
      centralCourse: {
        title: 'Курс актерского мастерства',
        studioName: '«Лампарельс»',
        badge: 'Набор в группу открыт // Сезон 2026',
        headline: 'Хватит играть чужие роли в жизни. Пора сыграть свою — ярко и по-настоящему!',
        subtitle: 'Актерская студия Logrus Teatteri в Хельсинки',
        description: 'Представьте: вы выходите на сцену или в кадр, и все взгляды прикованы к вам. Голос звучит уверенно, эмоции бьют через край, а страх сцены исчезает навсегда.',
        targetAudience: 'Курс одинаково идеально подходит и тем, кто мечтает о сцене или профессиональных съёмках, и тем, кто просто хочет стать ярче, убедительнее и увереннее в повседневной жизни.',
        trialInfo: 'Первое пробное занятие — БЕСПЛАТНО',
        phone: '+358 45 2656332',
        email: 'info@logrus.fi',
        location: 'Helsinki · Kamppi (Urho Kekkosen katu 8)',
        schedule: 'Очные занятия по вечерам · Набор до 15 человек',
        closingQuote: 'Твоя лучшая роль ещё впереди ✨',
        pillars: [
          {
            num: '01',
            title: 'Природный талант & Свобода',
            desc: 'Раскроете свой внутренний потенциал, научитесь сбрасывать физические зажимы и свободно выражать настоящие живые эмоции.'
          },
          {
            num: '02',
            title: 'Уверенность & Харизма',
            desc: 'Развитие сценического обаяния, преодоление страха публичности и умение удерживать внимание любого зрительного зала или собеседника.'
          },
          {
            num: '03',
            title: 'Голос, Речь & Ткань пластики',
            desc: 'Профессиональная постановка диафрагмального дыхания, глубокого грудного тембра, четкой дикции и выразительного языка тела.'
          },
          {
            num: '04',
            title: 'Первые роли & Актерские этюды',
            desc: 'Погружение в разбор текстов, создание глубоких сценических образов и работа над первыми настоящими ролями под руководством режиссера.'
          }
        ]
      }
    },
    about: {
      tag: 'Наша миссия',
      title: 'Два мира.<br />Одна драма.<br /><span class="font-dramatic italic font-normal text-suomi">Общий диалог.</span>',
      italicQuote: 'Мы объединяем финскую эстетику пространства с глубинным русским психологическим театром.',
      text: 'Театр «Logrus» — это живое пространство для русскоязычной диаспоры Финляндии и всех, кто ценит европейский подход к классическому и современному драматическому искусству.',
      mobileFeaturesTitle: 'Особенности театра',
      swipeLabel: 'Свайп →',
      feature1Tag: '01 // ЯЗЫК',
      feature1Title: 'Русская речь',
      feature1Desc: 'Сохранение лучшей школы произношения и актерского мастерства.',
      feature2Tag: '02 // ДОСТУПНОСТЬ',
      feature2Title: 'Финские субтитры',
      feature2Desc: 'Синхронный перевод на финский язык для местных зрителей и гостей.',
      feature3Tag: '03 // ФОРМАТ',
      feature3Title: 'Скандинавский зал',
      feature3Desc: 'Лаконичное пространство в центре Хельсинки без помпезности.'
    },
    contacts: {
      heading: 'Tervetuloa <span class="font-dramatic italic font-normal text-suomi">· Добро пожаловать.</span>',
      cardTitle: 'Контакты и Касса',
      addressTag: 'Особые данные / Адрес',
      contactTag: 'Связь',
      boxOfficeTag: 'Время работы кассы',
      boxOfficeHours: 'Ср – Вс: 14:00 – 19:00 (в дни показов — до 20:30)',
      socialsTag: 'Социальные сети',
      mapTag: 'Интерактивная карта',
      mapTitle: 'Как нас найти',
      btnStage: '🎭 Сцена',
      btnKamppi: '🚇 Kamppi',
      btnStation: '🚉 Вокзал',
      locationText: 'Urho Kekkosen katu 8, Helsinki · <strong class="text-suomi font-semibold">2 мин от метро Kamppi</strong>',
      hslRoute: '<ctrl42> HSL Маршрут'
    },
    footer: {
      copyright: '© 2026 · Logrus Teatteri Helsinki · Финско-русская сцена',
      toTop: '↑ Наверх'
    }
  },
  fi: {
    nav: {
      afisha: 'Ohjelmisto',
      courses: 'Kurssit',
      about: 'Teatterista',
      contacts: 'Yhteystiedot',
      buyTicket: 'Osta lippu'
    },
    hero: {
      countryTag: 'Suomi · Helsinki',
      stageTag: 'Venäjänkielinen kämmernäyttämö',
      title: 'Venäläinen draama<br />pohjoisessa <span class="font-dramatic italic font-normal text-suomi">hiljaisuudessa</span><span class="text-redru">.</span>',
      description: '<span class="font-dramatic italic text-suomi text-2xl sm:text-3xl font-semibold">Logrus Teatteri</span> — viileä skandinaavinen tilan estetiikka Helsingin keskustassa ja syvä kunnioitus venäläistä draamaperinnettä kohtaan.',
      locationLabel: '— Sijaintimme —',
      locationName: 'Helsinki · Kamppi',
      locationDesc: '90-paikkainen kammersali Kampin alueella',
      langLabel: 'Esityskieli',
      langValue: 'Venäjä (suomenkieliset tekstit)'
    },
    afisha: {
      tag: 'Tulevat esitykset // Lokakuu 2026',
      title: 'Ohjelmisto<span class="font-dramatic italic font-normal text-suomi">.</span>',
      subtitlesNote: 'Suomenkieliset tekstit (tekstitys suomeksi)',
      premiereTag: 'Ensi-ilta Helsingissä',
      durationLabel: 'Kesto',
      subtitlesLabel: 'Tekstitys',
      ageLabel: 'Ikäraja',
      ticketsLabel: 'Liput',
      bookTicketBtn: 'Varaa lippu',
      aboutShowBtn: 'Esityksestä',
      secondaryPriceLabel: 'Hinta',
      secondaryBuyBtn: 'Liput',
      shows: {
        'cherry-orchard': {
          title: 'Kirsikkapuutarha',
          subtitle: 'A. Tšehov · Ohjaus Anna Vedenejeva',
          date: '12. Lokakuuta / 12.10',
          stage: 'Kamppi Main Stage',
          price: 'alk. 25 €',
          duration: '2t 40min',
          subtitles: 'Suomi (FI)',
          age: '14+',
          capacity: '90 paikkaa',
          quote: '«Voi minun lapsuuteni, minun puhtauteni! Tässä huoneessa nukuin, täältä katselin puutarhaan, onni heräsi kanssani joka aamu...»',
          description: 'Tšehovin klassikko skandinaavisena tulkintana — kirkas, kuulas ja ihmisen yksinäisyyttä syvästi luotaava. Esitys on venäjäksi suomenkielisellä tekstityksellä.'
        },
        'maya-sea': {
          title: 'Maija ja meri',
          subtitle: 'Nykyaikainen monodraama elävän sellomusiikin kera',
          date: '18. Lokakuuta / 18.10',
          stage: 'Kammersali',
          price: 'alk. 20 €',
          duration: '1t 50min',
          subtitles: 'Suomi (FI)',
          age: '16+',
          capacity: '60 paikkaa',
          description: 'Sopeutumisen ja muiston tarina venäjän kielellä. Ainutlaatuinen monosoolo 60 paikan intimiympäristössä.'
        }
      }
    },
    courses: {
      tag: 'Näyttämölaboratorio // Haku 2026',
      title: 'Näyttelijänkurssit<span class="font-dramatic italic font-normal text-suomi">.</span>',
      subtitle: 'Vapauta näyttämöpotentiaalisi, äänesi ja karismasi ammattiohjaajien opastuksella Helsingin keskustassa.',
      swipeNote: 'Pyyhkäise kuvaa →',
      enrollBtn: 'Ilmoittaudu kurssille',
      detailsBtn: 'Lue lisää ohjelmasta',
      slides: [
        {
          id: 'slide-1',
          title: 'Luontainen lahjakkuus ja emotionaalinen vapaus',
          subtitle: 'Kehollisten ja henkisten lukkojen purkaminen',
          location: 'Kammersali · Kamppi',
          tag: '01 // TUNTEET JA VAPAUS',
          quote: '«Kuvittele: astut näyttämölle tai kameran eteen, ja kaikkien katseet kiinnittyvät sinuun...»'
        },
        {
          id: 'slide-2',
          title: 'Äänenkäyttö, puhetekniikka ja kehonkieli',
          subtitle: 'Kantava ääni, selkeä artikulaatio ja ilmaisuvoimainen keho',
          location: 'Logrus harjoitussali',
          tag: '02 // ÄÄNI JA KEHO',
          quote: '«Ääni kuulostaa varmalta ja esiintymispelko katoaa lopullisesti»'
        },
        {
          id: 'slide-3',
          title: 'Itsevarmuus, karisma ja läsnäolo',
          subtitle: 'Yleisön hallinta ja vakuuttavuus elämän eri tilanteissa',
          location: 'Näyttämötila',
          tag: '03 // KARISMA JA LÄSNÄOLO',
          quote: '«Kurssi sopii sekä näyttämöstä haaveileville että arjen ilmaisua vahvistaville»'
        },
        {
          id: 'slide-4',
          title: 'Ensimmäiset roolit ja ohjaajatyöskentely',
          subtitle: 'Dramaturgian analyysi, parikumippanuus ja kohtausharjoitukset',
          location: 'Pukuhuone & Näyttämö',
          tag: '04 // KOHTAUKSET JA ROOLIT',
          quote: '«Näyttele ensimmäiset aidot roolisi kokeneen ohjaajan johdolla»'
        },
        {
          id: 'slide-5',
          title: 'Loppuesitys yleisölle',
          subtitle: 'Täysipainoinen teatteriesiintyminen Helsingin ammattinäyttämöllä',
          location: 'Logrus päänäyttämö',
          tag: '05 // NÄYTTÄMÖLLE ASTUMINEN',
          quote: '«Lopeta muiden roolien esittäminen. On aika näytellä oma roolisi — kirkkaasti!»'
        }
      ],
      centralCourse: {
        title: 'Näyttelijäntyön kurssi',
        studioName: '«Lamparels»',
        badge: 'Ryhmähaku auki // Kausi 2026',
        headline: 'Lopeta muiden roolien esittäminen elämässä. On aika näytellä oma roolisi — kirkkaasti ja aidosti!',
        subtitle: 'Logrus Teatterin näyttelijästudio Helsingissä',
        description: 'Kuvittele: astut näyttämölle tai kameran eteen, ja kaikkien katseet kiinnittyvät sinuun. Ääni kantaa varmasti, tunteet välittyvät ja esiintymispelko katoaa.',
        targetAudience: 'Kurssi sopii yhtä hyvin näyttämöstä ja kuvauksista haaveileville kuin heille, jotka haluavat lisätä vakuuttavuutta ja varmuutta jokapäiväiseen elämään.',
        trialInfo: 'Ensimmäinen kokeilukerta — ILMAINEN',
        phone: '+358 45 2656332',
        email: 'info@logrus.fi',
        location: 'Helsinki · Kamppi (Urho Kekkosen katu 8)',
        schedule: 'Lähitunnit iltaisin · Enintään 15 henkilön ryhmä',
        closingQuote: 'Paras roolisi on vasta edessä ✨',
        pillars: [
          {
            num: '01',
            title: 'Luontainen lahjakkuus & Vapaus',
            desc: 'Löydät sisäisen potensiaalisi, opit vapautumaan kehon jännityksistä ja ilmaisemaan aitoja tunteita.'
          },
          {
            num: '02',
            title: 'Itsevarmuus & Karisma',
            desc: 'Näyttämösäteilyn kehittäminen, esiintymispelon voittaminen ja yleisön huomion vangitseminen.'
          },
          {
            num: '03',
            title: 'Ääni, Puhe & Keho',
            desc: 'Palleaelhengityksen, syvän äänensävyn, selkeän artikulaation ja kehonkielen ammattimainen harjoittelu.'
          },
          {
            num: '04',
            title: 'Ensimmäiset roolit & Harjoitteet',
            desc: 'Syventyminen tekstianalyysiin, roolihenkilön rakentamiseen ja kohtauksien työstämiseen ohjaajan kanssa.'
          }
        ]
      }
    },
    about: {
      tag: 'Tehtävämme',
      title: 'Kaksi maailmaa.<br />Yksi draama.<br /><span class="font-dramatic italic font-normal text-suomi">Yhteinen vuoropuhelu.</span>',
      italicQuote: 'Yhdistämme suomalaisen tilan estetiikan ja syvällisen venäläisen psykologisen teatterin.',
      text: 'Logrus-teatteri on elävä tila Suomen venäjänkieliselle yhteisölle ja kaikille, jotka arvostavat eurooppalaista lähestymistapaa teatteritaiteeseen.',
      mobileFeaturesTitle: 'Teatterin ominaisuudet',
      swipeLabel: 'Pyyhkäise →',
      feature1Tag: '01 // KIELI',
      feature1Title: 'Venäjän kieli',
      feature1Desc: 'Parhaan lausunta- ja näyttelijäkoulun vaaliminen.',
      feature2Tag: '02 // SAAVUTETTAVUUS',
      feature2Title: 'Suomenkieliset tekstit',
      feature2Desc: 'Samanaikainen käännös suomeksi paikallisille katsojille ja vieraille.',
      feature3Tag: '03 // FORMAATTI',
      feature3Title: 'Skandinaavinen sali',
      feature3Desc: 'Pelkistetty, tyylikäs tila Helsingin keskustassa ilman mahtipontisuutta.'
    },
    contacts: {
      heading: 'Tervetuloa <span class="font-dramatic italic font-normal text-suomi">· Tervetuloa.</span>',
      cardTitle: 'Yhteystiedot ja Lipunmyynti',
      addressTag: 'Osoite',
      contactTag: 'Yhteydenotot',
      boxOfficeTag: 'Lipunmyynnin aukioloajat',
      boxOfficeHours: 'Ke – Su: 14:00 – 19:00 (esityspäivinä klo 20:30 asti)',
      socialsTag: 'Sosiaalinen media',
      mapTag: 'Interaktiivinen kartta',
      mapTitle: 'Kuinka löydät meidät',
      btnStage: '🎭 Näyttämö',
      btnKamppi: '🚇 Kamppi',
      btnStation: '<ctrl42> Asema',
      locationText: 'Urho Kekkosen katu 8, Helsinki · <strong class="text-suomi font-semibold">2 min Kamppi metrosta</strong>',
      hslRoute: '🚆 HSL-reitti'
    },
    footer: {
      copyright: '© 2026 · Logrus Teatteri Helsinki · Suomalais-venäläinen näyttämö',
      toTop: '↑ Takaisin ylös'
    }
  },
  en: {
    nav: {
      afisha: 'Repertoire',
      courses: 'Courses',
      about: 'About',
      contacts: 'Contacts',
      buyTicket: 'Buy Ticket'
    },
    hero: {
      countryTag: 'Finland · Helsinki',
      stageTag: 'Russian-language chamber stage',
      title: 'Russian drama<br />in northern <span class="font-dramatic italic font-normal text-suomi">silence</span><span class="text-redru">.</span>',
      description: '<span class="font-dramatic italic text-suomi text-2xl sm:text-3xl font-semibold">Logrus Teatteri</span> — cool Nordic spatial aesthetics in central Helsinki and deep respect for the Russian dramatic tradition.',
      locationLabel: '— Our Location —',
      locationName: 'Helsinki · Kamppi',
      locationDesc: '90-seat chamber hall in Kamppi district',
      langLabel: 'Show language',
      langValue: 'Russian (with Finnish subtitles)'
    },
    afisha: {
      tag: 'Upcoming Shows // October 2026',
      title: 'Repertoire<span class="font-dramatic italic font-normal text-suomi">.</span>',
      subtitlesNote: 'Finnish subtitles available (suomenkieliset text)',
      premiereTag: 'Helsinki Premiere',
      durationLabel: 'Duration',
      subtitlesLabel: 'Subtitles',
      ageLabel: 'Age',
      ticketsLabel: 'Tickets',
      bookTicketBtn: 'Book Ticket',
      aboutShowBtn: 'About Show',
      secondaryPriceLabel: 'Price',
      secondaryBuyBtn: 'Tickets',
      shows: {
        'cherry-orchard': {
          title: 'The Cherry Orchard',
          subtitle: 'Anton Chekhov · Directed by Anna Vedeneeva',
          date: '12 October / 12.10',
          stage: 'Kamppi Main Stage',
          price: 'from 25 €',
          duration: '2h 40min',
          subtitles: 'Suomi (FI)',
          age: '14+',
          capacity: '90 seats',
          quote: '«Oh, my childhood, my purity! In this room I slept, from here I looked out at the garden...»',
          description: "Chekhov's classic in a Nordic interpretation — clean, transparent, with quiet pauses and a deep focus on human solitude. Performed in Russian with synchronous Finnish subtitles."
        },
        'maya-sea': {
          title: 'Maya and the Sea',
          subtitle: 'Modern monodrama with live cello',
          date: '18 October / 18.10',
          stage: 'Chamber Stage',
          price: 'from 20 €',
          duration: '1h 50min',
          subtitles: 'Suomi (FI)',
          age: '16+',
          capacity: '60 seats',
          description: 'A story of adaptation and memory performed in Russian. A unique solo performance in an intimate 60-seat setting.'
        }
      }
    },
    courses: {
      tag: 'Stage Laboratory // 2026 Intake',
      title: 'Acting Courses<span class="font-dramatic italic font-normal text-suomi">.</span>',
      subtitle: 'Unlock your stage potential, voice, and charisma under professional directors in central Helsinki.',
      swipeNote: 'Swipe slides →',
      enrollBtn: 'Enroll in Course',
      detailsBtn: 'Program Details',
      slides: [
        {
          id: 'slide-1',
          title: 'Natural Talent & Emotional Freedom',
          subtitle: 'Release physical and psychological blocks',
          location: 'Chamber Hall · Kamppi',
          tag: '01 // EMOTION & FREEDOM',
          quote: '«Imagine stepping onto stage and having all eyes on you...»'
        },
        {
          id: 'slide-2',
          title: 'Voice Training, Speech & Body Language',
          subtitle: 'Resonant voice, clear diction, and expressive body',
          location: 'Logrus Rehearsal Hall',
          tag: '02 // VOICE & PLASTICS',
          quote: '«Your voice sounds confident, and fear of public speaking vanishes»'
        },
        {
          id: 'slide-3',
          title: 'Confidence, Charisma & Audience Focus',
          subtitle: 'Captivate audiences and speak persuasively in daily life',
          location: 'Stage Space',
          tag: '03 // CHARISMA & FOCUS',
          quote: '«Ideal for stage dreamers and anyone seeking confidence in daily life»'
        },
        {
          id: 'slide-4',
          title: 'First Roles & Director Collaboration',
          subtitle: 'Script analysis, partnership, and scene study',
          location: 'Dressing Room & Stage',
          tag: '04 // SCENES & ROLES',
          quote: '«Perform your first real roles under an experienced director»'
        },
        {
          id: 'slide-5',
          title: 'Graduation Showcase for Live Audience',
          subtitle: 'Full theatrical performance on a professional stage in Helsinki',
          location: 'Logrus Main Stage',
          tag: '05 // STAGE DEBUT',
          quote: '«Stop playing other people’s roles in life. It’s time to play your own!»'
        }
      ],
      centralCourse: {
        title: 'Acting Masterclass',
        studioName: '«Lamparels»',
        badge: 'Group Intake Open // Season 2026',
        headline: "Stop playing other people's roles in life. It's time to play your own — brightly and authentically!",
        subtitle: 'Logrus Teatteri Acting Studio in Helsinki',
        description: 'Imagine stepping onto stage or in front of a camera with all eyes on you. Your voice is confident, emotions are genuine, and stage fright disappears.',
        targetAudience: 'Equally perfect for aspiring stage and screen actors, and anyone wanting more presence and confidence in daily life.',
        trialInfo: 'First Trial Class — FREE',
        phone: '+358 45 2656332',
        email: 'info@logrus.fi',
        location: 'Helsinki · Kamppi (Urho Kekkosen katu 8)',
        schedule: 'In-person evening classes · Up to 15 students',
        closingQuote: 'Your best role is yet to come ✨',
        pillars: [
          {
            num: '01',
            title: 'Natural Talent & Freedom',
            desc: 'Unlock inner potential, release physical tension, and express genuine emotions freely.'
          },
          {
            num: '02',
            title: 'Confidence & Charisma',
            desc: 'Develop stage presence, overcome public speaking anxiety, and command any room.'
          },
          {
            num: '03',
            title: 'Voice, Speech & Body Mechanics',
            desc: 'Master diaphragmatic breathing, deep vocal timbre, clear diction, and body movement.'
          },
          {
            num: '04',
            title: 'First Roles & Scene Work',
            desc: 'Analyze texts, build complex characters, and rehearse your first real roles with a director.'
          }
        ]
      }
    },
    about: {
      tag: 'Our Mission',
      title: 'Two worlds.<br />One drama.<br /><span class="font-dramatic italic font-normal text-suomi">Shared dialogue.</span>',
      italicQuote: 'We combine Finnish spatial aesthetics with deep Russian psychological theater.',
      text: 'Logrus Theater is a vibrant space for the Russian-speaking community in Finland and all who appreciate a European approach to classical and modern drama.',
      mobileFeaturesTitle: 'Theater Highlights',
      swipeLabel: 'Swipe →',
      feature1Tag: '01 // LANGUAGE',
      feature1Title: 'Russian Language',
      feature1Desc: 'Preserving the finest tradition of pronunciation and acting.',
      feature2Tag: '02 // ACCESSIBILITY',
      feature2Title: 'Finnish Subtitles',
      feature2Desc: 'Synchronous Finnish subtitles for local audiences and guests.',
      feature3Tag: '03 // VENUE',
      feature3Title: 'Nordic Hall',
      feature3Desc: 'An elegant, streamlined venue in central Helsinki.'
    },
    contacts: {
      heading: 'Tervetuloa <span class="font-dramatic italic font-normal text-suomi">· Welcome.</span>',
      cardTitle: 'Contacts & Box Office',
      addressTag: 'Address',
      contactTag: 'Contact',
      boxOfficeTag: 'Box Office Hours',
      boxOfficeHours: 'Wed – Sun: 14:00 – 19:00 (show days until 20:30)',
      socialsTag: 'Social Media',
      mapTag: 'Interactive Map',
      mapTitle: 'How to Find Us',
      btnStage: '🎭 Stage',
      btnKamppi: '🚇 Kamppi',
      btnStation: '🚉 Station',
      locationText: 'Urho Kekkosen katu 8, Helsinki · <strong class="text-suomi font-semibold">2 min from Kamppi metro</strong>',
      hslRoute: '🚆 HSL Route'
    },
    footer: {
      copyright: '© 2026 · Logrus Teatteri Helsinki · Finnish-Russian Stage',
      toTop: '↑ Back to top'
    }
  }
};

export function getTranslations(lang: Language = 'ru'): TranslationSchema {
  return translations[lang] || translations.ru;
}
