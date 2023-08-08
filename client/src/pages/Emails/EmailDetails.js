import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const EmailDetails = ({ email }) => {
  const cardStyle = {
    maxWidth: 600, // Adjust the width as needed
    margin: '0 auto',
    marginTop: 20,
    marginBottom: 20,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: 12,
  };

  const cardContentStyle = {
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align content to start of the card
    minHeight: 200, // Minimum height for the content area
    flexGrow: 1, // Allow the content area to expand
    overflowY: 'auto', // Add scrollbar for overflow
  };

  const subjectStyle = {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  };

  const senderStyle = {
    marginBottom: 8,
  };

  return (
    <Card style={cardStyle}>
      <CardContent style={cardContentStyle}>
        <Typography style={subjectStyle} variant="h5" gutterBottom>
          {email.subject}
        </Typography>
        <Typography style={senderStyle} variant="body1" color="textSecondary">
          From: {email.sender}
        </Typography>
        <Divider />
        <Typography variant="body2" color="textPrimary" style={{ padding: '1rem'}}>
          {email.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EmailDetails;
