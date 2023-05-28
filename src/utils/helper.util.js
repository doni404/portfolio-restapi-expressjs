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