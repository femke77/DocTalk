import { gql } from "@apollo/client";

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
  query ChannelDetailsQuery($channelId: ID!) {
    channel(id: $channelId) {
      id
      name
      messages {
        id
        text
      }
    }
  }

`;

export const GET_EMAILS_QUERY = gql`
  query getAllEmails($inbox: Boolean!) {
  getAllEmails(inbox: $inbox) {
    id
    subject
    sender
    recipients
    body
    timestamp
    status
    user {
      patient
      doctor
    }
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

