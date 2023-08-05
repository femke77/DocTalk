const { Schema, model } = require('mongoose');

const chatSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    text: String
});

const Chat = model('Chat', chatSchema);

module.exports = Chat;