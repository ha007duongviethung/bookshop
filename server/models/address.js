const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AddressSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    phone_number: {
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('address', AddressSchema)