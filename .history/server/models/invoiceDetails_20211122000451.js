const mongoose = require('mongoose')
const Schema = mongoose.Schema

const invoiceDetailSchema = new Schema({
    invoice: {
        type: Schema.Types.ObjectId,
        ref: 'invoice'
    },
    book: {
        type: Schema.Types.ObjectId,
        ref: 'book'
    },
    number: {
        type: Number,
        required: true
    },
    create_at: {
        type: Number,
        default: Date.now
    }
})

module.exports = mongoose.model('invoiceDetail', invoiceDetailSchema)