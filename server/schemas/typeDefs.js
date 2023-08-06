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
    messages: [ChatMessage]
  }

  type ChatMessage {
    id: ID!
    username: String
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
    email: String
  }

  input ChatMessageInput{
   channelId: ID!
   username: String
   text: String
 }

  type Query {
    users: [User!]!
    userByEmail(email: String!): User
    getAllEmails: [Email] 
    getOneEmail(id: ID!): Email
    getSentEmails: [Email]
    getReceivedEmails: [Email!]!
    channels: [Channel]  
    channel(id: ID!): Channel
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
    # add a message to the chat channel
    addMessage(message: ChatMessageInput): ChatMessage

    # send a message to the doctor (not chat)
    message(messageData: MessageInput): Message
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
    sender: String
    recipients: [String]
    body: String
    timestamp: String
    status: String
    user: User
  }
`;

module.exports = typeDefs;
