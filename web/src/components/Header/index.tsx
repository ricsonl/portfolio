import React from 'react';

import './styles.css';
import { StylesProvider } from '@material-ui/core/styles';

import { Avatar, Grid, Typography, Box } from '@material-ui/core';

import avatar from '../../assets/pp.png';

const Header = () => {
    return (
        <StylesProvider injectFirst>
            <Box>
                <Avatar src={avatar} alt="Ricson" />
                <Typography variant="h4"> I'm Ricson Vilaça. </Typography>
            </Box>
        </StylesProvider>
    );
}

export default Header;