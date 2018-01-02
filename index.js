const express = require('express')
const app = express()

var randCompliment = ''

var compliments = [
  'Your instructors love you',
  'High five = ^5',
  'Is it Ruby Tuesday yet?',
  "It's almost beer o'clock",
  'The Force is strong with you'
]

app.set('view engine', 'hbs')

app.listen(5000, () => {
  console.log('listening on port 5000')
})

app.get('/', (req, res) => {
  randCompliment = compliments[0]
  res.render('index', {randCompliment})
})
