const express = require("express");
const products = express.Router();
const Product = require("../models/product.js");
const cors = require("cors");
const { response } = require("express");
products.use(cors());

products.post("/postproduct", (req, res) => {
  Product.create(req.body)
    .then((product) => {
      res.json(product + " created product");
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});
products.get("/getproducts", function (req, res) {
  Product.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
// products.get("/list/all", (req, res) => {
//         Product.find().then((err, products) => {
//                 if (err) {
//                     return res.status(400).json({
//                         error: "product not found"
//                     });
//                 }
//                 res.json(products);
//             })
//         });
module.exports = products;
