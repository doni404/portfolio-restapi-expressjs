import db from '../configs/db.js';
import { queryParamGenerator } from '../utils/helper.js';

export function getPortfolios(params) {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM portfolios " + queryParamGenerator(params), function(err, result, fields) {
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