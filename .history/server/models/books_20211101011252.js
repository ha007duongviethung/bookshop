const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    book_name: String,
    img: String,
    author: String,
    pb_company: String,
    type: String,
    price: Number,
    amount: Number,
    brief_des: String,
    detailed_des: String,
    height: Number,
    width: Number,
    weight: Number,
    create_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Book", bookSchema)