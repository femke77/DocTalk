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

export const MESSAGES = gql`
  query Messages {
    messages {
      _id
      email
      firstName
      lastName
      phonenumber
      patient {
        _id
        username
        email
        firstName
        lastName
        patient
        doctor
      }
      message
    }
  }
`;