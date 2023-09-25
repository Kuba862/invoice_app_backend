const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        requre: true,
        type: String
    },
    lastName: {
        requre: true,
        type: String
    },
    email: {
        requre: true,
        type: String
    },
    password: {
        requre: true,
        type: String
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;