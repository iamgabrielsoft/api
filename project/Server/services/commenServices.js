const Model = require('../database/models')
const { Comments, User }  = Model


const getSingleComment = async (commentId) => {
    try {
        const _data = await Comment.findOne({
            include: [
                { model: User, as: 'user'}
            ], 
            where: { commentId }, 
            logging: true
        })

        if(_data) {
            const comment = _data.dataValues; 
            // comment.user = comment.user ? comment.user.dataValues : {};
            // return { error: false, comment };
        }

        return { error: true, message: 'Comment not found!'}
    } catch (error) {
        console.log(error)
        return error
    }
}



/**
 * @param {object} res http response object
 * @param {object} commentData id of the job invite to retrieve comments for
 * @returns {object} an object containing created comment data
 */

const createCommentForPost = async (commentData) => {

    return Model.sequelize.transaction(t => Comments.create(commentData, { transaction: t}))
            .then((comment) => {
                return console.log(comment.dataValues)
            })
   
            // .then((comment) => {
            //     const data = {
            //         type: 'comment', 
            //         message: `${comment.userName} commented on Your Video`
            //     }

            //     console.log(data)
            //     //Notify The User When A user Make a Comment 
            // })
            .catch(err => {
                console.log(err)

                return err; 
                // let error = new Error()
                // error.message('Techical Error Originating...')
                // return error; 
            })
}


const findPostForComment = async () => {
    
}


/**
 * delete comment by Id
 * @param {} queryOption
 */
const deleteOneComment = async (queryOption = {}) => {
    try {
        const comment = Comment.destroy({
            where: queryOption, 
            logging:false 
        })

        return { error: false, comment };
    } catch (error) {
        console.log(error)
        return { error: true, e: err };
    }
}

module.exports = {
    getSingleComment,
    createCommentForPost, 
    deleteOneComment
}