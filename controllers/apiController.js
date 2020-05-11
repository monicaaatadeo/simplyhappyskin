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
  }; //works!

  const update = (req, res) => {
    db.Products.findById(req.params.id, (err, foundProducts) => {
      if (err) {
        return res.status(400).json({status: 400, error: 'Products not found'});
      }

      res.json(foundProducts);
    });
  }; //works


  // const destroyProducts = (req, res) => {
  //   db.Products.findById(req.params.id, (err, foundProd) => {
  //     if (err) {
  //       return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
  //     }
  //     const productToDelete = foundProd.products.id(req.params.id)
  //     productToDelete.remove(); 

  //     foundProd.save((err, savedProd) => {
  //       if (err) {
  //         return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
  //       }   
            
  //     db.Products.findByIdAndDelete(req.params.id, (err, deleteProduct) => {
  //       if (err) {
  //         return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
  //       }
  //       res.json(deleteProduct)
  //     })     
  //     })
  //   })

  // }

  const destroyProducts = (req, res) => {
    // Find City By ID
    db.Products.findById(req.params.productId, (err, foundProducts) => {
      if (err) {
        return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
      }
  
      // Find ID
      const productToDelete = foundProducts.products.id(req.params.productId);
  
      if (!productToDelete) {
        return res.status(400).json({status: 400, error: 'Could not find product'});
      }
  
      // Delete from record
      productToDelete.remove();
  
      // Save 
      foundProducts.save((err, savedProducts) => {
        if (err) {
          return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
        }
  
        // Delete indefinitely
        db.Product.findByIdAndDelete(req.params.productId, (err, deletedProducts) => {
          if (err) {
            return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
          }
  
          res.json(deletedProducts);
        });
      });
    });
  };


  // const update = (req, res) => {
  //   db.User.findById(req.session.currentUser._id, (err, foundUser) => {
  //     if (err) {
  //       return res.status(400).json({ status: 400, error: "User not found." });
  //     }
  
  //     res.json(foundUser);
  //     //once you get user, update products list 
  //     //push new product ID into user obj
  //     //save 
  //     //this will update user with that product

  //     //last: redirect to profile page
  //   });
  //   console.log(req.session);
  //   return res.status(200)
  // };

  module.exports = {
      findAll,
      update,
      destroyProducts,
  }