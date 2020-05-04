const express = require('express');
const router =  express.Router();


// ======== HTML ROUTES ======== //
//Home View
router.get('/', (req, res) => {
    res.sendFile('views/home.html', {
      root: __dirname + '/../',
    });
  });

//Products Page
router.get('/products', (req, res) => {
    res.sendFile('views/products.html', {
      root: __dirname + '/../',
    });
  });

// ======== AUTH ======== //
router.get('/signup', (req, res) => {
  res.sendFile('views/signup.html', {
    root: __dirname + '/../',
  });
});


module.exports = router;