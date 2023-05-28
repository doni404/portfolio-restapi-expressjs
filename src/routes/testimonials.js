import express from 'express';
import * as controller from '../controllers/testimonials.js';

const router = express.Router();

router.get('/', controller.getTestimonials);
router.get('/:testimonialId', controller.getTestimonialById);

export default router;