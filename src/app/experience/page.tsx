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
            component='section'
            id="study"
            sx={{ scrollMarginTop: 100 }}
        >
            <div data-aos='fade-up'>
                <Typography
                    variant="h2"
                    className="text-center"
                    mt={2}
                    fontWeight={200}
                >
                    {t('main.experience.studies.title')}
                </Typography>
                <Study />
            </div>
        </Box>
        <Box
            component='section'
            id="work"
            sx={{ mt: 6, scrollMarginTop: 100 }}
        >
            <div data-aos='fade-up'>
                <Typography
                    variant="h2"
                    className="text-center"
                    fontWeight={200}
                >
                    {t('main.experience.work.title')}
                </Typography>
                <Work />
            </div>
        </Box>
        <Box
            component='section'
            id="skills"
            sx={{ my: 6, scrollMarginTop: 100 }}
        >
            <div data-aos='fade-up'>
                <Typography
                    variant="h2"
                    className="text-center"
                    fontWeight={200}
                >
                    {t('main.experience.skills.title')}
                </Typography>
                <Skills />
            </div>
        </Box>
    </>;
};

export default Experience;
