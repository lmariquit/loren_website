const path = require('path')
const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

app.use(function(err, req, res, next) {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

const port = process.env.PORT || 3000
app.listen(port, function() {
  console.log(`

  about to listen

  `)
  console.log('Knock, knock')
  console.log("Who's there?")
  console.log(`Your server, listening on port ${port}`)
})
