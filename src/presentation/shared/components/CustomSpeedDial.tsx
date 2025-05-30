'use client';

import { type ComponentType, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
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
    const { t } = useTranslation();
    const [copiado, setCopiado] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const userAgent = typeof window !== 'undefined' ? navigator.userAgent : '';
        const isMobileDevice = /Mobi|mobile|Android|iPhone|iPad|iPod/i.test(userAgent);
        setIsMobile(isMobileDevice);
    }, []);

    const copiarAlPortapapeles = async () => {
        try {
            await navigator.clipboard.writeText(`${window.location.origin}/pdfs/cv/cv.pdf`);
            setCopiado(true);
            setTimeout(() => setCopiado(false), 1000);
        } catch (error) {
            console.error('Error: ', error);
        };
    };

    const actions: ActionsType[] = [
        {
            Icon: EmailIcon,
            tooltipText: 'Gmail',
            onClick: () => {
                const elementA = document.createElement('a');
                elementA.href = (isMobile
                    ?
                    `mailto:?subject=${encodeURIComponent(t('main.contact.cv.gmailSubject'))}&body=${shareText}`
                    :
                    `https://mail.google.com/mail/?view=cm&fs=1&su=${encodeURIComponent(t('main.contact.cv.gmailSubject'))}&body=${shareText}`
                );
                elementA.target = '_blank';
                elementA.rel = 'noopener,noreferrer';
                document.body.appendChild(elementA);
                elementA.click();
                document.body.removeChild(elementA);
            }
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
            <Box component='div'>
                <Snackbar
                    open={copiado}
                    // autoHideDuration={5000}
                    // onClose={handleClose}
                    message={copyMessage}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    sx={{
                        bottom: 32,
                        '@media (min-width: 600px)': {
                            bottom: 32
                        },
                        '& .MuiSnackbarContent-root': {
                            width: 'auto',
                            maxWidth: 'none',
                            minWidth: 'unset',
                            flexGrow: 0
                        }
                    }}
                />
            </Box>
        </>
    );
};
