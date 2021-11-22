require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
// const bodyParser = require('body-parser')
const book = require('./routes/book')
const user = require('./routes/user')
const cart = require('./routes/cart')
const address = require('./routes/address')
const invoice = require('./routes/invoice')

const app = express()
const port = process.env.PORT || 2507

app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true, limit: '50mb' }))
app.use(express.static("uploads"))

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => console.log('Connected to the database!'))
.catch(
    (err) => {
        console.log(err)
        process.exit()
    })

app.use('/api/book', book)
app.use('/api/user', user)
app.use('/api/cart', cart)
app.use('/api/address', address)
app.use('/api/invoice', invoice)

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))