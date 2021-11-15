const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CartSchema = new Schema({
    book: {
        type: Schema.Types.ObjectId,
        ref: 'book',
        unique: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    quantity: {
        type: Number,
        default: 1
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('cart', CartSchema)