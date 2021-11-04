const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    fullname: {
        type: String,
        default: 'user'
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    type: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('user', UserSchema)