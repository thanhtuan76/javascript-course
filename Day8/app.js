var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var conf = require('./configs/common')
var proRouter = require('./routers/productRouter')
const bodyParser = require('body-parser')
// const { Router } = require('express')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/products', proRouter)

app.listen(conf.PORT, (err) => {
  if (err)
    console.info(err)
  else
    console.info(`http://localhost:${conf.PORT}`)
})
