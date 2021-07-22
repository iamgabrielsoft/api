
const Joi = require('@hapi/joi')
const { joiValidator} = require('../helpers/joiValidator')
const { respondWithWarning } = require('../helpers/responseHandler')
/**
 * validate Username, email and password
 * @param {object} req 
 * @param {object} res 
 * @param {Function} next
 */


const validateSignupFormData = (req, res, next) => {
    const signupSchema = Joi.object().keys({
        username: Joi.string().required(), 
        email: Joi.string().required().email().trim(), 
        password: Joi.string().required()
    })

    const errors = joiValidator(req.body, signupSchema)

    if(!errors) return next(); 
    return respondWithWarning(res, 400, 'Bad Signup Input, Check Your Input')
}


const validateSigninFormData = (req, res, next) => {
    const createSignInSchema = Joi.object().keys({
      username: Joi.string().required(),
      password: Joi.string().required()

    })


    const errors = joiValidator(req.body, createSignInSchema);
    if (!errors) return next();
    return respondWithWarning(res, 400, 'Bad Input');
};



module.exports = {
    validateSignupFormData, 
    validateSigninFormData
}