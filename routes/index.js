const express = require('express');
const router = express.Router();
const authServiceController = require('../controllers/authServiceController');
const ticketServiceController = require('../controllers/ticketServiceController');
const notificationServiceController = require('../controllers/notificationServiceController');
const articleServiceController = require('../controllers/articleServiceController');

// Auth Service Routes
router.use('/auth', authServiceController);

// Ticket Service Routes
router.use('/tickets', ticketServiceController);

// Notification Service Routes
router.use('/notifications', notificationServiceController);

// Article Service Routes
router.use('/articles', articleServiceController);

module.exports = router;
