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
  const [selectedEmail, setSelectedEmail] = useState(null); // Track the selected email
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
    setSelectedEmail(null); // Clear the selected email
  };

  const handleSentClick = () => {
    setSelectedEmail(null); // Clear the selected email
  };

  const handleComposeClick = () => {
    setSelectedEmail(null); // Clear the selected email
  };

  const handleEmailDetailsClick = (email) => {
    setSelectedEmail(email);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '40px' }}>
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
            color={selectedEmail === null ? 'secondary' : 'primary'}
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
            color={selectedEmail === 'sent' ? 'secondary' : 'primary'}
            fullWidth
            onClick={handleSentClick}
            style={{ marginBottom: '10px' }}
          >
            Sent
          </Button>
        </div>
        <div style={{ flex: 2, paddingLeft: '20px' }}>
          {selectedEmail ? ( // Conditionally render EmailDetails when an email is selected
            <EmailDetails email={selectedEmail} />
          ) : selectedEmail === 'sent' ? (
            <SentEmails onEmailClick={handleEmailDetailsClick} />
          ) : (
            <InboxEmails onEmailClick={handleEmailDetailsClick} />
          )}
        </div>
      </div>
    </Container>
  );
};

export default EmailDashboard;
