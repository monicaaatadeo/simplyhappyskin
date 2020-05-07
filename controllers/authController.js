const bcrypt = require('bcryptjs');
const db = require('../models');


// POST Sign Up - User Create
const signup = (req, res) => {

  db.User.findOne({email: req.body.email}, (err, foundUser) => {
    if (err) return res.status(400).json({status: 400, message: 'Something went wrong, please try again'});

    // Verify User Does Not Already Exist
    if (foundUser) {
      return res.status(400).json({status: 400, message: 'Account already registered, please login'});
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
          // res.redirect('/profile')
        });
      });
    });
  });
};


// POST Session Create
const login = (req, res) => {

  // Find User By Email
  db.User.findOne({email: req.body.email}, (err, foundUser) => {
    if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});

    // Verify User Account Exists
    if (!foundUser) {
      return res.status(400).json({status: 400, message: 'Invalid credentials'});
    }

    // Hash Password From User Request and Compare Against Found User Password
    bcrypt.compare(req.body.password, foundUser.password, (err, isMatch) => {
      if (err) return res.status(400).json({status: 400, message: 'Something went wrong, please try again'});

      if (isMatch) {
        // Create a New Session (Key to the Kingdom)
        req.session.currentUser = {
          _id: foundUser._id,
          name: foundUser.name,
          email: foundUser.email,
        };

        res.status(200).json({status: 200, user: req.session.currentUser});
      } else {
        // Passwords Do Not Match, Respond with User Error
        res.status(400).json({status: 400, error: 'Invalid credentials, please try again'});
      }
    });
  });
};


// DELETE Session Destroy
const logout = (req, res) => {
  if (!req.session.currentUser) {
    // Not Authorized
    return res.status(401).json({status: 401, error: 'Unauthorized, please login and try again'});
  }
  
  // Destroy Session and Respond with Success
  req.session.destroy((err) => {
    if (err) return res.status(400).json({status: 400, message: 'Something went wrong, please try again'});

    res.status(200).json({status: 200, message: 'Success'});
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
  login,
  logout,
  verify,
};