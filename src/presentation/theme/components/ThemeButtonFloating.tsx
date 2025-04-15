import { useColorScheme, useTheme } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const ThemeButtonFloating = () => {
    const {
        // mode,
        setMode
    } = useColorScheme();
    const { palette } = useTheme();
    // if (!mode) return null;

    return (
        <Fab
            color='default'
            size={'small'}
            aria-label="ModeButton"
            sx={{
                ml: 5,
                width: 32,      // más chico que el default small (40px)
                height: 32,
                minHeight: 'auto',
                boxShadow: 'none',
                padding: 0
            }}
            onClick={() => setMode(palette.mode === 'dark' ? 'light' : 'dark')}
        >
            {
                palette.mode === 'light' ?
                    <LightModeIcon
                    // fontSize="small"
                    /> :
                    <DarkModeIcon
                    // fontSize="small"
                    />
            }
        </Fab>
    );
};
