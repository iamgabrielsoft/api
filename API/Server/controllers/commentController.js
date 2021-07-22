

/**
 * class handles comments
 */

const { respondWithWarning, respondWithSuccess } = require("../helpers/responseHandler");
const { createCommentForPost, findPostForComment } = require("../services/commenServices");

/**
 * Create a comment for a post
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */

const createComment = async (req, res) => {
    try {

        console.log(req.auth)
        const comment = await createCommentForPost(req.body)
        console.log(comment)
        comment ? respondWithSuccess(res, 200, 'Comment added successfully', comment) : respondWithWarning(res, 400, 'Unble to Create Comment...'); 

      } catch (error) {
        return respondWithWarning(res, error.status, error.message);
      }
}


/**Comment Should be deleted by the Owner
 * Delete comment
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */


const deleteComment = async (req, res) => {

}



/**
 * Fetch comments for a specific post
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
const getComments = async (req, res) => {
  findPostForComment()
}

module.exports = {
    createComment, 
    deleteComment, 
    getComments
}