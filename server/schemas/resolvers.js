const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {

  Mutation: {
    // Signup Mutation
    signup: async (parent, { firstName, lastName, email, password }) => {
      try {
        // Check if the user with the provided email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
          throw new AuthenticationError('User with this email already exists');
        }

        // Create the new user
        const user = await User.create({ firstName, lastName, email, password });

        // Generate the token
        const token = signToken(user);

        return { token, user };
      } catch (error) {
        throw new Error(error.message);
      }
    },

    // Login Mutation
    login: async (parent, { email, password }) => {
      try {
        // Find the user with the provided email
        const user = await User.findOne({ email });

        if (!user) {
          throw new AuthenticationError('No user found with this email address');
        }

        // Check if the password is correct
        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }

        // Generate the token
        const token = signToken(user);

        return { token, user };
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
};

module.exports = resolvers;
