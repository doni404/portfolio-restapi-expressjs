// Importing the dependencies 
import { APIResponse } from '../utils/helper.util.js'

export function errorChecks(err, req, res, next) {
	if (err.status == 404) {
		APIResponse(res, "Page Not Found", (err.status || 404), false, null)
	} else if (res.status == 500) {
		APIResponse(res, "Internal Server Error", (err.status || 500), false, null)
	} else {
        APIResponse(res, err, 500, false, null);
    }
	
	console.log("path : ", req.path);
}