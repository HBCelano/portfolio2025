import Fab from "@mui/material/Fab";
import LanguageIcon from '@mui/icons-material/Language';

export const LanguageButtonFloating = () => {

    return (
        <Fab
            variant="extended"
            color='default'
            size={'small'}
            aria-label="LanguageButton"
            sx={{ ml: 2 }}
            onClick={() => { }}
        >
            <LanguageIcon />
            English
        </Fab>
    );
};
