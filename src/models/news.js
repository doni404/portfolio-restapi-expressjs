import db from '../configs/db.js';
import { queryParamGenerator } from '../utils/helper.js';

export function getNews(params) {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM news " + queryParamGenerator(params), function (err, result, fields) {
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