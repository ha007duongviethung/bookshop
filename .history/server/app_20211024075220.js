const express = require('express')
const app = express()

const port = 2507
 
app.get('/', function (req, res) {
  res.send([
    {
        id: 1,
        name: 'Heroes Pluss',
        age: 21
    },
    {
        id: 2,
        name: 'TamLon',
        age: 20
    },
    {
        id: 3,
        name: 'Hero Hung',
        age: 21
    },
  ])
})
 
app.listen(port,  () => {
    console.log('Listening on port: ' + port)
})