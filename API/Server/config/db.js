
const { Sequelize } = require("sequelize")


const setupDB = async () => {
    const connection = new Sequelize({
        connectionLimit: 10, 
        host: "127.0.0.1",
        username: "root", 
        database: "circadar", 
        dialect: "mysql", 
        logging: false
    })

    try {
       await connection.authenticate()
       console.log("Connection successfull...")
    } catch (error) {
        console.log("Connection Error...", error)
    } 
}

module.exports = setupDB