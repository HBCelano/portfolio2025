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
        className="flex flex-col justify-center md:flex-row md:justify-around"
    >
        <Box component={'section'}><CustomAvatar /></Box>
        <Box component={'section'} sx={{ maxWidth: '50%', marginTop: '1rem' }}>
            <Typography variant="h2" className="text-center">
                Desarrollador Web
                <br />
                Full-Stack
            </Typography>
            <Typography
                variant="h5"
                sx={{
                    marginTop: '2rem',
                    fontWeight: 'light'
                }}
            >
                Como desarrollador full-stack, me dedico a convertir ideas en aplicaciones web innovadoras.
                Explora mis habilidades desde este portfolio y conoce un poco más de mi.
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
