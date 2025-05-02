'use client';

import { useEffect, useState } from 'react';
import i18n from '@/lib/i18n';

export default function TranslationProvider({
    children
}: {
    children: React.ReactNode;
}) {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        const savedLang = localStorage.getItem('lang');
        if (savedLang) i18n.changeLanguage(savedLang);
        setIsLoaded(true);
    }, []);

    if (!isLoaded) return null;

    return <>{children}</>;
};
