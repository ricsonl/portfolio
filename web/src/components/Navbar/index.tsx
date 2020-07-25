import React from 'react';
import './styles.css';
import { StylesProvider } from "@material-ui/core/styles";

import { AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box, ListItemIcon } from "@material-ui/core";
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail } from "@material-ui/icons";

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
    return (
        <StylesProvider injectFirst>

            <Box component="div" className="avatarbox">
                <Avatar src={avatar} alt="Ricson"/>
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

            <Box component="nav">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton>
                            <ArrowBack />
                        </IconButton>
                        <Typography variant="h5">
                            Projects
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </StylesProvider>
    )
}

export default Navbar;