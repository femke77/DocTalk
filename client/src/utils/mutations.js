import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!, $firstName: String!, $lastName: String!, $role: String!) {
    addUser(email: $email, password: $password, firstName: $firstName, lastName: $lastName, role: $role) {
      token
      user {
        _id
        email
        firstName
        lastName
        role
      }
    }
  }
`;
