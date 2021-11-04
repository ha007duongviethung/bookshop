const express = require('express')
const app = express()

const port = 2507
 
app.get('/', function (req, res) {
  res.send(GET https://api.publicapis.org/entries)
})
 
app.listen(port,  () => {
    console.log('Listening on port: ' + port)
})