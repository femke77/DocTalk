import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useQuery, gql } from '@apollo/client';
import AuthService from '../../utils/auth';
import EmailDetails from './EmailDetails';


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
  const [selectedEmail, setSelectedEmail] = useState(null);
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

      <div style={{ paddingLeft: '20px' }}>
        <TableContainer component={Paper}>
          <Table>
            
          <TableHead>
              <TableRow>
                <TableCell style={{ paddingLeft: '20px', fontFamily:'sans-serif', fontSize:'17px', fontWeight:'bold',backgroundColor:'#007bff', color: 'whitesmoke' }}>Subject</TableCell >
                <TableCell style={{ paddingLeft: '20px', fontFamily:'sans-serif', fontSize:'17px', fontWeight:'bold',backgroundColor:'#007bff', color: 'whitesmoke' }}>Recipient</TableCell>
                <TableCell style={{ paddingLeft: '20px', fontFamily:'sans-serif', fontSize:'17px', fontWeight:'bold',backgroundColor:'#007bff', color: 'whitesmoke' }}>Date & Time</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {sentEmails.map((email) => (
                <TableRow key={email.id}>
                  <TableCell style={{ paddingLeft: '20px', fontFamily:'sans-serif', fontSize:'14px' }}>{email.subject}</TableCell>
                  <TableCell style={{ paddingLeft: '20px', fontFamily:'sans-serif', fontSize:'14px' }}>{email.sender}</TableCell>
                  <TableCell style={{ paddingLeft: '20px', fontFamily:'sans-serif', fontSize:'14px' }}>{email.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {selectedEmail && <EmailDetails email={selectedEmail} />}
    </Container>
  );
};
export default SentEmails;
