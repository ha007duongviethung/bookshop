const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Hello Heroes Pluss")
})

module.exports = router