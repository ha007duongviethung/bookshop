const express = require('express')
const router = express.Router()
const API = require('../controllers/api')
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

router.get('/', API.fetchAllBooks)
router.get('/:id', API.fetchBookByID)
router.post('/', upload, API.addBook)
router.patch('/:id', upload, API.updateBook)
router.delete('/:id', API.deleteBook)

module.exports = router