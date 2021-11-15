const express = require('express')
const router = express.Router()
const BookAPI = require('../controllers/book')
const multer = require('multer')
const verifyToken = require('../middleware/user')

router.get('/', BookAPI.fetchAllBooks)
router.get('/:id', BookAPI.fetchBookByID)
router.post('/', BookAPI.addBook)
router.patch('/:id', BookAPI.updateBook)
router.delete('/:id', BookAPI.deleteBook)

module.exports = router