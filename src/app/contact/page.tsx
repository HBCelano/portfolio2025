'use client';

import { forwardRef } from "react";
import { useTranslation } from 'react-i18next';
import { motion, type MotionProps } from 'framer-motion';
import {
    Box,
    Typography,
    useTheme,
    useMediaQuery,
    type BoxProps
} from "@mui/material";
import { CustomMotionImage } from "root/src/presentation/contact/CustomMotionImage";
import { CustomForm } from "@/presentation/contact/CustomForm";

const MotionBoxForwardRef = forwardRef<HTMLElement, MotionProps & BoxProps>((props, ref) => <Box ref={ref} {...props} />);
MotionBoxForwardRef.displayName = 'MotionBox';
const MotionBox = motion.create(MotionBoxForwardRef);

const Contact = () => {
    const theme = useTheme();
    const isUpBreakpointSM = useMediaQuery(theme.breakpoints.up('sm'));
    const { t } = useTranslation();

    return (
        <Box
            component='section'
            className="flex max-[900px]:flex-col justify-center gap-10 xl:gap-24"
            sx={{ pt: { md: 6 } }}
        >
            <MotionBox
                component='section'
                initial={{ x: '-100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                flex={1}
            >
                <Typography component='h1' variant={isUpBreakpointSM ? 'h2' : 'h3'} fontWeight={isUpBreakpointSM ? 300 : 200} className="text-center">
                    {t('main.contact.title')}
                </Typography>
                <Typography
                    component='p'
                    variant={isUpBreakpointSM ? 'h6' : 'subtitle1'}
                    sx={{ marginTop: '2rem', fontWeight: 'light' }}
                    gutterBottom
                // className="text-center"
                >
                    {t('main.contact.body1')}
                </Typography>
                <Typography
                    component='p'
                    variant={isUpBreakpointSM ? 'h6' : 'subtitle1'}
                    color="textSecondary"
                    sx={{ fontWeight: 'light' }}
                // className="text-center"
                >
                    {t('main.contact.body2')}
                </Typography>
                <Box
                    component='div'
                    display='flex'
                    justifyContent='center'
                >
                    <CustomMotionImage />
                </Box>
            </MotionBox>
            <MotionBox
                component='section'
                initial={{ x: '100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                flex={1}
            >
                <CustomForm />
            </MotionBox>
        </Box>
    );
};

export default Contact;

// animate={{
//     // x: 0,
//     // opacity: 1,
//     backgroundColor: ['#2196f3', '#4caf50', '#ff9800', '#e91e63', '#2196f3']
// }}
// // transition={{ duration: 1 }}
// transition={{
//     duration: 10,
//     repeat: Infinity,
//     repeatType: 'loop',
//     ease: 'linear',
// }}
