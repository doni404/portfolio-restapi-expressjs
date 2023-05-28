// Importing the dependencies
import * as model from '../models/testimonials.js';
import { APIResponse } from '../utils/helper.js';

export async function getTestimonials(req, res, next) {
    model.getTestimonials().then(result => {
        APIResponse(res, "Successfully get all testimonials", 200, true, result);
    }).catch(err => {
        APIResponse(res, "Failed get all testimonials", 500, true, err);
    });
}

export async function getTestimonialById(req, res, next) {
    // Get id on params
    let id = req.params.testimonialId

    model.getTestimonialById(id).then(result => {
        // Check found the data or not
        if (result.length > 0) {
            APIResponse(res, "Successfully get testimonial by id", 200, true, result);
        } else {
            APIResponse(res, "Testimonial data not found !", 404, true, result);
        }
    }).catch(err => {
        APIResponse(res, "Failed get testimonial by id", 500, true, err);
    });
}