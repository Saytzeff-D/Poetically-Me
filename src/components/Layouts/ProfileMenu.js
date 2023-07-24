import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const ProfileMenu = ()=>{
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
                    <ListItemButton className='bg-next' >
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
                    <ListItemButton>
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
                    <ListItemButton >
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
                    <ListItemButton>
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
                    <ListItemButton>
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
                    <ListItemButton>
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
                    <ListItemButton>
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