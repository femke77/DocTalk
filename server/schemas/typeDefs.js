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

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User!]!
    userByEmail(email: String!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, firstName: String!, lastName: String!, patient: Boolean!, doctor: Boolean!): Auth
    login(email: String!, password: String!): Auth
    updateUser(_id: ID!, input: UpdateUserInput!): User!
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
`;

module.exports = typeDefs;

