const { AuthenticationError } = require('apollo-server-express');
const { User, Message, Chat } = require('../models');
const { signToken } = require('../utils/auth');

let channels = [{
  id: "1",
  name: 'Chat with a doctor',
  messages:[{
    id: "1",
    username: "Doctor",
    text: 'The doctor will be with you shortly...'
  }]
}, {
  id: "2",
  name: 'Technical Support',
  messages:[{
    id: "1",
    username: "Tech Support",
    text: 'The tech support will be with you shortly...'
  }
]
}]


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
    channels: () => {
      return channels;
    },
    channel: (parent, {id})=> {  
      return (channels.find(ch => ch.id === id)) 
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
      addMessage: async (parent, {message}, context) => {
        const channel = channels.find(ch => ch.id === message.channelId)
        if (!channel)
        throw new Error("Channel does not exist")
        
        const newMessage = {id: String(nextMessageId++), username: context.user.username, text: message.text}
        channel.messages.push(newMessage)
        return newMessage;
      }
  },
};

module.exports = resolvers;