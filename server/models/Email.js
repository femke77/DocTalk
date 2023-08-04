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
  },
  user: {
    type: Schema.Types.ObjectId, 
    ref: 'Patient',
  },
});

const Email = mongoose.model('Email', emailSchema);

module.exports = Email;