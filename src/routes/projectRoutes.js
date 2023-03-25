const express = require('express');
const projectController = require('../controllers/projectController');

const Router = express.Router();

Router.get('/', projectController.getProjects);
Router.get('/:id/contributor', projectController.getContributors);

module.exports = Router;
