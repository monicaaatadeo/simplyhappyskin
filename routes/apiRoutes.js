const express = require('express');
const router = express.Router();
const db = require('../models');
const ctrl = require('../controllers');

// CURRENT PATH = '/api/v1'

// ======== PRODUCTS ======== //
router.get('/products', ctrl.apiCtrl.findAll);


// ======== AUTH ======== //
router.post('/signup', ctrl.authCtrl.signup);
router.post('/login', ctrl.authCtrl.login);
router.delete('/logout', ctrl.authCtrl.logout);
router.get('/verify', ctrl.authCtrl.verify);


module.exports = router;