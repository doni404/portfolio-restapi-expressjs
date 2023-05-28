// Importing the dependencies
import * as model from '../models/news.js';
import { APIResponse } from '../utils/helper.js';

export async function getNews(req, res, next) {
    model.getNews(req.query).then(result => {
        APIResponse(res, "Successfully get all news", 200, true, result);
    }).catch(err => {
        APIResponse(res, "Failed get all news", 500, true, err);
    });
}

export async function getNewsById(req, res, next) {
    // Get id on params
    let id = req.params.newsId

    model.getNewsById(id).then(result => {
        // Check found the data or not
        if (result.length > 0) {
            APIResponse(res, "Successfully get news by id", 200, true, result);
        } else {
            APIResponse(res, "News data not found !", 404, true, result);
        }
    }).catch(err => {
        APIResponse(res, "Failed get news by id", 500, true, err);
    });
}