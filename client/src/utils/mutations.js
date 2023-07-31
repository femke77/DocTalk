// your-existing-mutations.js
import { gql } from '@apollo/client';


export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!, $username: String!, $firstName: String!, $lastName: String!, $doctor: Boolean!, $patient: Boolean!) {
    addUser(email: $email, password: $password, username: $username, firstName: $firstName, lastName: $lastName, doctor: $doctor, patient: $patient) {
      token
      user {
        username,
        firstName,
        lastName,
        email,
        password,
        patient,
        doctor,
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($_id: ID!, $input: UpdateUserInput!) {
    updateUser(_id: $_id, input: $input) {
      _id
      username
      email
      firstName
      lastName
      doctor
      patient
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        password

      }
    }
  }
`;



