'use client';

import { useState } from "react";
import Link from "next/link";
import {
    Box,
    Typography,
    Button,
    useTheme,
    useMediaQuery
} from "@mui/material";
import { CustomAvatar } from "@/presentation/home/components";
import { CustomDialog } from "@/presentation/shared/components";

const Home = () => {
    const [open, setOpen] = useState<boolean>(false);
    const theme = useTheme();
    const isUpBreakpointSM = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <>
            <Box
                component={'section'}
                className="flex max-[900px]:flex-col-reverse md:justify-around gap-8"
            >
                <Box component={'section'} sx={{ mx: 'auto' }}><CustomAvatar /></Box>
                <Box component={'section'} sx={{ maxWidth: { md: '65%', lg: '50%' } }}>
                    <Typography component='h1' variant={isUpBreakpointSM ? 'h2' : 'h3'} fontWeight={isUpBreakpointSM ? 300 : 200} className="text-center">
                        Desarrollador
                        <br />
                        Full-Stack
                    </Typography>
                    <Typography
                        component='p'
                        variant={isUpBreakpointSM ? 'h5' : 'h6'}
                        sx={{
                            marginTop: '2rem',
                            fontWeight: 'light'
                        }}
                        className="text-center"
                    >
                        Como desarrollador full-stack, me dedico a convertir ideas en aplicaciones web ó mobile innovadoras.
                        Explora mis habilidades desde este portfolio y conoce un poco más sobre mí.
                    </Typography>
                    <div className="flex gap-x-3 justify-center" style={{ marginTop: '2rem' }}>
                        <Button variant="contained" onClick={() => setOpen(true)}>Conocer más</Button>
                        <Link href={'/contact'}>
                            <Button variant="outlined">Contacto</Button>
                        </Link>
                    </div>
                </Box>
            </Box >
            <CustomDialog
                title="Sobre mí"
                text1="Mi nombre es Homero Celano, vivo en la ciudad de Chacabuco, provincia de Buenos Aires. Me encuentro desarrollando aplicaciones web y móviles hace aproximadamente dos años y aspiro a seguir aprendiendo cada día."
                text2="Mi mayor objetivo es aplicar mis conocimientos como desarrollador de software y mi experiencia trabajando en equipo, asumiendo nuevos desafíos para lograr un crecimiento a nivel profesional y personal."
                textButton="Aceptar"
                open={open}
                handleClose={() => setOpen(false)}
            />
        </>
    );
};

export default Home;
