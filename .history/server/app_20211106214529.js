require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const book = require('./routes/book')
const user = require('./routes/user')

const app = express()
const port = process.env.PORT || 2507

app.use(cors())
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({ extended: true, limit: '50mb' }))
app.use(express.static("uploads"))

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
}).then(() => console.log('Connected to the database!'))
.catch((err) => console.log(err))

app.use('/api/book', book)
app.use('/api/user', user)

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))