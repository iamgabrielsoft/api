
import Joi from '@hapi/joi';
import { joiValidator } from '../helpers/joiValidator';
import { respondWithWarning, respondWithSuccess } from '../helpers/responseHandler';
import { getSingleComment } from '../services/commenServices';


/**
 * validate comment entry
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Object} error
 */
const validateCommentData = (req, res, next) => {
    const commentSchema = Joi.object().keys({ body: Joi.string().required().trim() })
    const errors = joiValidator(req.body, commentSchema)

    if(!errors) {
        return next()
    }

    return respondWithWarning(res, 400, 'Bad Input', errors)
}

/**
 * Check if comment is real
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */


const validateComment = async (req, res, next) => {
    const { commentId } = req.params; 
    const data = await getSingleComment(commentId)
    console.log(data)
    if(data) return next()

    return respondWithWarning(res, 401, "Can't Find Comment...")
}


const canDeleteComment = async (req, res, next) => {
    console.log(req.auth)
    // if (req.auth.userId === req.comment.userId || req.auth.isAdmin) {
    //     return next();
    //   }
    //   return respondWithWarning(res, 401, 'You are not authorized to perform this action, thou fellow');
}

module.exports = {
    validateCommentData, 
    validateComment, 
    canDeleteComment
}