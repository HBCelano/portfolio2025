import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

type ProjectCardTypes = {
    imgSrc: string;
    title: string;
    desc?: string;
    link?: string;
    visible?: boolean;
};

export const ProjectCard = ({
    imgSrc,
    title,
    desc,
    link,
    visible
}: ProjectCardTypes) => (
    <Card
        variant="outlined"
        sx={{
            maxWidth: 250,
            display: 'flex',
            flexDirection: 'column',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(100px)',
            transition: 'opacity .6s ease-out, transform .6s ease-out'
        }}
    >
        <CardMedia
            component="img"
            alt="Imagen de Proyecto"
            // sx={{ height: 160 }}
            image={imgSrc}
            title={title}
        />
        <CardContent className="grow">
            <Typography gutterBottom variant="h5" component="h5">
                {title}
            </Typography>
            {desc && <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {desc}
            </Typography>}
        </CardContent>
        {link && (
            <CardActions>
                <Button
                    LinkComponent='a'
                    href={link}
                    target='_blank'
                    rel='noopener,noreferrer'
                    size='small'
                    variant='text'
                >
                    Ir al Sitio
                </Button>
            </CardActions>
        )}
    </Card>
);