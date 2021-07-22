
const Joi = require('@hapi/joi')
const { joiValidator } = require('../helpers/joiValidator');
const { respondWithWarning } = require('../helpers/responseHandler');


const VALID_UUID = /^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/;

/**
 * validate postChannel ENtry
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Object} error
 */

const validateChannelPost = (req, res, next) => {
    const channelPostSchema = Joi.object().keys({
        channelName: Joi.string().pattern(VALID_UUID).required().trim(), 
        channelPost: Joi.string().type,
        desc: Joi.string().required()
    })

    
    const errors = joiValidator(req.body, channelPostSchema)
    
    if(!errors) next();
    return respondWithWarning(res, 401, 'Check Your Input...')
}
   



module.exports = validateChannelPost