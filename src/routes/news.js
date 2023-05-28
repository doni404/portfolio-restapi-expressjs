import express from 'express';
import * as controller from '../controllers/news.js';

const router = express.Router();

router.get('/', controller.getNews);
router.get('/:newsId', controller.getNewsById);

export default router;