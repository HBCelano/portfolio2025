import { useTranslation } from "react-i18next";
import { useColorScheme, useTheme } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const ThemeButtonFloating = () => {
    const { t } = useTranslation();
    const {
        // mode,
        setMode
    } = useColorScheme();
    const { palette } = useTheme();
    // if (!mode) return null;

    return (
        <Tooltip title={palette.mode === 'light' ? t('header.navbarWithDrawer.themeButton.dark') : t('header.navbarWithDrawer.themeButton.light')} placement="bottom">
            <Fab
                color='default'
                size={'small'}
                aria-label="ModeButton"
                sx={{
                    ml: 8,
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
                        <DarkModeIcon
                        // fontSize="small"
                        /> :
                        <LightModeIcon
                        // fontSize="small"
                        />
                }
            </Fab>
        </Tooltip>
    );
};
