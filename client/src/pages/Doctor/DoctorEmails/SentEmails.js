import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useQuery, gql } from '@apollo/client';
import AuthService from '../../../utils/auth';

const GET_SENT_EMAILS_QUERY = gql`
  query getSentEmails {
    getSentEmails {
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

const SentEmails = () => {
  const [sentEmails, setSentEmails] = useState([]);
  const { loading, error, data } = useQuery(GET_SENT_EMAILS_QUERY, {
    context: {
      headers: {
        authorization: `Bearer ${AuthService.getToken()}`,
      },
    },
  });

  React.useEffect(() => {
    if (data) {
      setSentEmails(data.getSentEmails);
    }
  }, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Sent Emails
      </Typography>
      <div style={{ paddingLeft: '20px' }}>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {sentEmails.map((email) => (
                <TableRow key={email.id}>
                  <TableCell>{email.subject}</TableCell>
                  <TableCell>{email.sender}</TableCell>
                  <TableCell>{email.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
};

export default SentEmails;
