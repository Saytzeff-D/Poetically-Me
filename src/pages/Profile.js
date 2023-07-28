import React, { Fragment, useEffect, useState } from "react";
import Header from "../components/Layouts/Header";
import ProfileBg from '../assets/profile.png'
import Footer from "../components/Layouts/Footer";
import { Outlet, useNavigate } from "react-router";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import NoPicuture from '../assets/no_picture.png'
import ProfileMenu from "../components/Layouts/ProfileMenu";
import ProfileBar from "../components/Layouts/ProfileBar";
import { useDispatch, useSelector } from "react-redux";
import Backdrop from '@mui/material/Backdrop';
import { CircularProgress } from "@mui/material";
import axios from "axios";

const Profile = (props)=>{
    const navigate = useNavigate()
    const api = useSelector(state=>state.ApiReducer.serverApi)
    const currentUser = useSelector(state=>state.UserReducer.userInfo)
    const dispatch = useDispatch()
    const drawerWidth = 255
    const [mobileOpen, setMobileOpen] = useState(false)
    const [open, setOpen] = useState(true)
    const { window } = props

    useEffect(()=>{
        const token = JSON.parse(sessionStorage.getItem('token'))
        axios.get(
            `${api}user/currentUser`,
            {
                headers: {
                    'authorization': `Bearer ${token}`,
                    'content-type': 'application/json'
                }
            }
        ).then(res=>{
            dispatch({type: 'userInfo', payload: res.data.user})
            setOpen(false)
            // console.log(res.data)
        }).catch(err=>{
            sessionStorage.setItem('purpose', 'login')
            navigate('/login')
            // console.log(err)
        })
    }, [])

    const handleDrawerToggle = ()=>{
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <div className='bg-sidebar border-0'>
            <Toolbar className='my-0 justify-content-center'>
                <img className="sideNavLogo rounded-circle mt-2" width={'100px'} height={'100px'} src={currentUser.picture} alt="user" />                
            </Toolbar>
            <ProfileMenu />
        </div>
    )

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Fragment>  
            <Header />
            <div className="d-lg-none d-block">
                <img src={ProfileBg} className="img-fluid" />
            </div>
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
                    <ProfileBar />
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
            {/* Backdrop */}
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                {/* <img src={LoadingGif} className="img-fluid" width='50px' height='5px' /> */}
                <CircularProgress color="inherit" />
            </Backdrop>
        </Fragment>
    )
}

export default Profile