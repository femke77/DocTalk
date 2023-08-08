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
import Channel from "../../components/ChatChannel";
import Footer from "../../components/Footer";

export default function ContactPatientChat() {
    return (
        <div>
        <div>
        <h1>Contact Patient</h1>
            <Channel/>
            </div>
            <Footer />
            </div>
    )
}