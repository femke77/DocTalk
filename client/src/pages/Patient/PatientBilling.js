import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const PatientBilling = ({ billData }) => {
  // billData is the data received from the doctor's submission
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Patient Billing
        </Typography>
        <Box sx={{ mt: 3 }}>
          {/* Display the billing information received from the doctor */}
          <Typography variant="body1">Amount: {billData.amount}</Typography>
          <Typography variant="body1">Description: {billData.description}</Typography>
          <Typography variant="body1">Doctor: {billData.doctor}</Typography>
        </Box>
        <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Pay
        </Button>
      </Box>
    </Container>
  );
};

export default PatientBilling;
