const ApiError = require("../utils/apiError");

const errorMiddleware = (err, req, res, next) => {
    let { statusCode, message, errorCode } = err;

    if (!(this instanceof ApiError) && !err.statusCode) {
        statusCode = 500;
        errorCode = "INTERNAL_SERVER_ERROR";
        message = "Something went wrong on our end. Please try again later.";
    }

    res.status(statusCode).json({
        success: false,
        errorCode,
        message,
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined
    });
};

module.exports = errorMiddleware;
