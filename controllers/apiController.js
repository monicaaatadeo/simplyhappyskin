const db = require('../models');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

const findAll = (req, res) => {
    db.Products.find({}, (err, allProducts) => {
      if (err) {
        return res.status(400).json({status: 400, error: 'Cannot find all products'});
      }
  
      res.json(allProducts);
    });
  };

  const findOne = (req, res) => {
    db.Products.findById(req.params.productsId, (err, foundProducts) => {
      if (err) {
        return res.status(400).json({ status: 400, error: "Products not found." });
      }
  
      res.json(foundProducts);
    });
  };

  module.exports = {
      findAll,
      findOne,
  }