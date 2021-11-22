const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InvoiceSchema = new Schema({
    address: {
        type: Schema.Types.ObjectId,
        ref: 'address'
    },
    total: {
        type: Number,
        required: true
    },
    ship: {
        type: Number,
        default: 20000
    },
    notes: {
        type: String
    },
    status: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model("invoice", InvoiceSchema)