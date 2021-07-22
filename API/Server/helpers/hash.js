
const bcryptjs = require("bcryptjs")
const {SALT_ROUNDS} = require('../config/constant')



/**
 * Hashing User Password 
 * @param {String} password 
 * @returns {String} hashed password
 */

const passwordHash = async (password) => { 
    const _hashP = await bcryptjs.hash(password, SALT_ROUNDS, (err, hash) => {
        if(err) console.log('err')
        return console.log(hash)
    }); 

    return _hashP
} 



/**
 * Compare User Password 
 * @param {String} userPassword 
 * @param {String} hashedPassword 
 * @returns {Boolean} Boolean 
 */
const comparePassword = async (userPassword, hashedPassword) => {
    const _compare = await bcryptjs.compare(userPassword, hashedPassword)
    console.log(_compare)
}


module.exports = {
    passwordHash, 
    comparePassword
}   

