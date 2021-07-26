const express = require('express')
const app = express()
const port = 5000

app.get('/home', (req, res) => {
  res.send('Hello World!')
})
app.get('/private', (req, res) => {
  res.send('Hello Private')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})