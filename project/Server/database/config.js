

const { DEV_DATABASE_URL, TEST_DATABASE_URL, PROD_DATABASE_URL} = require("../config/constant")



module.exports = {
    development: {
        env_variable: true,    
        url: DEV_DATABASE_URL ,
        dialect: "mysql", 
    }, 


    test: {
        env_variable: true, 
        url: TEST_DATABASE_URL, 
        dialect: "mysql"
    }, 

    production: {
        env_variable: true, 
        url: PROD_DATABASE_URL, 
        dialect: "mysql"
    }
} 