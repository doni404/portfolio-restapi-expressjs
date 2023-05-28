// Importing the dependencies
import * as model from '../models/portfolios.js';
import { APIResponse } from '../utils/helper.js';

export async function getPortfolios(req, res, next) {
    model.getPortfolios().then(result => {
        APIResponse(res, "Successfully get all portfolios", 200, true, result);
    }).catch(err => {
        APIResponse(res, "Failed get all portfolios", 500, true, err);
    });
}

export async function getPortfolioById(req, res, next) {
    // Get id on params
    let id = req.params.portfolioId

    model.getPortfolioById(id).then(result => {
        // Check found the data or not
        if (result.length > 0) {
            APIResponse(res, "Successfully get portfolio by id", 200, true, result);
        } else {
            APIResponse(res, "Portfolio data not found !", 404, true, result);
        }
    }).catch(err => {
        APIResponse(res, "Failed get portfolio by id", 500, true, err);
    });
}