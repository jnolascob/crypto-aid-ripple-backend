const express = require('express');
const walletController = require('../controllers/walletController');

const Router = express.Router();

Router.post('/signin', walletController.signin);
Router.get('/', walletController.checkSignin);

module.exports = Router;
