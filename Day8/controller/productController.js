const Product = require("../model/product")

productModel = require("../model/product")

exports.getProducts = (req, res) => {
  let kw = req.query.kw


  productModel.getProducts(kw, (err, products) => {
    if (err)
      console.error(err)
    else
      res.send(products)
  })
}

exports.getProductDetail = (req, res) => {
  productModel.getProductById(req.params.id, (err, products) => {
    if (err)
      console.error(err)
    else
      res.send(products)
  })
}

exports.addProduct = (req, res) => {
  let product = new productModel(req.body.name, req.body.price, req.body)
  productModel.addProduct(product, (err, data) => {
    console.log(data)
    if (err)
      res.status(500).send(JSON.stringify({"message": "FAILED"}))
    else
      res.status(202).send(JSON.stringify({"message": "SUCCESS"}))
  })
}