
const { respondWithSuccess, respondWithWarning } = require('../helpers/responseHandler')
const { findUsers, fetchSingleUser, findSingleUser } = require('../services/userServices')


/**
 * Fetch All users
 * @param {object} req 
 * @param {object} res 
 * @returns 
 */
const getAllUsers = async (req, res) => {
    const user = await findUsers()
    console.log(user)
    return res.status(200).json(user)
    // return respondWithSuccess(req, 200, 'Successful ', user)
}


/**
 * Fetch a Single User
 * @param {*} req 
 * @param {*} res 
 */
const getUser = async (req, res) => {
    const { username } = req.params

    try {
        const _user = fetchSingleUser({ username }).then((response) => {
            console.log('response', response)
            return res.status(200).send(response)
            // return respondWithSuccess(req, 200, 'Found User', response)
        }).catch(err => {
            console.log('err', err)
            return res.status(401).send(err)
            // return respondWithWarning(req, 401, 'fff', err)
        })

    } catch (error) {  
        return res.status(400).send(error)
    //    respondWithWarning(req, 400, 'Unable to Fetch User...')
    }
}





module.exports = {
    getAllUsers, 
    getUser
}