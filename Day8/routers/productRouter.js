var router = require('express').Router()
var productController = require('../controller/productController')

router.get('/', (req, res) => {
  productController.getProducts(req, res)
})

router.get('/', (req, res) => {
  productController.addProduct(req, res)
})

router.get('/:id', (req, res) => {
  productController.getProducts(req, res)
})

module.exports = router