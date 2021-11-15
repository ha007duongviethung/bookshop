const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    full_name: {
        type: String,
        default: 'heroespluss'
    },
    user_name: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    remember_token: {
        type: String,
        required: true,
    },
    type: {
        type: Boolean,
        default: false   // false: user, true: admin
    },
    status: {
        type: Boolean,
        defalut: false,  // false: off, true: on
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('user', UserSchema)