const express = require('express')
const app = express()

app.set('view engine', 'hbs')

app.listen(5000, () => {
  console.log('listening on port 5000')
})

app.get('/', (req, res) => {
  res.render('index')
})
