const mongoose = require('mongoose')
const Schema = mongoose.Schema

const invoiceDetailSchema = new Schema({
    invoice: {
        type: Schema.Types.ObjectId,
        ref: 'invoice'
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

module.exports = mongoose.model('invoiceDetail', invoiceDetailSchema)