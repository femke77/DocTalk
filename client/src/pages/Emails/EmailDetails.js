import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const EmailDetails = ({ email }) => {
  const cardStyle = {
    maxWidth: 400,
    margin: '0 auto',
    marginTop: 16,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'column',
  };

  const cardContentStyle = {
    height: '100%', 
  };

  const subjectStyle = {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  };

  const senderStyle = {
    marginBottom: 8,
  };

  const messageStyle = {
    marginTop: 16,
    flex: 1,
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
        <Typography style={messageStyle} variant="body2" color="textPrimary">
          {email.message}
        </Typography>
        <Divider />
      </CardContent>
    </Card>
  );
};

export default EmailDetails;
