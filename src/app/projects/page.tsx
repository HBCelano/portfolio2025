'use client';

import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import { ProjectCard } from '@/presentation/projects/components/ProjectCard';

type ProjectTypes = {
    imgSrc: string;
    title: string;
    desc?: string;
    link?: string;
    delay?: number;
};

const Projects = () => {
    const { t } = useTranslation();
    const projects: ProjectTypes[] = t('main.projects.data', { returnObjects: true }) as ProjectTypes[];
    const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(projects.length).fill(false));

    useEffect(() => {
        projects.forEach((project, index) => {
            setTimeout(() => {
                setVisibleCards(prev => {
                    const updated = [...prev];
                    updated[index] = true;
                    return updated;
                });
            }, project.delay);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Typography
                variant="h2"
                className="text-center"
                mt={2}
                fontWeight={200}
                gutterBottom
            >
                {t('main.projects.title')}
            </Typography>
            <Box
                component='section'
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    columnGap: 6,
                    rowGap: 8,
                    my: 6
                }}
            >
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        {...project}
                        buttonText={t('main.projects.buttonCard')}
                        visible={visibleCards[index]}
                    />
                ))}
            </Box>
        </>
    );
};

export default Projects;
