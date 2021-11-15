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
    img: {
        type: String,
        default: 'https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png'
    },
    remember_token: {
        type: String,
        default: ''
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