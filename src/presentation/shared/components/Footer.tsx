import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Instagram from '@mui/icons-material/Instagram';
import WhatsApp from '@mui/icons-material/WhatsApp';
import LinkedIn from '@mui/icons-material/LinkedIn';

export const Footer = () => (
    <Box
        component={'footer'}
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '1rem',
            paddingX: '1rem'
        }}
    >
        <Box component='section' sx={{ flex: 1 }}>
            <Image
                src='/img/favicon.ico'
                width={40}
                height={40}
                alt="Logo"
            />
        </Box>
        <Box component='section' sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Typography variant="overline" fontSize={14}>
                {new Date().getFullYear()} &copy; Todos los derechos reservados.
            </Typography>
        </Box>
        <Box component='section' sx={{ flex: 1 }}>
            <Box
                component='div'
                className="flex gap-x-4 justify-end"
            >
                <WhatsApp color="success" fontSize="large" />
                <Instagram color="secondary" fontSize="large" />
                <LinkedIn color="primary" fontSize="large" />
            </Box>
        </Box>
    </Box>
);
