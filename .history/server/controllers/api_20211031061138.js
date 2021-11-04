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
        res.send("books id = ?")
    }

    static async addBook(req, res) {
        res.send("add book")
    }

    static async updateBook(req, res) {
        res.send("update book")
    }

    static async deleteBook(req, res) {
        res.send("delete book")
    }
}