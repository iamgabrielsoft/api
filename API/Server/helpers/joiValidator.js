
const Joi = require('@hapi/joi')

/**
 * 
 * @param {Object} data 
 * @param {Joi.Schema} schema 
 */

const joiValidator = (data, schema) => {
    const validationOptiion = {
        allowUnknown: true, // allow unknown keys that will be ignored
        stripUnknown: true, // remove unknown keys from the validated data
        abortEarly: false // validate all inputs befor flagging error
    }

    const { error, value } = schema.validate(data, validationOptiion)

    console.log(error, value )

    if(error) {
        let message = error.details.map(items => items.message.replace(/['"]/g, ''));
        return message; 
    }
}



module.exports = joiValidator