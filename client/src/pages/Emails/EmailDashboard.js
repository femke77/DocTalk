import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MailIcon from '@mui/icons-material/Mail';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import InboxEmails from './InboxEmails';
import SentEmails from './SentEmails';
import ComposeEmail from './ComposeEmail';
import EmailDetails from './EmailDetails'; // Import the EmailDetails component
import { useQuery, gql } from '@apollo/client';
import AuthService from '../../utils/auth';
import Card from '@mui/material/Card';

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
    }
  }
`;

const EmailDashboard = () => {
  const [selectedEmail, setSelectedEmail] = useState("inbox"); // Track the selected email
  const [receivedEmailCount, setReceivedEmailCount] = useState(0);

  const { loading, error, data } = useQuery(GET_RECEIVED_EMAILS_QUERY, {
    context: {
      headers: {
        authorization: `Bearer ${AuthService.getToken()}`,
      },
    },
  });

  useEffect(() => {
    if (data) {
      setReceivedEmailCount(data.getReceivedEmails.length);
    }
  }, [data]);

  const handleInboxClick = () => {
    setSelectedEmail('inbox'); // Set a value to indicate Inbox button click
  };

  const handleSentClick = () => {
    setSelectedEmail('sent'); // Set a value to indicate Sent button click
  };

  const handleComposeClick = () => {
    setSelectedEmail('compose'); // Set a value to indicate Compose button click
  };

  const handleEmailDetailsClick = (email) => {
    setSelectedEmail(email);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '40px' }}>
      <Card>
      <Typography variant="h4" gutterBottom style={{ marginBottom: '10px', marginLeft: '20px', marginTop: '0px' }}>
        Email Dashboard
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
        <div style={{ flex: 1, marginTop: '80px'}}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleComposeClick}
            style={{ marginBottom: '10px' }}
          >
            Compose Email
          </Button>
          <Button
            startIcon={<MailIcon />}
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleInboxClick}
            style={{ marginBottom: '10px' }}
          >
            Inbox ({receivedEmailCount})
          </Button>
          <Button
            startIcon={<DraftsIcon />}
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginBottom: '10px' }}
          >
            Drafts
          </Button>
          <Button
            startIcon={<SendIcon />}
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSentClick}
            style={{ marginBottom: '10px' }}
          >
            Sent
          </Button>
        </div>
        <div style={{ flex: 2, paddingLeft: '20px' }}>
          {selectedEmail === 'compose' && <ComposeEmail />}
          {selectedEmail === 'inbox' && <InboxEmails onEmailClick={handleEmailDetailsClick} />}
          {selectedEmail === 'sent' && <SentEmails onEmailClick={handleEmailDetailsClick} />}
          {selectedEmail && typeof selectedEmail === 'object' && <EmailDetails email={selectedEmail} />}
        </div>
      </div>
      </Card>
    </Container>
  );
};

export default EmailDashboard;
