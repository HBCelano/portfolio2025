'use client';

import {
    useEffect,
    useState
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
import { CustomSpeedDial, CustomLoader } from "@/presentation/shared/components";
import { CustomForm } from "@/presentation/contact/CustomForm";

// const MotionBoxForwardRef = forwardRef<HTMLElement, MotionProps & BoxProps>((props, ref) => <Box ref={ref} {...props} />);
// MotionBoxForwardRef.displayName = 'MotionBox';
// const MotionBox = motion.create(MotionBoxForwardRef);

const Contact = () => {
    const theme = useTheme();
    const isUpBreakpointSM = useMediaQuery(theme.breakpoints.up('sm'));
    const { t } = useTranslation();
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => { AOS.init(); }, []);

    const SectionCV = (
        <>
            <Divider
            // sx={{
            //     '::before': { borderTopWidth: '2px' },
            //     "::after": { borderTopWidth: '2px' }
            // }}
            >
                <Box
                    component='span'
                    className="text-2xl font-bold"
                    color='primary.main'
                >
                    CV
                </Box>
            </Divider>
            <Typography
                component='p'
                variant='h6'
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
                <ButtonGroup variant="outlined" aria-label="Basic button group">
                    <Button
                        LinkComponent='a'
                        href={`${window.location.origin}/pdfs/cv/cv.pdf`}
                        target="_blank"
                        rel="noopener,noreferrer"
                        startIcon={<VisibilityOutlinedIcon />}
                    >
                        {t('main.contact.cv.view')}
                    </Button>
                    <Button
                        LinkComponent='a'
                        href={`${window.location.origin}/pdfs/cv/cv.pdf`}
                        download='Homero Celano - CV'
                        startIcon={<CloudDownloadOutlinedIcon />}
                    >
                        {t('main.contact.cv.download')}
                    </Button>
                </ButtonGroup>
                <CustomSpeedDial tooltipTitle={t('main.contact.cv.shareTooltip')} shareText={`${encodeURIComponent('Hola, te comparto el siguiente Curriculum Vitae: ')}${window.location.origin}/pdfs/cv/cv.pdf`} />
            </Box>
        </>
    );

    return (
        <Box component='section' sx={{ pt: { md: 4 }, pb: 4 }}>
            <Box
                component='section'
                className="flex max-[900px]:flex-col justify-center gap-8 xl:gap-20"
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
                        variant={isUpBreakpointSM ? 'h5' : 'h6'}
                        sx={{ mt: '2rem', fontWeight: 'light' }}
                        className="text-center"
                    >
                        {t('main.contact.body1')}
                    </Typography>
                    <Box
                        component='div'
                        display={{ xs: 'none', md: 'block' }}
                        mt={5}
                    >
                        {SectionCV}
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
                    <CustomForm setOpenBackdrop={setOpen} />
                </Box>
                {/* </MotionBox> */}
            </Box>
            <Box
                component='div'
                display={{ xs: 'block', md: 'none' }}
                mt={8}
                data-aos='zoom-in'
            >
                {SectionCV}
            </Box>
            <CustomLoader open={open} />
        </Box>
    );
};

export default Contact;
