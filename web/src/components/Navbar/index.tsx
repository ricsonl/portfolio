import React, { useState } from 'react';
import MobilRightMenuSlider from '@material-ui/core/Drawer';

import './styles.css';
import { StylesProvider } from '@material-ui/core/styles';

import { AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box, ListItemIcon } from '@material-ui/core';
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';

import avatar from '../../assets/pp.png';

const menuItems = [
    {
        itemIcon: <Home/>,
        itemText: "Home"
    },
    {
        itemIcon: <AssignmentInd/>,
        itemText: "Resume"
    },
    {
        itemIcon: <Apps/>,
        itemText: "Projects"
    },
    {
        itemIcon: <ContactMail/>,
        itemText: "Contact"
    },
];

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open });
    }

    const sideList = slider => (
        <Box component="div" 
             className="avatarbox"
             onClick={toggleSlider(slider, false)}
             >
            <Avatar src={avatar} alt="Ricson" />
            <Divider />
            <List>
                {menuItems.map((item, key) => {
                    return (
                        <ListItem button key={key}>
                            <ListItemIcon>
                                {item.itemIcon}
                            </ListItemIcon>
                            <ListItemText primary={item.itemText} />
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );

    return (
        <StylesProvider injectFirst>

            <Box component="nav">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <ArrowBack />
                        </IconButton>
                        <Typography variant="h5">
                            Projects
                        </Typography>
                        <MobilRightMenuSlider open={state.right} 
                                              onClose={toggleSlider("right", false)}>
                            { sideList("right") }
                        </MobilRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </StylesProvider>
    )
}

export default Navbar;