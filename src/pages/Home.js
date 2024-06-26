import React, { Fragment, useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../assets/poetically-me.png'
import SidebarList from "../components/layouts/SidebarList";
import PoemBar from "../components/layouts/PoemBar";
import { Outlet } from "react-router";
import Footer from "../components/layouts/Footer";

const Home = (props)=>{    
    const drawerWidth = 255
    const [mobileOpen, setMobileOpen] = useState(false)
    const { window } = props    

    useEffect(()=>{    
    }, [])

    const handleDrawerToggle = ()=>{
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <div className='bg-sidebar border-0'>
            <Toolbar className='my-0'>
                <img className="sideNavLogo" src={Logo} alt="poetically logo" />
            </Toolbar>
            <SidebarList />
        </div>
    )

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Fragment>
            <Box sx={{display: 'flex'}}>
                <CssBaseline />
                <AppBar
                    className='shadow-none mb-5'
                    position="fixed"
                    sx={{
                    width: { md: `calc(100% - ${drawerWidth}px)` },
                    ml: { md: `${drawerWidth}px` },
                    }}
                >
                <Toolbar className='bg-white text-dark'>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <PoemBar />
                </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
                >
                    <Drawer
                        container={container}
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
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', md: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                        >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                component="main" 
                sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Outlet />                    
                </Box>
            </Box>
            <div className="d-lg-none d-block">
                <Footer />
            </div>
        </Fragment>
    )
}

export default Home