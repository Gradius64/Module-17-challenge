const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    // other fields like password, email, etc.
});

const User = mongoose.model('User', userSchema);
module.exports = User;
