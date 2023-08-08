import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useQuery, gql } from '@apollo/client';
import AuthService from '../../utils/auth';
import Container from '@mui/material/Container';
import EmailDetails from './EmailDetails';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

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
    }
  }
`;

const SentEmails = () => {
  const [sentEmails, setSentEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const { loading, error, data } = useQuery(GET_SENT_EMAILS_QUERY, {
    context: {
      headers: {
        authorization: `Bearer ${AuthService.getToken()}`,
      },
    },
  });

  useEffect(() => {
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

  const emailsPerPage = 10;
  const startIndex = currentPage * emailsPerPage;
  const endIndex = startIndex + emailsPerPage;
  const emailsToShow = sentEmails.slice(startIndex, endIndex);
  const totalPages = Math.ceil(sentEmails.length / emailsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <Container maxWidth="lg">
      <div style={{ paddingLeft: '20px', marginTop: '20px' }}>
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
              {emailsToShow.map((email) => (
                <TableRow key={email.id} onClick={() => setSelectedEmail(email)}>
                <TableCell style={{ paddingLeft: '20px', fontFamily: 'sans-serif', fontSize: '15px', fontWeight: email.status === 'unread' ? 'bold' : 'normal' }}>
                  <button style={{ border: 'none', background: 'none', cursor: 'pointer', fontFamily: 'sans-serif', fontSize: '15px', fontWeight: email.status === 'unread' ? 'bold' : 'normal'  }}>
                    {email.subject}
                  </button>
                </TableCell>
                <TableCell style={{ paddingLeft: '20px', fontFamily: 'sans-serif', fontSize: '15px', fontWeight: email.status === 'unread' ? 'bold' : 'normal' }}>
                  {email.recipients}
                </TableCell>
                <TableCell style={{ paddingLeft: '20px', fontFamily: 'sans-serif', fontSize: '15px', fontWeight: email.status === 'unread' ? 'bold' : 'normal' }}>
                  {new Date(email.timestamp).toLocaleString()}
                </TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <IconButton
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          aria-label="Previous Page"
        >
          <ChevronLeftIcon />
        </IconButton>
        <Typography variant="body1" style={{ marginTop: '10px', marginRight: '10px' }}>
          Page {currentPage + 1} of {totalPages}
        </Typography>
        <IconButton
          onClick={handleNextPage}
          disabled={endIndex >= sentEmails.length}
          aria-label="Next Page"
        >
          <ChevronRightIcon />
        </IconButton>
      </div>

      {selectedEmail && <EmailDetails email={selectedEmail} />}
    </Container>
  );
};

export default SentEmails;
