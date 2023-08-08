import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { SEND_BILL } from '../../utils/mutations';
import { PATIENTS } from '../../utils/queries';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const DoctorBilling = () => {
  const [formState, setFormState] = useState({ amount: 0, description: '', patient: '' });
  const [sendBill] = useMutation(SEND_BILL);
  const { loading, data } = useQuery(PATIENTS);
  const patients = data?.patients || [];

  console.log(patients);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await sendBill({
      variables: {
        amount: formState.amount,
        description: formState.description,
        patient: formState.patient
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
        <Typography component="h1" variant="h5">
          Doctor Billing
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
          {/* <TextField
            margin="normal"
            fullWidth
            id="patientName"
            label="Patient Name"
            name="patientName"
            value={formState.patientName}
            onChange={handleChange}
          /> */}
          <select name="patient" onChange={handleChange}>
            <option value="">Please select one...</option>
            {!loading && patients.map(patient => <option value={patient._id}>{patient.firstName} {patient.lastName}</option>)}
          </select>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default DoctorBilling;
