import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const ProjectCard = ({ imgSrc, title, desc }: { imgSrc: string, title: string, desc?: string }) => (
    <Card sx={{ maxWidth: 180 }}>
        <CardMedia
            component="img"
            alt="Imagen de Habilidad"
            height="50"
            image={imgSrc}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h5">
                {title}
            </Typography>
            {desc && <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {desc}
            </Typography>}
        </CardContent>
        <CardActions>
            <Button size="small">Leer más</Button>
        </CardActions>
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
                imgSrc="/img/skills/html5.svg"
                title="HTML"
                desc="lorem input so jags koh vla la bla cualquiera desc"
            />
            <ProjectCard
                imgSrc="/img/skills/css.svg"
                title="CSS"
                desc="lorem input so jags koh vla la bla cualquier description input so jags koh vla la bla cualquier desc"
            />
            <ProjectCard
                imgSrc="/img/skills/bootstrap.svg"
                title="Bootstrap"
                desc="lorem input"
            />
        </Box>
    </>
);

export default Projects;
