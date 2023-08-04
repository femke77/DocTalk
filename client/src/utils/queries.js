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
  }
`;

export const GET_EMAILS_QUERY = gql`
  query getAllEmails {
    getAllEmails {
      id
      subject
      sender
      recipients
      body
      timestamp
      status
      patient
      doctor
    }
  }
`;

// export const GET_EMAIL_QUERY = gql`
//   query GetEmail($id: ID!) {
//     getEmail(id: $id) {
//       id
//       subject
//       sender
//       recipients
//       body
//       timestamp
//       status
//     }
//   }
// `
;

