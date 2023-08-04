import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import MailIcon from '@mui/icons-material/Mail';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
// import EmailDetails from './EmailDetails';
import { useQuery, gql } from '@apollo/client';
import InboxEmails from './InboxEmails';
import SentEmails from './SentEmails';

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
        Authorization: `Bearer YOUR_AUTH_TOKEN_HERE`,
      },
    },
  });

  if (emailsLoading) {
    return <p>Loading...</p>;
  }

  if (emailsError) {
    return <p>Error: {emailsError.message}</p>;
  }

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
        {selectedEmail === 'sent' ? <SentEmails /> : <InboxEmails emails={emailsData.getReceivedEmails} setSelectedEmail={setSelectedEmail} />}
      </div>
      </div>
      {/* {selectedEmail && <InboxEmails email={selectedEmail} />} */}
    </Container>
  );
};

export default EmailDashboard;
