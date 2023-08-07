import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MailIcon from '@mui/icons-material/Mail';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import InboxEmails from './InboxEmails';
import SentEmails from './SentEmails';
import AuthService from '../../utils/auth';

const GET_RECEIVED_EMAILS_QUERY = gql`
  query getReceivedEmails {
    getReceivedEmails {
      id
      subject
      sender
      recipients
      body
      timestamp
      status
      user {
        patient
        doctor
        firstName
        lastName
      }
    }
  }
`;

const EmailDashboard = () => {

  const [selectedEmail, setSelectedEmail] = useState(null);

  const { loading: emailsLoading, error: emailsError, data: emailsData } = useQuery(GET_RECEIVED_EMAILS_QUERY, {
    // Include the authentication token in the request headers
    context: {
      headers: {
        authorization: `Bearer ${AuthService.getToken()}`,
      },
    },
  });

  if (emailsLoading) {
    return <p>Loading...</p>;
  }

  if (emailsError) {
    return <p>Error: {emailsError.message}</p>;
  }
  const receivedEmails = emailsData.getReceivedEmails; 
  const inboxEmails = receivedEmails.filter((email) => email.status === 'received'); 

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Email Dashboard
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ flex: 1 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            component={Link}
            to="/compose"
            style={{ marginBottom: '20px' }}
          >
            Compose Email
          </Button>
          <Button startIcon={<MailIcon />} variant="contained" color="primary" fullWidth style={{ marginBottom: '10px' }}>
            Inbox
          </Button>
          <Button startIcon={<DraftsIcon />} variant="contained" color="primary" fullWidth style={{ marginBottom: '10px' }}>
            Drafts
          </Button>
          <Button
            startIcon={<SendIcon />}
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginBottom: '10px' }}
            onClick={() => setSelectedEmail('sent')}
          >
            Sent
          </Button>
        </div>
        <div style={{ flex: 2, paddingLeft: '20px' }}>
        {selectedEmail === 'sent' ? (
          <SentEmails />
        ) : (
          <InboxEmails emails={inboxEmails} setSelectedEmail={setSelectedEmail} />
        )}
      </div>
      </div>

    </Container>
  );
};

export default EmailDashboard;
