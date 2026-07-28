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
}

export const shows: Show[] = [
  {
    id: "cherry-orchard",
    number: "01",
    title: "Вишнёвый сад",
    subtitle: "А. П. Чехов · Постановка Анны Веденеевой",
    date: "12 Октября / 12.10",
    time: "19:00",
    stage: "Kamppi Main Stage",
    price: "от 25 €",
    duration: "2ч 40мин",
    subtitles: "Suomi (FI)",
    age: "14+",
    capacity: "90 мест",
    poster: "https://picsum.photos/seed/suomi-cherry/700/900",
    isFeatured: true,
    quote: "«О моё детство, чистота моя! В этой спальне я спала, отсюда смотрела на сад, счастье просыпалось вместе со мною каждое утро...»",
    description: "Чеховская классика в скандинавской трактовке — строгая, прозрачная, с тихими паузами и глубокой акцентировкой на человеческом одиночестве. Спектакль идет на русском языке с финскими синхронными субтитрами."
  },
  {
    id: "maya-sea",
    number: "02",
    title: "Майя и море",
    subtitle: "Современная монодрама с живой виолончелью",
    date: "18 Октября / 18.10",
    time: "20:00",
    stage: "Камерная сцена",
    price: "от 20 €",
    duration: "1ч 50мин",
    subtitles: "Suomi (FI)",
    age: "16+",
    capacity: "60 мест",
    poster: "https://picsum.photos/seed/suomi-sea/700/500",
    isFeatured: false,
    description: "История адаптации и памяти, сыгранная на русском языке. Уникальный моноспектакль в камерной атмосфере на 60 мест."
  }
];
