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
    tooltipText?: string;
    onClick: () => void;
};

type CustomSpeedDialProps = {
    tooltipTitle?: string;
    tooltipTitleCopyURL?: string;
    copyMessage?: string;
    shareText?: string;
};

export const CustomSpeedDial = ({ tooltipTitle, tooltipTitleCopyURL, copyMessage, shareText }: CustomSpeedDialProps) => {
    const [copiado, setCopiado] = useState(false);

    const copiarAlPortapapeles = async () => {
        try {
            await navigator.clipboard.writeText(`${window.location.origin}/pdfs/cv/cv.pdf`);
            setCopiado(true);
            setTimeout(() => setCopiado(false), 1500);
        } catch (error) {
            console.error('Error: ', error);
        };
    };

    const actions: ActionsType[] = [
        {
            Icon: EmailIcon,
            tooltipText: 'Gmail',
            onClick: () => { }
        },
        {
            Icon: WhatsAppIcon,
            tooltipText: 'WhatsApp',
            onClick: () => {
                // window.open(`https://wa.me/?text=${shareText}`, '_blank', 'noopener,noreferrer');
                const link = document.createElement('a');
                link.href = `https://wa.me/?text=${shareText}`;
                link.target = '_blank';
                link.rel = 'noopener,noreferrer';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        },
        {
            Icon: ContentCopyIcon,
            tooltipText: tooltipTitleCopyURL,
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
                            slotProps={{ tooltip: { title: action.tooltipText, placement: 'bottom' } }}
                            onClick={action.onClick}
                        />
                    ))
                }
            </SpeedDial>
            <Snackbar
                open={copiado}
                // autoHideDuration={5000}
                // onClose={handleClose}
                message={copyMessage}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                sx={{ top: 500 }}
            />
        </>
    );
};
