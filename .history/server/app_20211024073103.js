const express = require('express')
const app = express()

const port = 2507
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(port,  () => {
    console.log('Listening on port: ' + port)
})