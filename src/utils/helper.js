export function APIResponse(res, message, code, status, data) {
    var response = {
        "code": code,
        "success" : status,
        "message": message
    }

    if (data != null) {
        response["data"] = data;
    }

    res.status(code).send(response);
}

export function queryParamGenerator(params) {
    let customQuery = "";

    // Check sort
    if (params.sort_by != null && params.sort_by.split(".").length == 2) {
        customQuery += "ORDER BY " + params.sort_by.split(".")[0] + " " + params.sort_by.split(".")[1].toUpperCase() + " ";
    } 

    // Check limit
    if (params.limit != null) {
        customQuery += "LIMIT " + params.limit + " ";
    }

    // Check offset
    if (params.offset != null) {
        customQuery += "OFFSET " + params.offset + " ";
    }
    
    console.log("Custom :", customQuery);

    return customQuery;
}