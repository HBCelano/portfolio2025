'use client';

// import { appWithTranslation } from 'next-i18next';
// export { appWithTranslation };
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

if (!i18n.isInitialized) {
    i18n
        .use(HttpBackend)
        .use(initReactI18next)
        .init({
            lng: 'es',
            fallbackLng: 'es',
            supportedLngs: ['es', 'en'],
            ns: ['common'],
            defaultNS: 'common',
            backend: {
                loadPath: '/locales/{{lng}}/{{ns}}.json'
            },
            react: {
                useSuspense: false
            }
        });
}

export default i18n;
