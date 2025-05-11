import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export const CustomLoader = ({ open }: { open: boolean }) => <Backdrop
    sx={theme => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
    open={open}
>
    <CircularProgress color="info" size='4rem' />
</Backdrop>;
