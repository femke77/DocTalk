import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import MailIcon from '@mui/icons-material/Mail';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import EmailDetails from './EmailDetails'; 
import { useQuery, gql } from '@apollo/client';  

export const GET_EMAILS_QUERY = gql`
  query getAllEmails {
    getAllEmails {
      id
      subject
      sender
      recipients
      body
      timestamp
      status
      patient
      doctor
    }
  }
`;


const EmailDashboard = () => {
  const [emails, setEmails] = useState([
    {
      id: 1,
      sender: 'john@example.com',
      subject: 'Hello',
      message: 'This is a test email...',
      read: false,
    },
    {
      id: 2,
      sender: 'alice@example.com',
      subject: 'Meeting Reminder',
      message: 'Dont forget the meeting at 3 PM.',
      read: true,
    },
    // Add more emails here...
  ]);

  const { loading, error, data } = useQuery(GET_EMAILS_QUERY);

  React.useEffect(() => {
    if (data) {
      setEmails(data.getAllEmails);
    }
  }, [data]);

  

  const [selectedEmail, setSelectedEmail] = useState(null);
 

  const handleSubjectClick = (emailId) => {
    const selectedEmail = emails.find((email) => email.id === emailId);
    setSelectedEmail(selectedEmail);

  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
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
          <Button startIcon={<SendIcon />} variant="contained" color="primary" fullWidth style={{ marginBottom: '10px' }}>
            Sent
          </Button>
        </div>
        <div style={{ flex: 2, paddingLeft: '20px' }}>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                {emails.map((email) => (
                  <TableRow key={email.id}>
                    <TableCell
                      style={{ fontWeight: email.read ? 'normal' : 'bold' }}
                      onClick={() => handleSubjectClick(email.id)}
                    >
                      {email.subject}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      {selectedEmail && <EmailDetails email={selectedEmail} />}
    </Container>
  );
};

export default EmailDashboard;
