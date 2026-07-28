export interface CourseSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  location: string;
  tag: string;
  quote?: string;
}

export interface CentralCourse {
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
  pillars: {
    num: string;
    title: string;
    desc: string;
  }[];
}

export const courseSlides: CourseSlide[] = [
  {
    id: "slide-1",
    image: "/images/courses/rehearsal-1.jpg",
    title: "Природный талант и эмоциональная свобода",
    subtitle: "Раскрепощение, снятие телесных и психологических блоков",
    location: "Камерный зал · Kamppi",
    tag: "01 // ЭМОЦИИ И СВОБОДА",
    quote: "«Представьте: вы выходите на сцену или в кадр, и все взгляды прикованы к вам...»"
  },
  {
    id: "slide-2",
    image: "/images/courses/speech-workshop.jpg",
    title: "Постановка голоса, речи и пластики",
    subtitle: "Полетное звучание, идеальная дикция и выразительное тело",
    location: "Репетиционный зал Logrus",
    tag: "02 // ГОЛОС И ПЛАСТИКА",
    quote: "«Голос звучит уверенно, а страх публичных выступлений исчезает навсегда»"
  },
  {
    id: "slide-3",
    image: "/images/courses/youth-stage.jpg",
    title: "Уверенность, харизма и внимание",
    subtitle: "Умение держать аудиторию и быть убедительным в жизни",
    location: "Сценическое пространство",
    tag: "03 // ХАРИЗМА И ВНИМАНИЕ",
    quote: "«Курс подходит и тем, кто мечтает о сцене, и тем, кто хочет стать ярче в жизни»"
  },
  {
    id: "slide-4",
    image: "/images/courses/backstage-moments.jpg",
    title: "Первые роли и работа с режиссером",
    subtitle: "Проработка драматургии, партнерство и репетиции этюдов",
    location: "Гримерная & Сцена",
    tag: "04 // ЭТЮДЫ И РОЛИ",
    quote: "«Сыграйте свои первые настоящие роли под руководством опытного режиссера»"
  },
  {
    id: "slide-5",
    image: "/images/courses/final-performance.jpg",
    title: "Выпускной показ перед зрителями",
    subtitle: "Полноценный театральный выход на профессиональной сцене Хельсинки",
    location: "Главная сцена Logrus",
    tag: "05 // ВЫХОД НА СЦЕНУ",
    quote: "«Хватит играть чужие роли в жизни. Пора сыграть свою — ярко и по-настоящему!»"
  }
];

export const centralCourse: CentralCourse = {
  title: "Курс актерского мастерства",
  studioName: "«Лампарельс»",
  badge: "Набор в группу открыт // Сезон 2026",
  headline: "Хватит играть чужие роли в жизни. Пора сыграть свою — ярко и по-настоящему!",
  subtitle: "Актерская студия Logrus Teatteri в Хельсинки",
  description: "Представьте: вы выходите на сцену или в кадр, и все взгляды прикованы к вам. Голос звучит уверенно, эмоции бьют через край, а страх сцены исчезает навсегда.",
  targetAudience: "Курс одинаково идеально подходит и тем, кто мечтает о сцене или профессиональных съёмках, и тем, кто просто хочет стать ярче, убедительнее и увереннее в повседневной жизни.",
  trialInfo: "Первое пробное занятие — БЕСПЛАТНО",
  phone: "+358 45 2656332",
  email: "info@logrus.fi",
  location: "Helsinki · Kamppi (Urho Kekkosen katu 8)",
  schedule: "Очные занятия по вечерам · Набор до 15 человек",
  closingQuote: "Твоя лучшая роль ещё впереди ✨",
  pillars: [
    {
      num: "01",
      title: "Природный талант & Свобода",
      desc: "Раскроете свой внутренний потенциал, научитесь сбрасывать физические зажимы и свободно выражать настоящие живые эмоции."
    },
    {
      num: "02",
      title: "Уверенность & Харизма",
      desc: "Развитие сценического обаяния, преодоление страха публичности и умение удерживать внимание любого зрительного зала или собеседника."
    },
    {
      num: "03",
      title: "Голос, Речь & Ткань пластики",
      desc: "Профессиональная постановка диафрагмального дыхания, глубокого грудного тембра, четкой дикции и выразительного языка тела."
    },
    {
      num: "04",
      title: "Первые роли & Актерские этюды",
      desc: "Погружение в разбор текстов, создание глубоких сценических образов и работа над первыми настоящими ролями под руководством режиссера."
    }
  ]
};
