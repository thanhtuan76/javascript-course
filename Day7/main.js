var express = require('express')
let app = express()
var port = 5000
var bodyParser = require('body-parser')
var urlParser = bodyParser.urlencoded({extended: false})

app.get("/", function(req, res){
  res.sendFile(__dirname + '/index.html')
})

app.get("/welcome", function(req, res){
  let fn = req.query.firstName
  let ln = req.query.lastName

  res.send(`hello ${fn} ${ln}`)
})

app.get("/welcome/:name", function(req, res){
  let name = req.params.name

  res.send(`hello ${name}`)
})

app.post("/register", urlParser, function(req, res){
  let name = req.body.name
  let email = req.body.email

  res.send(`${name} - ${email}`)
})

var server = app.listen(port, function() {
  console.info(`http://127.0.0.1:${port}`)
})