'use client';

import { useEffect, useState, forwardRef } from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
// import { type TFunction } from "i18next";
import { motion, type MotionProps } from 'framer-motion';
import {
    Box,
    Typography,
    Button,
    useTheme,
    useMediaQuery,
    type BoxProps
} from "@mui/material";
import { CustomAvatar } from "@/presentation/home/components/CustomAvatar";
import { CustomDialog } from "@/presentation/shared/components";

// const CustomDialogControlled = ({ translate }: { translate: TFunction<"translation", undefined> }) => {
//     const [open, setOpen] = useState<boolean>(false);

//     return <>
//         <Button variant="contained" onClick={() => setOpen(true)}>{translate('main.home.textButtonAbout')}</Button>
//         <CustomDialog
//             title={translate('main.home.modal.title')}
//             text1={translate('main.home.modal.body1')}
//             text2={translate('main.home.modal.body2')}
//             textButton={translate('main.home.modal.textButton')}
//             open={open}
//             handleClose={() => setOpen(false)}
//         />
//     </>
// };

// const MotionBox = motion.create(Box);
const MotionBoxForwardRef = forwardRef<HTMLElement, MotionProps & BoxProps>((props, ref) => <Box ref={ref} {...props} />);
MotionBoxForwardRef.displayName = 'MotionBox';
const MotionBox = motion.create(MotionBoxForwardRef);

const Home = () => {
    const theme = useTheme();
    const isUpBreakpointSM = useMediaQuery(theme.breakpoints.up('sm'));
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        console.log(i18n.language);
    }, [i18n.language]);

    return (
        <>
            <Box
                component='section'
                className="flex max-[900px]:flex-col-reverse justify-center items-center gap-10 xl:gap-24"
                sx={{ pt: { md: 3 }, pb: { xs: 8, md: 2 } }}
            >
                <MotionBox
                    component={'section'}
                    initial={{ x: '-100vw', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <CustomAvatar />
                </MotionBox>
                <MotionBox
                    // component={'section'}
                    sx={{ maxWidth: { md: '65%', lg: '50%' } }}
                    initial={{ x: '100vw', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
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
                        {/* <CustomDialogControlled translate={t} /> */}
                        <Button variant="contained" onClick={() => setOpen(true)}>
                            {t('main.home.textButtonAbout')}
                        </Button>
                        <Link href={'/contact'}>
                            <Button variant="outlined">{t('main.home.textButtonContact')}</Button>
                        </Link>
                    </div>
                </MotionBox>
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
