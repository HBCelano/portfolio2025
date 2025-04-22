'use client';

import Image from "next/image";
import Link from "next/link";
import { useTheme } from '@mui/material/styles';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
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
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                marginTop: '.8rem',
                gap: { xs: 1, sm: 0 }
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
                <Tooltip title="Ir a WhatsApp" placement="top">
                    <Link href='https://wa.me/5492352417849' target="_blank">
                        <WhatsApp color="success" fontSize="large" />
                    </Link>
                </Tooltip>
                <Tooltip title="Ir a Instagram" placement="top">
                    <Link href='https://www.instagram.com/homecelano/' target="_blank">
                        <Instagram color="secondary" fontSize="large" />
                    </Link>
                </Tooltip>
                <Tooltip title="Ir a LinkedIn" placement="top">
                    <Link href='https://linkedin.com/in/hbcelano/' target="_blank">
                        <LinkedIn color="primary" fontSize="large" />
                    </Link>
                </Tooltip>
            </Box>
        </Box>
    );
};
