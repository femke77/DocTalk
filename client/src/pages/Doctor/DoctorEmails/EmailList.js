
import React from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";


const EmailList = ({ emails, onEmailClick }) => {
  return (
    <List>
      {emails.map((email) => (
        <ListItem button key={email.id} onClick={() => onEmailClick(email)}>
          <ListItemText primary={email.subject} secondary={`From: ${email.sender}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default EmailList;
