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
        let new_img = ''
        if(req.file) {
            new_img = req.file.filename
            try {
                fs.unlinkSync('./uploads/' + req.body.old_img)
            } catch (err) {
                console.log(err)
            }
        } else {
            new_img = req.body.old_img
        }

        const newBook = req.body
        newBook.img = new_img

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
            if(result.img != '') {
                try {
                    fs.unlinkSync('./uploads/' + result.img)
                } catch (err) {
                    console.log(err)
                }
            }
            res.status(200).json({ success: true, message: 'Book deleted successfully!' })
        } catch (err) {
            res.status(404).json({ success: false, message: err.message })
        }
    }
}