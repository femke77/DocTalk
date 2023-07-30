import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!, $firstName: String!, $lastName: String!, $Doctor: Boolean!, $Patient: Boolean!) {
    addUser(email: $email, password: $password, firstName: $firstName, lastName: $lastName, Doctor: $Doctor, Patient: $Patient) {
      token
      user {
        _id
        email
        firstName
        lastName
        Doctor  
        Patient
      }
    }
  }
`;

