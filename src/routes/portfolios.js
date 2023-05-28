import express from 'express';
import * as controller from '../controllers/portfolios.js';

const router = express.Router();

router.get('/', controller.getPortfolios);
router.get('/:portfolioId', controller.getPortfolioById);

export default router;