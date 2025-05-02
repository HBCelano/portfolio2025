import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { CustomSectionInfo } from "./CustomSectionInfo";

const Study = () => (
    <Box
        component='section'
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
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
            <CustomSectionInfo
                title="Tecnicatura en Análisis de Sistemas"
                date="Marzo 2023 - Actualidad"
                subtitle1="Instituto Superior de Formación Técnica N° 132."
                subtitle2="Chacabuco, Buenos Aires."
            />
            <Divider />
            <CustomSectionInfo
                title="Curso de Programación Web Full Stack"
                date="Agosto 2022 - Febrero 2023"
                subtitle1="Programá Desde Tu Casa."
                subtitle2="Online."
            />
        </Box>
    </Box>
);

export { Study };
