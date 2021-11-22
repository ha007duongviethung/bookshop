const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InvoiceSchema = new Schema({
    address: {
        type: Schema.Types.ObjectId,
        ref: 'address'
    },
    subtotal: {
        type: Number,
        required: true
    },
    ship: {
        type: Number,
        default: 20000
    },
    total: {
        type: Number,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    notes: {
        type: String
    },
})

module.exports = mongoose.model("invoice", InvoiceSchema)