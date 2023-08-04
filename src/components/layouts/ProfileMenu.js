import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useLocation, useNavigate } from 'react-router';

const ProfileMenu = ()=>{
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <>
            {/* ProfileMenu */}
            <List className="mt-4">
                <ListItem disablePadding>
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText>
                            <p className="my-0 px-3 fw-bold fs-5">Profile</p>
                        </ListItemText>
                </ListItem>
            </List>
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={()=>navigate('/profile')} className={location.pathname == '/profile' ? 'bg-next' : ''} >
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText>
                            <p className='my-0'>
                                 Account Overview
                            </p>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={()=>navigate('/profile/my-poems')} className={location.pathname == '/profile/my-poems' ? 'bg-next' : ''} >
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText>
                            <p className='my-0'>
                             My Poems
                            </p>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            <List>
                <ListItem disablePadding>
                    <ListItemButton  onClick={()=>navigate('/profile/my-shop')} className={location.pathname == '/profile/my-shop' ? 'bg-next' : ''} >
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText>
                            <p className='my-0'>
                             My Shop
                            </p>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            <List>
                <ListItem disablePadding>
                    <ListItemButton  onClick={()=>navigate('/profile/my-library')} className={location.pathname == '/profile/my-library' ? 'bg-next' : ''} >
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText>
                            <p className='my-0'>
                                 My Library
                            </p>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            <List>
                <ListItem disablePadding>
                    <ListItemButton  onClick={()=>navigate('/profile/statements')} className={location.pathname == '/profile/statements' ? 'bg-next' : ''} >
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText>
                            <p className='my-0'>
                                 Statements
                            </p>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            <List>
                <ListItem disablePadding>
                    <ListItemButton  onClick={()=>navigate('/profile/referrals')} className={location.pathname == '/profile/referrals' ? 'bg-next' : ''} >
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText>
                            <p className='my-0'>
                                 Referrals
                            </p>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            <List>
                <ListItem disablePadding>
                    <ListItemButton  onClick={()=>navigate('/profile/wallets')} className={location.pathname == '/profile/wallets' ? 'bg-next' : ''} >
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText>
                            <p className='my-0'>
                                 Wallets
                            </p>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </>
    )
}

export default ProfileMenu