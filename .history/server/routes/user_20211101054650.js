const express = require('express')
const router = express.Router()
const UserAPI = require('../controllers/user')

router.get('/', UserAPI.fetchAllBooks)
router.get('/:id', UserAPI.fetchBookByID)
router.post('/', UserAPI.addBook)
router.patch('/:id', UserAPI.updateBook)
router.delete('/:id', UserAPI.deleteBook)

module.exports = router