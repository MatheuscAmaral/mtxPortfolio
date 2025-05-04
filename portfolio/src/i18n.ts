import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import pt from '../public/locales/pt/translation.json'
import en from '../public/locales/en/translation.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
    },
    lng: navigator.language.split('-')[0] || 'pt',
    fallbackLng: 'pt',
    interpolation: { escapeValue: false },
  })

export default i18n
