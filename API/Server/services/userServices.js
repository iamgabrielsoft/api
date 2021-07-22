
const Model = require("../database/models")
const { User } = Model


/**
 * Used in Creating New User
 * @param {object } userData username && email && password 
 * @returns {object} {success: Boolean, user: any | error: any}
 */

const createUser = async (userData) => {
    try {
        const _user = await User.create(userData)
        console.log(_user)
        return { success: true, _user}

    } catch (error) {
        console.log(error)
        return { success: false, error}
    }
}



/**
 * fetch single user
 * @param {object} queryOption 
 * @returns {object} an object containing the information of the user or null
 */
const findSingleUser = async (queryOption = {}) => {
    try {
        const _user = User.findOne({
            where: queryOption, 
            logging: false
        })

        return _user
    } catch (error) {
        console.log(error)
    }
}

/**
 * Get All Users
 * @returns {object} an object containing the information of the user or null
 */

 const findUsers = async (queryOption = {}) => {
    try {
      const users = await User.findAll({ logging: false });
      return users;
    } catch (error) {
      console.log(error);
    }
  };


const fetchSingleUser = async (username) => {
    try {
        const _user = await User.findOne({ 
            where: username, 
            logging: true
        })

   
        return _user ? _user.dataValues : 'User Not Found...';   

    } catch (error) {
        console.log(error)
    }
}




module.exports = { createUser, findSingleUser, findUsers, fetchSingleUser}   