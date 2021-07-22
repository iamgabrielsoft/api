const { respondWithWarning } = require("../helpers/responseHandler");
const { findSingleUser } = require("../services/userServices");


/**
 * Check for a Unique email Address
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {Function} next 
 */
const verifyUniqueUserEmail = async (req, res, next) => {
    const { email } = req.body; 
   
    const findUser = await findSingleUser({ email })
    console.log(findUser)
    if(findUser) return respondWithWarning(res, 409, 'User with this email already exists')
    return next(); 
}


/**
 * Check for Unique Username 
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {Function} next 
 */

const verifyUniqueUsername = async (req, res, next) => {
    const { username } = req.body; 
    const findUser = findSingleUser({ username })
    if(findUser) return respondWithWarning(res, 409, 'Username already Exist')
    return next() 
}





module.exports = {
    verifyUniqueUserEmail, 
    verifyUniqueUsername
}