import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useMutation, gql } from "@apollo/client";
import { ADD_APPOINTMENT } from "../../utils/mutations";

const BookAppointment = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

 
  const [addAppointment] = useMutation(ADD_APPOINTMENT);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const { data } = await addAppointment({
        variables: {
          firstName,
          lastName,
          email,
          phone,
          appointmentDate,
          appointmentTime,
        },
      });
  
      // Handle the response from the server, if needed
      console.log("Appointment added:", data.addAppointment);
    } catch (error) {
      // Handle the error if the mutation fails
      console.error("Error adding appointment:", error.message);
    }
  };
  
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Typography variant="h4" align="center" mb={2}>
        Book an Appointment
      </Typography>
      <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label=""
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            margin="normal"
            required
            type="date"
          />
          <TextField
            fullWidth
            label=""
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            margin="normal"
            required
            type="time"
          />
          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            Book Appointment
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default BookAppointment;
