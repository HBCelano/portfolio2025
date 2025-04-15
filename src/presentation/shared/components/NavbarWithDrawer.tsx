'use client';

import { ComponentType, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from "next/image";
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import HandymanIcon from '@mui/icons-material/Handyman';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { type SvgIconProps } from '@mui/material/SvgIcon';
import { ThemeButtonFloating } from '@/presentation/theme/components';

const drawerWidth = 240;
const navItems = ['Inicio', 'Habilidades', 'Experiencia', 'Contacto'] as const;
const navItemsHref = ['/', '/skills', '/experience', '/contact'];
const navItemsIcons: Record<typeof navItems[number], ComponentType<SvgIconProps>> = {
    Inicio: HomeIcon,
    Habilidades: HandymanIcon,
    Experiencia: AutoStoriesIcon,
    Contacto: MarkEmailReadIcon
};

export const NavbarWithDrawer = () => {
    const { palette } = useTheme();
    const router = useRouter();
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(prevState => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} >
            <Box
                component='section'
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    my: 2,
                    pl: 2
                }}
            >
                <Image
                    src={palette.mode === 'dark' ? '/img/cv.svg' : '/img/cv-light.svg'}
                    width={35}
                    height={35}
                    alt="Logo"
                />
                <Typography variant="h6" sx={{ pl: 1, fontWeight: 'light' }}>
                    HBCelano
                </Typography>
            </Box>
            <Divider />
            <List>
                {
                    navItems.map((item, index) => {
                        const IconComponent = navItemsIcons[navItems[index]];
                        const isActive = pathname === navItemsHref[index];
                        return (
                            <ListItem key={item} disablePadding>
                                <ListItemButton
                                    onClick={() => router.push(navItemsHref[index])}
                                    sx={{ color: isActive ? 'primary.main' : 'inherit' }}
                                >
                                    <ListItemIcon>
                                        <IconComponent color={isActive ? 'primary' : 'inherit'} />
                                    </ListItemIcon>
                                    <ListItemText primary={item} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })
                }
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar sx={{ justifyContent: { xs: 'space-between', md: 'flex-start' } }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box
                        component='section'
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            flexGrow: 1,
                            alignItems: 'center',
                            mr: 6
                        }}
                    >
                        <Image
                            src='/img/cv.svg'
                            width={35}
                            height={35}
                            alt="Logo"
                        />
                        <Typography variant="h6" component="h6" sx={{ pl: 1, fontWeight: 'light' }}>HBCelano</Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        {
                            navItems.map((item, index) => {
                                const IconComponent = navItemsIcons[navItems[index]];
                                const isActive = pathname === navItemsHref[index];
                                return (
                                    <Button
                                        key={item}
                                        // color={isActive ? 'primary' : 'inherit'}
                                        color='inherit'
                                        sx={{
                                            // color: '#fff',
                                            ml: '1rem',
                                            fontWeight: 400,
                                            borderBottom: isActive ? '2px solid' : 'none',
                                        }}
                                        variant='text'
                                        onClick={() => router.push(navItemsHref[index])}
                                        startIcon={<IconComponent color="inherit" fontSize='inherit' />}
                                    >
                                        {item}
                                    </Button>
                                );
                            })
                        }
                    </Box>
                    <ThemeButtonFloating />
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
};
