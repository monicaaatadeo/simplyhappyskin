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

  const update = (req, res) => {
    db.Products.findById(req.params.id, (err, foundProducts) => {
      if (err) {
        return res.status(400).json({status: 400, error: 'Products not found'});
      }

      res.json(foundProducts);
    });
  }; //works

  // const update = (req, res) => {
  //   console.log("------------------------------------------------", req);
  //   db.Products.findById(req.params.id, (err, newProducts) => {
  //     if (err) {
  //       return res.status(500).json({ status: 500, error: "database error!" });
  //     }
  //     db.User.findById(req.params.productId, (err, foundUser) => {
  //       if (err) {
  //         return res
  //           .status(400)
  //           .json({ status: 400, error: `That ain't the User!` });
  //       }
  //       foundUser.productId.push(newProducts);
  //       foundUser.save((err, savedUser) => {
  //         if (err) {
  //           return res
  //             .status(400)
  //             .json({ status: 400, error: "Unable to save User." });
  //         }
  //         return res.json(newProducts);
  //       });
  //     });
  //   });
  // };


//   const update = (req, res) => {
//     db.User.findById(req.params.User._id, (err, foundUser) => {
//         if(err) {
//             return res
//             .status(400)
//             .json({status: 400, error: 'Something went wrong, please try again.'});
//         }

//         const foundProducts = foundUser.Products.id(req.params.Product._id);

//         if (!foundProducts) {
//             res.status(404).json({status: 404, error: 'Could not find products'});
//         }
//         res.json(foundProducts);
//     });
// };
  

  module.exports = {
      findAll,
      update,
  }