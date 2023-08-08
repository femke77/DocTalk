
// import react from 'react';
// import { ApolloClient, InMemoryCache, useMutation, useSubscription, gql } from '@apollo/client';

// // import { Container, Chip, Grid, TextField, Button } from '@material-ui/core';
// import { GET_MESSAGES } from '../../utils/queries';

// const ContactPatientChat = () => {
//   const { data } = useSubscription(GET_MESSAGES);

//   if (!data) {
//     return null;
//   }

//   return (
//     <div>
//       <h3>Welcome to DevThoughts! A simple chat app for the GraphQL series!</h3>
//       <p>ttest</p>
//     </div>
//   )
// }

// export default ContactPatientChat;

import React from "react";
import { styled } from "@mui/system";
import Channel from "../../components/ChatChannel";
import Footer from "../../components/Footer";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const ContainerWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "80vh",
  padding: "16px",
  background: "#f0f0f0",
});

const ChatContainer = styled(Paper)({
  width: "100%",
  maxWidth: "800px",
  background: "#fff",
  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
  borderRadius: "5px",
  padding: "16px",
});

const Header = styled(Typography)({
  fontSize: "24px",
  marginBottom: "16px",
});

export default function ContactDoctorChat() {
  return (
    <ContainerWrapper>
      <ChatContainer>
        <Header variant="h1"></Header>
        <Channel />
      </ChatContainer>
      <Footer />
    </ContainerWrapper>
  );
}