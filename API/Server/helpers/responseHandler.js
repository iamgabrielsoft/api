
/**
 * @exports respondWithSuccess
 * @exports respondWithFailure
 */

/**
 * 
 * @param {Express.Request} request 
 * @param {Number} statusCode 
 * @param {String} message 
 * @param {Object} additionalValues 
 * @returns {Object} null 
 */


 const respondWithSuccess = (request, statusCode = 200, message, dataValues = {}) => {
    const payload = Array.isArray(dataValues) ? [...dataValues] : {...dataValues }

    return request.status(statusCode).send({
        success: true, 
        message, 
        payload
    })
}


/**
 * 
 * @param {Express.Request} request 
 * @param {Number} statusCode 
 * @param {String} error 
 * @param {String} dataValues 
 * @returns 
 */


const respondWithFailure = (request, statusCode = 500, error, dataValues) => {
    const payload = Array.isArray(dataValues) ? [...dataValues] : {...dataValues}; 

    return request.status(statusCode).send({ 
        success: false, 
        error, 
        payload
    })
}

module.exports = {
    respondWithSuccess,
    respondWithFailure
}