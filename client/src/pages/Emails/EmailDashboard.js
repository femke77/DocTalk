import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MailIcon from '@mui/icons-material/Mail';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import InboxEmails from './InboxEmails';
import SentEmails from './SentEmails';
import ComposeEmail from './ComposeEmail';

const EmailDashboard = () => {
  const [selectedEmail, setSelectedEmail] = useState('Received');

  const handleInboxClick = () => {
    setSelectedEmail('Received');
  };

  const handleSentClick = () => {
    setSelectedEmail('sent');
  };

  const handleComposeClick = () => {
    setSelectedEmail('compose');
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '40px' }}>
      <Typography variant="h4" gutterBottom style={{ marginBottom: '30px', marginLeft: '20px', marginTop: '30px' }}>
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
            color={selectedEmail === 'Received' ? 'secondary' : 'primary'}
            fullWidth
            onClick={handleInboxClick}
            style={{ marginBottom: '10px' }}
          >
            Inbox
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
          {selectedEmail === 'sent' ? (
            <SentEmails />
          ) : selectedEmail === 'Received' ? (
            <InboxEmails />
          ) : selectedEmail === 'compose' ? (
            <ComposeEmail />
          ) : null}
        </div>
      </div>
    </Container>
  );
};

export default EmailDashboard;
