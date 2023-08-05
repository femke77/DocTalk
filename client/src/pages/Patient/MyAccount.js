import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const MyAccount = () => {
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        My Account
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button component={Link} to="/BookAppointment" variant="contained" color="primary" sx={{ my: 2 }}>
          Book an Appointment
        </Button>
        <Button component={Link} to="/FindDoctor" variant="contained" color="primary" sx={{ mb: 2 }}>
          Find a Doctor
        </Button>
      </Box>
    </Box>
  );
};

export default MyAccount;
