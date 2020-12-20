class ErrorUtil {
    constructor(statusCode, status, message) {
        this.statusCode = statusCode;
        this.status = status;
        this.message = message;
        this.data = null;
    }
}
class AppSuccess {
    constructor(statusCode, status, data) {
        this.statusCode = statusCode;
        this.status = status;
        this.message = null;
        this.data = data
    }
}
module.exports = {
    ErrorUtil,
    AppSuccess
};