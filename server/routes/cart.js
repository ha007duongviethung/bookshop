const express = require('express')
const router = express.Router()
const CartAPI = require('../controllers/cart')
const multer = require('multer')
const verifyToken = require('../middleware/user')

router.get('/', verifyToken, CartAPI.fetchAllItem)
router.get('/:id', verifyToken, CartAPI.fetchItemById)
router.post('/', verifyToken, CartAPI.addItemToCart)
router.patch('/:id', verifyToken, CartAPI.updateItem)
router.delete('/:id', verifyToken, CartAPI.deleteItemInCart)

module.exports = router