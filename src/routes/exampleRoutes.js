const express = require('express');
const exampleController = require('../controllers/exampleController');

const Router = express.Router();

Router.get('/example', exampleController.getExample);

module.exports = Router;
