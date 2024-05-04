const mongoose = require('mongoose')

const userContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    }
})

const User = mongoose.model('usersContactSchema', userContactSchema)
module.exports = User;