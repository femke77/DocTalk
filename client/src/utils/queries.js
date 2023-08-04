import { gql } from '@apollo/client';

export const QUERY_ALL_USERS = gql`
  query allUsers {
    users {
        _id
        doctor
        email
        firstName
        lastName
        patient
        username
      }
    }
  
`;


export const CHANNEL_DETAILS = gql`
  query ChannelDetailsQuery {
    channel {
      id
      name
      messages {
        id
        text
      }
    }
  }
`;


