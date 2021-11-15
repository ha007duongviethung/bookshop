const express = require('express')
const router = express.Router()
const UserAPI = require('../controllers/user')

router.post('/login', UserAPI.login)
router.post('/register', UserAPI.register)
router.get('/', UserAPI.fetchUser)

module.exports = router