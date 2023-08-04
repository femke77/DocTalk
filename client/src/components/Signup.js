import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";

import Footer from './Footer';

function Signup() {
  // checked = doctor, unchecked = patient
  const [checked, setChecked] = useState(false)
  
  const [formState, setFormState] = useState({
    username: "",
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    showPassword: false,
  });


  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        doctor: checked,
        patient: checked ? false : true
      },
    });
    try {
      const user = mutationResponse.data.addUser.user;
      if(user){

        if(user.doctor === true || user.doctor === 'true' ){
          Auth.setRole('doctor');
          // localStorage.setItem('user_type', 'doctor');
        }else if(user.patient === true || user.patient === 'true' ){
          Auth.setRole('patient');
  
        }
        else{
          // localStorage.setItem('user_type', null);
          Auth.setRole(null);
       
        }
      }
    } catch (error) {
      Auth.setRole(null);
    }

    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  
  const handleChange = (event) => {

    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handlePasswordVisibility = () => {
    setFormState({
      ...formState,
      showPassword: !formState.showPassword,
    });
  };


  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleFormSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="given-name"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="given-name"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              onChange={handleChange}
            />
            {/* Radio buttons for Doctor/Patient selection */}
           Check here if you are a doctor: 
           {" "}
            <FormControlLabel
              control={
                <Checkbox
                  name="doctor"
                  value={checked}
                  checked={checked}
                  onChange={()=>setChecked(true)}
                />
              }
              label="Doctor"
            />
            {/* <FormControlLabel
              control={
                <Checkbox
                  name="patient"
                  value="true"
                  checked={role/pa}
                  onChange={handleChange}
                />
              }
              label="Patient"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default Signup;