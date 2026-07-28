import { translations, type Language } from './translations';

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

const slideImages: Record<string, string> = {
  'slide-1': '/images/courses/rehearsal-1.jpg',
  'slide-2': '/images/courses/speech-workshop.jpg',
  'slide-3': '/images/courses/youth-stage.jpg',
  'slide-4': '/images/courses/backstage-moments.jpg',
  'slide-5': '/images/courses/final-performance.jpg'
};

export function getCourseSlides(lang: Language = 'ru'): CourseSlide[] {
  const slidesData = translations[lang]?.courses?.slides || translations.ru.courses.slides;
  return slidesData.map(slide => ({
    ...slide,
    image: slideImages[slide.id] || '/images/courses/rehearsal-1.jpg'
  }));
}

export function getCentralCourse(lang: Language = 'ru'): CentralCourse {
  return translations[lang]?.courses?.centralCourse || translations.ru.courses.centralCourse;
}

export const courseSlides: CourseSlide[] = getCourseSlides('ru');
export const centralCourse: CentralCourse = getCentralCourse('ru');
