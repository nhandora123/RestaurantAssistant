class ErrorUtil {
    constructor(statusCode, status, message) {
        this.statusCode = statusCode;
        this.status = status;
        this.message = message;
        this.data = null;
    }
}

class SuccessUtil {
    constructor(statusCode, status, message, data){
        this.statusCode = statusCode;
        this.status = status;
        this.message = message;
        this.data = data
    }
}

module.exports = {
    ErrorUtil,
    SuccessUtil
};