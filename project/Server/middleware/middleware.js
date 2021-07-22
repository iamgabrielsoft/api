

const { verifyUniqueUsername, verifyUniqueUserEmail } = require('./authentication')
const { validateSignupFormData, validateSigninFormData} = require('./validateAuth')
const { validateCookies, signUserIn, signUserOut} = require('./cookieHandler')
const validateChannelPost = require('./validateChannelPost')


module.exports = {
    verifyUniqueUsername, 
    verifyUniqueUserEmail, 
    validateSignupFormData, 
    validateSigninFormData, 
    validateCookies, 
    validateChannelPost,
    signUserIn, 
    signUserOut
}