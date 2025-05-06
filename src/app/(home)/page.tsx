'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
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
    const { t, i18n } = useTranslation();
    useEffect(() => {
        console.log(i18n.language);
    }, [i18n.language]);

    return (
        <>
            <Box
                component={'section'}
                className="flex max-[900px]:flex-col-reverse justify-center items-center gap-10 xl:gap-24"
                sx={{ pt: { md: 3 } }}
            >
                <Box component={'section'}><CustomAvatar /></Box>
                <Box component={'section'} sx={{ maxWidth: { md: '65%', lg: '50%' } }}>
                    <Typography component='h1' variant={isUpBreakpointSM ? 'h2' : 'h3'} fontWeight={isUpBreakpointSM ? 300 : 200} className="text-center">
                        {t('main.home.title')}
                        {/* Desarrollador
                        <br />
                        Full-Stack */}
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
                        {t('main.home.body')}
                    </Typography>
                    <div className="flex gap-x-3 justify-center" style={{ marginTop: '2rem' }}>
                        <Button variant="contained" onClick={() => setOpen(true)}>{t('main.home.textButtonAbout')}</Button>
                        <Link href={'/contact'}>
                            <Button variant="outlined">{t('main.home.textButtonContact')}</Button>
                        </Link>
                    </div>
                </Box>
            </Box >
            <CustomDialog
                title={t('main.home.modal.title')}
                text1={t('main.home.modal.body1')}
                text2={t('main.home.modal.body2')}
                textButton={t('main.home.modal.textButton')}
                open={open}
                handleClose={() => setOpen(false)}
            />
        </>
    );
};

export default Home;
