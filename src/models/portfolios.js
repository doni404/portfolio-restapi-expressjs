import db from '../configs/db.js';

export function getPortfolios() {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM portfolios", function(err, result, fields) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

export function getPortfolioById(id) {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM portfolios WHERE id = ?", id, function(err, result, fields) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}