'use client';

import Image from "next/image";
import Link from "next/link";
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from "@mui/material";
import Instagram from '@mui/icons-material/Instagram';
import WhatsApp from '@mui/icons-material/WhatsApp';
import LinkedIn from '@mui/icons-material/LinkedIn';

export const Footer = () => {
    const { palette } = useTheme();

    return (
        <Box
            component={'footer'}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                marginTop: '.8rem'
            }}
        >
            <Box component='section' sx={{ flex: 1 }}>
                <Image
                    src={palette.mode === 'dark' ? '/img/cv.svg' : '/img/cv-light.svg'}
                    width={35}
                    height={35}
                    alt="Logo"
                />
            </Box>
            <Typography sx={{ flex: 1 }} variant="overline" fontSize='.85rem' align="center">
                {new Date().getFullYear()} &copy; Todos los derechos reservados.
            </Typography>
            <Box
                component='section'
                className="flex flex-1 gap-x-4 justify-end"
            >
                <Link href='https://web.whatsapp.com/' target="_blank">
                    <WhatsApp color="success" fontSize="large" />
                </Link>
                <Link href='https://www.instagram.com/' target="_blank">
                    <Instagram color="secondary" fontSize="large" />
                </Link>
                <Link href='https://www.linkedin.com/' target="_blank">
                    <LinkedIn color="primary" fontSize="large" />
                </Link>
            </Box>
        </Box>
    );
};
