import Axios from "axios"

exports.catchErrors = (fn) => {
    return function(req, res, next) {
        return fn(req, res, next).catch(next);
    };
};


module.exports = function enhanceError(error, config, code, request, response) {
    error.config = config;
    if (code) {
        error.code = 404
    }
};
