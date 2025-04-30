import Typography from "@mui/material/Typography";
import { Skills } from "@/presentation/experience/components/Skills";
import { Study } from "@/presentation/experience/components/Study";
import { Work } from "@/presentation/experience/components/Work";

const Experience = () => <>
    <Typography id="study" variant="h2" className="text-center" mt={2}>Estudios</Typography>
    <Study />
    <Typography id="work" variant="h2" className="text-center" mt={6}>Experiencia Laboral</Typography>
    <Work />
    <Typography id="skills" variant="h2" className="text-center" mt={6}>Habilidades</Typography>
    <Skills />
</>;
export default Experience;
