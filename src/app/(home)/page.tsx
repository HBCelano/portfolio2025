import Link from "next/link";
import {
    Box,
    Typography,
    Button
} from "@mui/material";
import { CustomAvatar } from "@/presentation/home/components";

const Home = () => (
    <Box
        component={'section'}
        className="flex max-[900px]:flex-col-reverse md:justify-around gap-8"
    >
        <Box component={'section'} sx={{ mx: 'auto' }}><CustomAvatar /></Box>
        <Box component={'section'} sx={{ maxWidth: { md: '65%', lg: '50%' } }}>
            <Typography component='h1' variant="h2" className="text-center">
                Desarrollador
                <br />
                Full-Stack
            </Typography>
            <Typography
                component='p'
                variant="h5"
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
                <Link href={'/experience'}>
                    <Button variant="contained">Conocer más</Button>
                </Link>
                <Link href={'/contact'}>
                    <Button variant="outlined">Contacto</Button>
                </Link>
            </div>
        </Box>
    </Box>
);

export default Home;
