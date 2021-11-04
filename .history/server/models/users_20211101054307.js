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
    status: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('user', UserSchema)