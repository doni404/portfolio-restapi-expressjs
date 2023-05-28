import express from 'express';
import * as controller from '../controllers/resources.js';

const router = express.Router();

router.get('/images/:folder/:filename', controller.getResourceByFilename);

export default router;