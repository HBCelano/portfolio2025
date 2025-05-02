'use client';

import { useState } from "react";
import Fab from "@mui/material/Fab";
import LanguageIcon from '@mui/icons-material/Language';
import i18n from "@/lib/i18n";

export const LanguageButtonFloating = () => {
    const [languageLabel, setLanguageLabel] = useState(i18n.language);

    return (
        <Fab
            variant="extended"
            color='default'
            size={'small'}
            aria-label="LanguageButton"
            sx={{ ml: 2 }}
            onClick={async () => {
                await i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
                setLanguageLabel(i18n.language);
            }}
        >
            <LanguageIcon />
            {languageLabel === 'es' ? 'Inglés' : 'Spanish'}
        </Fab>
    );
};
