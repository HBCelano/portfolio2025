import { type Dispatch, type SetStateAction, useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MuiCard from '@mui/material/Card';
import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';
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

type InputValidationType = {
    nameError: boolean,
    nameErrorMessage: string,
    emailError: boolean,
    emailErrorMessage: string,
    messageError: boolean,
    messageErrorMessage: string
};

export function CustomForm({ setOpenBackdrop }: { setOpenBackdrop: Dispatch<SetStateAction<boolean>> }) {
    const { palette } = useTheme();
    const { t } = useTranslation();
    const [inputValidation, setInputValidation] = useState<InputValidationType>({
        nameError: false,
        nameErrorMessage: '',
        emailError: false,
        emailErrorMessage: '',
        messageError: false,
        messageErrorMessage: ''
    });
    const [sendButtonDisabled, setSendButtonDisabled] = useState<boolean>(false);
    const [openAlert, setOpenAlert] = useState<boolean>(false);
    const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const userAgent = typeof window !== 'undefined' ? navigator.userAgent : '';
        const isMobileDevice = /Mobi|mobile|Android|iPhone|iPad|iPod/i.test(userAgent);
        setIsMobile(isMobileDevice);
    }, []);

    const validateInputs = () => {
        const name = document.getElementById('name') as HTMLInputElement;
        const email = document.getElementById('email') as HTMLInputElement;
        const message = document.getElementById('message') as HTMLInputElement;
        let isValid = true;

        if (!name.value) {
            setInputValidation(prevInputValidation => ({
                ...prevInputValidation,
                nameError: true,
                nameErrorMessage: t('main.contact.form.nameErrorMessage')
            }));
            isValid = false;
        } else {
            setInputValidation(prevInputValidation => ({
                ...prevInputValidation,
                nameError: false,
                nameErrorMessage: ''
            }));
        };
        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setInputValidation(prevInputValidation => ({
                ...prevInputValidation,
                emailError: true,
                emailErrorMessage: t('main.contact.form.emailErrorMessage')
            }));
            isValid = false;
        } else {
            setInputValidation(prevInputValidation => ({
                ...prevInputValidation,
                emailError: false,
                emailErrorMessage: ''
            }));
        };
        if (!message.value) {
            setInputValidation(prevInputValidation => ({
                ...prevInputValidation,
                messageError: true,
                messageErrorMessage: t('main.contact.form.messageErrorMessage')
            }));
            isValid = false;
        } else {
            setInputValidation(prevInputValidation => ({
                ...prevInputValidation,
                messageError: false,
                messageErrorMessage: ''
            }));
        };

        return isValid;
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setOpenAlert(false);
        setSendButtonDisabled(true);
        if (validateInputs()) {
            setOpenBackdrop(true);
            const data = new FormData(event.currentTarget);
            // data.append('_autoresponse', 'Tu mensaje fue recibido, gracias por visitar mi sitio. Te contactaré pronto.');
            try {
                // axios.defaults.headers.post['Content-Type'] = 'application/json';
                const response = await axios.post(
                    `https://formsubmit.co/ajax/${atob(process.env.NEXT_PUBLIC_EMAIL as string)}`,
                    data
                    // Object.fromEntries(data.entries()),
                    // {
                    //     headers: {
                    //         ...axios.defaults.headers.post,
                    //         "Content-Type": 'application/json'
                    //     }
                    // }
                );
                setSubmitSuccess(response.status === 200 ? true : false);
            } catch (error) {
                console.error('Error: ', error);
                setSubmitSuccess(false);
            } finally {
                setOpenBackdrop(false);
                setOpenAlert(true);
            };
        };
        setSendButtonDisabled(false);
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
                    label={t('main.contact.form.labelName')}
                    variant="outlined"
                    color={inputValidation.nameError ? 'error' : 'primary'}
                    fullWidth
                    placeholder={t('main.contact.form.placeholderName')}
                    autoComplete="off"
                    autoFocus
                    required
                    error={inputValidation.nameError}
                    helperText={inputValidation.nameErrorMessage}
                />
                <TextField
                    type="email"
                    id="email"
                    name="email"
                    label={t('main.contact.form.labelEmail')}
                    variant="outlined"
                    color={inputValidation.emailError ? 'error' : 'primary'}
                    fullWidth
                    placeholder={t('main.contact.form.placeholderEmail')}
                    autoComplete="email"
                    required
                    error={inputValidation.emailError}
                    helperText={inputValidation.emailErrorMessage}
                />
                <TextField
                    id="message"
                    name="message"
                    // slotProps={{
                    //     htmlInput: {
                    //         id: 'message',
                    //         name: 'message'
                    //     }
                    // }}
                    label={t('main.contact.form.labelMessage')}
                    variant="outlined"
                    color='primary'
                    // color={inputValidation.messageError ? 'error' : 'primary'}
                    fullWidth
                    placeholder={t('main.contact.form.placeholderMessage')}
                    autoComplete="off"
                    required
                    multiline
                    maxRows={4}
                    error={inputValidation.messageError}
                    helperText={inputValidation.messageErrorMessage}
                    sx={isMobile ? { '& .MuiOutlinedInput-notchedOutline legend': { maxWidth: '.01px' } } : undefined}
                    slotProps={isMobile ?
                        {
                            inputLabel: {
                                sx: theme => ({
                                    '&.MuiInputLabel-shrink': {
                                        bgcolor: theme.palette.background.paper,
                                        px: '4px'
                                    }
                                })
                            }
                        } : undefined
                    }
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    startIcon={<ArrowForwardOutlinedIcon />}
                    disabled={sendButtonDisabled}
                >
                    {t('main.contact.form.submitButton')}
                </Button>
                <Collapse in={openAlert}>
                    <Alert
                        severity={submitSuccess ? 'success' : 'error'}
                        variant="outlined"
                        onClose={() => setOpenAlert(false)}
                        sx={{ my: 2 }}
                    >
                        {submitSuccess ? t('main.contact.form.submitSuccessAlert') : t('main.contact.form.submitErrorAlert')}
                    </Alert>
                </Collapse>
            </Box>
            <Divider>Gmail</Divider>
            <Box
            // sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
                <Button
                    LinkComponent='a'
                    href={encodeURI(isMobile
                        ?
                        `mailto:benjaminncelano@gmail.com?subject=${t('main.contact.form.gmail.subject')}&body=${t('main.contact.form.gmail.body')}`
                        :
                        `https://mail.google.com/mail/?view=cm&fs=1&to=benjaminncelano@gmail.com&su=${t('main.contact.form.gmail.subject')}&body=${t('main.contact.form.gmail.body')}`
                    )}
                    target='_blank'
                    rel='noreferrer'
                    variant="outlined"
                    fullWidth
                    startIcon={<GmailSVG width={30} height={30} />}
                >
                    {t('main.contact.form.gmail.button')}
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
