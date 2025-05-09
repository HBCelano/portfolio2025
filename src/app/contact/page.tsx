'use client';

import {
    useEffect
    // forwardRef
} from "react";
import { useTranslation } from 'react-i18next';
// import { motion, type MotionProps } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    Box,
    Typography,
    useTheme,
    useMediaQuery,
    ButtonGroup,
    Button,
    Divider
    // type BoxProps
} from "@mui/material";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
// import { CustomMotionImage } from "root/src/presentation/contact/CustomMotionImage";
import { CustomForm } from "@/presentation/contact/CustomForm";
import { CustomSpeedDial } from "@/presentation/shared/components";

// const MotionBoxForwardRef = forwardRef<HTMLElement, MotionProps & BoxProps>((props, ref) => <Box ref={ref} {...props} />);
// MotionBoxForwardRef.displayName = 'MotionBox';
// const MotionBox = motion.create(MotionBoxForwardRef);

const Contact = () => {
    const theme = useTheme();
    const isUpBreakpointSM = useMediaQuery(theme.breakpoints.up('sm'));
    const { t } = useTranslation();

    useEffect(() => { AOS.init(); }, []);

    return (
        <Box
            component='section'
            className="flex max-[900px]:flex-col justify-center gap-10 xl:gap-24"
            sx={{ pt: { md: 4 }, pb: 4 }}
        >
            {/* <MotionBox */}
            <Box
                component='section'
                flex={1}
                data-aos='fade-right'
                data-aos-duration={1000}
            // initial={{ x: '-100vw', opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            // transition={{ duration: 1 }}
            >
                <Typography component='h1' variant={isUpBreakpointSM ? 'h2' : 'h3'} fontWeight={isUpBreakpointSM ? 300 : 200} className="text-center">
                    {t('main.contact.title')}
                </Typography>
                <Typography
                    component='p'
                    variant={isUpBreakpointSM ? 'h6' : 'subtitle1'}
                    sx={{ marginTop: '1rem', marginBottom: '2rem', fontWeight: 'light' }}
                    gutterBottom
                    className="text-center"
                >
                    {t('main.contact.body1')}
                </Typography>
                <Divider>CV</Divider>
                <Typography
                    component='p'
                    variant={isUpBreakpointSM ? 'h6' : 'subtitle1'}
                    color="textSecondary"
                    sx={{ fontWeight: 'light', mt: 2, mb: 3 }}
                    className="text-center"
                >
                    {t('main.contact.body2')}
                </Typography>
                <Box
                    component='section'
                    display='flex'
                    flexDirection='column'
                    // justifyContent='space-between'
                    justifyContent='center'
                    alignItems='center'
                    gap={3}
                >
                    <Box
                        component='div'
                    >
                        <ButtonGroup variant="outlined" aria-label="Basic button group">
                            <Button startIcon={<VisibilityOutlinedIcon />}>
                                Ver
                            </Button>
                            <Button startIcon={<CloudDownloadOutlinedIcon />}>
                                Descargar
                            </Button>
                        </ButtonGroup>
                    </Box>
                    <CustomSpeedDial />
                </Box>
                {/* <Box
                    component='div'
                    display='flex'
                    justifyContent='center'
                >
                    <CustomMotionImage />
                </Box> */}
            </Box>
            {/* </MotionBox> */}
            {/* <MotionBox */}
            <Box
                component='section'
                flex={1}
                data-aos='fade-left'
                data-aos-duration={1000}
            // initial={{ x: '100vw', opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            // transition={{ duration: 1 }}
            >
                <CustomForm />
            </Box>
            {/* </MotionBox> */}
        </Box>
    );
};

export default Contact;
