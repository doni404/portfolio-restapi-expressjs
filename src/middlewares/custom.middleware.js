// Import helper
const helper = require('../utils/helper.util');

function errorChecks(err, req, res, next) {
	if (err.status == 404) {
		helper.APIResponse(res, "Page Not Found", (err.status || 404), false, null)
	} else if (res.status == 500) {
		helper.APIResponse(res, "Internal Server Error", (err.status || 500), false, null)
	} else {
        helper.APIResponse(res, err, 500, false, null);
    }
	
	console.log("path : ", req.path);
}

module.exports = {
    errorChecks
}