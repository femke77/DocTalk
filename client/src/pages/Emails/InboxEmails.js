import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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
      }
    }
  }
`;

const InboxEmails = ({setSelectedEmail }) => {


  const { loading, error, data } = useQuery(GET_RECEIVED_EMAILS_QUERY, {
    // Include the authentication token in the request headers
    context: {
      headers: {
        authorization: `Bearer ${AuthService.getToken()}`,
      },
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const emails = data.getReceivedEmails;

  return (
    <TableContainer component={Paper}>
    <Table>
      <TableBody>
        {emails.map((email) => (
          <TableRow key={email.id}>
            <TableCell
              style={{ fontWeight: email.read ? 'normal' : 'bold' }}
              onClick={() => setSelectedEmail(email)}
            >
              {email.subject}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
};

export default InboxEmails;
