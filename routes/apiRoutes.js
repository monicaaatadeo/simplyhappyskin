const express = require('express');
const router = express.Router();
const db = require('../models');
const ctrl = require('../controllers');

// ----------------- AUTH


router.post('/signup', ctrl.authCtrl.signup);


router.get('/verify', ctrl.authCtrl.verify);



module.exports = router;