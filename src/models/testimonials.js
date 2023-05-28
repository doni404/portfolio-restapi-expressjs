import db from '../configs/db.js';
import { queryParamGenerator } from '../utils/helper.js';

export function getTestimonials(params) {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM testimonials " + queryParamGenerator(params), function (err, result, fields) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

export function getTestimonialById(id) {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM testimonials WHERE id = ?", id, function(err, result, fields) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}