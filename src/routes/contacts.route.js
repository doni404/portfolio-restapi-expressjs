const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contacts.controller');

/* POST sending contact to Email */
router.post('/', contactController.sendContactMail)

module.exports = router;