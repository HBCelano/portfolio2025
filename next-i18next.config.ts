import type { UserConfig } from 'next-i18next';

const config: UserConfig = {
    i18n: {
        locales: ['es', 'en'],
        defaultLocale: 'es'
    },
    fallbackLng: 'es',
    defaultNS: 'common'
};

export default config;
