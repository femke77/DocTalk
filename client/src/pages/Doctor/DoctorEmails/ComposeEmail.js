import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Auth from '../../../utils/auth';

const SEND_EMAIL_MUTATION = gql`
  mutation SendEmail($emailInput: EmailInput!) {
    sendEmail(emailInput: $emailInput) {
      id
      subject
      sender
      recipients
      body
      timestamp
      status
    }
  }
`;

export default function ComposeEmail() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const [sendEmail, { loading }] = useMutation(SEND_EMAIL_MUTATION);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formState.email.trim() || !formState.message.trim()) {
      return toast.error("Please enter a valid email and message");
    }

    const emailInput = {
      subject: "Your Subject",
      sender: Auth.getProfile().data.email,
      recipients: [],
      body: formState.message,
      timestamp: new Date().toISOString(),
      status: "DRAFT",
    };

    sendEmail({ variables: { emailInput } })
      .then((result) => {
        console.log("Email sent successfully:", result.data.sendEmail);
        setFormState({
          ...formState,
          email: "",
          message: ""
        });
        toast.success("Email sent successfully");
      })
      .catch((error) => {
        console.error("Error sending email:", error.message);
        toast.error("Error sending email");
      });
  };

  return (
    <div>
      <ToastContainer />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
        <img
          src="/images/hero.jpg"
          alt="contact"
          style={{ width: '100%', maxWidth: '800px', height: 'auto', marginBottom: '20px' }}
        />
        <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
          <Typography variant="h4" align="center" mb={2}>
            Contact Us
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              value={formState.fullName}
              onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              margin="normal"
              required
              type="email"
            />
            <TextField
              fullWidth
              label="Message"
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              margin="normal"
              required
              multiline
              rows={4}
            />
            <Button variant="contained" type="submit" sx={{ mt: 2 }}>
              {loading ? "Sending..." : "Send"}
            </Button>
          </form>
        </Box>
      </Box>
    </div>
  );
}
