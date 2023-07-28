import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="body1" color="inherit">
          Made with ❤️ by Brandon, Chris, Joel, Sehrish, and Vlad
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;

// still need to input footer component onto the main page component
