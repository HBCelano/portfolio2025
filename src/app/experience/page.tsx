import Typography from "@mui/material/Typography";
import { Skills } from "@/presentation/experience/components/Skills";

const Experience = () => <>
    <Typography id="study" variant="h2" className="text-center">Estudios</Typography>
    <Typography id="work" variant="h2" className="text-center">Experiencia laboral actual</Typography>
    <Typography id="skills" variant="h2" className="text-center">Habilidades</Typography>
    <Skills />
</>;
export default Experience;
