'use client';

import { useState, type MouseEvent } from "react";
import Image from 'next/image';
import Fab from "@mui/material/Fab";
import Menu from "@mui/material/Menu";
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import LanguageIcon from '@mui/icons-material/Language';
import i18n from "@/lib/i18n";

export const LanguageButtonFloating = () => {
    console.log('hola');
    const [languageLabel, setLanguageLabel] = useState(i18n.language);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const subMenu = (
        <Menu
            anchorEl={anchorEl}
            id="language-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            slotProps={{
                paper: {
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5
                    }
                }
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            disableScrollLock
        >
            <MenuItem
                // onClick={async () => {
                //     await i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
                //     setLanguageLabel(i18n.language);
                // }}
                onClick={() => i18n.changeLanguage('es', () => setLanguageLabel(i18n.language))}>
                <ListItemIcon>
                    <Image
                        src='/img/languages/es.svg'
                        alt='Bandera de España'
                        width={16}
                        height={8}
                        style={{
                            width: 'auto',
                            height: 'auto',
                            marginRight: 5
                        }}
                    />
                </ListItemIcon>
                {languageLabel === 'es' ? 'Español' : 'Spanish'}
            </MenuItem>
            <MenuItem onClick={() => i18n.changeLanguage('en', () => setLanguageLabel(i18n.language))}>
                <ListItemIcon>
                    <Image
                        src='/img/languages/en.svg'
                        alt='Bandera de Inglaterra'
                        width={16}
                        height={8}
                        style={{
                            width: 'auto',
                            height: 'auto',
                            marginRight: 5
                        }}
                    />
                </ListItemIcon>
                {languageLabel === 'es' ? 'Inglés' : 'English'}
            </MenuItem>
        </Menu>
    );

    return (
        <>
            <Fab
                variant="extended"
                color='default'
                size={'small'}
                aria-label="LanguageButton"
                sx={{ ml: 3 }}
                onClick={handleClick}
            >
                <LanguageIcon sx={{ mr: .5 }} />{languageLabel === 'es' ? 'Idioma' : 'Language'}
            </Fab>
            {subMenu}
        </>
    );
};
