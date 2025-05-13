'use client';

import { type ComponentType, useState } from 'react';
import SpeedDial from '@mui/material/SpeedDial';
// import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import { type SvgIconProps } from '@mui/material/SvgIcon';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import SaveIcon from '@mui/icons-material/Save';
// import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// const actions = [
//     { icon: <VisibilityIcon />, tooltipTitle: 'Ver' },
//     { icon: <SaveIcon />, tooltipTitle: 'Descargar' },
//     { icon: <PrintIcon />, tooltipTitle: 'Imprimir' },
//     { icon: <ShareIcon />, tooltipTitle: 'Compartir' }
// ];

type ActionsType = {
    Icon: ComponentType<SvgIconProps>;
    tooltipTitle: 'Gmail' | 'WhatsApp' | 'Copiar Link al portapapeles';
    onClick: () => void;
};

export const CustomSpeedDial = ({ tooltipTitle, shareText }: { tooltipTitle?: string, shareText?: string }) => {
    const [copiado, setCopiado] = useState(false);

    const copiarAlPortapapeles = async () => {
        try {
            await navigator.clipboard.writeText(`${window.location.origin}/pdfs/cv/cv.pdf`);
            setCopiado(true);
            setTimeout(() => setCopiado(false), 1500);
        } catch (error) {
            console.error('Error al copiar al portapapeles: ', error);
        };
    };

    const actions: ActionsType[] = [
        {
            Icon: EmailIcon,
            tooltipTitle: 'Gmail',
            onClick: () => { }
        },
        {
            Icon: WhatsAppIcon,
            tooltipTitle: 'WhatsApp',
            onClick: () => window.open(`https://wa.me/?text=${shareText}`, '_blank', 'noopener,noreferrer')
        },
        {
            Icon: ContentCopyIcon,
            tooltipTitle: 'Copiar Link al portapapeles',
            onClick: () => copiarAlPortapapeles()
        }
    ];

    return (
        <>
            <SpeedDial
                direction='down'
                // icon={
                //     <Box component='div' display='flex' alignItems='center' columnGap={1}>
                //         <span>Compartir CV</span>
                //         <ShareIcon />
                //         {/* <SpeedDialIcon /> */}
                //     </Box>
                // }
                icon={<Tooltip title={tooltipTitle} placement="right"><ShareIcon /></Tooltip>}
                FabProps={{
                    size: 'small',
                    color: 'secondary'
                    // title: tooltipTitle
                    // variant: 'extended',
                    // sx: { borderRadius: 2 }
                }}
                ariaLabel="Actions with CV"
                sx={{
                    '& .MuiSpeedDial-actions': {
                        flexDirection: 'row'
                    }
                }}
            >
                {
                    actions.map((action, index) => (
                        <SpeedDialAction
                            key={index}
                            icon={<action.Icon />}
                            slotProps={{ tooltip: { title: action.tooltipTitle, placement: 'bottom' } }}
                            onClick={action.onClick}
                        />
                    ))
                }
            </SpeedDial>
            <Snackbar
                open={copiado}
                // autoHideDuration={5000}
                // onClose={handleClose}
                message="Link Copiado!"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                sx={{ top: 500 }}
            />
        </>
    );
};
