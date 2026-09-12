class ApiError extends Error {
    constructor(statusCode, message, errorCode = "INTERNAL_SERVER_ERROR", stack = "") {
        super(message);
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

module.exports = ApiError;
