var express = require('express');
var router = express.Router();
const AuthController = require('../controllers/AuthController');

router.get('/signin', AuthController.SignInForm);

router.get('/signup', AuthController.SignUpForm);

module.exports = router;
