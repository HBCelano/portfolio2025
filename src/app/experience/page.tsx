import Typography from "@mui/material/Typography";
import { Study } from "@/presentation/experience/components/Study";
import { Work } from "@/presentation/experience/components/Work";
import { Skills } from "@/presentation/experience/components/Skills";

const Experience = () => <>
    <Typography
        id="study"
        variant="h2"
        className="text-center"
        mt={2}
        fontWeight={200}
        sx={{ scrollMarginTop: 75 }}
    >
        Estudios
    </Typography>
    <Study />
    <Typography
        id="work"
        variant="h2"
        className="text-center"
        mt={6}
        fontWeight={200}
        sx={{ scrollMarginTop: 75 }}
    >
        Experiencia Laboral
    </Typography>
    <Work />
    <Typography
        id="skills"
        variant="h2"
        className="text-center"
        mt={6}
        fontWeight={200}
        sx={{ scrollMarginTop: 75 }}
    >
        Habilidades
    </Typography>
    <Skills />
</>;
export default Experience;
