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

export const GET_MESSAGES = gql`
  subscription GET_MESSAGES {
    getChats {
      _id
      user {
        _id
        username
        email
        password
        firstName
        lastName
        patient
        doctor
      }
      text
    }
  }
`;
