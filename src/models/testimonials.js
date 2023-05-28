import db from '../configs/db.js';

export function getTestimonials() {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM testimonials", function (err, result, fields) {
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