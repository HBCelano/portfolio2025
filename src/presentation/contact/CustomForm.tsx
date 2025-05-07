import { useState } from 'react';
import Image from 'next/image';
import { useTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MuiCard from '@mui/material/Card';

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '450px',
    },
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    })
}));

export function CustomForm() {
    const { palette } = useTheme();
    const [nameError, setNameError] = useState(false);
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');

    const validateInputs = () => {
        const name = document.getElementById('name') as HTMLInputElement;
        const email = document.getElementById('email') as HTMLInputElement;
        let isValid = true;
        if (!name.value) {
            setNameError(true);
            setNameErrorMessage('Password must be at least 6 characters long.');
            isValid = false;
        } else {
            setNameError(false);
            setNameErrorMessage('');
        };
        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Por favor ingrese un e-mail válido.');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        };
        return isValid;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('name'),
            password: data.get('email'),
            message: data.get('message'),
        });
    };

    return (
        <Card variant="outlined">
            <Box
                component='section'
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: 1
                }}
            >
                <Image
                    src={palette.mode === 'dark' ? '/img/cv.svg' : '/img/cv-light.svg'}
                    width={35}
                    height={35}
                    alt="Logo"
                />
                <Typography
                    component="h2"
                    variant="h5"
                    fontWeight={300}
                >
                    HBCelano
                </Typography>
            </Box>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    gap: 2
                }}
            >
                <TextField
                    type="text"
                    id="name"
                    name="name"
                    label="Nombre"
                    variant="outlined"
                    color={nameError ? 'error' : 'primary'}
                    fullWidth
                    placeholder="Ingrese su nombre"
                    autoComplete="off"
                    autoFocus
                    required
                    error={nameError}
                    helperText={nameErrorMessage}
                />
                <TextField
                    type="email"
                    id="email"
                    name="email"
                    label="E-mail"
                    variant="outlined"
                    color={emailError ? 'error' : 'primary'}
                    fullWidth
                    placeholder="Ingrese su e-mail"
                    autoComplete="email"
                    autoFocus
                    required
                    error={emailError}
                    helperText={emailErrorMessage}
                />
                <TextField
                    type="text"
                    id="message"
                    name="message"
                    label="Mensaje"
                    variant="outlined"
                    color='primary'
                    fullWidth
                    placeholder="Ingrese su mensaje"
                    autoComplete="off"
                    autoFocus
                    required
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={validateInputs}
                // startIcon={ }
                >
                    Enviar
                </Button>
            </Box>
            <Divider>Redes</Divider>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button
                    fullWidth
                    variant="outlined"
                    // startIcon={ }
                    onClick={() => { }}
                >
                    Ir a WhatsApp
                </Button>
                <Button
                    fullWidth
                    variant="outlined"
                    // startIcon={ }
                    onClick={() => { }}
                >
                    Ir a Instagram
                </Button>
                <Button
                    fullWidth
                    variant="outlined"
                    // startIcon={ }
                    onClick={() => { }}
                >
                    Ir a LinkedIn
                </Button>
            </Box>
        </Card>
    );
};
