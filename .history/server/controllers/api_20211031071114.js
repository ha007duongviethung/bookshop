const Book = require('../models/books')
const fs = require('fs')

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
        const id = req.params.id
        let new_img = ''
        if(req.file) {
            new_img = req.file.filename
            try {
                fs.unlinkSync('./uploads/' + req.body.old_image)
            } catch (err) {
                console.log(err)
            }
        } else {
            new_img = req.body.old_image
        }

        const newBook = req.body
        newBook.img = new_img

        try {
            await Book.findByIdAndUpdate(id, newBook)
            res.status(200).json({message: 'Book update successfully!'})
        } catch (err) {
            res.status(404).json({message: err.message})
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
            res.status(200).json({message: 'Book deleted successfully!'})
        } catch (err) {
            res.status(404).json({message: err.message})
        }
    }
}