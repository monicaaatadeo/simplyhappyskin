const express = require('express');
const router = express.Router();
const db = require('../models');
const ctrl = require('../controllers');

// CURRENT PATH = '/api/v1'

// ======== PRODUCTS ======== //
router.get('/products', ctrl.apiCtrl.findAll);

router.get('/profile/add/:id', ctrl.apiCtrl.update);

router.delete('/profile/add/:productId/:prodId', ctrl.apiCtrl.destroyProducts);





// ======== AUTH ======== //
router.post('/signup', ctrl.authCtrl.signup);
router.post('/login', ctrl.authCtrl.login);
router.delete('/logout', ctrl.authCtrl.logout);
router.get('/verify', ctrl.authCtrl.verify);


module.exports = router;