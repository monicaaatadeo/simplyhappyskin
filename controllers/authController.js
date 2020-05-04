const bcrypt = require('bcryptjs');
const db = require('../models');


// POST Sign Up - User Create
const signup = (req, res) => {


  db.User.findOne({email: req.body.email}, (err, foundUser) => {
    if (err) return res.status(400).json({status: 400, message: 'Something went wrong, please try again'});

    // Verify User Does Not Already Exist
    if (foundUser) {
      return res.status(400).json({status: 400, message: 'Account already registerd, please login'});
    }

    // Generate Salt
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return res.status(400).json({status: 400, message: 'Something went wrong, please try again'});

      // Hash User Password
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) return res.status(400).json({status: 400, message: 'Something went wrong, please try again'});

        // Construct User Object with Hashed Password
        const userData = {
          name: req.body.name,
          email: req.body.email,
          password: hash,
        }

        // Create New user
        db.User.create(userData, (err, newUser) => {
          if (err) return res.status(400).json({status: 400, message: 'Something went wrong, please try again'});

          res.status(201).json({status: 201, message: 'Success'});
        });
      });
    });
  });
};


// Verify Route for Development/Testing
const verify = (req, res) => {
    if (!req.session.currentUser) {
      // Not Authorized
      return res.status(401).json({status: 401, error: 'Unauthorized, please login and try again'});
    }
  
    return res.json({
      status: 200,
      message: 'Authorized',
      currentUser: req.session.currentUser,
    });
  };


module.exports = {
  signup,
  verify,
};