const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');


const messageSchema = new Schema({
  // Define your user schema fields here
  email: {
    type: String,
    lowercase: true,
    trim: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  message: {
    type: String,
  },
  phonenumber: {
    type: String,
  },
  patient: {
    type: Schema.Types.ObjectId, 
    ref: 'User'
  },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;