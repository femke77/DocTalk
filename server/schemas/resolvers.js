const { AuthenticationError } = require('apollo-server-express');
const { User, Message, Chat } = require('../models');
const { signToken } = require('../utils/auth');

const channel = {
  id: "1",
  name: "Chat with Doctor",
  messages: [{
    id: "1",
    text: "The doctor will be with you shortly ..."
  }]
}
let nextMessageId = "2";

const resolvers = {
  Query: {
    users: async () => {
      try {
        const allUsers = await User.find();
        return allUsers;
      } catch (error) {
        // Handle any errors here
        throw new Error('Error fetching all users');
      }
    },
    userByEmail: async (parent, { email }) => {
      try {
        const user = await User.findOne({ email });
        return user;
      } catch (error) {
        console.log(error);
        throw new Error('Error fetching user by email');
      }
    },
    channel: async()=> {
      return channel;
    },
    getChats: async (parent, args) => {
      try {
        const chats = await Chat.find().populate('user');
        return chats;
      } catch (error) {
        console.error(error);
        throw new Error('Error fetching chats');
      }
    }
  },
  Mutation: {
    addUser: async (parent, { username, email, password, firstName, lastName, patient, doctor }) => {
      const user = await User.create({
        username,
        firstName,
        lastName,
        email,
        password,
        patient,
        doctor,
      });

      const token = signToken(user);

      return { token, user };
    },

    message: async (parent, {messageData}, context) => {
      if (context.user) {
        const message = await Message.create({...messageData, patient:context.user._id})
        return message
      } 
        throw new AuthenticationError('You must be logged in!');
    },

    updateUser: async (parent, { _id, input }) => {
      try {
        const user = await User.findById(_id);
        if (!user) {
          throw new Error('User not found');
        }

        if (input.firstName) user.firstName = input.firstName;
        if (input.lastName) user.lastName = input.lastName;
        if (input.username) user.username = input.username;
        if (input.email) user.email = input.email;
        if (input.password) user.password = input.password;
        if (input.patient !== undefined) user.patient = input.patient;
        if (input.doctor !== undefined) user.doctor = input.doctor;

        await user.save();
        return user;
      } catch (error) {
        throw new Error('Error updating user');
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addMessage: async (parent, {message}) => {     
      const newMessage = {id: String(nextMessageId++), text: message}
      channel.messages.push(newMessage)
      return newMessage;
    },
    postChat: async (parent, { userId, text }) => {
      const chat = await Chat.create({ user: userId, text });
      return chat;
    },
  },
};

module.exports = resolvers;