const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    firstName: String
    lastName: String
    patient: Boolean
    doctor: Boolean
  }

  type Message {
    _id: ID
    email: String
    firstName: String
    lastName: String
    phonenumber: String
    patient: ID
    message: String
  }

  input MessageInput {
    email: String
    firstName: String
    lastName: String
    phonenumber: String
    message: String
    patient: ID
  }

  type Auth {
    token: ID!
    user: User
    email: String
  }

  type Query {
    users: [User!]!
    userByEmail(email: String!): User
    getAllEmails: [Email] 

  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, firstName: String!, lastName: String!, patient: Boolean, doctor: Boolean): Auth
    login(email: String!, password: String!): Auth
    updateUser(_id: ID!, input: UpdateUserInput!): User!
    message(messageData:MessageInput):Message
    sendEmail(emailInput: EmailInput!): Email
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
    patient: Boolean
    doctor: Boolean
  }
  input EmailInput {
    subject: String!
    recipients: [String!]!
    body: String!
  }
  
  type Email {
    id: ID
    subject: String
    sender: User
    recipients: [String]
    body: String
    timestamp: String
    status: String
  }
`;

module.exports = typeDefs;



