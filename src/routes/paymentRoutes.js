const express = require('express');
const paymentController = require('../controllers/paymentController');

const Router = express.Router();

Router.post('/', paymentController.payment);
Router.get('/', paymentController.checkPayment);

module.exports = Router;
