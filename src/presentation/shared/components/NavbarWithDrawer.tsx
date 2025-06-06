'use client';

import { type ComponentType, useState, type MouseEvent } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from "next/image";
import { useTranslation } from 'react-i18next';
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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SourceIcon from '@mui/icons-material/Source';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import HandymanIcon from '@mui/icons-material/Handyman';
import InfoIcon from '@mui/icons-material/Info';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { type SvgIconProps } from '@mui/material/SvgIcon';
import { ThemeButtonFloating } from '@/presentation/theme/components';
import { LanguageButtonFloating } from '@/presentation/language/components/LanguageButtonFloating';

const drawerWidth = 240;

export const NavbarWithDrawer = () => {
    const { t } = useTranslation();

    const navItems = t('header.navbarWithDrawer.navItems', { returnObjects: true }) as string[];
    const navItemsHref = ['/', '/experience', '/projects', '/contact'] as const;
    const navItemsIcons: Record<typeof navItemsHref[number], ComponentType<SvgIconProps>> = {
        "/": HomeIcon,
        "/experience": AutoStoriesIcon,
        "/projects": SourceIcon,
        "/contact": MarkEmailReadIcon
    };

    const { palette } = useTheme();
    const router = useRouter();
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDrawerToggle = () => {
        setMobileOpen(prevState => !prevState);
    };

    const subMenuExperience = t('header.navbarWithDrawer.subMenuExperience', { returnObjects: true }) as string[];
    const subMenu = (
        <Menu
            anchorEl={anchorEl}
            id="experience-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            slotProps={{
                paper: {
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5
                    }
                }
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            disableScrollLock
        >
            <MenuItem onClick={() => router.push('/experience/#study')}>
                <ListItemIcon>
                    <SchoolIcon fontSize="small" />
                </ListItemIcon>
                {subMenuExperience[0]}
            </MenuItem>
            <MenuItem onClick={() => router.push('/experience/#work')}>
                <ListItemIcon>
                    <WorkHistoryIcon fontSize="small" />
                </ListItemIcon>
                {subMenuExperience[1]}
            </MenuItem>
            <MenuItem onClick={() => router.push('/experience/#skills')}>
                <ListItemIcon>
                    <HandymanIcon fontSize="small" />
                </ListItemIcon>
                {subMenuExperience[2]}
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => router.push('/experience')}>
                <ListItemIcon>
                    <InfoIcon fontSize="small" />
                </ListItemIcon>
                {subMenuExperience[3]}
            </MenuItem>
        </Menu>
    );

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
                    src={palette.mode === 'dark' ? '/img/logos/hc-dark.svg' : '/img/logos/hc-light.svg'}
                    width={45}
                    height={45}
                    alt="Logo"
                    priority
                />
                <Typography variant="h6" sx={{ pl: 1, fontWeight: 'light' }}>
                    HBCelano
                </Typography>
            </Box>
            <Divider />
            <List>
                {
                    navItems.map((item, index) => {
                        const IconComponent = navItemsIcons[navItemsHref[index]];
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
            <AppBar
                component="nav"
            // enableColorOnDark
            >
                <Toolbar sx={{ justifyContent: { xs: 'space-between', lg: 'flex-start' } }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { lg: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box
                        component='section'
                        sx={{
                            display: { xs: 'none', lg: 'flex' },
                            flexGrow: 1,
                            alignItems: 'center',
                            mr: 6
                        }}
                    >
                        <Image
                            src='/img/logos/hc-dark.svg'
                            width={45}
                            height={45}
                            alt="Logo"
                            priority
                        />
                        <Typography variant="h6" component="h6" sx={{ pl: 1, fontWeight: 'light' }}>HBCelano</Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                        {
                            navItems.map((item, index) => {
                                const IconComponent = navItemsIcons[navItemsHref[index]];
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
                                        onClick={event => (item === 'Experiencia' || item === 'Experience') ? handleClick(event) : router.push(navItemsHref[index])}
                                        startIcon={<IconComponent color="inherit" fontSize='inherit' />}
                                        endIcon={(item === 'Experiencia' || item === 'Experience') ? <KeyboardArrowDownIcon /> : undefined}
                                        // onMouseEnter={(item === 'Experiencia' || item === 'Experience') ? handleClick : undefined}
                                        // onMouseLeave={(item === 'Experiencia' || item === 'Experience') ? handleClose : undefined}
                                        aria-controls={((item === 'Experiencia' || item === 'Experience') && open) ? 'experience-menu' : undefined}
                                        aria-haspopup={(item === 'Experiencia' || item === 'Experience') ? 'true' : undefined}
                                        aria-expanded={((item === 'Experiencia' || item === 'Experience') && open) ? 'true' : undefined}
                                    >
                                        {item}
                                    </Button>
                                );
                            })
                        }
                    </Box>
                    {subMenu}
                    <Box component='div'>
                        <ThemeButtonFloating />
                        <LanguageButtonFloating />
                    </Box>
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
                        display: { xs: 'block', lg: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
};
