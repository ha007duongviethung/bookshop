const express = require('express')
const router = express.Router()
const InvoiceAPI = require('../controllers/invoice')
const verifyToken = require('../middleware/user')

// router.get('/', verifyToken, InvoiceAPI.fetchAllItem)
// router.get('/:id', verifyToken, InvoiceAPI.fetchItemById)
router.post('/', verifyToken, InvoiceAPI.createInvoice)
// router.patch('/:id', verifyToken, InvoiceAPI.updateItem)
// router.delete('/:id', verifyToken, InvoiceAPI.deleteItemInCart)

module.exports = router