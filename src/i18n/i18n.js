import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import es from './translations/es.json';
import zh from './translations/zh.json';

const resources = {
	en: en,
	es: es,
	'es-ES': es,
	zh: zh,
};
const detectOptions = {
	order: ['localStorage', 'navigator'],
	lookupLocalStorage: 'i18n',
	caches: ['localStorage'],
	checkWhitelist: true,
};

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		detection: detectOptions,
		// lng: "en",
		fallbackLng: 'en',
		keySeparator: false, // we do not use keys in form messages.welcome
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
