import SpeedDial from '@mui/material/SpeedDial';
// import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Tooltip from '@mui/material/Tooltip';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import SaveIcon from '@mui/icons-material/Save';
// import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// const actions = [
//     { icon: <VisibilityIcon />, tooltipTitle: 'Ver' },
//     { icon: <SaveIcon />, tooltipTitle: 'Descargar' },
//     { icon: <PrintIcon />, tooltipTitle: 'Imprimir' },
//     { icon: <ShareIcon />, tooltipTitle: 'Compartir' }
// ];

const actions = [
    { icon: <EmailIcon />, tooltipTitle: 'Gmail' },
    { icon: <WhatsAppIcon />, tooltipTitle: 'WhatsApp' },
    { icon: <LinkedInIcon />, tooltipTitle: 'LinkedIn' }
];

export const CustomSpeedDial = ({ tooltipTitle }: { tooltipTitle?: string }) => (

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
        {actions.map((action, index) => (
            <SpeedDialAction
                key={index}
                icon={action.icon}
                slotProps={{ tooltip: { title: action.tooltipTitle, placement: 'bottom' } }}
            />
        ))}
    </SpeedDial>
);
