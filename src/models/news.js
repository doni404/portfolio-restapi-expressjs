import db from '../configs/db.js';

export function getNews() {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM news", function (err, result, fields) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

export function getNewsById(id) {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM news WHERE id = ?", id, function(err, result, fields) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}