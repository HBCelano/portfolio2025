import Image from "next/image";
import { Box, Typography } from "@mui/material";

export const Footer = () => (
    <Box
        component={'footer'}
        sx={{
            display: 'flex',
            justifyContent: 'space-between'
        }}
    >
            <Image
            src='/img/favicon.ico'
            width={40}
            height={40}
            alt="Logo"
            />
        <Typography>
            {new Date().getFullYear()} &copy; Todos los derechos reservados.
        </Typography>
        <Typography>
            iconos
        </Typography>
    </Box>
);
