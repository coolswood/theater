import { translations, type Language } from '../data/translations';

export function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((prev, curr) => (prev && prev[curr] !== undefined ? prev[curr] : null), obj);
}

let isSwitching = false;

export function initClientI18n() {
  if (typeof window === 'undefined') return;

  function applyLanguage(lang: Language) {
    const langData = translations[lang] || translations.ru;
    document.documentElement.lang = lang;
    localStorage.setItem('logrus_lang', lang);

    // Update text content
    document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key) {
        const val = getNestedValue(langData, key);
        if (typeof val === 'string') {
          el.textContent = val;
        }
      }
    });

    // Update innerHTML
    document.querySelectorAll<HTMLElement>('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (key) {
        const val = getNestedValue(langData, key);
        if (typeof val === 'string') {
          el.innerHTML = val;
        }
      }
    });

    // Update Language Buttons active state
    document.querySelectorAll<HTMLElement>('.lang-btn').forEach((btn) => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('bg-suomi', 'text-white', 'font-bold', 'shadow-sm');
        btn.classList.remove('text-mute', 'hover:text-granite', 'hover:bg-snow2');
      } else {
        btn.classList.remove('bg-suomi', 'text-white', 'font-bold', 'shadow-sm');
        btn.classList.add('text-mute', 'hover:text-granite', 'hover:bg-snow2');
      }
    });

    // Dispatch custom event for dynamic components (e.g. Courses carousel)
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { lang, langData } }));
  }

  function switchLanguageWithFade(targetLang: Language) {
    const currentLang = (localStorage.getItem('logrus_lang') as Language) || 'ru';
    if (targetLang === currentLang || isSwitching) return;

    isSwitching = true;
    const mainEl = document.querySelector('main');

    if (mainEl) {
      mainEl.classList.add('i18n-fade-out');

      setTimeout(() => {
        applyLanguage(targetLang);

        setTimeout(() => {
          mainEl.classList.remove('i18n-fade-out');
          isSwitching = false;
        }, 50);
      }, 180);
    } else {
      applyLanguage(targetLang);
      isSwitching = false;
    }
  }

  // Initial load: apply saved language immediately
  const savedLang = (localStorage.getItem('logrus_lang') as Language) || 'ru';
  applyLanguage(savedLang);

  // Setup click listeners for lang buttons
  document.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement)?.closest('.lang-btn');
    if (target) {
      const newLang = target.getAttribute('data-lang') as Language;
      if (newLang && translations[newLang]) {
        switchLanguageWithFade(newLang);
      }
    }
  });
}
