import Box from "@mui/material/Box";
import { CustomSectionInfo } from "./CustomSectionInfo";

const Work = () => (
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
                title="Pampa Software"
                date="Noviembre 2023 - Actualidad"
                subtitle1="Desarrollo Full Stack de aplicaciones Web | Móviles."
                subtitle2="Chacabuco, Buenos Aires."
            />
        </Box>
    </Box>
);

export { Work };
