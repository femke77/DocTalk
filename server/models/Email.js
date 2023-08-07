const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const emailSchema = new Schema({
  subject: {
    type: String,
  },
  sender: {
    type: String,
  },
  recipients: {
    type: [String],
  },
  body: {
    type: String,
  },
  timestamp: {
    type: String,
  },
  status: {
    type: String,
    enum: ['sent', 'received'],
    default: 'sent',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  recipientRole: {
    type: String,
    enum: ['doctor', 'patient'],
  },
  recipientStatus: {
    type: String,
    enum: ['sent', 'received'],
    default: 'received',
  },

});

const Email = mongoose.model('Email', emailSchema);

module.exports = Email;
