import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router';

const SidebarList = ()=>{
    const navigate = useNavigate()
    return (
        <>
            {/* Poems */}
            <List className="my-0">
                <ListItem disablePadding>
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText>
                            <p className="my-0 px-3 fw-bold fs-5">Poems</p>
                        </ListItemText>
                </ListItem>
            </List>
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={()=>navigate('/home')} >
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText>
                            <p className='my-0'>
                                <i className='fa fa-arrow-up text-dark'></i> Poems
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
                            <img src={require('../../assets/reading_now.png')} width='20px' height='20px' className='img-fluid' /> Reading Now
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
                                <img src={require('../../assets/popular_now.png')} width='20px' height='20px' className='img-fluid' /> Popular Now
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
                                <img src={require('../../assets/top_free.png')} width='20px' height='20px' className='img-fluid' /> Top Free
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
                                <img src={require('../../assets/top_paid.png')} width='20px' height='20px' className='img-fluid' /> Top Paid
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
                                <img src={require('../../assets/categories.png')} width='20px' height='20px' className='img-fluid' /> Categories <i className='fa fa-angle-up text-right fw-bolder'></i>
                            </p>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            {/* Library */}
            <List className="my-0">
                <ListItem disablePadding>
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText>
                            <p className="my-0 px-3 fw-bold fs-5">Library</p>
                        </ListItemText>
                </ListItem>
            </List>
            <List>
                <ListItem disablePadding>
                    <ListItemButton >
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText>
                            <p className='my-0'>
                                <img src={require('../../assets/all.png')} width='20px' height='20px' className='img-fluid' /> All
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
                                <img src={require('../../assets/finished.png')} width='20px' height='20px' className='img-fluid' /> Finished
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
                                <img src={require('../../assets/recent.png')} width='20px' height='20px' className='img-fluid' /> Recently Viewed
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
                                <i className='fa fa-download'></i> Downloaded
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
                               <i className='fa fa-heart-o'></i> Favorites
                            </p>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            {/* More */}
            <List className="my-0">
                <ListItem disablePadding>
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText>
                            <p className="my-0 px-3 fw-bold fs-5">More</p>
                        </ListItemText>
                </ListItem>
            </List>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText>
                            <p className='my-0'>
                                <i className='fa fa-pencil'></i> Author
                            </p>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </>
    )
}

export default SidebarList