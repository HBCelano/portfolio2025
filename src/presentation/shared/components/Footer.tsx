'use client';

// import { forwardRef } from 'react';
import Link from "next/link";
import { useTranslation } from "react-i18next";
import {
    motion
    // type MotionProps
} from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import Box, {
    // type BoxProps
}
    from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
// import LogoSvg from 'root/public/img/cv-footer.svg';
import LogoSvgHC from 'root/public/img/hc.svg';
import Instagram from '@mui/icons-material/Instagram';
import WhatsApp from '@mui/icons-material/WhatsApp';
import LinkedIn from '@mui/icons-material/LinkedIn';
// import WhatsAppSVG from 'root/public/img/contact/whatsapp.svg';
// import InstagramSVG from 'root/public/img/contact/instagram.svg';
// import LinkedInSVG from 'root/public/img/contact/linkedin.svg';

// const MotionBoxForwardRef = forwardRef<HTMLElement, MotionProps & BoxProps>((props, ref) => <Box ref={ref} {...props} />);
// MotionBoxForwardRef.displayName = 'MotionBox';
// const MotionBox = motion.create(MotionBoxForwardRef);
const SVGMotion = motion.create(LogoSvgHC);

export const Footer = () => {
    const { palette } = useTheme();
    const { t } = useTranslation();

    return (
        <Box
            component={'footer'}
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                paddingTop: { xs: 0, md: '1rem' },
                marginBottom: { xs: 3, sm: 0 },
                gap: { xs: 1, sm: 0 }
            }}
        >
            <Box component='section' sx={{ flex: 1 }}>
                {/* <MotionBox
                    sx={{
                        borderRadius: '50%',
                        width: 36,
                        height: 36
                    }}
                    animate={{ backgroundColor: ['#2196f3', '#4caf50', '#ff9800', '#e91e63', '#2196f3'] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'linear'
                    }}
                >
                    <LogoSvg
                        width={'100%'} height={'100%'}
                        color={palette.mode === 'dark' ? 'white' : 'black'}
                        stroke={palette.mode === 'dark' ? 'white' : 'black'}
                        strokeWidth={2}
                        style={{ transform: 'scale(1.2)' }}
                    />
                </MotionBox> */}
                <SVGMotion
                    width='45'
                    height='45'
                    color={palette.mode === 'dark' ? 'white' : 'black'}
                    animate={{ fill: ['#2196f3', '#4caf50', '#ff9800', '#e91e63', '#2196f3'] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'linear'
                    }}
                />
            </Box>
            <Typography sx={{ flex: 1 }} variant="overline" fontSize='.85rem' align="center">
                {new Date().getFullYear()} &copy; {t('footer.copyright')}
            </Typography>
            <Box
                component='section'
                className="flex flex-1 gap-x-4 justify-end"
            >
                <Tooltip title={t('footer.tooltips.whatsapp')} placement="top">
                    <Link href='https://wa.me/5492352417849' target="_blank" rel='noreferrer'>
                        {/* <WhatsAppSVG width={36} height={36} /> */}
                        <WhatsApp color="success" fontSize="large" />
                    </Link>
                </Tooltip>
                <Tooltip title={t('footer.tooltips.instagram')} placement="top">
                    <Link href='https://www.instagram.com/homecelano/' target="_blank" rel='noreferrer'>
                        {/* <InstagramSVG width={36} height={36} /> */}
                        <Instagram color="secondary" fontSize="large" />
                    </Link>
                </Tooltip>
                <Tooltip title={t('footer.tooltips.linkedIn')} placement="top">
                    <Link href='https://linkedin.com/in/hbcelano/' target="_blank" rel='noreferrer'>
                        {/* <LinkedInSVG width={36} height={36} /> */}
                        <LinkedIn color="primary" fontSize="large" />
                    </Link>
                </Tooltip>
            </Box>
        </Box>
    );
};
