require('dotenv').config({path: `./${process.env.NODE_ENV}.env`})
import express from 'express'
import cors from 'cors'
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())


app.listen(process.env.)