const express = require('express')
const router = express.Router()
const API = require('../controllers/api')

router.get('/', API.fetchAllBooks)
router.get('/:id', API.fetchBookByID)
router.post('/', API.addBook)
router.patch('/:id', API.updateBook)
router.delete('/:id', API.deleteBook)

module.exports = router