const Book = require('../models/books')
const fs = require('fs')

module.exports = class BookAPI {
    // @router GET api/book/
    // @desc GET all books
    // @access public
    static async fetchAllBooks(req, res) {
        try {
            const books = await Book.find()
            res.status(200).json({ success: true, books })
        } catch (err) {
            res.status(500).json({ success: false, message: err.message })
        }
    }

    static async fetchBooksByType(req, res) {
        const slug = req._parsedUrl.pathname.replace('/', '').split('/').join('-')
        try {
            const books = await Book.find({slug})
            res.status(200).json({ success: true, books })
        } catch (err) {
            res.status(500).json({ success: false, message: err.message })
        }
    }

    static async fetchBookCombo(req, res) {
        try {
            const books = await Book.find({book_name: /Combo/})
            res.status(200).json({ success: true, books })
        } catch (err) {
            res.status(500).json({ success: false, message: err.message })
        }
    }

    // @router GET /api/book/:id
    // @desc GET one book by id
    // @access public
    static async fetchBookByID(req, res) {
        const id = req.params.id
        try {
            const book = await Book.findById(id)
            res.status(200).json({ success: true, book })
        } catch (err) {
            res.status(500).json({ success: false, message: err.message })
        }
    }

    // @router POST api/book/
    // @desc Add a new book
    // @access private
    static async addBook(req, res) {
        const book = req.body

        try {
            await Book.create(book)
            res.status(200).json({ success: true, message: 'Book created successfully!' })
        } catch (err) {
            res.status(500).json({ success: false, message: err.message })
        }
    }

    static async updateBook(req, res) {
        const id = req.params.id

        const newBook = req.body

        try {
            await Book.findByIdAndUpdate(id, newBook)
            res.status(200).json({ success: true, message: 'Book update successfully!' })
        } catch (err) {
            res.status(404).json({ success: false, message: err.message })
        }
    }

    static async deleteBook(req, res) {
        const id = req.params.id
        try {
            const result = await Book.findByIdAndDelete(id)
            res.status(200).json({ success: true, message: 'Book deleted successfully!' })
        } catch (err) {
            res.status(404).json({ success: false, message: err.message })
        }
    }

    static async searchBooks(req, res) {
        const search = req.body.search

        try {
        const books = await Book.find({ book_name: search})
            console.log(books)
            res.status(200).json({ success: true, books })
        } catch (err) {
            res.status(500).json({ success: false, message: err.message })
        }
    }
}