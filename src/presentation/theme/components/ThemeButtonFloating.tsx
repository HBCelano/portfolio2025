import { useColorScheme } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const ThemeButtonFloating = () => {
    const { mode, setMode } = useColorScheme();
    console.log(mode);
    if (!mode) return null;

    return (
        <Fab color="secondary" size="small" aria-label="ModeButton">
            {mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
        </Fab>
    );
};
