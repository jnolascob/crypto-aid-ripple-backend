const express = require('express');
const exampleRoutes = require('./exampleRoutes');
const walletRoutes = require('./walletRoutes');
const projectRoutes = require('./projectRoutes');
const paymentRoutes = require('./paymentRoutes');

const Router = express.Router();

// Aqui puede configurar el Router
Router.use('/example', exampleRoutes);
Router.use('/wallet', walletRoutes);
Router.use('/project', projectRoutes);
Router.use('/payment', paymentRoutes);

module.exports = Router;
