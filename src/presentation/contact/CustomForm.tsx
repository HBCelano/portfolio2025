import { useState } from 'react';
import Image from 'next/image';
import { useTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MuiCard from '@mui/material/Card';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import GmailSVG from 'root/public/img/contact/gmail.svg';
// import WhatsAppSVG from 'root/public/img/contact/whatsapp.svg';
// import InstagramSVG from 'root/public/img/contact/instagram.svg';
// import LinkedInSVG from 'root/public/img/contact/linkedin.svg';

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
    const [messageError, setMessageError] = useState(false);
    const [messageErrorMessage, setMessageErrorMessage] = useState('');

    const validateInputs = () => {
        const name = document.getElementById('name') as HTMLInputElement;
        const email = document.getElementById('email') as HTMLInputElement;
        const message = document.getElementById('message') as HTMLInputElement;

        let isValid = true;

        if (!name.value) {
            setNameError(true);
            setNameErrorMessage('Debe ingresar un nombre válido.');
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

        if (!message.value) {
            setMessageError(true);
            setMessageErrorMessage('Debe ingresar un mensaje válido.');
            isValid = false;
        } else {
            setMessageError(false);
            setMessageErrorMessage('');
        };

        return isValid;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validateInputs()) {
            const data = new FormData(event.currentTarget);
            console.log({
                email: data.get('name'),
                password: data.get('email'),
                message: data.get('message')
            });
        };
    };

    return (
        <Card variant="outlined">
            <Box
                component='section'
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: .5,
                    mb: 2
                }}
            >
                <Image
                    src={palette.mode === 'dark' ? '/img/hc-dark.svg' : '/img/hc-light.svg'}
                    width={50}
                    height={50}
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
                noValidate
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
                    error={messageError}
                    helperText={messageErrorMessage}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    startIcon={<ArrowForwardOutlinedIcon />}
                >
                    Enviar
                </Button>
            </Box>
            <Divider>Gmail</Divider>
            <Box
            // sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
                <Button
                    LinkComponent='a'
                    href='https://mail.google.com/mail/?view=cm&fs=1&to=benjaminncelano@gmail.com&su=Consulta&body=Cuerpo%20del%20mensaje'
                    target='_blank'
                    rel='noreferrer'
                    variant="outlined"
                    fullWidth
                    startIcon={<GmailSVG width={30} height={30} />}
                >
                    Enviar por Gmail
                </Button>
                {/* <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<WhatsAppSVG width={30} height={30} />}
                    onClick={() => { }}
                >
                    Ir a WhatsApp
                </Button>
                <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<InstagramSVG width={30} height={30} />}
                    onClick={() => { }}
                >
                    Ir a Instagram
                </Button>
                <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<LinkedInSVG width={30} height={30} />}
                    onClick={() => { }}
                >
                    Ir a LinkedIn
                </Button> */}
            </Box>
        </Card>
    );
};
