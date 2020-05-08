const express = require('express');
const router =  express.Router();


// ======== HTML ROUTES ======== //
//Home View
router.get('/', (req, res) => {
    res.sendFile('views/home.html', {
      root: __dirname + '/../',
    });
  });

//Profile Page
router.get('/profile', (req, res) => {
  res.sendFile('views/profile.html', {
    root: __dirname + '/../',
  });
});

//Products Page
router.get('/products', (req, res) => {
    res.sendFile('views/products.html', {
      root: __dirname + '/../',
    });
  });

  router.get('/products/:id/add', (req, res) => {
    res.sendFile('views/profile.html', {
      root: __dirname + '/../',
    });
  });

//Static Views
router.get('/skintype', (req, res) => {
  res.sendFile('views/skintype.html', {
    root: __dirname + '/../',
  });
});

router.get('/infographs', (req, res) => {
  res.sendFile('views/infographs.html', {
    root: __dirname + '/../',
  });
});

// ======== AUTH ======== //
router.get('/signup', (req, res) => {
  res.sendFile('views/signup.html', {
    root: __dirname + '/../',
  });
});

// ======== PROFILE ======== //
router.get('/profile', (req, res) => {
  // if (!req.session.currentUser) {
  //   // Unauthorized, Redirect to Login Page
  //   return res.redirect('/signup');
  // }

  res.sendFile('views/profile.html', {
    root: __dirname + '/../',
  });
});


module.exports = router;