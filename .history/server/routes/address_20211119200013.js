const express = require('express')
const router = express.Router()
const AddressAPI = require('../controllers/address')
const verifyToken = require('../middleware/user')

router.post('/', verifyToken, AddressAPI.addAddress)
router.get('/', verifyToken, AddressAPI.getAddress)
router.patch('/:id', verifyToken, AddressAPI.updateAddress)

module.exports = router