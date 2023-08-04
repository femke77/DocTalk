import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

export default function ContactPatient() {
  const [firstName, setFirstName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, phonenumber, message);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <img
        src="/images/hero.jpg"
        alt="contact"
        style={{
          width: "100%",
          maxWidth: "800px",
          height: "auto",
          marginBottom: "20px",
        }}
      />
      <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
        <Typography variant="h4" align="center" mb={2}>
          Patient Callback
        </Typography>
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
          />
          <TextField
            fullWidth
            label="Phone Number"
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            margin="normal"
            required
            type="string"
          />
          <TextField
            fullWidth
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
}
