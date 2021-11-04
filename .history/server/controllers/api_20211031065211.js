const Book = require('../models/books')

module.exports = class API {
    static async fetchAllBooks(req, res) {
        try {
            const books = await Book.find()
            res.status(200).json(books)
        } catch (err) {
            res.status(404).json({message: err.message})
        }
    }

    static async fetchBookByID(req, res) {
        const id = req.params.id
        try {
            const book = await Book.findById(id)
            res.status(200).json(book)
        } catch (err) {
            res.status(404).json({message: err.message})
        }
    }

    static async addBook(req, res) {
        const book = req.body
        const img = req.file.filename
        book.img = img

        try {
            await Book.create(book)
            res.status(200).json({message: 'Book created successfully!'})
        } catch (err) {
            res.status(400).json({message: err.message})
        }
    }

    static async updateBook(req, res) {
        res.send("update book")
    }

    static async deleteBook(req, res) {
        res.send("delete book")
    }
}