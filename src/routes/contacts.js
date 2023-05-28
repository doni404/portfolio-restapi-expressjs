import express from 'express';
import * as controller from '../controllers/contacts.js';

const router = express.Router();

/* POST sending contact to Email */
router.post('/', controller.sendContactMail);

export default router;