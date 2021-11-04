const express = require('express')
const router = express.Router()
const UserAPI = require('../controllers/user')

router.get('/', BookAPI.fetchAllBooks)
router.get('/:id', BookAPI.fetchBookByID)
router.post('/', BookAPI.addBook)
router.patch('/:id', BookAPI.updateBook)
router.delete('/:id', BookAPI.deleteBook)

module.exports = router