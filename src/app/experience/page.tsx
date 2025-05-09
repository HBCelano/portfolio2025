'use client';

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Study } from "@/presentation/experience/components/Study";
import { Work } from "@/presentation/experience/components/Work";
import { Skills } from "@/presentation/experience/components/Skills";

const Experience = () => {
    const { t } = useTranslation();

    useEffect(() => { AOS.init(); }, []);

    return <>
        <Box
            component='div'
            data-aos='fade-up'
        >
            <Typography
                id="study"
                variant="h2"
                className="text-center"
                mt={2}
                fontWeight={200}
                sx={{ scrollMarginTop: 75 }}
            >
                {t('main.experience.studies.title')}
            </Typography>
            <Study />
        </Box>
        <Box
            component='div'
            data-aos='fade-up'
        >
            <Typography
                id="work"
                variant="h2"
                className="text-center"
                mt={6}
                fontWeight={200}
                sx={{ scrollMarginTop: 75 }}
            >
                {t('main.experience.work.title')}
            </Typography>
            <Work />
        </Box>
        <Box
            component='div'
            data-aos='fade-up'
            mb={6}
        >
            <Typography
                id="skills"
                variant="h2"
                className="text-center"
                mt={6}
                fontWeight={200}
                sx={{ scrollMarginTop: 75 }}
            >
                {t('main.experience.skills.title')}
            </Typography>
            <Skills />
        </Box>
    </>;
};

export default Experience;
