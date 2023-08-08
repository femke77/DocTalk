import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import Typography from '@mui/material/Typography';


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
const ComposeEmail = () => {

  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [sendEmailMutation] = useMutation(SEND_EMAIL_MUTATION);

  const handleRecipientChange = (event) => {
    setRecipient(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleComposeEmail = async () => {
    try {
      const { data } = await sendEmailMutation({
        variables: {
          emailInput: {
            recipients: [recipient],
            subject,
            body: content,
          },
        },
      });


      console.log('Sent Email:', data.sendEmail);


      setRecipient('');
      setSubject('');
      setContent('');
    } catch (error) {
      console.error('Error sending email:', error.message);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Compose Email
      </Typography>
      <form>
        <TextField
          fullWidth
          label="Recipient"
          value={recipient}
          onChange={handleRecipientChange}
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Subject"
          value={subject}
          onChange={handleSubjectChange}
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Content"
          multiline
          rows={5}
          value={content}
          onChange={handleContentChange}
          variant="outlined"
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleComposeEmail}>
          Send
        </Button>
      </form>
    </Container>
  );
};

export default ComposeEmail;
