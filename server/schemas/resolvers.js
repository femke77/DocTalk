const { AuthenticationError } = require('apollo-server-express');
// const { User, Message, Email } = require('../models');
const { signToken } = require('../utils/auth');
const User = require('../models/User');
const Message = require('../models/Message');
const Email = require('../models/Email');

const emails = [
  {
    id: '1',
    subject: 'Sample Email 1',
    sender: 'sender@example.com',
    recipients: ['recipient1@example.com', 'recipient2@example.com'],
    body: 'This is the content of the email.',
    timestamp: '2023-08-04T12:00:00.000Z',
    status: 'received',
    user: {
      patient: null,
      doctor: null,
    },
  },
  {
    id: '2',
    subject: 'Sample Email 2',
    sender: 'sender@example.com',
    recipients: ['recipient3@example.com'],
    body: 'This is another email.',
    timestamp: '2023-08-05T09:30:00.000Z',
    status: 'received',
    user: {
      patient: null,
      doctor: null,
    },
  },
  // Add more email objects as needed
];
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


    getAllEmails: async (parent, { inbox }, context) => {
      try {
        const query = inbox
          ? { recipients: { $elemMatch: { $eq: context.user.email } } }
          : { sender: context.user.email };

        const emails = await Email.find(query);
        return emails;
      } catch (error) {
        console.log(error);
        throw new Error('Error fetching emails');
      }
    },

    getOneEmail: async (parent, { id }) => {
      try {
        const email = await Email.findById(id);
        return email;
      } catch (error) {
        console.log(error);
        throw new Error('Error fetching email by id');
      }
    },

    getSentEmails: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in to view sent emails');
      }

      try {
        const sentEmails = await Email.find({ sender: context.user.email });
        return sentEmails;
      } catch (error) {
        console.log(error);
        throw new Error('Error fetching sent emails');
      }
    },
    getReceivedEmails: () => emails.filter((email) => email.status === 'received'),

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

    sendEmail: async (parent, { emailInput }, context) => {
      // Check if the sender is logged in (assuming you have a user property in the context)
      if (!context.user) {
        throw new Error('You must be logged in to send an email');
      }
    
      const { subject, recipients, body } = emailInput;
      const sender = context.user.email; // Set sender as the logged-in user's email
    
      const email = new Email({
        subject,
        sender,
        recipients,
        body,
        timestamp: new Date().toISOString(),
        status: 'sent',
        user: context.user._id, // Link the email to the logged-in user
      });
    
      try {
        const savedEmail = await email.save();
    
        // Assuming you have a "sent" folder for each user, you can save the email ID to the user's sent folder.
        // For example, assuming you have a field called "sentEmails" in the User model:
        const user = await User.findById(context.user._id);
        user.sentEmails.push(savedEmail._id);
        await user.save();
    
        return savedEmail;
      } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
      }
    },

  },
};

module.exports = resolvers;