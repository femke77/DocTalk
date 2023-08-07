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
export const QUERY_PROFILE_USER = gql`
 QUERY getUserProfile($email: String!) {
  userByEmail(email: $email) {
    _id
    username
    email
    firstName
    lastName
    patient
    doctor
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
        username
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
const GET_SENT_EMAILS_QUERY = gql`
  query getSentEmails {
    getSentEmails {
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

export const GET_RECEIVED_EMAILS_QUERY = gql`
  query getReceivedEmails {
    getReceivedEmails {
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
  `
;

