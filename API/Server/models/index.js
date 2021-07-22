

const path = require("path")
const fs = require("fs")
const { Sequelize, DataTypes, Model} = require("sequelize")
const { NODE_ENV } = require("../config/constant")
const configs = require("../database/config")
const development = require("../database/config")

const basename = path.basename(__filename)
const env = NODE_ENV || 'development'; 
const config = configs[env] //configuration for environmental variables
const db = {};


// new Sequelize(development.url, development, {
//     host: "localhost",
//     dialect: "mysql"
// })

// const sequelize = config.env_variable 
//                     ? new Sequelize(config.url, config)
//                     : new Sequelize(config.database, config.username, config.password, config)
 
// console.log(sequelize)


const sequelize = new Sequelize({
    username: 'root', 
    password: 'admin', 
    database: 'circadar', 
    dialect: 'mysql'
})




const User = sequelize.define("User", {
    userId: {
        type: DataTypes.UUID, 
        allowNull: false, 
        defaultValue: DataTypes.UUIDV4, 
        primaryKey: true
    }, 

    username: {
        type: DataTypes.STRING
    }, 

    email: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 

    password: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 

    profileImage: {
        type: DataTypes.STRING
    }, 

    googleId : {
        type: DataTypes.STRING
    }
})

module.exports = { User } 