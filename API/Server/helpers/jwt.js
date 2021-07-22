
const jwt = require("jsonwebtoken")
const { EXPIRATION_DURATION, SECRET_KEY } = require("../config/constant")




/**
 * Function to generate Password Reset
 * @param {object} data 
 * @param {object} options 
 * @returns {string} generated token for the user
 */


const generateToken = async (data, options = { expireIn: 1720000 }) => {
    const _token = jwt.sign({ key: data }, 'testing', options.expireIn)
    console.log(_token)
}

// generateToken('hello', 10)

/**
 * Verify User Token
 * @param {object} token 
 * @returns {object} decoded data 
 */
const verifyToken = (token) => {  
    const _verify = jwt.verify(token, "testing"); 
    console.log(_verify)
}



/**
 * generate ResetToken for the User using UserId
 * @param {object} data 
 * @param {object} options 
 * @returns {string} generated Token
 */

const generateResetToken = async (data, options) => {
    const _token = jwt.sign({ key: data}, SECRET_KEY, options)
    return _token
}


module.exports = {
    generateToken, 
    verifyToken, 
    generateResetToken
}