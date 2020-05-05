const db = require('../models');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

const findAll = (req, res) => {
    db.Products.find({}, (err, allProducts) => {
      if (err) {
        return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
      }
  
      res.json(allProducts);
    });
  };

  module.exports = {
      findAll,
  }