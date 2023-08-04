import react from 'react';
import ContactPatientChat from './ContactPatientChat';
import { ApolloClient, InMemoryCache, useMutation, useSubscription, gql} from '@apollo/client';
import { WebSocketLink } from "@apollo/client/link/ws";
import {Container, Chip, Grid, TextField, Button} from '@material-ui/core';

const link = new WebSocketLink({
    uri: `ws://localhost:4000/`,
    options: {
      reconnect: true,
    },
});

export const client = new ApolloClient({
    link, //websocket link
    uri: 'http://localhost:4000/', //connect to server
    cache: new InMemoryCache(),
  });
  
  export const ContactPatientChat = () =>{
    return(
      <div>
         <h3>Welcome to DevThoughts! A simple chat app for the GraphQL series!</h3>
      </div>
    )
}
