import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const SkillCard = ({ imgSrc, title }: { imgSrc: string, title: string, desc?: string }) => (
    <Card sx={{ maxWidth: 250 }}>
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
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Leer más</Button>
        </CardActions>
    </Card>
);

const Skills = () => (
    <>
        <Typography variant="h2" className="text-center">Habilidades</Typography>
        <Box
            component='section'
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 5
            }}
        >
            <SkillCard
                imgSrc="/img/skills/html.png"
                title="HTML"
            />
            <SkillCard
                imgSrc="/img/skills/css.png"
                title="CSS"
            />
            <SkillCard
                imgSrc="/img/skills/bootstrap.png"
                title="Bootstrap"
            />
        </Box>
    </>
);

export default Skills;
