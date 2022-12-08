
import * as React from 'react';
import { Box, CssBaseline, Divider, Toolbar, Typography } from "@mui/material";
import Lista from "./SidebarList";
import logo from "../../assets/img/logo-flor.png";
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { useMemo } from 'react';

const drawerWidth = 240;

const openSidebarTheme = (theme) => ({
    width: drawerWidth,
    backgroundColor: "#6C9A8B",
    boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedSidebarTheme = (theme)=> ({
    backgroundColor: "#6C9A8B",
    boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        background: 'none',
        boxSizing: 'border-box',
        ...(open && {
            ...openSidebarTheme(theme),
            '& .MuiDrawer-paper': openSidebarTheme(theme),
        }),
        ...(!open && {
            ...closedSidebarTheme(theme),
            '& .MuiDrawer-paper': closedSidebarTheme(theme),
        }),
    }),
)


const Sidebar = ({ title, hideSidebar }) => {

    const [open, setOpen] = React.useState(true);

    const sideBarHidden = (hideSidebar ? true : false);

    const handleSidebarOpen = () => {
    };

    const handleSidebarClosed = () => {
    };
    const lista = useMemo(() => <Lista />, []);
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                
                <Toolbar sx={{ backgroundColor: "#6C9A8B"}}>
                    {!sideBarHidden ? (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleSidebarOpen}
                            edge="start"
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : null}

                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            {!sideBarHidden ? (
                <Drawer variant="permanent" open={open}>
                    <DrawerHeader>
                        <img alt={"logo"} src={logo} width='120' height='100' style={{ marginRight: 20, marginTop: '3px' }} />
                            <IconButton onClick={handleSidebarClosed}>
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    {lista}
                </Drawer>
            ) : null}
        </Box>
    );
}

export default Sidebar;