import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client'; 

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [sendEmail] = useMutation(SEND_EMAIL_MUTATION);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailInput = {
      subject: "Your Subject",
      sender: email,
      recipients: [],
      body: message,
      timestamp: new Date().toISOString(),
      status: "DRAFT",
    };

    sendEmail({ variables: { emailInput } })
      .then((result) => {
        console.log("Email sent successfully:", result.data.sendEmail);
      })
      .catch((error) => {
        console.error("Error sending email:", error.message);
      });
  };

  return (
    <div>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              margin="normal"
              required
              multiline
              rows={4}
            />
            <Button variant="contained" type="submit" sx={{ mt: 2 }}>
              Send
            </Button>
          </form>
        </Box>
      </Box>
    </div>
  );
}
