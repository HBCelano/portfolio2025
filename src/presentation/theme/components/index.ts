'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const customTheme = createTheme({
    colorSchemes: {
        dark: true
    }
    // palette: {
    //     mode: 'dark'
    // }
});

export { ThemeProvider, customTheme };
export default CssBaseline;
export * from './ThemeButtonFloating';
