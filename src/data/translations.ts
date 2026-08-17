import { CURRENT_YEAR } from '../utils/date';

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
    afishaBtn?: string;
    aboutBtn?: string;
    nextShowLabel?: string;
    nextShowValue?: string;
    noUpcomingBadge?: string;
    noUpcomingShows?: string;
    castingTag?: string;
    castingTitle?: string;
    castingRole?: string;
    castingSubtitle?: string;
    castingDesc?: string;
    castingApplyBtn?: string;
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
    secondaryPriceLabel?: string;
    secondaryBuyBtn: string;
    noShowsTag?: string;
    noShowsTitle?: string;
    noShowsDesc?: string;
    noShowsCta?: string;
    rehearsal?: {
      liveBadge: string;
      title: string;
      subtitle: string;
      stageNotice: string;
      coursesBtn: string;
      openCurtain?: string;
      closeCurtain?: string;
      hintOpen?: string;
      hintClose?: string;
      lightsBtn?: string;
      backstageQuote?: string;
      backstageSub?: string;
    };
    pastShowsBanner?: {
      tag: string;
      title: string;
      desc: string;
      btn: string;
    };
    shows: Record<string, {
      title: string;
      subtitle: string;
      date: string;
      stage: string;
      price?: string;
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
      schedule?: string;
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
    socialsTag: string;
    mapTag: string;
    mapTitle: string;
    btnStage: string;
    btnSornainen: string;
    btnStation: string;
    locationText: string;
    hslRoute: string;
  };
  footer: {
    copyright: string;
    toTop: string;
  };
  showPage: {
    backToAfisha: string;
    galleryTag: string;
    galleryTitle: string;
    gallerySub: string;
    allPhotos: string;
    stagePhotos: string;
    backstagePhotos: string;
    rehearsalPhotos: string;
    zoomPhoto: string;
    closeLightbox: string;
    directorSectionTitle: string;
    castSectionTitle: string;
    factsSectionTitle: string;
    venueSectionTitle: string;
    mapHeading: string;
    bookSeatBtn: string;
    modalTitle: string;
    modalDesc: string;
    modalConfirmBtn: string;
    modalCloseBtn: string;
    aboutPlotTag: string;
    dramaturgyTitle: string;
    scandinavianAestheticText: string;
    factLangLabel: string;
    factLangValue: string;
    factFormatLabel: string;
    factFormatValue: string;
    factVenueLabel: string;
    galleryBtn: string;
    modalBookingTag: string;
    modalNameLabel: string;
    modalContactLabel: string;
    modalTicketsLabel: string;
    modalTicket1: string;
    modalTicket2: string;
    modalTicket3: string;
    modalTicket4: string;
    modalSuccessTitle: string;
    modalSuccessDesc: string;
    expiredBadge?: string;
    expiredTitle?: string;
    expiredDesc?: string;
    reviewsTag?: string;
    reviewsTitle?: string;
    reviewsSubtitle?: string;
    reviewsRatingLabel?: string;
    reviewsScore?: string;
    reviewsScoreOutOf?: string;
    reviewsRecommendation?: string;
    reviewsCountLabel?: string;
    reviewsAddBtn?: string;
    reviewsVerifiedBadge?: string;
    reviewsHelpfulBtn?: string;
    reviewsFilterAll?: string;
    reviewsFilterEmotions?: string;
    reviewsFilterActing?: string;
    reviewsFilterMusic?: string;
    reviewsFilterAtmosphere?: string;
    reviewsModalTitle?: string;
    reviewsModalSubtitle?: string;
    reviewsFormRatingLabel?: string;
    reviewsFormRating5?: string;
    reviewsFormRating4?: string;
    reviewsFormRating3?: string;
    reviewsFormRating2?: string;
    reviewsFormRating1?: string;
    reviewsFormNameLabel?: string;
    reviewsFormNamePlaceholder?: string;
    reviewsFormCityLabel?: string;
    reviewsFormCityPlaceholder?: string;
    reviewsFormTextLabel?: string;
    reviewsFormTextPlaceholder?: string;
    reviewsFormTagLabel?: string;
    reviewsFormTagPlaceholder?: string;
    reviewsFormSubmitBtn?: string;
    reviewsFormSuccessTitle?: string;
    reviewsFormSuccessDesc?: string;
    reviewsEmptyText?: string;
    reviewsExpandBtn?: string;
    reviewsCollapseBtn?: string;
  };
  archive?: {
    tag: string;
    title: string;
    subtitle: string;
    backToMain: string;
    aboutShow: string;
    archiveBadge: string;
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
      title: 'Русскоязычный театр<br class="hidden sm:inline" /> в&nbsp;северной <span class="text-suomi font-semibold">тишине</span><span class="text-redru">.</span>',
      description: '<span class="text-suomi font-semibold">Logrus Teatteri</span> — гармоничное слияние русской и финской театральных школ на сцене Хельсинки.',
      locationLabel: '— Наша локация —',
      locationName: 'Helsinki · Sörnäinen',
      locationDesc: 'Сцена Narri näyttämö (Sörnäisten rantatie 31)',
      langLabel: 'Язык спектаклей',
      langValue: 'Русский',
      afishaBtn: 'Смотреть афишу',
      aboutBtn: 'О театре',
      nextShowLabel: 'Ближайший показ',
      nextShowValue: '«Новеченто» · 13 Августа',
      noUpcomingBadge: 'Репертуар формируется',
      noUpcomingShows: 'Скоро новые анонсы',
      castingTag: 'Кастинг // Открытый набор',
      castingTitle: 'Ищем актёра',
      castingRole: 'На роль гопника',
      castingSubtitle: 'Если ты давно хотел попробовать себя на сцене — сейчас самое время.',
      castingDesc: 'Ищем молодого парня в новую постановку театра «Логрус». Опыт не обязателен, но приветствуется!',
      castingApplyBtn: 'Откликнуться на роль'
    },
    afisha: {
      tag: `Ожидаемые показы // Октябрь ${CURRENT_YEAR}`,
      title: 'Репертуар<span class="text-suomi font-bold">.</span>',
      subtitlesNote: 'Сцена Narri näyttämö в Хельсинки',
      premiereTag: 'Премьера в Хельсинки',
      durationLabel: 'Время',
      subtitlesLabel: 'Язык',
      ageLabel: 'Возраст',
      ticketsLabel: 'Билеты',
      bookTicketBtn: 'Забронировать билет',
      aboutShowBtn: 'О спектакле',
      secondaryPriceLabel: 'Цена',
      secondaryBuyBtn: 'Билеты',
      noShowsTag: `Сезон ${CURRENT_YEAR} // Скоро новые даты`,
      noShowsTitle: 'Скоро новые премьеры<span class="text-suomi font-bold">.</span>',
      noShowsDesc: 'В данный момент все запланированные показы завершены. Мы готовим новые постановки и откроем бронирование в ближайшее время — следите за анонсами!',
      noShowsCta: 'Узнать об актерских курсах',
      rehearsal: {
        liveBadge: 'За кулисами // Narri näyttämö',
        title: 'За занавесом рождается новый спектакль<span class="text-suomi font-extrabold">.</span>',
        subtitle: `Сцена закрыта на репетиции — мы готовим премьеры сезона ${CURRENT_YEAR} в Хельсинки`,
        stageNotice: 'Камерная сцена Narri · Репетиции',
        coursesBtn: 'Актерские курсы студии',
        openCurtain: 'Открыть занавес',
        closeCurtain: 'Закрыть занавес',
        hintOpen: 'Нажмите, чтобы открыть занавес',
        hintClose: 'Нажмите, чтобы закрыть занавес',
        lightsBtn: 'Свет софитов',
        backstageQuote: '«На сцене рождается магия новой постановки…»',
        backstageSub: `Teatteri Logrus · Репетиционный сезон ${CURRENT_YEAR}`
      },
      pastShowsBanner: {
        tag: `Архив постановок // ${CURRENT_YEAR}`,
        title: 'Прошлые спектакли театра',
        desc: 'Погрузитесь в историю постановок, фотохронику и архив спектаклей Teatteri Logrus в Хельсинки',
        btn: 'Смотреть архив спектаклей'
      },
      shows: {
        'novecento': {
          title: 'Новеченто',
          subtitle: 'Алессандро Барикко · Режиссер Аквиле Рузгите',
          date: '13 Августа',
          stage: 'Sörnäisten rantatie 31 · Narri näyttämö',
          price: 'от 20 €',
          duration: '2ч 15мин',
          subtitles: 'Русский',
          age: '12+',
          capacity: '80 мест',
          quote: '«Бесконечное пианино, как бескрайний океан, и человек, нашедший музыку, но не нашедший берег…»',
          description: 'Одинокий рояль. Бескрайний океан. Судьба человека, никогда не ступавшего на берег. История пианиста, родившегося и прожившего всю жизнь на борту океанского лайнера — музыканта, который видел мир сквозь звуки океана и мелодии, не покидая своего инструмента. Моноспектакль о свободе, страхе, музыке и бесконечности между морем и небом.'
        }
      }
    },
    courses: {
      tag: `Сценическая лаборатория // Набор ${CURRENT_YEAR}`,
      title: 'Актерские курсы<span class="text-suomi font-extrabold">.</span>',
      subtitle: 'Раскройте свой сценический потенциал, голос и харизму под руководством профессиональных режиссеров в центре Хельсинки.',
      swipeNote: 'Свайп слайдов →',
      enrollBtn: 'Записаться на курс',
      detailsBtn: 'Подробнее о программе',
      slides: [
        {
          id: 'slide-1',
          title: 'Эмоциональная свобода и раскованность',
          subtitle: 'Снятие телесных зажимов, принятие себя и импровизация',
          location: 'Сцена Narri näyttämö · Sörnäinen',
          tag: '01 // ЭМОЦИИ И СВОБОДА',
          quote: '«Здесь царит атмосфера доверия: вы учитесь наслаждаться процессом и перестаете бояться ошибок»'
        },
        {
          id: 'slide-2',
          title: 'Партнерство и отзеркаливание эмоций',
          subtitle: 'Этюды на сценическое внимание, контрасты состояний и эмпатию',
          location: 'Репетиционный зал Logrus',
          tag: '02 // ВНИМАНИЕ И ПАРТНЕРСТВО',
          quote: '«Учимся тонко чувствовать человека напротив, подстраиваться к настроению и понимать реакцию без слов»'
        },
        {
          id: 'slide-3',
          title: 'Уверенность, харизма и преодоление стресса',
          subtitle: 'Умение держать аудиторию и чувствовать себя свободно в жизни',
          location: 'Сценическое пространство',
          tag: '03 // ХАРИЗМА И УВЕРЕННОСТЬ',
          quote: '«В жизни мы часто под стрессом доказываем свою ценность, а на сцене — раскрываем свободу и харизму»'
        },
        {
          id: 'slide-4',
          title: 'Работа с режиссером и перевоплощение',
          subtitle: 'Проработка драматургии, разбор характеров и репетиции этюдов',
          location: 'Гримерная & Сцена',
          tag: '04 // ЭТЮДЫ И РОЛИ',
          quote: '«Каждый этюд раскрывает неожиданные стороны вашей личности и учит живому перевоплощению»'
        },
        {
          id: 'slide-5',
          title: 'Выпускной показ на сцене Хельсинки',
          subtitle: 'Полноценный театральный выход перед зрителями в центре столицы',
          location: 'Главная сцена Logrus',
          tag: '05 // ВЫХОД НА СЦЕНУ',
          quote: '«Жить так, как будто всё вокруг — сцена, а ты — актёр, который сам выбирает, каким будет следующий акт»'
        }
      ],
      centralCourse: {
        title: 'Курс актерского мастерства',
        studioName: '«Лампарельс»',
        badge: `Набор в группу открыт // Сезон ${CURRENT_YEAR}`,
        headline: 'Импровизация — это про сцену и про жизнь. Выбирайте, каким будет ваш следующий акт',
        subtitle: 'Актерская студия Logrus Teatteri в Хельсинки',
        description: 'Живое пространство для людей всех возрастов. Учимся работать с партнером, выходить из зоны комфорта и свободно владеть импровизацией.',
        targetAudience: 'Для тех, кто мечтает о сцене, и всех, кто хочет общаться раскрепощенно, без стресса и зажимов.',
        trialInfo: 'Первое пробное занятие — БЕСПЛАТНО',
        phone: '+358 45 2656332',
        email: 'info@logrus.fi',
        location: 'Pohjavedenkatu 5, 00980 Helsinki',
        schedule: 'Очные вечерние занятия · Группы до 15 человек',
        closingQuote: 'Каким будет твой следующий акт — выбираешь ты ✨',
        pillars: [
          {
            num: '01',
            title: 'Раскованность & Свобода',
            desc: 'Снятие телесных зажимов, страха сцены и абсолютное принятие себя.'
          },
          {
            num: '02',
            title: 'Партнерство & Эмпатия',
            desc: 'Подстройка, отзеркаливание эмоциональных состояний и тонкое чувствование человека.'
          },
          {
            num: '03',
            title: 'Импровизация & Гибкость',
            desc: 'Навык действовать без страха ошибиться и получать кайф от процесса.'
          },
          {
            num: '04',
            title: 'Роли & Выход на сцену',
            desc: 'Актерские этюды, живые персонажи и полноценный выпускной показ в центре Хельсинки.'
          }
        ]
      }
    },
    about: {
      tag: 'Наш театр',
      title: 'Два мира.<br />Одна драма.<br /><span class="text-suomi font-semibold">Общий диалог.</span>',
      italicQuote: 'Мы объединяем финскую эстетику пространства с глубинным русскоязычным психологическим театром.',
      text: 'Театр «Logrus» — это живое пространство для русскоязычной диаспоры Финляндии и всех, кто ценит европейский подход к классическому и современному драматическому искусству.',
      mobileFeaturesTitle: 'Особенности театра',
      swipeLabel: 'Свайп →',
      feature1Tag: '01 // ЯЗЫК',
      feature1Title: 'Русскоязычная речь',
      feature1Desc: 'Сохранение лучшей школы произношения и актерского мастерства.',
      feature2Tag: '02 // АТМОСФЕРА',
      feature2Title: 'Камерный формат',
      feature2Desc: 'Всего 90 мест в зале для глубокого погружения и искренней эмоции.',
      feature3Tag: '03 // ФОРМАТ',
      feature3Title: 'Классический стиль',
      feature3Desc: 'Традиции психологического театра и сильная драматургия.'
    },
    contacts: {
      heading: 'Tervetuloa <span class="text-suomi font-semibold">· Добро пожаловать.</span>',
      cardTitle: 'Контакты',
      addressTag: 'Особые данные / Адрес',
      contactTag: 'Связь',
      socialsTag: 'Социальные сети',
      mapTag: 'Интерактивная карта',
      mapTitle: 'Как нас найти',
      btnStage: '🎭 Сцена',
      btnSornainen: '🚇 Sörnäinen',
      btnStation: '🚉 Вокзал',
      locationText: 'Sörnäisten rantatie 31, Narri näyttämö, Helsinki · <strong class="text-suomi font-semibold">5 мин от метро Sörnäinen</strong>',
      hslRoute: '🚆 HSL Маршрут'
    },
    footer: {
      copyright: `© ${CURRENT_YEAR} · Logrus Teatteri Helsinki · Финско-русскоязычная сцена`,
      toTop: '↑ Наверх'
    },
    showPage: {
      backToAfisha: 'Все спектакли',
      galleryTag: 'Фотохроника постановки',
      galleryTitle: 'Снимки со спектакля<span class="text-suomi font-extrabold">.</span>',
      gallerySub: 'Моменты живого действия, атмосфера репетиций и закулисная магия камерной сцены.',
      allPhotos: 'Все снимки',
      stagePhotos: 'На сцене',
      backstagePhotos: 'За кулисами',
      rehearsalPhotos: 'Репетиции',
      zoomPhoto: 'Увеличить',
      closeLightbox: 'Закрыть Esc',
      directorSectionTitle: 'Замысел постановки',
      castSectionTitle: 'В ролях и команда',
      factsSectionTitle: 'Детали показа',
      venueSectionTitle: 'Место проведения',
      mapHeading: 'Локация спектакля на карте Хельсинки',
      bookSeatBtn: 'Забронировать билет',
      modalTitle: 'Быстрое бронирование билета',
      modalDesc: 'Выберите удобное время или свяжитесь с кассой театра для выбора конкретных мест в зале.',
      modalConfirmBtn: 'Перейти к выбору мест',
      modalCloseBtn: 'Закрыть',
      aboutPlotTag: 'О сюжете и замысле',
      dramaturgyTitle: 'Драматургия и концепция',
      scandinavianAestheticText: 'Постановка выполнена в характерной скандинавской эстетике — с выверенным световым решением, чистым акустическим пространством и бережным отношением к психологическому театру.',
      factLangLabel: 'Язык постановки:',
      factLangValue: 'Русский',
      factFormatLabel: 'Формат:',
      factFormatValue: 'Камерный театр',
      factVenueLabel: 'Площадка:',
      galleryBtn: 'Галерея снимков',
      modalBookingTag: 'Бронирование',
      modalNameLabel: 'Ваше имя',
      modalContactLabel: 'Телефон или Email',
      modalTicketsLabel: 'Количество билетов',
      modalTicket1: '1 билет',
      modalTicket2: '2 билета',
      modalTicket3: '3 билета',
      modalTicket4: '4 билета',
      modalSuccessTitle: 'Заявка принята!',
      modalSuccessDesc: 'Администратор кассы свяжется с вами в течение 15 минут для подтверждения мест.',
      expiredBadge: 'Архивная постановка',
      expiredTitle: 'Этот спектакль уже состоялся',
      expiredDesc: 'Архивная постановка. Следите за обновлениями афиши, чтобы не пропустить следующие даты.',
      reviewsTag: 'Отзывы и впечатления',
      reviewsTitle: 'Впечатления зрителей<span class="text-suomi font-extrabold">.</span>',
      reviewsSubtitle: 'Искренние слова, эмоции и отзывы тех, кто разделил с нами магию камерного спектакля в Хельсинки.',
      reviewsRatingLabel: 'Рейтинг спектакля',
      reviewsScore: '4.9',
      reviewsScoreOutOf: '/ 5.0',
      reviewsRecommendation: '99% зрителей рекомендуют',
      reviewsCountLabel: 'На основе отзывов зрителей',
      reviewsAddBtn: 'Оставить отзыв',
      reviewsVerifiedBadge: 'Проверенный билет',
      reviewsHelpfulBtn: 'Полезно',
      reviewsFilterAll: 'Все отзывы',
      reviewsFilterEmotions: 'Эмоции',
      reviewsFilterActing: 'Игра актеров',
      reviewsFilterMusic: 'Музыка и звук',
      reviewsFilterAtmosphere: 'Атмосфера',
      reviewsModalTitle: 'Поделитесь впечатлениями',
      reviewsModalSubtitle: 'Ваш отзыв поможет другим зрителям открыть для себя этот спектакль.',
      reviewsFormRatingLabel: 'Ваша оценка',
      reviewsFormRating5: 'Восторг!',
      reviewsFormRating4: 'Очень хорошо',
      reviewsFormRating3: 'Хорошо',
      reviewsFormRating2: 'Нормально',
      reviewsFormRating1: 'Не понравилось',
      reviewsFormNameLabel: 'Ваше имя',
      reviewsFormNamePlaceholder: 'Например, Анна',
      reviewsFormCityLabel: 'Город / Статус',
      reviewsFormCityPlaceholder: 'Например, Хельсинки · Зритель премьеры',
      reviewsFormTextLabel: 'Ваш отзыв',
      reviewsFormTextPlaceholder: 'Расскажите, что вас особенно тронуло, какая сцена или музыка запомнились больше всего...',
      reviewsFormTagLabel: 'Главная мысль (тег)',
      reviewsFormTagPlaceholder: 'Например, «До мурашек»',
      reviewsFormSubmitBtn: 'Опубликовать отзыв',
      reviewsFormSuccessTitle: 'Спасибо за ваш отзыв!',
      reviewsFormSuccessDesc: 'Ваш отзыв успешно сохранен и добавлен на страницу спектакля.',
      reviewsEmptyText: 'В этой категории пока нет отзывов. Будьте первыми!',
      reviewsExpandBtn: 'Читать полностью',
      reviewsCollapseBtn: 'Свернуть'
    },
    archive: {
      tag: 'История постановок // Logrus Teatteri',
      title: 'Прошлые спектакли<span class="text-suomi font-extrabold">.</span>',
      subtitle: 'Архив театральных постановок, премьер и фотохроника спектаклей нашего театра в Хельсинки',
      backToMain: 'На главную',
      aboutShow: 'О спектакле',
      archiveBadge: 'Архивная постановка'
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
      title: 'Venäläinen draama<br class="hidden sm:inline" /> pohjoisessa <span class="text-suomi font-semibold">hiljaisuudessa</span><span class="text-redru">.</span>',
      description: '<span class="text-suomi font-semibold">Logrus Teatteri</span> — viileä skandinaavinen tilan estetiikka Helsingin keskustassa ja syvä kunnioitus venäläistä draamaperinnettä kohtaan.',
      locationLabel: '— Sijaintimme —',
      locationName: 'Helsinki · Sörnäinen',
      locationDesc: 'Narri näyttämö -näyttämö (Sörnäisten rantatie 31)',
      langLabel: 'Esityskieli',
      langValue: 'Venäjä',
      afishaBtn: 'Katso ohjelmisto',
      aboutBtn: 'Teatterista',
      nextShowLabel: 'Seuraava esitys',
      nextShowValue: '«Novecento» · 13. Elokuuta',
      noUpcomingBadge: 'Ohjelmistoa valmistellaan',
      noUpcomingShows: 'Uusia esityksiä tulossa pian',
      castingTag: 'Roolitus // Avoin haku',
      castingTitle: 'Haemme näyttelijää',
      castingRole: 'Katusällin rooliin',
      castingSubtitle: 'Jos olet aina halunnut kokeilla siipiäsi näyttämöllä — nyt on oikea hetki.',
      castingDesc: 'Etsimme nuorta miestä Logrus Teatterin uuteen tuotantoon. Kokemusta ei vaadita, mutta se katsotaan eduksi!',
      castingApplyBtn: 'Hae rooliin'
    },
    afisha: {
      tag: `Tulevat esitykset // Lokakuu ${CURRENT_YEAR}`,
      title: 'Ohjelmisto<span class="text-suomi font-bold">.</span>',
      subtitlesNote: 'Narri näyttämö -näyttämö Helsingissä',
      premiereTag: 'Ensi-ilta Helsingissä',
      durationLabel: 'Kesto',
      subtitlesLabel: 'Kieli',
      ageLabel: 'Ikäraja',
      ticketsLabel: 'Liput',
      bookTicketBtn: 'Varaa lippu',
      aboutShowBtn: 'Esityksestä',
      secondaryPriceLabel: 'Hinta',
      secondaryBuyBtn: 'Liput',
      noShowsTag: `Kausi ${CURRENT_YEAR} // Uusia päiviä tulossa`,
      noShowsTitle: 'Uusia ensi-iltoja tulossa<span class="text-suomi font-bold">.</span>',
      noShowsDesc: 'Tällä hetkellä kaikki suunnitellut esitykset on pidetty. Valmistelemme uusia tuotantoja ja avaamme lipunmyynnin pian — seuraa ilmoituksia!',
      noShowsCta: 'Tutustu kursseihin',
      rehearsal: {
        liveBadge: 'Esiriipun takana // Narri näyttämö',
        title: 'Esiriipun takana syntyy uusi näytelmä<span class="text-suomi font-extrabold">.</span>',
        subtitle: `Näyttämö on suljettu harjoituksia varten — valmistelemme kauden ${CURRENT_YEAR} ensi-iltoja Helsingissä`,
        stageNotice: 'Narri näyttämö · Harjoitukset',
        coursesBtn: 'Teatterin näyttelijänkurssit',
        openCurtain: 'Avaa esirippu',
        closeCurtain: 'Sulje esirippu',
        hintOpen: 'Klikkaa avataksesi esirippu',
        hintClose: 'Klikkaa sulkeaksesi esirippu',
        lightsBtn: 'Kohdevalot',
        backstageQuote: '«Näyttämöllä syntyy uuden teoksen taika…»',
        backstageSub: `Teatteri Logrus · Harjoituskausi ${CURRENT_YEAR}`
      },
      pastShowsBanner: {
        tag: `Esitysarkisto // ${CURRENT_YEAR}`,
        title: 'Teatterin menneet esitykset',
        desc: 'Tutustu Teatteri Logruksen menneisiin tuotantoihin, valokuvadokumentteihin ja esityshistoriaan Helsingissä',
        btn: 'Katso esitysarkisto'
      },
      shows: {
        'novecento': {
          title: 'Novecento',
          subtitle: 'Alessandro Baricco · Ohjaus Akvile Ruzgyte',
          date: '13. Elokuuta',
          stage: 'Narri näyttämö',
          price: 'alk. 20 €',
          duration: '2t 15min',
          subtitles: 'Venäjä',
          age: '12+',
          capacity: '80 paikkaa',
          quote: '«Loputon piano kuin ääretön valtameri, ja ihminen joka löysi musiikin mutta ei rantaa…»',
          description: 'Tarina pianistista, joka syntyi ja eli koko elämänsä valtamerilaivalla. Monodraama vapaudesta, pelosta, musiikista ja äärettömyydestä meren ja taivaan välillä.'
        }
      }
    },
    courses: {
      tag: `Näyttämölaboratorio // Haku ${CURRENT_YEAR}`,
      title: 'Näyttelijänkurssit<span class="text-suomi font-semibold">.</span>',
      subtitle: 'Vapauta näyttämöpotentiaalisi, äänesi ja karismasi ammattiohjaajien opastuksella Helsingin keskustassa.',
      swipeNote: 'Pyyhkäise kuvaa →',
      enrollBtn: 'Ilmoittaudu kurssille',
      detailsBtn: 'Lue lisää ohjelmasta',
      slides: [
        {
          id: 'slide-1',
          title: 'Luontainen lahjakkuus ja emotionaalinen vapaus',
          subtitle: 'Kehollisten ja henkisten lukkojen purkaminen',
          location: 'Narri näyttämö · Sörnäinen',
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
        badge: `Ryhmähaku auki // Kausi ${CURRENT_YEAR}`,
        headline: 'Lopeta muiden roolien esittäminen elämässä. On aika näytellä oma roolisi — kirkkaasti ja aidosti!',
        subtitle: 'Logrus Teatterin näyttelijästudio Helsingissä',
        description: 'Kuvittele: astut näyttämölle tai kameran eteen, ja kaikkien katseet kiinnittyvät sinuun. Ääni kantaa varmasti, tunteet välittyvät ja esiintymispelko katoaa.',
        targetAudience: 'Kurssi sopii yhtä hyvin näyttämöstä ja kuvauksista haaveileville kuin heille, jotka haluavat lisätä vakuuttavuutta ja varmuutta jokapäiväiseen elämään.',
        trialInfo: 'Ensimmäinen kokeilukerta — ILMAINEN',
        phone: '+358 45 2656332',
        email: 'info@logrus.fi',
        location: 'Pohjavedenkatu 5, 00980 Helsinki',
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
      feature2Tag: '02 // TUNNELMA',
      feature2Title: 'Kamarimuoto',
      feature2Desc: 'Vain 90 paikkaa katsomossa syvää elämystä ja aitoa vuorovaikutusta varten.',
      feature3Tag: '03 // FORMAATTI',
      feature3Title: 'Klassinen tyyli',
      feature3Desc: 'Psykologisen teatterin perinteet ja vahva dramaturgia.'
    },
    contacts: {
      heading: 'Tervetuloa<span class="text-suomi font-semibold">.</span>',
      cardTitle: 'Yhteystiedot',
      addressTag: 'Osoite',
      contactTag: 'Yhteydenotot',
      socialsTag: 'Sosiaalinen media',
      mapTag: 'Interaktiivinen kartta',
      mapTitle: 'Kuinka löydät meidät',
      btnStage: '🎭 Näyttämö',
      btnSornainen: '🚇 Sörnäinen',
      btnStation: '🚉 Asema',
      locationText: 'Sörnäisten rantatie 31, Narri näyttämö, Helsinki · <strong class="text-suomi font-semibold">5 min Sörnäisten metroasemalta</strong>',
      hslRoute: '🚆 HSL-reitti'
    },
    footer: {
      copyright: `© ${CURRENT_YEAR} · Logrus Teatteri Helsinki · Suomalais-venäläinen näyttämö`,
      toTop: '↑ Takaisin ylös'
    },
    showPage: {
      backToAfisha: 'Kaikki esitykset',
      galleryTag: 'Esityksen valokuvakronikka',
      galleryTitle: 'Valokuvat esityksestä<span class="text-suomi font-extrabold">.</span>',
      gallerySub: 'Elävän toiminnan hetkiä, harjoitusten tunnelmaa ja kamarinäyttämön taikaa.',
      allPhotos: 'Kaikki kuva',
      stagePhotos: 'Näyttämöllä',
      backstagePhotos: 'Kulisseissa',
      rehearsalPhotos: 'Harjoitukset',
      zoomPhoto: 'Suurenna',
      closeLightbox: 'Sulje Esc',
      directorSectionTitle: 'Ohjaajan näkemys',
      castSectionTitle: 'Rooleissa ja työryhmä',
      factsSectionTitle: 'Esitystiedot',
      venueSectionTitle: 'Tapahtumapaikka',
      mapHeading: 'Esityksen sijainti Helsingin kartalla',
      bookSeatBtn: 'Varaa lippu',
      modalTitle: 'Pikavaraus',
      modalDesc: 'Valitse sopiva aika tai ota yhteyttä teatterin kassaan valitaksesi paikat salista.',
      modalConfirmBtn: 'Siirry paikkavalintaan',
      modalCloseBtn: 'Sulje',
      aboutPlotTag: 'Juonesta ja konseptista',
      dramaturgyTitle: 'Dramaturgia ja konsepti',
      scandinavianAestheticText: 'Esitys on toteutettu leimallisessa skandinaavisessa estetiikassa — tarkasti hiotulla valosuunnittelulla, puhtaalla akustisella tilalla ja huolellisella otteella psykologiseen teatteriin.',
      factLangLabel: 'Esityskieli:',
      factLangValue: 'Venäjä',
      factFormatLabel: 'Muoto:',
      factFormatValue: 'Kamariteatteri',
      factVenueLabel: 'Näyttämö:',
      galleryBtn: 'Kuvagalleria',
      modalBookingTag: 'Varaus',
      modalNameLabel: 'Nimesi',
      modalContactLabel: 'Puhelin tai sähköposti',
      modalTicketsLabel: 'Lippujen määrä',
      modalTicket1: '1 lippu',
      modalTicket2: '2 lippua',
      modalTicket3: '3 lippua',
      modalTicket4: '4 lippua',
      modalSuccessTitle: 'Varaus vastaanotettu!',
      modalSuccessDesc: 'Lippukassan ylläpitäjä ottaa sinuun yhteyttä 15 minuutin kuluessa paikkojen vahvistamiseksi.',
      expiredBadge: 'Arkistoesitys',
      expiredTitle: 'Tämä esitys on jo pidetty',
      expiredDesc: 'Arkistoesitys. Seuraa ohjelmistoa tulevia esityspäiviä varten.',
      reviewsTag: 'Katsojien arvostelut',
      reviewsTitle: 'Katsojien kokemuksia<span class="text-suomi font-extrabold">.</span>',
      reviewsSubtitle: 'Aitoja sanoja, tunteita ja arvosteluja heiltä, jotka jakoivat kanssamme kamariesityksen taian Helsingissä.',
      reviewsRatingLabel: 'Esityksen arvosana',
      reviewsScore: '4.9',
      reviewsScoreOutOf: '/ 5.0',
      reviewsRecommendation: '99% katsojista suosittelee',
      reviewsCountLabel: 'Perustuu katsojapalautteeseen',
      reviewsAddBtn: 'Jätä arvostelu',
      reviewsVerifiedBadge: 'Vahvistettu lippu',
      reviewsHelpfulBtn: 'Hyödyllinen',
      reviewsFilterAll: 'Kaikki',
      reviewsFilterEmotions: 'Tunteet',
      reviewsFilterActing: 'Näyttelijäntyö',
      reviewsFilterMusic: 'Musiikki & ääni',
      reviewsFilterAtmosphere: 'Tunnelma',
      reviewsModalTitle: 'Jaa kokemuksesi',
      reviewsModalSubtitle: 'Arvostelusi auttaa muita katsojia löytämään tämän esityksen.',
      reviewsFormRatingLabel: 'Arvosanasi',
      reviewsFormRating5: 'Upea elämys!',
      reviewsFormRating4: 'Erittäin hyvä',
      reviewsFormRating3: 'Hyvä',
      reviewsFormRating2: 'Kohtalainen',
      reviewsFormRating1: 'En pitänyt',
      reviewsFormNameLabel: 'Nimesi',
      reviewsFormNamePlaceholder: 'Esim. Anna',
      reviewsFormCityLabel: 'Kaupunki / Rooli',
      reviewsFormCityPlaceholder: 'Esim. Helsinki · Ensi-illan katsoja',
      reviewsFormTextLabel: 'Arvostelusi',
      reviewsFormTextPlaceholder: 'Kerro, mikä teki vaikutuksen, mikä kohtaus tai musiikki jäi mieleen...',
      reviewsFormTagLabel: 'Pääajatus (tunniste)',
      reviewsFormTagPlaceholder: 'Esim. «Kosketti syvältä»',
      reviewsFormSubmitBtn: 'Julkaise arvostelu',
      reviewsFormSuccessTitle: 'Kiitos arvostelustasi!',
      reviewsFormSuccessDesc: 'Arvostelusi on tallennettu ja lisätty esityksen sivulle.',
      reviewsEmptyText: 'Tässä kategoriassa ei ole vielä arvosteluja. Ole ensimmäinen!',
      reviewsExpandBtn: 'Lue koko arvostelu',
      reviewsCollapseBtn: 'Näytä vähemmän'
    },
    archive: {
      tag: 'Esityshistoria // Logrus Teatteri',
      title: 'Menneet esitykset<span class="text-suomi font-extrabold">.</span>',
      subtitle: 'Teatterin esitysarkisto, ensi-illat ja valokuvadokumentit Helsingissä',
      backToMain: 'Etusivulle',
      aboutShow: 'Esityksestä',
      archiveBadge: 'Arkistoesitys'
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
      title: 'Russian drama<br class="hidden sm:inline" /> in&nbsp;northern <span class="font-dramatic italic font-normal text-suomi">silence</span><span class="text-redru">.</span>',
      description: '<span class="font-dramatic italic text-suomi text-2xl sm:text-3xl font-semibold">Logrus Teatteri</span> — cool Nordic spatial aesthetics in central Helsinki and deep respect for the Russian dramatic tradition.',
      locationLabel: '— Our Location —',
      locationName: 'Helsinki · Sörnäinen',
      locationDesc: 'Narri näyttämö stage at Sörnäisten rantatie 31',
      langLabel: 'Show language',
      langValue: 'Russian',
      afishaBtn: 'View Repertoire',
      aboutBtn: 'About Theater',
      nextShowLabel: 'Next Show',
      nextShowValue: '«Novecento» · August 13',
      noUpcomingBadge: 'Repertoire in preparation',
      noUpcomingShows: 'New shows coming soon',
      castingTag: 'Casting // Open Call',
      castingTitle: 'Looking for an Actor',
      castingRole: 'Street Guy / Gopnik Role',
      castingSubtitle: 'If you ever wanted to try yourself on stage — now is the time.',
      castingDesc: 'We are looking for a young male actor for our new Logrus Teatteri production. Prior experience is not required but welcome!',
      castingApplyBtn: 'Apply for Role'
    },
    afisha: {
      tag: `Upcoming Shows // October ${CURRENT_YEAR}`,
      title: 'Repertoire<span class="font-dramatic italic font-normal text-suomi">.</span>',
      subtitlesNote: 'Narri näyttämö stage in Helsinki',
      premiereTag: 'Helsinki Premiere',
      durationLabel: 'Duration',
      subtitlesLabel: 'Language',
      ageLabel: 'Age',
      ticketsLabel: 'Tickets',
      bookTicketBtn: 'Book Ticket',
      aboutShowBtn: 'About Show',
      secondaryPriceLabel: 'Price',
      secondaryBuyBtn: 'Tickets',
      noShowsTag: `Season ${CURRENT_YEAR} // New dates coming soon`,
      noShowsTitle: 'New premieres coming soon<span class="text-suomi font-bold">.</span>',
      noShowsDesc: 'All scheduled performances have ended for now. We are preparing new productions and will open ticket booking soon — stay tuned!',
      noShowsCta: 'Explore acting courses',
      rehearsal: {
        liveBadge: 'Behind the Curtain // Narri näyttämö',
        title: 'A New Production is Born Behind the Curtain<span class="text-suomi font-extrabold">.</span>',
        subtitle: `The stage is in rehearsal — preparing our ${CURRENT_YEAR} season premieres in Helsinki`,
        stageNotice: 'Narri Stage · Rehearsal in progress',
        coursesBtn: 'Explore Acting Courses',
        openCurtain: 'Open Curtain',
        closeCurtain: 'Close Curtain',
        hintOpen: 'Click to open curtain',
        hintClose: 'Click to close curtain',
        lightsBtn: 'Stage Lights',
        backstageQuote: '«The magic of a new production is coming to life on stage…»',
        backstageSub: `Teatteri Logrus · Rehearsal Season ${CURRENT_YEAR}`
      },
      pastShowsBanner: {
        tag: `Production Archive // ${CURRENT_YEAR}`,
        title: 'Past Theatre Productions',
        desc: 'Explore the history of past productions, photo chronicles, and archives of Teatteri Logrus in Helsinki',
        btn: 'Explore Past Shows'
      },
      shows: {
        'novecento': {
          title: 'Novecento',
          subtitle: 'Alessandro Baricco · Directed by Akvile Ruzgyte',
          date: '13 August',
          stage: 'Narri näyttämö',
          price: 'from 20 €',
          duration: '2h 15min',
          subtitles: 'Russian',
          age: '12+',
          capacity: '80 seats',
          quote: '«An endless piano like the boundless ocean, and a man who found music but never found the shore…»',
          description: 'The story of a pianist born and raised aboard an ocean liner — a musician who saw the world through ocean sounds and melodies. A monodrama about freedom, fear, music, and infinity between sea and sky.'
        }
      }
    },
    courses: {
      tag: `Stage Laboratory // ${CURRENT_YEAR} Intake`,
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
          location: 'Narri näyttämö · Sörnäinen',
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
        badge: `Group Intake Open // Season ${CURRENT_YEAR}`,
        headline: "Stop playing other people's roles in life. It's time to play your own — brightly and authentically!",
        subtitle: 'Logrus Teatteri Acting Studio in Helsinki',
        description: 'Imagine stepping onto stage or in front of a camera with all eyes on you. Your voice is confident, emotions are genuine, and stage fright disappears.',
        targetAudience: 'Equally perfect for aspiring stage and screen actors, and anyone wanting more presence and confidence in daily life.',
        trialInfo: 'First Trial Class — FREE',
        phone: '+358 45 2656332',
        email: 'info@logrus.fi',
        location: 'Pohjavedenkatu 5, 00980 Helsinki',
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
      title: 'Two worlds.<br />One drama.<br /><span class="text-suomi font-semibold">Shared dialogue.</span>',
      italicQuote: 'We combine Finnish spatial aesthetics with deep Russian psychological theater.',
      text: 'Logrus Theater is a vibrant space for the Russian-speaking community in Finland and all who appreciate a European approach to classical and modern drama.',
      mobileFeaturesTitle: 'Theater Highlights',
      swipeLabel: 'Swipe →',
      feature1Tag: '01 // LANGUAGE',
      feature1Title: 'Russian Language',
      feature1Desc: 'Preserving the finest tradition of pronunciation and acting.',
      feature2Tag: '02 // ATMOSPHERE',
      feature2Title: 'Chamber Stage',
      feature2Desc: 'Intimate 90-seat hall for deep immersion and genuine emotion.',
      feature3Tag: '03 // FORMAT',
      feature3Title: 'Classical Style',
      feature3Desc: 'Psychological theatre traditions and strong dramaturgy.'
    },
    contacts: {
      heading: 'Tervetuloa <span class="text-suomi font-semibold">· Welcome.</span>',
      cardTitle: 'Contacts',
      addressTag: 'Address',
      contactTag: 'Contact',
      socialsTag: 'Social Media',
      mapTag: 'Interactive Map',
      mapTitle: 'How to Find Us',
      btnStage: '🎭 Stage',
      btnSornainen: '🚇 Sörnäinen',
      btnStation: '🚉 Station',
      locationText: 'Sörnäisten rantatie 31, Narri näyttämö, Helsinki · <strong class="text-suomi font-semibold">5 min from Sörnäinen metro</strong>',
      hslRoute: '🚆 HSL Route'
    },
    footer: {
      copyright: `© ${CURRENT_YEAR} · Logrus Teatteri Helsinki · Finnish-Russian Stage`,
      toTop: '↑ Back to top'
    },
    showPage: {
      backToAfisha: 'All Shows',
      galleryTag: 'Production Photo Chronicle',
      galleryTitle: 'Show Photography<span class="text-suomi font-extrabold">.</span>',
      gallerySub: 'Live action moments, rehearsal atmosphere and backstage magic of our chamber stage.',
      allPhotos: 'All Photos',
      stagePhotos: 'On Stage',
      backstagePhotos: 'Backstage',
      rehearsalPhotos: 'Rehearsals',
      zoomPhoto: 'Enlarge',
      closeLightbox: 'Close Esc',
      directorSectionTitle: 'Director Vision',
      castSectionTitle: 'Cast & Crew',
      factsSectionTitle: 'Show Details',
      venueSectionTitle: 'Venue Location',
      mapHeading: 'Show Location on Helsinki Map',
      bookSeatBtn: 'Book Ticket',
      modalTitle: 'Quick Seat Booking',
      modalDesc: 'Select preferred showtime or contact box office for specific seat choices.',
      modalConfirmBtn: 'Proceed to Seat Selection',
      modalCloseBtn: 'Close',
      aboutPlotTag: 'About Plot & Concept',
      dramaturgyTitle: 'Dramaturgy & Concept',
      scandinavianAestheticText: 'The production is executed in a distinctive Scandinavian aesthetic — with precise light design, clean acoustic space, and a thoughtful approach to psychological theater.',
      factLangLabel: 'Language:',
      factLangValue: 'Russian',
      factFormatLabel: 'Format:',
      factFormatValue: 'Chamber Theater',
      factVenueLabel: 'Venue:',
      galleryBtn: 'Photo Gallery',
      modalBookingTag: 'Booking',
      modalNameLabel: 'Your Name',
      modalContactLabel: 'Phone or Email',
      modalTicketsLabel: 'Number of Tickets',
      modalTicket1: '1 ticket',
      modalTicket2: '2 tickets',
      modalTicket3: '3 tickets',
      modalTicket4: '4 tickets',
      modalSuccessTitle: 'Request Received!',
      modalSuccessDesc: 'The box office administrator will contact you within 15 minutes to confirm your seats.',
      expiredBadge: 'Past Production',
      expiredTitle: 'This performance has already taken place',
      expiredDesc: 'Past production. Follow our repertoire to catch upcoming dates.',
      reviewsTag: 'Audience Reviews',
      reviewsTitle: 'Spectator Impressions<span class="text-suomi font-extrabold">.</span>',
      reviewsSubtitle: 'Heartfelt words, emotions, and feedback from those who shared the intimacy of our chamber production in Helsinki.',
      reviewsRatingLabel: 'Show Rating',
      reviewsScore: '4.9',
      reviewsScoreOutOf: '/ 5.0',
      reviewsRecommendation: '99% of audience recommend',
      reviewsCountLabel: 'Based on verified spectator reviews',
      reviewsAddBtn: 'Write a Review',
      reviewsVerifiedBadge: 'Verified Ticket',
      reviewsHelpfulBtn: 'Helpful',
      reviewsFilterAll: 'All Reviews',
      reviewsFilterEmotions: 'Emotions',
      reviewsFilterActing: 'Acting',
      reviewsFilterMusic: 'Music & Sound',
      reviewsFilterAtmosphere: 'Atmosphere',
      reviewsModalTitle: 'Share Your Experience',
      reviewsModalSubtitle: 'Your review helps others discover this unique chamber stage production.',
      reviewsFormRatingLabel: 'Your Rating',
      reviewsFormRating5: 'Masterpiece!',
      reviewsFormRating4: 'Very Good',
      reviewsFormRating3: 'Good',
      reviewsFormRating2: 'Fair',
      reviewsFormRating1: 'Did Not Like',
      reviewsFormNameLabel: 'Your Name',
      reviewsFormNamePlaceholder: 'e.g. Anna',
      reviewsFormCityLabel: 'City / Status',
      reviewsFormCityPlaceholder: 'e.g. Helsinki · Premiere Guest',
      reviewsFormTextLabel: 'Your Review',
      reviewsFormTextPlaceholder: 'Share what moved you most, memorable scenes, music, or atmosphere...',
      reviewsFormTagLabel: 'Key Highlight (tag)',
      reviewsFormTagPlaceholder: 'e.g. «Goosebumps»',
      reviewsFormSubmitBtn: 'Submit Review',
      reviewsFormSuccessTitle: 'Thank you for your review!',
      reviewsFormSuccessDesc: 'Your review has been saved and added to the show page.',
      reviewsEmptyText: 'No reviews in this category yet. Be the first to share!',
      reviewsExpandBtn: 'Read full review',
      reviewsCollapseBtn: 'Show less'
    },
    archive: {
      tag: 'Production History // Logrus Teatteri',
      title: 'Past Productions<span class="text-suomi font-extrabold">.</span>',
      subtitle: 'Archive of theatrical productions, premieres, and photo chronicles in Helsinki',
      backToMain: 'Back to Home',
      aboutShow: 'About Show',
      archiveBadge: 'Past Production'
    }
  }
};

export function getTranslations(lang: Language = 'ru'): TranslationSchema {
  return translations[lang] || translations.ru;
}
