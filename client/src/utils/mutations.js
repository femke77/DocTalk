// your-existing-mutations.js
import { gql } from '@apollo/client';


export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!, $firstName: String!, $lastName: String!, $doctor: Boolean!, $patient: Boolean!) {
    addUser(email: $email, password: $password, firstName: $firstName, lastName: $lastName, doctor: $doctor, patient: $patient) {
      token
      user {
        _id
        email
        firstName
        lastName
        doctor
        patient
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($_id: ID!, $input: UpdateUserInput!) {
    updateUser(_id: $_id, input: $input) {
      _id
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
        firstName
        lastName
        doctor
        patient
      }
    }
  }
`;



