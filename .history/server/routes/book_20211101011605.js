const express = require('express')
const router = express.Router()
const BookAPI = require('../controllers/book')
const multer = require('multer')

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname)
    }
})

let upload = multer({
    storage: storage
}).single("img")

router.get('/', BookAPI.fetchAllBooks)
router.get('/:id', BookAPI.fetchBookByID)
router.post('/', upload, BookAPI.addBook)
router.patch('/:id', upload, BookAPI.updateBook)
router.delete('/:id', BookAPI.deleteBook)

module.exports = router