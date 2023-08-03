import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_BILL } from '../utils/mutations';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Footer from './Footer';

const Billing = () => {
  const [formState, setFormState] = useState({ amount: 0, description: '', doctor: '' });
  const [addBill] = useMutation(ADD_BILL);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addBill({
      variables: {
        amount: formState.amount,
        description: formState.description,
        doctor: formState.doctor,
      },
    });
    
    console.log(mutationResponse.data);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

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

<img
        src="/images/billing.jpeg"
        alt="billing"
        style={{ width: '100%', maxWidth: '800px', height: 'auto', marginBottom: '20px' }}
      />
        <Typography component="h1" variant="h5">
          Billing
        </Typography>
        <Box component="form" onSubmit={handleFormSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            type="number"
            step="0.01"
            id="amount"
            label="Amount"
            name="amount"
            value={formState.amount}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="description"
            label="Description"
            name="description"
            value={formState.description}
            onChange={handleChange}
          />
          {/* Add a field for specifying the consulted doctor */}
          <TextField
            margin="normal"
            fullWidth
            id="doctor"
            label="Consulted Doctor"
            name="doctor"
            value={formState.doctor}
            onChange={handleChange}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Submit
          </Button>
          <Link to="/">← Go back to Home</Link>
        </Box>
      </Box>
        <Footer />
    </Container>
  );
};

export default Billing;
