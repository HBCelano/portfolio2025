import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";

const StudySection = ({ title, date, subtitle1, subtitle2 }: { title: string, date: string, subtitle1: string, subtitle2?: string }) => (
    <Box
        component='section'
    >
        <Box
            component='div'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            mb={2}
        >
            <Typography component='h5' variant='h5' fontWeight={300} className="uppercase">{title}</Typography>
            <Typography component='span' variant='body2' color="textSecondary">{date}</Typography>
        </Box>
        <Typography component='h6' variant='h6' fontWeight={400}>{subtitle1}</Typography>
        {subtitle2 && <Typography component='span' variant='body2' color="textSecondary">{subtitle2}</Typography>}
    </Box>
);

const Study = () => (
    <Box
        component='section'
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            px: { xs: 2, sm: 3, md: 6, lg: 10 },
            mt: 4
        }}
    >
        <Box
            component='section'
            display='flex'
            flexDirection='column'
            p={2}
            className="border-1 border-gray-400 rounded-lg gap-4"
        >
            <StudySection
                title="Tecnicatura en Análisis de Sistemas"
                date="Marzo 2023 - Actualidad"
                subtitle1="Instituto Superior de Formación Técnica N° 132."
                subtitle2="Chacabuco, Buenos Aires."
            />
            <Divider />
            <StudySection
                title="Curso de Programación Web Full Stack"
                date="Agosto 2022 - Febrero 2023"
                subtitle1="Programá Desde Tu Casa."
                subtitle2="Online."
            />
        </Box>
    </Box>
);

export { Study };
