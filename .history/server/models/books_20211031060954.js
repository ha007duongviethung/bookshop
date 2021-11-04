const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    name: String,
    img: String,
    author: String,
    pb_company: String,
    type: String,
    create_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Book", bookSchema)