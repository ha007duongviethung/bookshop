const express = require('express')
const router = express.Router()
const BookAPI = require('../controllers/book')
const multer = require('multer')
// const verifyToken = require('../middleware/user')

// let storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname)
//     }
// })

// let upload = multer({
//     storage: storage
// }).single("img")

router.get('/', BookAPI.fetchAllBooks)
router.get('/combo', BookAPI.fetchBookCombo)
router.get('/:id', BookAPI.fetchBookByID)
router.get('/type/:slug', BookAPI.fetchBooksByType)
router.post('/', BookAPI.addBook)
router.patch('/:id', BookAPI.updateBook)
router.delete('/:id', BookAPI.deleteBook)
router.post('/search', BookAPI.searchBooks)

module.exports = router