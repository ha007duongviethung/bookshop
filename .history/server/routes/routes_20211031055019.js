const express = require('express')
const router = express.Router()
const API = require('../controllers/api')

router.get('/', (req, res) => {
    res.send("Hello Heroes Pluss")
})

module.exports = router