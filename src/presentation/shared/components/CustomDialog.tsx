'use client';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog, { type DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

interface Props extends DialogProps {
    title: string;
    text1: string;
    text2?: string;
    textButton: string;
    open: boolean;
    handleClose: () => void;
};

export function CustomDialog({ title, text1, text2, textButton, open, handleClose, ...rest }: Props) {

    return (
        <BootstrapDialog
            onClose={(event, reason) => {
                if (reason === 'backdropClick' || reason === 'escapeKeyDown') return;
                handleClose();
            }}
            aria-labelledby="custom-dialog"
            open={open}
            {...rest}
        >
            <DialogTitle sx={{ m: 0, p: 2 }} id="custom-dialog">
                {title}
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={(theme) => ({
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                })}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent dividers>
                <Typography gutterBottom>
                    {text1}
                </Typography>
                {
                    text2 && (
                        <Typography gutterBottom>
                            {text2}
                        </Typography>
                    )
                }
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    {textButton}
                </Button>
            </DialogActions>
        </BootstrapDialog>
    );
};
