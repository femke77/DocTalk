const { gql } = require("apollo-server-express");

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

  type Channel {
    id: ID!
    name: String!
    messages: [Message]
  }

  type ChatMessage {
    id: ID!
    text: String
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
  }

  type Query {
    users: [User!]!
    userByEmail(email: String!): User

    # query the chat channel
    channels: Channel
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
      firstName: String!
      lastName: String!
      patient: Boolean
      doctor: Boolean
    ): Auth
    login(email: String!, password: String!): Auth
    updateUser(_id: ID!, input: UpdateUserInput!): User!

    # add a message to the channel
    addMessage(message: String): Message

    message(messageData: MessageInput): Message
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
