// Footer.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, height: '95px' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                <Typography variant="body1" color="inherit" align="left">
                    123 Medical Avenue
                    <br />
                    Healthville, MD 56789
                    <br />
                    United States
                </Typography>
                </div>
                <div>
                <Typography variant="body1" color="inherit" align="center">
                Made with ❤️ by Brandon, Chris, Joel, Sehrish, and Vlad
                </Typography>
                </div>
                <div>
                <Typography variant="body3" color="inherit" align="right">
                    &copy; {currentYear} - DocTalk All Rights Reserved
                    <br />
                    MIT License
                </Typography>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
