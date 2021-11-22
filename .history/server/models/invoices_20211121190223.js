const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InvoiceSchema = new Schema({
    address: {
        type: Schema.Types.ObjectId,
        ref: 'address'
    }
})

module.exports = mongoose.model("invoice", InvoiceSchema)