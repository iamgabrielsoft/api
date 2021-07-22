
/**
 * Method to validate logged in cookies
 * @param {object} req 
 * @param {object} res 
 * @param {Function} next
 * @returns {Function} next middleware 
 */


const validateCookies = (req, res, next) => {
    const token = req.cookies.get('token', { signed: true });
    console.log(token); 

}


/**
 * Set httpOnly key after sign in
 * @param {object} req
 * @param {Express.Response} res
 * @param {Function} next
 * @returns {Function} next middleware
 */

const signUserIn = (req, res) => {
    const token = req.cookies.get('login')
    console.log('token cookies', token)
    if(token) {
        res.cookies.set('login') //delete cookies after login 
    }
}

const signUserOut = (req, res) => {

}

module.exports = {
    validateCookies, 
    signUserIn, 
    signUserOut
}