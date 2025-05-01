import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const ProjectCard = ({ imgSrc, title, desc }: { imgSrc: string, title: string, desc?: string }) => (
    <Card sx={{ maxWidth: 220 }}>
        <CardMedia
            component="img"
            alt="Imagen de Habilidad"
            height="50"
            image={imgSrc}
        />
        <Box
            component='section'
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
        >
            <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                    {title}
                </Typography>
                {desc && <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {desc}
                </Typography>}
            </CardContent>
            <CardActions>
                <Button size="small">Ir al Sitio</Button>
            </CardActions>
        </Box>
    </Card>
);

const Projects = () => (
    <>
        <Typography variant="h2" className="text-center" gutterBottom>Proyectos</Typography>
        <Box
            component='section'
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 5,
                mt: 6
            }}
        >
            <ProjectCard
                imgSrc="/img/projects/simpsons.jpg"
                title="The Simpsons"
                desc="Sitio web estático, solo HTML y CSS."
            />
            <ProjectCard
                imgSrc="/img/projects/todolist.jpg"
                title="Carga de Tareas"
                desc="Sitio web estático con HTML, CSS y JS."
            />
            <ProjectCard
                imgSrc="/img/projects/formDeContacto.jpg"
                title="Formulario de Contacto"
                desc="Página estática."
            />
            <ProjectCard
                imgSrc="/img/projects/stock.jpg"
                title="Control de Stock"
                desc="Sitio estático con JS para controlar stock de productos."
            />
            <ProjectCard
                imgSrc="/img/projects/autos.jpg"
                title="Filtro de Autos"
                desc="Sitio para aplicar filtro con JS."
            />
            <ProjectCard
                imgSrc="/img/projects/api-clima.jpg"
                title="Clima Actual"
                desc="Sitio web que ofrece el clima actual filtrado por región (consumo de API con JS)."
            />
            <ProjectCard
                imgSrc="/img/projects/portfolio_old.jpg"
                title="Portfolio Antiguo"
                desc="Portfolio web estático (versión anterior)."
            />
            <ProjectCard
                imgSrc="/img/projects/pedidos.jpg"
                title="Pedidos Web"
                desc="Sistema dinámico de Pedidos Web (PHP y MySQL para manejo de sesiones)."
            />
            <ProjectCard
                imgSrc="/img/projects/helados.jpg"
                title="Heladería"
                desc="Sistema web para gestionar pedidos de helados (PHP y MySQL)."
            />
            <ProjectCard
                imgSrc="/img/projects/tickets.jpg"
                title="Cartelera de Tickets"
                desc="Sitio web de venta de tickets online (PHP y MySQL)."
            />
            <ProjectCard
                imgSrc="/img/projects/tienda_online.jpg"
                title="Tienda Online"
                desc="Tienda online construida con Python (Flask y PostgreSQL)."
            />
        </Box>
    </>
);

export default Projects;
