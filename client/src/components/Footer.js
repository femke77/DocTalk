// Footer.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography variant="body1" color="inherit">
          Made with ❤️ by Brandon, Chris, Joel, Sehrish, and Vlad
        </Typography>
        <Typography variant="body2" color="inherit" style={{ marginLeft: 'auto' }}>
            &copy; {currentYear} - DocTalk All Rights Reserved
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
