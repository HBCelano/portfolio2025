'use client';

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import { ProjectCard } from '@/presentation/projects/components/ProjectCard';

const projects = [
    {
        imgSrc: "/img/projects/thesimpsons.png",
        title: "The Simpsons",
        desc: "Sitio web estático, solo HTML y CSS.",
        link: "https://hbcelano-thesimpsons.netlify.app/",
        delay: 0
    },
    {
        imgSrc: "/img/projects/contact.png",
        title: "Formulario de Contacto",
        desc: "Página estática.",
        link: "https://hbcelano-contact.netlify.app/",
        delay: 200
    },
    {
        imgSrc: "/img/projects/stock.png",
        title: "Control de Stock",
        desc: "Sitio estático con JS para controlar stock de productos.",
        link: "https://hbcelano-stock.netlify.app/",
        delay: 400
    },
    {
        imgSrc: "/img/projects/autos.png",
        title: "Filtro de Autos",
        desc: "Sitio para aplicar filtro con JS.",
        link: "https://hbcelano-autos.netlify.app/",
        delay: 600
    },
    {
        imgSrc: "/img/projects/clima.png",
        title: "Clima Actual",
        desc: "Sitio web que ofrece el clima actual filtrado por región (consumo de API con JS).",
        link: "https://hbcelano-clima.netlify.app/",
        delay: 800
    },
    {
        imgSrc: "/img/projects/portfolio_old.png",
        title: "Portfolio Antiguo",
        desc: "Portfolio web estático (versión anterior).",
        link: "https://hbcelano-portfolio.netlify.app/",
        delay: 1000
    },
    {
        imgSrc: "/img/projects/netflix.png",
        title: "Cartelera de Películas",
        desc: "Sitio web estático con HTML, CSS y JS (Login simulado con JS).",
        link: "https://hbcelano-peliculas.netlify.app/",
        delay: 1200
    },
    {
        imgSrc: "/img/projects/pedidos.png",
        title: "Pedidos Web",
        desc: "Sistema dinámico de Pedidos Web (PHP y MySQL para manejo de sesiones).",
        link: "https://pedidosray-hbcelano.infinityfreeapp.com/",
        delay: 1400
    },
    {
        imgSrc: "/img/projects/helados.png",
        title: "Heladería",
        desc: "Sistema web para gestionar pedidos de helados (PHP y MySQL).",
        link: "https://helados-hbcelano.infinityfreeapp.com/",
        delay: 1600
    },
    {
        imgSrc: "/img/projects/tickets.png",
        title: "Cartelera de Tickets",
        desc: "Sitio web de venta de tickets online (PHP y MySQL).",
        link: "https://tickets-hbcelano.infinityfreeapp.com/",
        delay: 1800
    },
    {
        imgSrc: "/img/projects/tienda_online.png",
        title: "Tienda Online",
        desc: "Tienda online construida con Python (Flask y PostgreSQL).",
        link: "https://hbcelano.pythonanywhere.com/",
        delay: 2000
    }
];

const Projects = () => {
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
    }, []);

    return (
        <>
            <Typography variant="h2" className="text-center" gutterBottom>Proyectos</Typography>
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
                        visible={visibleCards[index]}
                    />
                ))}
            </Box>
        </>
    );
};

export default Projects;
